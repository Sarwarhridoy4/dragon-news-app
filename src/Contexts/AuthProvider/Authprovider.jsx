import React, { createContext, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const Authprovider = ({ children }) => {
  const [user, setUser] = useState({});

  const providerLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };

  useState(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("user inside the state change", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = { user, providerLogin };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;
