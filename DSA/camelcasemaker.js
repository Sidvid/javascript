function camelCaseMaker (str){
    let newArr= str.split("-");
   return newArr.map((word , index)=>{
        return index ===0 ? word.charAt(0).toLowerCase() + word.slice(1) : word.charAt(0).toUpperCase() + word.slice(1)

    }).join("")


}
console.log(camelCaseMaker("camel-case-maker"))