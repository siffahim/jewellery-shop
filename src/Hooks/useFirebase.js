import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializationAuthentication from "../Pages/Login/Firebase/firebase.init";

initializationAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();

    //email and password
    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                setError('')
            })
            .catch(err => {
                setError(err.message)
            })
    }

    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                setError('')
            })
            .catch(err => {
                setError(err.message)
            })
    }

    //tracking user
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        })
    }, [])

    return {
        user,
        error,
        loginUser,
        registerUser
    }
}

export default useFirebase;