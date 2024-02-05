//declration of variable
var mk;
//initialize variables
mk="shreyas";
console.log(mk);



(function(){
    var mks=50;                     //self-inoving function
    console.log(mks);
}
())

 

function army(){
    var battalian="tiger Hill";
    console.log(battalian);                                 //named fuction
}
army();



var ms=()=>{
    console.log("happy");               //arrow function
}
ms(); 


//////////////////////////////////////////////////////////////////////////////////////////////////

//Global Varibale:

var city;
var village;



//local variable

function Location1(city,village){
   console.log("Running Succefully cities and village!!!!!!")
   this.city;
   this.village;                                          //function:- named fuction
}
Location1("davangere","Malebennur");
console.log("Cities:",city,"village:",village);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

var nameOfTheArray=[1,2,3,4,5,6,7,8];
console.log(nameOfTheArray);
for(let i=0; i<nameOfTheArray.length; i++)
{
    console.log(nameOfTheArray[i]);
}
nameOfTheArray[1]=10;
console.log(nameOfTheArray);




//////////////////////////////////////////////////////////////////////////////////

                                //Methods of array

////////////////////////////////////////////////////////////////////////////////////
var index=nameOfTheArray.push(60);
console.log(index)                           //push:- add the element in last of array
console.log(nameOfTheArray)             

///////////////////////////////////////////////////////////////////////////////////
var element=nameOfTheArray.pop(60);
console.log(element)                        //pop:-deleted element from the last of the array
console.log(nameOfTheArray)

/////////////////////////////////////////////////////////////////////////////////////
var digits=nameOfTheArray.shift();
console.log(digits)                        //shift:- 
console.log(nameOfTheArray)

//////////////////////////////////////////////////////////////////////////////////////
var charecter=nameOfTheArray.unshift();
console.log(charecter)                        //unshift:- 
console.log(nameOfTheArray)


////////////////////////////////////////////////////////////////////////////////////////


var array=[10,50,20,40,,30,60,70];
console.log(array);                                     
var newArray= array.slice(0,4);         //slice:- no of elements we have dispky that much only
console.log(newArray)

//////////////////////////////////////////////////////////////////////////////////////

var numbers=[1,6,2,8,7,9,3.];
numbers.splice(1,2,10,20,30)        //splice:- it will delete the elements in given order and insert 
console.log(numbers)                          // the given elements.

////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////////////

                                //Arithmetic Operations

/////////////////////////////////////////////////////////////////////////////////////////

function Arithmetic(a,b)
{
    var sum=a+b;
    return sum;
}
var sumofNumbers=Arithmetic(1,2);
console.log(sumofNumbers);