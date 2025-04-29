// THis is js File not react file
function square(n){
    console.log("Calculating square of ",n);
    return n*n;
}
function CacheMemo(fn){
    const cache={};
    return function(input){
       if(cache[input]){
              console.log("Fetching from cache for ",input);
              return cache[input];
       }else {
        const result= fn(input);
        cache[input]=result;
        console.log("Calculating and storing in cache for ",input);
        return result;
       }
    }
}
const memoizedSquare=CacheMemo(square);
console.log(memoizedSquare(5)); // Calculating square of 5
console.log(memoizedSquare(5)); // Fetching from cache for 5
console.log(memoizedSquare(6)); // Calculating square of 6
console.log(memoizedSquare(6)); // Fetching from cache for 6
console.log(memoizedSquare(7)); // Calculating square of 7
console.log(memoizedSquare(7)); // Fetching from cache for 7