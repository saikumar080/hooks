import React,{useRef} from "react";

const useRefHook=()=>{
    const data=useRef(0);
    const handleClick=()=>{
        data.current++;
        console.log("Triggering the handleClick:: ",data.current);
        // This will not cause a re-render of the component
        // because useRef does not trigger a re-render when the value changes.
    }
    // This will not cause a re-render of the component
    // because useRef does not trigger a re-render when the value changes.
    console.log("Not triggering the handleClick:: ",data.current);
   
    return(
        <>
            <h1>useRef Hook</h1>
            <button onClick={handleClick}>Increment</button>
            <p>Current value: {data.current}</p>
        </>
    )
}
export default useRefHook;