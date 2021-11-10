import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import initializationAuthentication from "../Pages/Login/Firebase/firebase.init";

initializationAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    //email and password
    const registerUser = (email, password, location, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const uri = location.state?.from || '/';
                setUser(result.user)
                swal({ title: "Congratulation!", text: "Successfully created account", icon: "success" })
                history.push(uri)
                setError('')
            })
            .catch(err => {
                setError(err.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const uri = location.state?.from || '/';
                setUser(result.user)
                swal("Congratulation!", "Login successfully", "success");
                history.push(uri)
                setError('')
            })
            .catch(err => {
                setError(err.message)
            })
            .finally(() => {
                setIsLoading(false)
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
            setIsLoading(false)
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
        registerUser,
        isLoading
    }
}

export default useFirebase;