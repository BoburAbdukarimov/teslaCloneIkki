import Head from 'next/head';
import { signup,login, logout, useAuth } from '../lib/firebase';
import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from "../components/Navbar"
import styles from '../styles/Auth.module.css'


export default function Sign_up() {
    const[loading, setLoading] = useState(false)
    const currentUser = useAuth();
    const emailRef = useRef()
    const passwordRef = useRef()
    const router = useRouter()
    async function handleSignup() {
        setLoading(true)
        try{
            await signup(emailRef.current.value, passwordRef.current.value)
        }
        catch{
            alert("great!!")
        }
        setLoading(false)
    }
    async function handleLogout() {
        setLoading(true)
        try{
            await logout();

        }catch{
            alert('error??')
        }
        setLoading(false)
    }
    async function handleLogin() {
        setLoading(true)
        try{
            await login(emailRef.current.value, passwordRef.current.value)
        }
        catch{
            alert("the end..:)")
        }
        setLoading(false)
    }
    return(
        <>
        <Head>
                <title>Sign Up</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <Navbar />
        <div className={styles.login}>

            <div className={styles.current}>Currently in as: {currentUser?.email}</div>
                    <div  id='fields'>
                        <form className={styles.form} >
                    <h2 className={styles.signInText}>Sign Up</h2>
                            <input
                                ref={emailRef}
                                placeholder="Email"
                                className={styles.input}
                                /> 
                            <input
                                ref={passwordRef}
                                type="password"
                                placeholder="Password"
                                className={styles.input}
                                    />
                        </form>
                    </div>
                    <button  className={styles.loginBtn} disabled={loading || currentUser} onClick={handleSignup}>Sign up</button>
                    <button className={styles.loginBtn} disabled={loading || currentUser} onClick={handleLogin}>Log in</button>
                    <button className={styles.loginBtn} disabled={loading || !currentUser} onClick={handleLogout}>Sign out</button>
        </div>
        </>
    )
}