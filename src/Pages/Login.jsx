import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Add this
import './Login.css';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate(); // ✅ Initialize navigate

  const toggleMode = () => setIsLogin(!isLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    // ✅ Add redirect after login
    alert(`${isLogin ? 'Logging in' : 'Signing up'}...`);

    // Simulate login/signup
    setTimeout(() => {
      navigate('/'); // ✅ Redirect to Home
    }, 500);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && <input type="text" placeholder="Full Name" required />}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>

        <p className="auth-toggle">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={toggleMode}>
            {isLogin ? ' Sign up' : ' Login'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
