import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Status endpoint for health check
app.get('/status', (req, res) => {
  res.json({ status: 'ok', message: 'Backend server is running' });
});

// Endpoint to exchange GitHub OAuth code for access token
app.post('/github/oauth/callback', async (req, res) => {
  const { code } = req.body;
  if (!code) {
    return res.status(400).json({ error: 'Code is required' });
  }

  const clientId = process.env.GITHUB_CLIENT_ID || 'Ov23liLNRDZ4cPrPyQYY';
  const clientSecret = process.env.GITHUB_CLIENT_SECRET || '2a3f0de9f1c09c7cc0b34045c553ee4b6107c407';

  try {
    const tokenResponse = await axios.post(
      'https://github.com/login/oauth/access_token',
      {
        client_id: clientId,
        client_secret: clientSecret,
        code,
      },
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );

    const accessToken = tokenResponse.data.access_token;
    if (!accessToken) {
      return res.status(400).json({ error: 'Failed to get access token' });
    }

    // Fetch user info from GitHub API
    const userResponse = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    });

    const userEmailResponse = await axios.get('https://api.github.com/user/emails', {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    });

    const primaryEmailObj = userEmailResponse.data.find(email => email.primary) || userEmailResponse.data[0];

    res.json({
      user: {
        id: userResponse.data.id,
        name: userResponse.data.name || userResponse.data.login,
        email: primaryEmailObj.email,
      },
      accessToken,
    });
  } catch (error) {
    console.error('GitHub OAuth callback error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// In-memory user store for demonstration
const users = [];

// Endpoint to send OTP (mock sending via console)
app.post('/otp/send', (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }
  // Generate a 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  // Store OTP with email and expiry (5 minutes)
  const expiry = Date.now() + 5 * 60 * 1000;
  users.push({ email, otp, expiry });
  console.log(`Sending OTP ${otp} to email ${email}`); // Replace with real email sending
  res.json({ success: true, message: 'OTP sent' });
});

// Endpoint to verify OTP
app.post('/otp/verify', (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) {
    return res.status(400).json({ error: 'Email and OTP are required' });
  }
  const userOtp = users.find(u => u.email === email && u.otp === otp);
  if (!userOtp) {
    return res.status(400).json({ error: 'Invalid OTP' });
  }
  if (Date.now() > userOtp.expiry) {
    return res.status(400).json({ error: 'OTP expired' });
  }
  res.json({ success: true });
});

// Endpoint for manual sign-up
app.post('/manual/signup', (req, res) => {
  const { name, email, otp } = req.body;
  if (!name || !email || !otp) {
    return res.status(400).json({ error: 'Name, email, and OTP are required' });
  }
  // Verify OTP
  const userOtp = users.find(u => u.email === email && u.otp === otp);
  if (!userOtp) {
    return res.status(400).json({ error: 'Invalid OTP' });
  }
  if (Date.now() > userOtp.expiry) {
    return res.status(400).json({ error: 'OTP expired' });
  }
  // Check if user exists
  if (users.find(u => u.email === email && u.name)) {
    return res.status(400).json({ error: 'User already exists' });
  }
  // Create user
  users.push({ name, email, role: 'student' });
  res.json({ success: true, message: 'User created' });
});

// Endpoint for manual sign-in
app.post('/manual/signin', (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }
  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(400).json({ error: 'User not found' });
  }
  res.json({ success: true, user });
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
