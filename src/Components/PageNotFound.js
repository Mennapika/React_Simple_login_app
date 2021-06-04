import React from 'react';
import "./PageNotFound.css";


const PageNotFound = () => {
    
    return (
        <div className="container">
            <img  className="image" src={require("../Images/404.png").default} alt="loading..."  className="image"/>
        </div>
    )
}

export default PageNotFound 
