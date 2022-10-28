import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import {getAuth, signInWithPopup} from 'firebase/auth'
import toast from 'react-hot-toast';
const auth = getAuth(app)
export const LearningAuthContext = createContext();
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthContext = ({children}) => {
    // user state
    const [user , setUser] = useState(null);
    // loading state 
    const [loading , setLoading ] = useState(true);
    // create user with eemail and password
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }
    // sign in with email and password
    const handleLogin = (email , password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , password)
    }
    // google sign in 
    const handleGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth , provider);
    }
    // github signIn
    const handleGithub = ()=>{
        setLoading(true)
        return signInWithPopup(auth , githubProvider);
    }
    // update user profile 
    const userProfile = (name , photo) =>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo
        })
    }
    // get signIn User 
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>unsubscribe()
    
    },[])
    // user signOut 

    const landleLogOut = () =>{
        signOut(auth).then(() => {
            toast.success('User SuccessFully LogOut')
          }).catch((error) => {
            toast.error(error.message)
          });
    }
    

    const authMethod = {
        handleGoogle,
        user,
        handleGithub,
        landleLogOut,
        handleLogin ,
        createUser,
        userProfile,
        loading
        
    }

    return (
        <LearningAuthContext.Provider value={authMethod}>
            {children}
        </LearningAuthContext.Provider>
    );
};

export default AuthContext;