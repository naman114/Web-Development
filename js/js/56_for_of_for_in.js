/* For in, For of loops */

// For in loop
let obj = {
    user: "Aice",
    city: "Wonderland",
    age: 15,
  };
  
  for(let i = 0; i < Object.keys(obj).length; i++){
    const ele = obj[Object.keys(obj)[i]];
    console.log(ele);
  }
  
  for(let key in obj){
    console.log(obj[key]);
    // console.log(obj.key) Won't work since key is a string here. So put it inside []
  }
  
  const myString = "Alice In Wonderland";
  for(let idx in myString){
    console.log(typeof idx); // idx is a String
    console.log(myString[idx]);
  }
  
  
  
  
  // For of loop
  let arr = [1,2,3,4,5];
  
  for(let numIdx in arr){
    console.log(numIdx); // indices
  }
  
  for(let num of arr){
    console.log(num); // values
  } 
  
  
  let obj = {
    user: "Aice",
    city: "Wonderland",
    age: 15,
  };
  
  for(let key of obj){
    console.log(key);
  } // Error: obj is not iterable. So for of loop cannot be used with objects
  
  