import React, { useState } from 'react';

const LoginSignup = () => {
  const [isSignUp, setIsSignUp] = useState(true); // To toggle between Sign Up and Login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null); // To store logged-in user info

  // Dummy email and password storage (in a real app, this would be in a database or API)
  const [users, setUsers] = useState([]);

  // Handle sign up
  const handleSignUp = () => {
    if (!name || !email || !password) {
      alert('Please fill in all fields');
      return;
    }

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      alert('Email already in use');
    } else {
      // New user signup logic
      const newUser = { name, email, password };
      setUsers([...users, newUser]);
      alert('Sign Up Successful');
      setIsSignUp(false); // Switch to login view after successful signup
    }
  };

  // Handle login
  const handleLogin = () => {
    if (!email || !password) {
      alert('Please fill in both fields');
      return;
    }

    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      alert('Login Successful');
      setLoggedInUser(user); // Set logged-in user
      setIsSignUp(false); // Hide the form after successful login
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="loginsignup d-flex justify-content-center align-items-center min-vh-100">
      <div className="loginsignup-container p-4 shadow-sm rounded-3 col-md-6 col-lg-4">
        {loggedInUser ? (
          <>
            <h1 className="text-center mb-4">Welcome, {loggedInUser.email}</h1>
            <p className="text-center mb-3">
              You are successfully logged in. 
              <span className="text-primary" onClick={() => setLoggedInUser(null)}>Logout</span>
            </p>
          </>
        ) : (
          <>
            <h1 className="text-center mb-4">{isSignUp ? 'Sign Up' : 'Login'}</h1>

            <div className="loginsignup-fields mb-4">
              {isSignUp && (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control mb-3"
                  placeholder="Your Name"
                />
              )}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control mb-3"
                placeholder="Email Address"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control mb-3"
                placeholder="Password"
              />
            </div>

            <button
              className="btn btn-primary w-100 mb-3"
              onClick={isSignUp ? handleSignUp : handleLogin}
            >
              {isSignUp ? 'Continue' : 'Login'}
            </button>

            <p className="text-center mb-3">
              {isSignUp ? (
                <>
                  Already have an account?{' '}
                  <span className="text-primary" onClick={() => setIsSignUp(false)}>
                    Login here
                  </span>
                </>
              ) : (
                <>
                  Don't have an account?{' '}
                  <span className="text-primary" onClick={() => setIsSignUp(true)}>
                    Sign Up here
                  </span>
                </>
              )}
            </p>

            <div className="loginsignup-agree d-flex align-items-center">
              <input type="checkbox" name="" id="" className="me-2" />
              <p className="mb-0">By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
