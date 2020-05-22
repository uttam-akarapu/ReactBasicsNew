import React ,{ useState,useEffect } from "react";


const HookMouse = () => {
const [x,setX] = useState(0);
const [y,setY] = useState(0);

useEffect(()=>{
    console.log("useEffect called");
    window.addEventListener('mousemove',mousePosition);
return () =>{
    console.log("component unmounted");
    window.removeEventListener('mousemove',mousePosition);
}

},[])

const mousePosition = (e) =>{
    setX(e.clientX);
    setY(e.clientY);
}
    return (
        <div>
            <hr/>
            <p>useEffect example3:</p>
            <ol><li>Mouseover effect for X and Y co-ordinates . we use below functions to capture mouse movements.</li></ol>
            <pre><code>
                {`
                const HookMouse = () => {
                const [x,setX] = useState(0);
                const [y,setY] = useState(0);

                useEffect(()=>{
                console.log("useEffect called");
                window.addEventListener('mousemove',mousePosition)
                },[])

                const mousePosition = (e) =>{
                    setX(e.clientX);
                    setY(e.clientY);
                }
                
                `}

                </code></pre>
            <p>Hooks X-{x} Y-{y}</p>
            
        </div>
    );
};

export default HookMouse;