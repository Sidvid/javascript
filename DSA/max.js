let arr = [6,7,99,8,9,1,2,3,4,5]
let maxVal = arr.reduce((ac, val)=>{
    return ac > val ? ac : val

})
console.log(maxVal)
