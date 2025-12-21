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
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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