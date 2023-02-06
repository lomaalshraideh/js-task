//1- Create a function that receives an array of 5 elements, and returns an
// array of the even values in the inserted array
//Example: [1,2,3,4,5] => outcome [2,4]
//Example [13,16,100,5022]=> outcome [16,100,5022]


const num=[1,22,5,6,7]
let text=[];
for( let i=0; i<num.length; i++){
    if(num[i] %2===0){
     text+= num[i] ;   }
 }
console.log(text);// The apparent result is correct, but without a array
//-----------------------------------------------------

let array = [10,6,7,3,88];
let evenNumber = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    evenNumber.push(array[i]);
  }
}
console.log(evenNumber);//solve without function
//----------------------------------------------------------

let evenNumbers =function(array){
let even = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    even.push(array[i]);
  }
}
return even;
}
console.log(evenNumbers([10,66,7,15,4]))


//-----------------------------------------------------------------
//2- Create a function that receives an array of string and prints 
//each string on a separate line on the console
//Example: ["sanad", "Loma", "khaled", "nadeen"]=>outcome:
//"sanad"
//"loma"
//"khaled"
//"nadeen"

//solve with for 
const Name=["loma","mohammed","leen","hala"]; 
for (let i = 0; i < Name.length; i++) {
    console.log(Name[i]);
  }

  // Solve by for of but console is not working
  const Names=["loma","mohammed","leen","hala"]; 
let test="";
for(let x of Names){
    test += x + "<br>";
}
console.log(test);
document.getElementById("demo").innerHTML = test;

//solve with forEach method but console is not working
const numbers = ["loma","mohammed","leen","hala"];
let txt = "";
numbers.forEach(myFunction);
function myFunction(value) {
  txt += value + "<br>"; 
}
console.log(txt);
document.getElementById("test").innerHTML = txt;


//-----------------------------------------------------------------
//3- Create a function that receives and object; the object must be as
 //the following shape:
//{
  //  name: #some value,
   // relation: #some value
//}
//where the name can be anything and the value will be one of the followings :
//"mother", "daughter", "son", "father"
//the function checks the relation value inside the object
//1- "mother": it will print "Hey Ma'am" to the console
//2- "father" : it will print "Hello sir" to the console
//3- "son": it will print "Hey kiddy" to the console
//4- "daughter" it will print "Hey angel" to the console


function obj(value) {
    switch (value.relation) {
      case "mother":
        console.log("Hey Ma'am");
        break;
      case "father":
        console.log("Hello sir");
        break;
      case "son":
        console.log("Hey kiddy");
        break;
      case "daughter":
        console.log("Hey angel");
        break;
      default:
        console.log("Invalid relation");
    }
  }
  //console.log()
 


//4- write a function that receives a number and returns the next 10 
//items after the number in an array
//Example: input: 7 => outcome : [8,9,10,11,12,13,14,15,16,17]
//Example : input 33=> outcome:[34,35,36,37,38,39,40,41,42,43]


function tenValue (Num){
    let y=[];
    for(i=1;i<=10;i++){
        y.push(Num +1);
    }
    return y
}
console.log(tenValue(7));//output [8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
//--------------------------------------------------------------------

function pluseOne (Nums){    //solution
    let arrays=[];
    for(let i=0;i<=10;i++){
        arrays.push(Nums+i) // Add the i because each time it will add one to the for
    }
    return arrays
}
console.log(pluseOne(5));
console.log(pluseOne(15));







