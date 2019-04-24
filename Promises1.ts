const promise = new Promise(function(resolve,reject)
{
    let rt = function(){
        console.log("Hello .... I am executer");
        return true;
    }
   // console.log(rt);
    if (rt())
    {
        console.log("--> if part...")
        resolve("Success...")
    }
    else
    {
        console.log("--> else part")
        reject("failure...")
    }
})

let res = function(result){
    console.log(result)
}

let rej = function(result)
{
    console.log(result);
}

promise.then(res).catch(rej)
console.log("THE END");
//promise.then(res).catch(rej).finally()
//finally is not working in ts code

