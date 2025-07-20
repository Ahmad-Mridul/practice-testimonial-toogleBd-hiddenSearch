import React, { useState } from 'react';
import PopUp from './PopUp';

const Copy = () => {
    const [inputValue, setInputValue] = useState("");
    const [copied,setCopied] = useState(false);
    const handleCopy = e =>{
        e.preventDefault();
        navigator.clipboard.writeText(inputValue)
        .then(()=>{
            setCopied(true);
            setTimeout(()=>setCopied(false),3000)
        })
    }
    return (
        <div>
            <form onSubmit={handleCopy}>
                <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
                <button>copy</button>
            </form>
            <PopUp copied={copied}/>
        </div>
    );
};

export default Copy;