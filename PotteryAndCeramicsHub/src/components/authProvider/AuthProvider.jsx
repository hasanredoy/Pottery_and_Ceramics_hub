import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../firebase/a-10-firebase.config"
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

  const [user , setUser] = useState('')
  const [loading , setLoading] = useState(true)

  const auth = getAuth(app)
  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()


  // creating user 
  const register = (email , password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth , email , password)
  }

  // login user 
  const login = (email , password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth , email ,password )
  }

  // logout user 
const logOut = ()=>{
  return signOut(auth)
}

// singin with github 
const logInGitHub = ()=>{
  return signInWithPopup(auth , githubProvider)
}
// singin with google
const logInGoogle = ()=>{
  return signInWithPopup(auth , googleProvider)
}

  useEffect(()=>{
    const unsubscribe =onAuthStateChanged(auth, userOnAuth=>{
      setLoading(false)
      setUser(userOnAuth)
    }
   )
   return()=>{
    unsubscribe
   }
  },[])

  console.log(user);

  const authInfo ={
   register,
   login,
   user,
  loading ,
  logOut ,
  logInGoogle, 
  logInGitHub 

  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes={
  children: PropTypes.node
}

export default AuthProvider;