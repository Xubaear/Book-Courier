import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Register';
  }, []);

  const { createUser, updateUserProfile, signInWithGoogle, setUser } = useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

   
    const passwordPattern = /^.{6,}$/;
    const casePatterns = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

    if (!passwordPattern.test(password)) {
      toast.error('Password must be six characters or more');
      return;
    }
    if (!casePatterns.test(password)) {
      toast.error('Password must have at least one uppercase & one lowercase character');
      return;
    }

    try {
   
      const result = await createUser(email, password);
      const loggedUser = result.user;
      
      
      await updateUserProfile(name, photo);
      
     
      setUser({ ...loggedUser, displayName: name, photoURL: photo });

      
      const userInfo = { name, email, role: 'user' };

      const response = await fetch('https://bookcourier.vercel.app/users', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(userInfo)
      });

      const data = await response.json();

     
      if (data.insertedId || data.message === 'User already exists') {
        toast.success('Registration Successful!');
        form.reset();
        navigate('/'); 
      }

    } catch (error) {
      console.error(error);
      toast.error(error.message); 
    }
  };

  const handleGoogleRegister = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success('Google Registration Successful!');
        navigate('/');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="hero bg-gray-800 min-h-screen mt-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-linear-to-br from-primary/10 to-secondary/10 border border-primary/20 w-full max-w-sm shrink-0 shadow-xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Register Now!</h1>

            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input name="name" type="text" className="input" placeholder="Your Name" required />

                <label className="label">Photo URL</label>
                <input name="photo" type="text" className="input" placeholder="Photo URL" required />

                <label className="label">Email</label>
                <input name="email" type="email" className="input" placeholder="Email" required />

                <label className="label">Password</label>
                <input name="password" type="password" className="input" placeholder="Password" required />
              </fieldset>

              <div className="w-160">
                <button type="submit" className="btn btn-neutral w-1/2 mt-2">
                  Register
                </button>
              </div>
            </form>

            <p className="text-center mt-3">------- Or register with -------</p>

            <button onClick={handleGoogleRegister} className="btn bg-white text-black border-[#e5e5e5]">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              Google
            </button>

            <p className="mt-3">
              Already Have An Account?{' '}
              <Link to="/login" className="underline text-green-500">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Register;