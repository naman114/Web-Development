/* Promises

States:
- resolve
- reject
- pending
*/

function func(){
  return new Promise(function(resolve, reject){
    setTimeout(() => {
      const error = true;
      if(!error){
        console.log("Function: Promise resolved");
        resolve();
      }
      else{
        console.log("Function: Promise not resolved");
        reject("Return value: Not resolved");
      }
    }, 2000);
  });
}

func().then(function(){console.log("Then: Done")}).catch(function(){console.log("Not done")});