// classes 

//Inheritance, super, object creation 
/*class vechile
{
    message : string;
    constructor(msg:string)
    {
        this.message = msg;
    }
    move(distance : number) : string
    {
        return `${this.message} covered ${distance} Km.`;
    }
}

class bycycle extends vechile
{
    constructor(msg:string)
    {
        super(msg);
    }

    move(distance: number = 10) : string
    {
        return "Bycycle --" + super.move(distance);
    }
}

class car extends vechile
{
    constructor(msg:string)
    {
        super(msg);
    }

    move(distance: number =50) : string
    {
        return "Car --" + super.move(distance);
    }
}

let Bycycle:bycycle = new bycycle("Hi I am bycycle");
let Car:car = new car("Hi I am Car");

console.log(Bycycle.move(20));
console.log(Car.move()); */

// --------------------------------------------------------------------------
//Public, private, and protected modifiers
//getter , setter accessors
//Public by default 
// ---------------------------------------------------------------------------

// command  : tsc --target es5 classes.ts

/*class human
{
    readonly _UID:string;
    private _name:string;
    private _address?: string;

    constructor(UID:string, name:string, address:string = "NA")
    {
        this._UID = UID;
        this._name = name; 
    }

     get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }
    
    get UID(): string
    {
        return this._UID;
    }

     //set UID(UID : string)
    //{
      //  this._UID = UID; // Error : as UID is read only
    //}

    private get name() : string
    {
        return this._name;
    }

    private set name(name:string) 
    {
        this._name = name; 
    }

    protected displayname() : string 
    {
        return this.name;
    }
}

class employee extends human
{
    department : string ;

    constructor(UID:string, name:string, department:string)
    {
        // this.department = department; // Error 
        super(UID,name);
        this.department = department;
    }

    display():string
    {
       // let information:string = "\n UID =" + this.UID + "\n name =" + this.name // Error : pricate 
        //                            +  this.displayname() + "\n addess =" + this.address + "\n department =" + this.department ;   
        let information:string = "\n UID =" + this.UID + "\n name =" + 
                                    +  this.displayname() + "\n addess =" + this.address + "\n department =" + this.department ; 
        return information;
    }
}

let emp1:employee = new employee("IND1","XYZ","MOE");

console.log("\n" + emp1.display());

emp1.address = "New Delhi";

console.log("\n" + emp1.display()); */

//static 
/*class Grid {
    static origin = {x: 0, y: 0};
    
   
    constructor (public scale: {x:number; y:number;}) 
    { 
        Grid.origin.x = scale.x;
        Grid.origin.y = scale.y;
    }

    static GetOrigin() : void
    {
        console.log("Grid.x = " + Grid.origin.x);
        console.log("Grid.y = " + Grid.origin.y);
    }

    Print() : void
    {
        console.log("Grid.x = " + Grid.origin.x);
        console.log("Grid.y = " + Grid.origin.y);
    }
}

let grid1 = new Grid({x:1.0,y:2.0});  // 1x scale
let grid2 = new Grid({x:5.0,y:10.0});  // 5x scale

grid1.Print(); // will print 5.0, 10.0
Grid.GetOrigin(); //static function */

//Abstract class 
/*abstract class BaseClass
{
    abstract absfun() : void;
    sayhi()
    {
        console.log("Hi...");
    }
}

class childclass extends BaseClass
{
    absfun()
    {
        console.log("This is abstract function.");
    }

    sayhi() //function overloading
    {
        console.log("Hello ...");
    }
}

//let B1:BaseClass  = new BaseClass(); //Error

let B1:BaseClass  = new childclass();

B1.sayhi();
B1.absfun(); */









