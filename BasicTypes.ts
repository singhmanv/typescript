// variable 
/*let x:number = 20;
console.log(x);*/

//string

/*let str: string = "Hello";
console.log(str);*/

/*let message:string = "Typescript says " + str;
console.log(message);*/

// Use of backquote
/*let fullname = "Sachin";
let age = 41;
console.log(`Hi I am ${fullname}, my age is ${age+1} ....`);*/

//Array

/*let x:number[] = [1,2,3];
console.log(x);*/

/*let x: Array<number> = [[1,3,4,5];  
console.log(x); */

/*let x: Array<number> = [[1,2],3,4,5]; //error number[] is not assignable 
console.log(x); */

//multidimensional array
/*let x:number [][] = [[1,2],[4,3],[4,5]];

console.log(x[0]);
console.log(x[1]);
console.log(x[2]);

console.log(x[0][0]);
console.log(x[0][1]);*/

//tuple
/*var t: [number,boolean,string] = [10,false,"Hello"];

t[0] = 30;

console.log(t[0]);
console.log(t[1]);
console.log(t[2]);

t[3] = 20 ; //error here 
console.log(t[3]); */

//enum
/*enum color{Green,Yellow,Red};
let oldcomp:number = color.Green;

let current:color = color.Yellow;

let next:string = color[2];

console.log(oldcomp);
console.log(current);
console.log(next);*/

// type :: any -----> use to avoid compiler type-checking;; can assign any type of value to variable declared as "any"

/*let x:any = "Hello,";
console.log(x);

x = true;
console.log(x);

x = 10; 
console.log(x);

x = null;
console.log(x);

x = undefined;
console.log(x);
console.log(typeof x);*/ 

//let x:any = "Hello,";

//x = "4";
//console.log(x.charAt(0));

//let y:number = 50;
//x = 50;

//console.log(y.charAt(0)); // compile time error 
//console.log(x.charAt(0)); // will skip compiler checking 

// type :: null , undefined - sub type of all other types ,, similar to null in c

//Type assertions

let x:any = "Hello, How are you?";

console.log(x.length);
console.log((<number>x).length) ; // error : BasicTypes.ts:99:25 - error TS2339: Property 'length' does not exist on type 'number'.
console.log((x as number).length) ; // Property 'length' does not exist on type 'number'.









 





