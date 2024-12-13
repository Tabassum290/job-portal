import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
const [loading,setLoading] = useState(true);

const createNewUser = (email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
}

const SignInUser = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);
}
useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        setLoading(false);
    });
    return unSubscribe();
},[])

const signinWithGoogle = ()=>{
    setLoading(true);
    return signInWithPopup(auth,provider);
}

const SignOut = ()=>{
    setLoading(true);
    return signOut(auth);
   
}
// const LoginWithGoogle = ()=>{
    // setLoading(true);
// return
// }

    const authInfo = {
        user,
        setUser,
        createNewUser,
        SignInUser,
        SignOut,
        signinWithGoogle,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;