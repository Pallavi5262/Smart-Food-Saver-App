import React, { useState } from 'react';
import axios from '../api/axios'; // make sure this path is correct

export default function Login() {
  const [tab, setTab] = useState('login');

  // Login state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Sign‑up state
  const [name, setName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPhone, setSignupPhone] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    await axios.post('/auth/login', { email, password });
    alert('✅ Login successful!');
    window.location.href = '/dashboard';
  } catch (err) {
    alert('❌ Invalid credentials');
  }
};


  const handleSignup = async (e) => {
    e.preventDefault();
    if (signupPassword !== confirm) {
      alert('❌ Passwords do not match');
      return;
    }

    try {
      await axios.post('/auth/register', {
        name,
        email: signupEmail,
        phone: signupPhone,
        password: signupPassword,
      });
      alert(`✅ Account created for ${name}! You will receive a confirmation SMS at ${signupPhone}.`);
      setTab('login');
    } catch (err) {
      alert('❌ Signup failed. Try again.');
    }
  };

  return (
    <div className="container-center">
      {/* Tabs */}
      <div className="auth-tabs">
        <button
          className={tab === 'login' ? 'tab active' : 'tab'}
          onClick={() => setTab('login')}
        >
          Login
        </button>
        <button
          className={tab === 'signup' ? 'tab active' : 'tab'}
          onClick={() => setTab('signup')}
        >
          Sign Up
        </button>
      </div>

      {tab === 'login' ? (
        <>
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="form-input"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="form-input"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <button className="btn btn-primary form-button">Login</button>
          </form>
        </>
      ) : (
        <>
          <h2 className="text-center mb-4">Sign Up</h2>
          <form onSubmit={handleSignup} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="form-input"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="form-input"
              value={signupEmail}
              onChange={e => setSignupEmail(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="form-input"
              value={signupPhone}
              onChange={e => setSignupPhone(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="form-input"
              value={signupPassword}
              onChange={e => setSignupPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="form-input"
              value={confirm}
              onChange={e => setConfirm(e.target.value)}
              required
            />
            <button className="btn btn-secondary form-button">
              Create Account
            </button>
          </form>
        </>
      )}
    </div>
  );
}