// scoping rule 

/*function myfun(parameter)
{
	if (parameter)
	{
		var x;
		//statement 1
		//x = 10;
	}
	
	//statement 2 
	//x = 10; 
	return x;
}


console.log(typeof myfun(true));
console.log(typeof myfun(false)); */

//output 
// un-comment statement 1 :: number , undefined
// commented statement 1 :: undefined , undefined
// un-comment statement 2 :: number , number
// both commented ::  undefined, undefined

//----------------------------------------------------------------------

// i of both loop is pointing to same location 
//infinite loop issue here 

/*function myfun()
{
	for (var i = 0; i < 10; i++)
	{
		console.log("Value of i in first loop" + i);
		
		for (var i = 0; i < 5; i++)
		{
			console.log("Value of i in second loop" + i);
		}
	}
}

myfun();*/ 

// use of let : will work fine
/*function myfun()
{
	for (var i = 0; i < 10; i++)
	{
		console.log("Value of i in first loop" + i);
		
		for (let i = 0; i < 5; i++)
		{
			console.log("Value of i in second loop" + i);
		}
	}
}

myfun();*/

/*function myfun()
{
	//a = 10;
	return a;
}*/

//console.log(myfun());
//a = 10;
//let a; // error

//a = 10;
//var a;

Queries --
Destructuring ???
