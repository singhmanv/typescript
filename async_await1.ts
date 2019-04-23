//async function always returns a promise

/*let first = async () =>  { return "PreMovie" };

first().then(function(result)
{
    console.log(result + " Hello");
}) */

//use of async and await 
function one()
{
    console.log("1.");
}

function two()
{
    console.log("2.");
}

function three()
{
    console.log("3.");
}

function four()
{
    console.log("4.");
}


const first = async () => 
{
    const second = new Promise((resolve,resject)=>{
        setTimeout(() => {
           //console.log("Inside second... \n ")
           resolve(two) 
        }, 3000);
    })

    const third = new Promise((resolve,reject) =>
    {
        setTimeout(()=> {
            //console.log("Inside third... \n ")
            resolve(three)
        }, 3000)
    })

    const fourth = new Promise((resolve,reject) =>
    {
        setTimeout(()=> {
            //console.log("Inside fourth... \n ")
            resolve(four)
        }, 3000)
    })

    let f3 = await third;
    let f4 = await fourth;
    
    //let f2 = await second;
    //console.log("After seond promise");
    return f4;

}

first().then((result)=>{
    console.log(`${result}`)
})

