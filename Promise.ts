//command - tsc --target es2015 Promise.ts

/*let  promiseToCleanRoom = new Promise(function(resolve,reject){

    // room is clean

    let isclean = true;
    if (isclean)
    {
        resolve('Cleaned');
    }
    else
    {
        reject("not cleaned");
    }
});

promiseToCleanRoom.then(function(fromsresolve){
    console.log("Room is" + fromsresolve);
}).catch(function(fromreject){
    console.log('Room is' + fromreject);
}) */

//promise chain

let cleanroom = function()
                { return  new Promise(
                        function(resolve,reject)
                        {
                            resolve('Cleaned the room')
                        }
                    )
                }

let collectgarbage = function(message)
                     {  return new Promise(
                            function(resolve,reject)
                            {   
                                resolve(message + '; Garbage collected')
                            }
                        )
                     }

let Gift = function(message)
            {   return new Promise(
                   function(resolve,reject)
                    {
                        resolve(message + '; Won Icecream')
                    } 
                )
            }

cleanroom().then(function(result)
{
    return collectgarbage(result);
}).then(function(result){
    return Gift(result)
}).then(function(result)
{
    console.log("finished ---" + result);
})

//to run all promises at a time
/*Promise.all([cleanroom(),collectgarbage(''),Gift('')]).then(function()
{
    console.log("all finished");
})

Promise.race([cleanroom(),collectgarbage(''),Gift('')]).then(function()
{
    console.log("one of them is finished");
}) */