import React,{useRef} from "react";

const UseRefDom=()=>{
    const inputRef=useRef(null);
    const handleClick=()=>{
        inputRef.current.focus();
        // This will focus the input element when the button is clicked
        // because useRef is used to get a reference to the DOM element.

    }
    return(
        <>
            <h1>useRef Hook</h1>
            <input 
            type="text" 
            ref={inputRef} 
            placeholder="Focus me!"
           />
            <button onClick={handleClick}>Focus the Input</button>
        </>
    )
}
export default UseRefDom;