function transformArrayOfNumbers(ar) {
    let odds = []
    ar.forEach((num) => {
        if (num % 2 === 1) {
            odds.push(num *2)
            }
        
    })
    odds.reverse()
    return odds
    
};
let ar = [1, 10, 8, 9];
let odds = transformArrayOfNumbers(ar)
console.log(odds)