import { createContext, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth"
import { app } from "../firebase/coffe.config";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
  const [user , setUser]=useState(null)
  const [loading , setLoading]=useState(true)

  const createUser = (email , password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth , email , password)
  }
  const singInUser = (email , password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth , email , password)
  }
  const authInfo ={
  user,
  setUser,
  createUser,
  loading,
  setLoading,
  singInUser

  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;