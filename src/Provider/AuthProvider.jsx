import React, { createContext, useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.init';
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [loader, setLoader] = useState(true);
    const [user, setUser] = useState(null)
    const auth = getAuth(app);

    const googleProvider = new GoogleAuthProvider();
    // google
    
    const createWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }


    // create with Email & Password 
    const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login with email and password

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    // LogOut
    const logOut = () => {
        return signOut(auth)
    }

    const data = {
        user,
        logOut,
        createWithGoogle,
        createAccount,
        signIn,
        loader,
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            setUser(user);
            // if (user) {
            //     fetch('http://localhost:5000/jwt', {
            //         method: 'POST',
            //         headers: {
            //             'content-type': 'application/json',
            //         },
            //         body: JSON.stringify(user)
            //     })
            //         .then(res => res.json())
            //         .then(data => {
            //             const token = data.token;
            //             sessionStorage.setItem('access-token', token)
            //             console.log(token);
            //         })
            // }
            setLoader(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;