import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from './../firebase/firebase.config';

export  const AuthContext = createContext(null)



const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null);

    const [loading , setloading] = useState();

    const createUser = (email,password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth , email,password)
    }

    const signIn = (email,password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth , email , password);
    }

    const logout = () => {
        setloading(true);
        return signOut(auth)
    }

    useEffect(() => {
     const unSubscribe =    onAuthStateChanged(auth,currentUser => {
            console.log("user un the auth state chnaged", currentUser);
            setUser(currentUser);
            setloading(false)
        });
        return () => {
            unSubscribe();
        }
    } , [])

    const authInfo = {
        user , 
        loading,
        createUser,
        signIn,
        logout

    }
    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;