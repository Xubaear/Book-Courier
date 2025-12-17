import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config'; 
import { 
  createUserWithEmailAndPassword, 
  getAuth, 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut,
  updateProfile 
} from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // এই স্টেটটা আপনি ব্যবহার করতে চাচ্ছেন
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

        fetch('http://localhost:3000/users', {
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
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // ==========================================
  // ফিক্স: এখানে setUser যুক্ত করা হয়েছে
  // ==========================================
  const authData = {
    user,
    setUser, // <--- এই লাইনটা আপনার মিসিং ছিল
    loading,
    createUser,
    updateUserProfile, 
    signIn,
    signInWithGoogle,
    logOut
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;