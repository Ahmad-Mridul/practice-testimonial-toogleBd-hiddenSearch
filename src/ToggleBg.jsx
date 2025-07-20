import React, { useState } from 'react';
import "./App.css";
const ToggleBg = () => {
    const [background, setBackground] = useState("white");
    const handleToggle = () => {
        setBackground(background=="white"?"black":"white");
        document.body.style.backgroundColor=background;
    };
    return (
        <div>
            <button className='btn btn-primary text-4xl bg-blue-400 p-5 rounded-2xl' onClick={handleToggle}>{background=="white"?"white theme":"black theme"}</button>
        </div>
    );
};  

export default ToggleBg;