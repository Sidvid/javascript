const obj ={
    name:"sid",
    age:20,

}
const map = Object.keys(obj).map((elem)=>{
    return [elem , obj[elem]]
})
console.log(map)