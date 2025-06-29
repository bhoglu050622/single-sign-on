// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CourseContextProvider from './context/CourseContextProvider.jsx'
import AuthContextProvider from './context/AuthContextProvider.jsx'

import { GoogleOAuthProvider } from '@react-oauth/google'

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || '550702005187-d9l8dnp3ggu2k4qpptlfpav7070ud776.apps.googleusercontent.com'

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={clientId}>
    <BrowserRouter basename="/exp_upd">
      <AuthContextProvider>
        <CourseContextProvider>
          <App />
        </CourseContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </GoogleOAuthProvider>
)
