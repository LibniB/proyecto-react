import React from 'react';

const BottonComponent = () => {

    const handleClick=()=>{
        onclick=console.log("dio click")
    }
    return (
        <div className='container'>
             <button className="btn btn-outline-success" onClick={handleClick }>Hola</button>
             <button onClick={()=>{
                console.log("diste click");
                console.log("otro mensaje")
             }}
             >clickk</button>
        </div>
    );
}

export default BottonComponent;
