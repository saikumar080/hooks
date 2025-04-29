import React,{useState, useMemo} from "react";

function SquareComponent({input}){
    const square=(number)=>{
        console.log("Calculating square of ",number);
        return number*number;
    }
    const memoizedSquare=useMemo(()=>square(input),[input]);
    /* 
      =>  - The useMemo hook is used to memoize the result of the square function.
      =>  - It will only re-calculate the square when the input changes.
      =>  - This is useful for performance optimization, especially when the calculation is expensive.
      =>  - The second argument is an array of dependencies. The memoized value will only be recomputed when one of the dependencies has changed.
      =>  - In this case, the memoized value will only be recomputed when the input prop changes.
      =>  - This prevents unnecessary calculations and improves performance.
      =>  - The memoized value is stored in the memoizedSquare variable.
      =>  - The memoized value is returned from the useMemo hook and can be used in the component.
      =>  - The memoized value is only recalculated when the input prop changes.
      =>  - This prevents unnecessary calculations and improves performance.
    */
    
    return(
        <div>
            <h1>memoized Square</h1>
            <p>result:{memoizedSquare}</p>
        </div>
    )

}
function MyComponent(){
    const[render,setRender]=useState(false);
    const[number,SetNumber]=useState(0);
    const handleIncrement=()=>{
        SetNumber(number+1);
    }
    
    console.log("Rendering MyComponent",number);
    return(
        <div>
            <SquareComponent input={number} />
            <button onClick={()=>setRender(!render)} style={{margin:"20px"}}>Re-render</button>
            <button onClick={handleIncrement} type="button"  >Increment</button>
            
        </div>
    )
}
export default MyComponent;
// This component demonstrates the use of useMemo to optimize the performance of a component by memoizing the result of a function call.