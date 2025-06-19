import React, { useState } from 'react';
import validateEmail from '../utils/validateEmail';
import validatePassword from '../utils/validatePassword';
import logo from '../assets/logo.png';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const SignUpPage = ({ setShowSignUp }) => {
  const navigate = useNavigate();

  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fname || !lname || !email || !password) {
      setError('All fields are required.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Invalid email format.');
      return;
    }
    if (!validatePassword(password)) {
      setError(
        'Password must be at least 8 characters, include an uppercase letter, a lowercase letter, and a number.'
      );
      return;
    }
    setError('');
    toast.success('Sign up successful');

    navigate('/home');
  };

  return (
    <div className="page-wrapper">
      <img src={logo} alt="Logo" className="logo" />
      <div className="brand-name">&lt;//HIREVERSE//&gt;</div>
      <div className="auth-container">
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            value={fname}
            onChange={(e) => setFName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lname}
            onChange={(e) => setLName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>
        <p>
          Already have an account?{' '}
          <span onClick={() => setShowSignUp(false)} className="text-link">
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
