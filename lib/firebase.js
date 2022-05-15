import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
const firebaseConfig = {
    apiKey: "AIzaSyCxK2IZlq-MXy_D25lKqQ0rvp87Jy_qMVI",
    authDomain: "fir-de0b3.firebaseapp.com",
    projectId: "fir-de0b3",
    storageBucket: "fir-de0b3.appspot.com",
    messagingSenderId: "940146920630",
    appId: "1:940146920630:web:570c06def9185b7029ea17",
    measurementId: "G-10SPQ15GKL"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    export function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    export function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    export function logout() {
        return signOut(auth)
    }

    export function useAuth() {
        const[currentUser, setCurrentUser] = useState();


        useEffect(()=>{
            const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
            return unsub;
        }, [])
        return currentUser;
    }