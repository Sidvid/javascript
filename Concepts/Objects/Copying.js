//Copying with spread operator
let obj = {
     name: "sid" ,
     age : 30,
     address : {
        country:"India",
        street : {
            city : "meerut",
            streetName: "1st street"
        }
        
     }
}
let spreadCopy = {...obj};
spreadCopy.name = "mike" // it can prevent only first layer , here name of both objects will be changed but if try to change the address or street then this will not be prevented.\
spreadCopy.address.country ="US"


console.log(spreadCopy)
console.log(obj)




// copying by structured clone

// let obj2 = {
//   name: "sid",
//   age: 30,
//   address: {
//     country: "India",
//     street: {
//       city: "meerut",
//       streetName: "1st street",
//     },
//   },
// };
// let structCloneObj = structuredClone(obj2);
// structCloneObj.name = "mike--";
// structCloneObj.address.country = "pak"
// console.log(structCloneObj);
// console.log(obj2)
