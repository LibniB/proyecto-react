import React, { useState } from 'react';

const InputComponent = () => {

    const handleChange = (event) => {
        console.log (event.target.value);    
    }
     
    return (
        <div>
            <input type="text"  onChange={handleChange} />
            <input onChange={(event)=>console.log(event.target.value)} type="text" />
        </div>
    );
};

export default InputComponent;


