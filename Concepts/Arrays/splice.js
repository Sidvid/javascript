const days = ["Satudrday", "Sunday", "Monday", "Tuesday", "Wednesday"];
// splice(index , removeItemNumber , item1 ,item2..)
// @index - > index at which we have to initiate the operation
// @removeItemNumber -> how many item we want to remove

const weekend = days.splice(2, 5, "Friday");
console.log(days, weekend);
