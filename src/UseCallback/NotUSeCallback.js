import React,{useState} from 'react'

// This component does not use useCallback, so it will re-render every time the parent re-renders
const Child=React.memo(({onClick})=>{
    console.log("child component render NotUSeCallback");
    return(
        <div>
            <button onClick={onClick}>Click me</button>
        </div>
    )
    
})

function NotUSeCallback() {
    const[count,setCount]=useState(0);
    const handleClick=()=>{
        console.log("Button clicked not use callback")
    }
    return (
        <>
            <button onClick={()=>setCount(count+1)}>Parent count: {count}</button>
            <Child onClick={handleClick}/>
        </>
    )
 
}

export default NotUSeCallback