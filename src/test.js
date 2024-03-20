function newArray (...args){
    let answer = []
    args.forEach((item) => {
        answer.push(
            args.filter((subItem) => item !== subItem).reduce((a, b) => a * b, 1)
        )
    })
    return answer
}

console.log(newArray(1, 3, 4, 9, 5))