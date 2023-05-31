let arr = [1,1,1,2,3,4,5,5,5,5,6,7]
let newArr = [...new Set(arr)]
let repeatArr = [
    {
        name: "sid",
        age:30
    },
    {
        name: "sid",
        age:89
    },
    {
        name: "sid",
        age:34
    },
    {
        name: "mike",
        age:23
    },
    {
        name: "mike",
        age:30
    },
    {
        name: "amanda",
        age:39
    },
    {
        name: "joe",
        age:34
    },
    {
        name: "joe",
        age:78
    },
]
let uniqueArr=repeatArr.filter((elem , index)=>{
    return index === repeatArr.findIndex((e)=>elem.name === e.name); 

})
console.log(uniqueArr)