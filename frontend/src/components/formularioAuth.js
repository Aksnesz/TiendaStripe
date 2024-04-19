import React, { useState } from "react";
import { useAuth } from "../firebase/AuthContext";
import Navbar from "./Navbar";


function FormsFirebase( {data} ){

    const auth = useAuth();

    const {displayName} = auth.user;

    const handleGoogle = (e) => {
        e.preventDefault();
        auth.loginWithGoogle();
    };
    const handleLogout = (e) => {
        e.preventDefault();
        auth.logout();
    };
    return (
        <>
            <Navbar handleGoogle={handleGoogle} handleLogout={handleLogout} />
            {displayName ? (
                <>
            <Navbar handleGoogle={handleGoogle} handleLogout={handleLogout} />

                </>
            ) : (
                <Navbar handleGoogle={handleGoogle} handleLogout={handleLogout} />

            )}
        </>
    );
}

export default FormsFirebase;
