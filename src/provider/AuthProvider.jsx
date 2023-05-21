import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { toast } from "react-toastify";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
  
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      toast('User created successfully');
     
    })
    .catch((error) => {
      console.log(error);
      toast('Error creating user: ' + error.message);
    })
  };
// sign in with email and password
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth)
      .then(() => {
        console.log("signOut successfully");
      })
      .catch((err) => console.log(err));
  };
//login with google
  const provider = new GoogleAuthProvider();

  const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast('Successfully signed in')
        navigate(from, {replace : true});

        console.log(user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const profileUpdate = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  // console.log(auth, user);
  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    signInGoogle,
    loading,
    profileUpdate,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
