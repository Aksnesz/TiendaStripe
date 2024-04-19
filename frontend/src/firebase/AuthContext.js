import React, { useState, useEffect, useContext, createContext } from "react";
import { auth } from "./firebase.config";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
// Creando un nuevo contexto
export const AuthContext = createContext();

// Gancho personalizado para acceder al contexto de autenticación
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth debe ser utilizado dentro de un AuthProvider");
    }
    return context;  
};

// Proveedor de autenticación
export function AuthProvider({ children }) {
    const [user, setUser] = useState("");
    useEffect(() => {
        const subscribed = onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) {
                console.log("Usuario no autenticado");
                setUser("");
            } else {
                console.log("Usuario autenticado");
                setUser(currentUser);
            }
        });
        return () => subscribed();
    }, []);


const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(auth, provider);
};

const logout = async () => {
    const response = await signOut(auth);
    console.log(response);
}
    return (
        <AuthContext.Provider
            value={{
                user,
                loginWithGoogle,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}


