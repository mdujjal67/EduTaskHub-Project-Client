import { GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../Firebase/firebase.config";
import PropTypes from 'prop-types';
import axios from "axios";

export const AuthContext = createContext()
const auth = getAuth(app);

// social auth provider
const googleProvider = new GoogleAuthProvider;
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // create user function
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signIn function
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // observer for current state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // under to veriable for token generatez
            const userEmail = currentUser?.email || user?.email;
            const loggedInUser = { email: userEmail }

            setUser(currentUser)
            // console.log('Current User', currentUser)
            setLoading(false);

            // for token generate
            if (currentUser) {
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, loggedInUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                    })
            }
            else{
                axios.post(`${import.meta.env.VITE_API_URL}/logout`, loggedInUser, { withCredentials: true })
                    .then(res => {
                        console.log( res.data)
                    })
            }
        })
        return () => {
            unSubscribe();
        }
    }, [])

    // logout function
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // google sign-in
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    // github sign-in
    const gitHubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, gitHubProvider)
    }


    // update user profile
    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: image
          })
    }


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleLogin,
        gitHubLogin,
        updateUserProfile
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.object
};
export default AuthProvider;