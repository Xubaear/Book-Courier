import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  useEffect(() => {
    document.title = 'Login';
  }, []);

  const { signIn, signInWithGoogle, signInWithFacebook } = useContext(AuthContext);
  const emailRef = useRef();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleDemoLogin = () => {
    const demoEmail = 'ph.user@gmail.com';
    const demoPassword = '123Abc@';
    
    // Auto-fill form
    if (emailRef.current) {
      emailRef.current.value = demoEmail;
    }
    
    setLoading(true);
    signIn(demoEmail, demoPassword)
      .then((res) => {
        toast.success('Demo login successful!');
        const from = location.state?.from?.pathname || '/';
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error('Demo login failed. Please use regular login.');
      })
      .finally(() => setLoading(false));
  };

  const validateForm = (email, password) => {
    const newErrors = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!validateForm(email, password)) {
      return;
    }

    setLoading(true);
    signIn(email, password)
      .then((res) => {
        const user = res.user;
        toast.success('Login successful!');
        setErrors({});
        const from = location.state?.from?.pathname || '/';
        navigate(from, { replace: true });
      })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          setErrors({ email: 'No account found with this email' });
          toast.error('No account found with this email');
        } else if (error.code === 'auth/wrong-password') {
          setErrors({ password: 'Incorrect password' });
          toast.error('Incorrect password');
        } else if (error.code === 'auth/invalid-email') {
          setErrors({ email: 'Invalid email address' });
          toast.error('Invalid email address');
        } else {
          setErrors({ general: 'Login failed. Please try again.' });
          toast.error('Login failed. Please try again.');
        }
      })
      .finally(() => setLoading(false));
  };

  const handleGoogleSignIn = () => {
    setLoading(true);
    signInWithGoogle()
      .then((result) => {
        toast.success('Google login successful!');
        const from = location.state?.from?.pathname || '/';
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error('Google login failed');
      })
      .finally(() => setLoading(false));
  };

 

  return (
    <div className="hero bg-gray-800 min-h-screen pt-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-linear-to-br from-primary/10 to-secondary/10 shadow-xl border border-primary/20 w-full max-w-md shrink-0">
          <div className="card-body">
            <h1 className="text-4xl font-bold text-center mb-2">Login</h1>
            <p className="text-center text-base-content/70 mb-6">Welcome back! Please login to your account.</p>

            {errors.general && (
              <div className="alert alert-error">
                <span>{errors.general}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  className={`input input-bordered ${errors.email ? 'input-error' : ''}`}
                  ref={emailRef}
                  placeholder="Enter your email"
                  required
                />
                {errors.email && (
                  <label className="label">
                    <span className="label-text-alt text-error">{errors.email}</span>
                  </label>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  className={`input input-bordered ${errors.password ? 'input-error' : ''}`}
                  placeholder="Enter your password"
                  required
                />
                {errors.password && (
                  <label className="label">
                    <span className="label-text-alt text-error">{errors.password}</span>
                  </label>
                )}
              </div>

              <button
                type="submit"
                className={`btn btn-primary w-full mt-4 ${loading ? 'loading' : ''}`}
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>

            <div className="divider">OR</div>

            {/* Demo Login Button */}
            <button
              onClick={handleDemoLogin}
              className="btn btn-outline btn-primary w-full"
              disabled={loading}
            >
               Demo Login
            </button>

            {/* Social Login */}
            <div className="space-y-2 bg-gray-400 text-black">
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline w-full border-base-300 hover:bg-base-200"
                disabled={loading}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                 Google
              </button>

              
            </div>

            <p className="text-center mt-4">
              Don't have an account?{' '}
              <Link to="/register" className="link text-red-500 font-semibold">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </div>
  );
};

export default Login;