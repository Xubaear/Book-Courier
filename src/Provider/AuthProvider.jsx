import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config'; 
import { 
  createUserWithEmailAndPassword, 
  getAuth, 
  GoogleAuthProvider, 
  FacebookAuthProvider,
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut,
  updateProfile 
} from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name, 
        photoURL: photo
    });
  }

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        const saveUser = { 
            name: loggedUser.displayName, 
            email: loggedUser.email,
            role: 'user'
        };

        fetch('https://bookcourier.vercel.app/users', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(saveUser)
        })
        .then(res => res.json())
        .then(() => {
             setUser(loggedUser);
        });
        
        return loggedUser;
      });
  };

  const signInWithFacebook = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const loggedUser = result.user;
        const saveUser = { 
            name: loggedUser.displayName, 
            email: loggedUser.email,
            role: 'user'
        };

        fetch('https://bookcourier.vercel.app/users', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(saveUser)
        })
        .then(res => res.json())
        .then(() => {
             setUser(loggedUser);
        });
        
        return loggedUser;
      });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth)
        .then(() => {
            
            fetch('https://bookcourier.vercel.app/logout', { method: 'POST', credentials: 'include' });
            setLoading(false);
        });
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
       
        const userInfo = { email: currentUser.email };
        
        fetch('https://bookcourier.vercel.app/jwt', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(userInfo),
          credentials: 'include' 
        })
        .then(res => res.json())
        .then(data => {
           setLoading(false); 
        })
        .catch(err => {
            console.error("JWT Error:", err);
            setLoading(false); 
        });

      } else {
        
        fetch('https://bookcourier.vercel.app/logout', {
            method: 'POST',
            credentials: 'include'
        })
        .then(() => {
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
            setLoading(false); 
        });
      }
    });
    return () => unsubscribe();
  }, []);

  const authData = {
    user,
    setUser, 
    loading,
    createUser,
    updateUserProfile, 
    signIn,
    signInWithGoogle,
    signInWithFacebook,
    logOut
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;