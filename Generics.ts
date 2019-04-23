// Generic function ,, 

/*function myfun<T> (arg1:T, arg2:T) 
{
    console.log(arg1);
    console.log(arg2);
    //return arg1;
}

myfun(10,11);
myfun("Hi...", "Hello..."); */

//Generic Class and interface 

/*interface IGeneric<T>
{
    display :  (arg : T) => T;
}

class MyClass<T, U> implements IGeneric<T>
{
    display : (arg: T ) => T;
    Add: (arg1:T, arg2:U) => void;
}

// number type intance
let MyNumber = new MyClass<number,number>();
MyNumber.display = function (arg : number):number { return arg };
MyNumber.Add = function (arg1:number, arg2: number){ console.log( "Add function :" +  (arg1 + arg2)); }

console.log("Value is =" + MyNumber.display(10));
MyNumber.Add(20,30);

// string type instance
console.log("\n");
let MyString = new MyClass<string,string>();
MyString.display = function (arg : string):string { return arg };
MyString.Add = function (arg1:string, arg2: string){ console.log( "Add function :" +  (arg1 + arg2)); }

console.log("Value is =" + MyString.display("Hello World..."));
MyString.Add("Aristocrat", "Gaming comp.");

//mixed instance
console.log("\n");
let mixed = new MyClass<number,string>();
mixed.display = function (arg : number):number { return arg };
mixed.Add = function (arg1:number, arg2: string){ console.log( "Add function :" +  (arg1 + arg2)); }

console.log("Value is =" + mixed.display(10));
mixed.Add(20, " Gaming comp."); */

//Generic constraints 

class Bird
{

}

class Animal 
{
    numlegs : number;
}

class Bee extends Animal
{
    sound : string;
}

class Horse extends Animal 
{
    canfly : boolean;
}

function CreateInstance<T> (c: new() => T) : T // for all type 
{
    return new c();
}

function Create<A extends Animal>(c: new() => A) : A // constraints : only for type Animal 
{
    return new c();
}

CreateInstance<Bird>(Bird); //ok
CreateInstance<Animal>(Animal); //ok

//Create<Bird>(Bird); //Bird not satisfy the contraint Animal - not ok
Create<Animal>(Animal); //ok
Create<Animal>(Horse); //ok
