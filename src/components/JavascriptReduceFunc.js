// let array = [0,1,2,3,4,5]
let array = [5,5,5,5,5]

const reducers = (accumulator, currentValue) => {
    return(
        accumulator + currentValue
        
    ) 
    
}

console.log(array.reduce(reducers));  // 5+1+2+3+4+5

console.log(array.reduce(reducers,10)); // 10+5+1+2+3+4+5  (here 1 is initial value)


let funct = array.reduce((accumulator,currentValue)=>accumulator+currentValue);
console.log(funct)
