let num = [2, 4, 6, 7]

let accum = 1
let answerArr = num.forEach((item, index) => {
    // if(item)
    return accum *= item
})

console.log(answerArr);