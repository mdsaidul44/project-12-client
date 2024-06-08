import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from './../../firebase/firebase.config';

 
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState()
    const [loading,setLoading] =useState(true)
    const googleProvider = new GoogleAuthProvider()


    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    const updateProfileUser = (name,image)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL:image
          })
          
    }



    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth,currentUser=>{
        console.log('currentUser',currentUser)
        setUser(currentUser)
        setLoading(false)
        })
        return ()=>{
            unsubscribe
        }
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        googleLogin,
        logOut,
        updateProfileUser

    }
    return (
        <AuthContext.Provider  value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;