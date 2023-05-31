const obj = {
  name: "sid",
  age: 30,
  address: {
    line1: "address-1",
    city: "meerut",
    zip: {
      code: "91",
      pincode: "250401",
      landmark: {
        town: "mawana",
        nearby: "madir",
      },
    },
    todo: ["change icon"],
  },
};
function getChangedValue(value) {
 Object.keys(obj).forEach((el)=>{
    if(obj[el] === "object" && obj[el] !== null){
        getChangedValue(obj[el])
    }else{
         fvfffffffffffffffffffffffffffff
    }

 })
}
console.log(getChangedValue({ name: "mike" }));
 