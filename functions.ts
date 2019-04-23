// Optional parameter 

/*function fun(x:number, y?:string)
{
	console.log(x + "<---->" + y);
}

fun(10);*/


/*function fun(x?:number, y:string) //error TS1016: A required parameter cannot follow an optional parameter.
{
	console.log(x + "<---->" + y);
}

fun(10,"Hiii");*/

//Rest Parameter - variable parameters 

/* function myfun(x:number, ...values:string[])
{
	console.log(x + "" + values.join());
}

function myfunction(item):string
{
	return item;
}
let cities:string[] = ["Delhi","Hyderabad","Pune","Bangaluru","Chennai"];
 
myfun(cities.length,cities.forEach(myfunction)); */ //facing some issue here







