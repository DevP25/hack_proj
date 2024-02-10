import React from 'react';
import './Homepage.css'

const homepage = () => {
    return(
        <>
            <nav className="navbar">
                <img src={require('./byte-9.png')} alt="Logo" className="navbar-logo" />
                <h1> Porter+ </h1>
            </nav>
        </>
        
    );
}

export default homepage;