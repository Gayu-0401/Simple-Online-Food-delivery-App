import { useState } from 'react';
import '../CSS/Form.css';

export const Register = () => {
  // State for login form
  const [loginName, setLoginName] = useState('');
  const [loginPass, setLoginPass] = useState('');

  // State for sign-up form
  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPass, setSignUpPass] = useState('');

  // State to toggle between Login and Register forms
  const [isRegister, setIsRegister] = useState(false);

  // Submit handlers
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login Details:', { loginName, loginPass });
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log('Sign Up Details:', { signUpName, signUpEmail, signUpPass });
  };

  return (
    <div className="Reg">
      <div className={`container ${isRegister ? 'active' : ''}`}>
      {/* Login Form */}
      <div className="form-box login">
        <form onSubmit={handleLoginSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              value={loginName}
              onChange={(e) => setLoginName(e.target.value)}
              placeholder="Username"
              required
            />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              value={loginPass}
              onChange={(e) => setLoginPass(e.target.value)}
              placeholder="Password"
              required
            />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <button className="btn" type="submit">Login</button>
        </form>
      </div>

      {/* Register Form */}
      <div className="form-box register">
        <form onSubmit={handleSignUpSubmit}>
          <h1>Sign Up</h1>
          <div className="input-box">
            <input
              type="text"
              value={signUpName}
              onChange={(e) => setSignUpName(e.target.value)}
              placeholder="Username"
              required
            />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input
              type="email"
              value={signUpEmail}
              onChange={(e) => setSignUpEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <i className="bx bxs-envelope"></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              value={signUpPass}
              onChange={(e) => setSignUpPass(e.target.value)}
              placeholder="Password"
              required
            />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <button className="btn" type="submit">Register</button>
        </form>
      </div>

      {/* Toggle Panels */}
      <div className="toggle-box">
        <div className="toggle-panel toggle-left">
          <h1>Hello, welcome!</h1>
          <p>Don&#39;t have an account?</p>
          <div className="btn register-btn" onClick={() => setIsRegister(true)}>Register</div>
        </div>
        <div className="toggle-panel toggle-right">
          <h1>Welcome Back!</h1>
          <p>Already have an account?</p>
          <div className="btn login-btn" onClick={() => setIsRegister(false)}>Login</div>
        </div>
      </div>
    </div>
    </div>
  );
};
