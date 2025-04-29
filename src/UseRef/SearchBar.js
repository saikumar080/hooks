import React,{useRef, useEffect} from "react";

const SearchBar=()=>{
    const inputRef=useRef(null);
    useEffect(()=>{
        inputRef.current.focus();
        // This will focus the input element when the component mounts
        // because useRef is used to get a reference to the DOM element.
    },[]);
    return(
        <>
            <h1>Search Bar</h1>
            <input
            ref={inputRef}
            type="text"
            placeholder="Search...."
            autoComplete="on"
            style={{padding:'10px',fontSize:'16px'}} />
        </>
    );
}
export default SearchBar;