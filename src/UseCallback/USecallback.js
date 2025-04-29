import React, {useCallback, useState} from "react";

const Child=React.memo(({onClick})=>{
    console.log("child component render")
    return(
        <div>
            <button onClick={onClick}>Click me</button>
        </div>
    )
});
const Parent=()=>{
    const[count,setCount]=useState(0);
    const handleClick=useCallback(()=>{
        console.log("Button clicked")
    },[]);
    return(
        <>
            <button onClick={()=>setCount(count+1)}>Parent count: {count}</button>
            <Child onClick={handleClick}/>
        </>
    );
}
export default Parent;