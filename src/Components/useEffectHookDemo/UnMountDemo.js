import React, { useState,useEffect } from 'react';
import HookMouse from './HookMouse';

const UnMountDemo = () => {

    const [display ,setDisplay] = useState(true)

    useEffect(()=>{
    console.log("inside toggle effect component");

    })
    return (
        <div>
            <hr/>
            <p>componentWillUnMount life cycle example with useEffect</p>
        <button onClick={()=>setDisplay(!display)} >Toggle Display</button>
        {display &&
        <HookMouse/>        
        }

        </div>
    );
};

export default UnMountDemo;