// AuthPage.js
import  { useState } from 'react';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';

const AuthPage = ({ onAuthSuccess }) => {
  const [showSignUp, setShowSignUp] = useState(false);

  return showSignUp ? (
    <SignUpPage setShowSignUp={setShowSignUp} onAuthSuccess={onAuthSuccess} />
  ) : (
    <LoginPage setShowSignUp={setShowSignUp} onAuthSuccess={onAuthSuccess} />
  );
};

export default AuthPage;
