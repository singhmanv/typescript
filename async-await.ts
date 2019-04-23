// Implementing a queue for movie 
//tsc --target es2015 async-await.ts

/*console.log("Person 1 : shows tic");
console.log("Person 2 : shows tic");

//person 3 forgets it's tic and promised to show as soon as friend arrive 

const friendArrivingWithTic = new Promise(function(resolve,reject)
{
    let friendArrived = true;
    if (friendArrived)
    {
        resolve('shows tic')
    }
    else
    {
        reject('fails to show tic')
    }
})

friendArrivingWithTic.then(function(result)
{
    console.log(`Person 3 : ${result}`)
}).catch(function(result){
    console.log(`Person 3 : ${result}`)
})

console.log("Person 4 : shows tic");
console.log("Person 5 : shows tic"); */


console.log("Person 1 : shows tic");
console.log("Person 2 : shows tic");

//person 3 forgets it's tic and promised to show as soon as friend arrive 
// frind comes and he is hungry , buys pizza , then shows tics

const friendArrivingWithTic = new Promise(function(resolve,reject)
{
    setTimeout(() => {
        let friendArrived = true;
        if (friendArrived)
        {
            resolve('friend have tics; ')
        }
        else
        {
            reject('fails to show tic')
        }
    }, 3000); //waiting for friend
    
})

const friendIsHungry = friendArrivingWithTic.then(function(result){
    return new Promise((resolve,reject)=>
    {
        resolve(result + "friend is hungry ;")
        //reject(result + "...rejected... ")
    })
})


const friendbuysPizza = friendIsHungry.then(function(result)
{
   // console.log("\n friendbuysPizza -> then ...")
    return new Promise((resolve,reject)=>
    {
        resolve(result + "buys pizza ;")
    })
}).catch(function(result)
{
    console.log("\n friendbuysPizza -> catch ...")
})

const friendShowsTicks = friendbuysPizza.then(function(result)
{
    //console.log("\n friendShowsTicks -> then .....")
    return new Promise((resolve,reject)=>{
        resolve(result + " shows tics ;")
    })
}).catch(function()
{
    console.log("\n friendShowsTicks -> catch .....")
    //console.log("friendbuysPizza --> fails.")
})

friendShowsTicks.then(function(result)
{
    console.log(`Person 3 :  ${result}`);
}) 

console.log("Person 4 : shows tic");
console.log("Person 5 : shows tic");  

// Query code compilation issue 