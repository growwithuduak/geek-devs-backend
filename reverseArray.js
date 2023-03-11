function transformArrayOfNumbers(array) {
    //fliter and return odd numbers
   const oddNumbers =  array.filter( (arrNumber)=> {
        return arrNumber %2 == 1
    })

    //an empty array to store doubled numbers in reverse
  const doubledNumbers = [] 

  oddNumbers.forEach((no) => {
    doubledNumbers.unshift( no * 2)
   })

   
   return(doubledNumbers)


}

console.log(transformArrayOfNumbers([1, 10, 8, 9]))