import React, { createContext, useContext, useState, useEffect } from 'react';
import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google';
import { SignJWT } from 'jose';

// Create AuthContext
const AuthContext = createContext(null);

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage or session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Save user to localStorage on change
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  // Helper to create JWT token for Graphy SSO
  const createGraphyJWT = async (payload) => {
    const apiToken = import.meta.env.VITE_API_TOKEN || '9dff1761-c9e4-4679-92e5-0ae494fda43b';
    const encoder = new TextEncoder();
    const secret = encoder.encode(apiToken);

    const jwt = await new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
      .sign(secret);

    return jwt;
  };

  // Implement Google OAuth sign-in
  const signInWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        // Fetch user info from Google API
        const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        });
        const profile = await res.json();

        // Create JWT payload for Graphy SSO
        const payload = {
          email: profile.email,
          name: profile.name,
          exp: Math.floor(Date.now() / 1000) + 3600, // 1 hour expiry
          'course-ids': [], // Add course IDs if needed
        };

        // Create JWT token
        const ssoToken = await createGraphyJWT(payload);

        // Redirect to Graphy SSO URL
        const graphyUrl = import.meta.env.VITE_GRAPHY_URL || 'https://satheshpc.graphy.com';
        window.location.href = `${graphyUrl}/?ssoToken=${ssoToken}`;
      } catch (error) {
        console.error('Google sign-in error:', error);
        throw error;
      }
    },
    onError: (error) => {
      console.error('Google login failed:', error);
    },
  });

  // Implement GitHub OAuth sign-in
  const signInWithGitHub = async () => {
    try {
      const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID || 'Ov23liLNRDZ4cPrPyQYY';
      // Updated redirect URI for GitHub OAuth
      const redirectUri = 'http://localhost:5173/github-callback';

      const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=user:email&redirect_uri=${encodeURIComponent(redirectUri)}`;

      const width = 600, height = 700;
      const left = window.screenX + (window.outerWidth - width) / 2;
      const top = window.screenY + (window.outerHeight - height) / 2;
      const popup = window.open(githubAuthUrl, 'GitHub Login', `width=${width},height=${height},left=${left},top=${top}`);

      // Listen for message from popup with code
      window.addEventListener('message', async (event) => {
        if (event.origin !== window.location.origin) return;
        const { code } = event.data;
        if (code) {
          try {
            // Exchange code for access token and user info via backend
            const response = await fetch('http://localhost:4000/github/oauth/callback', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ code }),
            });
            if (!response.ok) {
              throw new Error('Failed to exchange code');
            }
            const data = await response.json();
            const user = data.user;

            // Create JWT payload for Graphy SSO
            const payload = {
              email: user.email,
              name: user.name,
              exp: Math.floor(Date.now() / 1000) + 3600,
              'course-ids': [],
            };
            const ssoToken = await createGraphyJWT(payload);
            const graphyUrl = import.meta.env.VITE_GRAPHY_URL || 'https://satheshpc.graphy.com';
            window.location.href = `${graphyUrl}/?ssoToken=${ssoToken}`;
          } catch (error) {
            console.error('GitHub OAuth code exchange error:', error);
          }
        }
      });
    } catch (error) {
      console.error('GitHub sign-in error:', error);
      throw error;
    }
  };

  // Implement manual sign-up with OTP verification and auto-assign course
  const signUpManual = async (name, email, otp) => {
    try {
      // Verify OTP with backend
      const otpVerifyResponse = await fetch('http://localhost:4000/otp/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });
      if (!otpVerifyResponse.ok) {
        const errorData = await otpVerifyResponse.json();
        throw new Error(errorData.error || 'OTP verification failed');
      }

      // Create user with backend
      const signupResponse = await fetch('http://localhost:4000/manual/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, otp }),
      });
      if (!signupResponse.ok) {
        const errorData = await signupResponse.json();
        throw new Error(errorData.error || 'Sign-up failed');
      }

      const manualUser = { name, email, role: 'student' };
      setUser(manualUser);

      // Create JWT token for Graphy SSO
      const payload = {
        email,
        name,
        exp: Math.floor(Date.now() / 1000) + 3600,
        'course-ids': [],
      };
      const ssoToken = await createGraphyJWT(payload);
      const graphyUrl = import.meta.env.VITE_GRAPHY_URL || 'https://satheshpc.graphy.com';
      window.location.href = `${graphyUrl}/?ssoToken=${ssoToken}`;

      // Auto-assign course using Graphy API
      const GRAPHY_URL = import.meta.env.VITE_GRAPHY_URL || 'https://satheshpc.graphy.com';
      const API_TOKEN = import.meta.env.VITE_API_TOKEN || '9dff1761-c9e4-4679-92e5-0ae494fda43b';

      const courseAssignmentResponse = await fetch(`${GRAPHY_URL}/api/v1/assign-course`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify({
          userEmail: email,
          courseId: 'default-course-id', // Replace with actual course ID
        }),
      });

      if (!courseAssignmentResponse.ok) {
        console.error('Failed to assign course:', await courseAssignmentResponse.text());
      }
    } catch (error) {
      console.error('Manual sign-up error:', error);
      throw error;
    }
  };

  // Implement manual sign-in
  const signInManual = async (email) => {
    try {
      const signinResponse = await fetch('http://localhost:4000/manual/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!signinResponse.ok) {
        const errorData = await signinResponse.json();
        throw new Error(errorData.error || 'Sign-in failed');
      }
      const data = await signinResponse.json();
      setUser(data.user);
    } catch (error) {
      console.error('Manual sign-in error:', error);
      throw error;
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    // TODO: Clear tokens and session if any
  };

  const value = {
    user,
    loading,
    signInWithGoogle,
    signInWithGitHub,
    signUpManual,
    signInManual,
    logout,
    setUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
