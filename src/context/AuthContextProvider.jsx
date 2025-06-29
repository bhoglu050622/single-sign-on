import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('AuthContextProvider mounted');
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      console.log('Found stored user:', storedUser);
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    console.log('User state changed:', user);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const value = {
    user,
    loading,
    // Placeholder functions to avoid breaking app
    signInWithGoogle: () => console.log('signInWithGoogle called'),
    signInWithGitHub: () => console.log('signInWithGitHub called'),
    signUpManual: () => console.log('signUpManual called'),
    signInManual: () => console.log('signInManual called'),
    logout: () => {
      console.log('logout called');
      setUser(null);
    },
    setUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
