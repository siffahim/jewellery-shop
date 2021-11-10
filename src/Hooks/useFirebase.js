import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
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
    const registerUser = (email, password, name, location, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                const newUser = { email, displayName: name }
                setUser(newUser)
                //update user name on firebase
                updateProfile(auth.currentUser, { displayName: name })
                    .then(() => {
                        setError('')
                    }).catch(err => setError(err.message))

                //alert successfully
                swal({ title: "Congratulation!", text: "Successfully created account", icon: "success" })

                //redirect to own place
                const uri = location.state?.from || '/';
                history.push(uri)

                saveUserDb(email, name)
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

    const saveUserDb = (email, displayName) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then()
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