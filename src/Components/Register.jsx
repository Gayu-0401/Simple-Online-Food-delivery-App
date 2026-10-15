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
    <main className="Reg">
      <div className={`container ${isRegister ? 'active' : ''}`}>
        {/* Login Form */}
        <section className="form-box login" aria-hidden={isRegister}>
          <form onSubmit={handleLoginSubmit}>
            <h1>Log in</h1>
            <p className="lead">Welcome back. Your favorites are waiting.</p>

            <div className="field">
              <label htmlFor="login-name">Username</label>
              <div className="input-box">
                <i className="bx bx-user" aria-hidden="true"></i>
                <input
                  id="login-name"
                  type="text"
                  value={loginName}
                  onChange={(e) => setLoginName(e.target.value)}
                  placeholder="Enter your username"
                  autoComplete="username"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="login-pass">Password</label>
              <div className="input-box">
                <i className="bx bx-lock-alt" aria-hidden="true"></i>
                <input
                  id="login-pass"
                  type="password"
                  value={loginPass}
                  onChange={(e) => setLoginPass(e.target.value)}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                />
              </div>
            </div>
            <button className="btn" type="submit">Log in</button>

            <p className="switch">
              New here?{' '}
              <button type="button" onClick={() => setIsRegister(true)}>Create an account</button>
            </p>
          </form>
        </section>

        {/* Register Form */}
        <section className="form-box register" aria-hidden={!isRegister}>
          <form onSubmit={handleSignUpSubmit}>
            <h1>Create account</h1>
            <p className="lead">Order your first meal in under a minute.</p>

            <div className="field">
              <label htmlFor="signup-name">Username</label>
              <div className="input-box">
                <i className="bx bx-user" aria-hidden="true"></i>
                <input
                  id="signup-name"
                  type="text"
                  value={signUpName}
                  onChange={(e) => setSignUpName(e.target.value)}
                  placeholder="Choose a username"
                  autoComplete="username"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="signup-email">Email</label>
              <div className="input-box">
                <i className="bx bx-envelope" aria-hidden="true"></i>
                <input
                  id="signup-email"
                  type="email"
                  value={signUpEmail}
                  onChange={(e) => setSignUpEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="signup-pass">Password</label>
              <div className="input-box">
                <i className="bx bx-lock-alt" aria-hidden="true"></i>
                <input
                  id="signup-pass"
                  type="password"
                  value={signUpPass}
                  onChange={(e) => setSignUpPass(e.target.value)}
                  placeholder="Create a password"
                  autoComplete="new-password"
                  required
                />
              </div>
            </div>
            <button className="btn" type="submit">Create account</button>

            <p className="switch">
              Already registered?{' '}
              <button type="button" onClick={() => setIsRegister(false)}>Log in</button>
            </p>
          </form>
        </section>

        {/* Sliding image panel (desktop) */}
        <div className="toggle-box" aria-hidden="true">
          <div className="toggle-panel toggle-left">
            <h2>Hungry?</h2>
            <p>Make an account to save favorites and reorder in a tap.</p>
            <button type="button" className="ghost-btn" tabIndex={isRegister ? -1 : 0} onClick={() => setIsRegister(true)}>
              Create account
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h2>Welcome back!</h2>
            <p>Already have an account? Log in to pick up where you left off.</p>
            <button type="button" className="ghost-btn" tabIndex={isRegister ? 0 : -1} onClick={() => setIsRegister(false)}>
              Log in
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
