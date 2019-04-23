// Remove comment and run it 

// interface variable
/*interface Player
{
    firstname: string;
    lastname: string;
    fun : ()=> string;
}

var P1: Player =
{
    firstname: "Sachin",
    lastname: "Tendulkar",
    fun: ():string => { let fn:string = <string>this.firstname; //how to access Property in function ?
                        return fn; } // here P1 is a variable ,, not interface or class , may be this is iss
} 

console.log(P1.firstname);
console.log(P1.lastname);
console.log(P1.fun()); //Error : NaN */


/*interface Player{
    name : string;
   //  fun: ()=> string ; {return "Hi"} - can not do this ,, as interface contains only declarations
}*/

// interface function
/*interface SearchFunc {
    (source: string, subString: string): boolean;
}

let myfun: SearchFunc = function (src: string, substr: string ): boolean{
                            let result:number = src.search(substr);
                            return result > -1;
}

if (myfun("ARISTOCRAT", "aris"))
{
    console.log("found");
}
else
{
    console.log("Not found");
} */


// optional  property

/*interface employee
{
    id: number;
    name: string;
    age: number;
    DOJ?: Date;
}

let emp1 : employee = {id:1,name:"XYZ",age:20}; //fine
// let emp2 : employee = {id:1,name:"XYZ"}; //Error - property age is missing
let emp3 : employee = {id:3,name:"XYZ",age:30,DOJ :new Date("2018-03-16")} */

//readonly property
/*interface employee
{
    readonly id: number;
    name: string;
    age: number;
    DOJ?: Date;
}

let emp1 : employee = {id:1,name:"XYZ",age:20}; //fine

emp1.age = 30; // fine
emp1.id = 2; // Error : can not assign to 'id'  */

//implementing interface 

/*interface Iemployee
{
    id: number;
    name: string;
    printInfo() : void;
}

class employee implements Iemployee
{
    id: number;
    name: string;
    age: number;
    constructor(id:number,name:string,age:number)
    {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    printInfo():void {console.log ("id ==>" +  this.id);
                            console.log ("name ==>" +this.name);
                            console.log ("age ==>" + this.age);}
}

let emp1 : employee = new employee(1,"XYZ",22);
let emp2 : employee = new employee(2,"ABC",23);

emp1.printInfo();
emp2.printInfo(); */

//extending interface 
/*interface shape
{
    color:string;
}

interface penstroke
{
    penWidth: number;
}

interface square extends shape, penstroke
{
    sidelength: number;
}

let mysquare1:square = <square>{color:"Red"};

console.log("color --" + mysquare1.color);
console.log("penWidth --" + mysquare1.penWidth);

let mysquare2:square = <square>{color:"Red",penWidth:10,sidelength:2};

console.log("\n");
console.log("color --" + mysquare2.color);
console.log("penWidth --" + mysquare2.penWidth);
console.log("sidelength --" + mysquare2.sidelength); */

// note - an interface can also extend a class 

class song
{
    singer:string;
}

interface Isong extends song
{
    writer:string;
    duration:number;
}

class songs implements Isong
{
    singer:string;
    writer:string;
    duration:number;

    constructor(singer:string, writer:string, duration:number)
    {
        this.singer = singer;
        this.writer = writer;
        this.duration = duration;
    }

    information() : string
    {
        return "Singer : " + this.singer + "\nWriter : " + this.writer + "\nDuration : " + this.duration;
    }
}

let s1:songs = new songs("Lata","Nadeem",4.5)
console.log(s1.information());
