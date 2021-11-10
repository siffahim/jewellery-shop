import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import swal from "sweetalert";
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
                swal({ title: "Congratulation!", text: "Successfully created account", icon: "success" })
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
                swal("Congratulation!", "Login successfully", "success");
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


    //signout
    const logOut = () => {
        signOut(auth)
            .then(() => {
                swal(" ", "Logout successfully", "warning");
                setUser({})
            })
    }

    return {
        user,
        error,
        logOut,
        loginUser,
        registerUser
    }
}

export default useFirebase;