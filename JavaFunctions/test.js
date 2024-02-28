//arrow Function with arguments
const add = (a,b) => {
    console.log(a+b);
}
add(2,2)


//Using Arguments keywords
//Doesnt work with arrow functions
function addNos(){
    console.log(arguments)
}
addNos(2,3,4,5,5)

//Using Spread Operator
function addNum(...check){
    let ans = 0;
    for(let i=0;i<check.length;i++){
        ans = ans + check[i];
    }
    console.log(ans);
    //console.log(check[check.length+1]);
}
addNum(2,3,4)

//Using CallBack Function 

function addnum(a,b,cb){
    let res = a+b;
    cb(res);
}
addnum(3,6, (res) => console.log(res))

        //or
addnum(3,6,function cb(val) { console.log(val) });
    
        //or separete function
function cb(val){
   console.log(val);
}
addnum(3,6,cb);
 
//OR

function addnums(a,b,cb){
    let res = a+b;
    cb(res);
    return ()=>{console.log(res)}
}
let res = addnums(2,3,()=>{})
res();


//We are going to study:
//.forEach() .map().filter().find().findIndex().slice().splice()

//Array High Order Function
const students = ["Ram","Shyam","Ramesh"]

function print(val)
{
    console.log(val);
}
students.forEach(print);
//or

console.log("OR");


students.forEach((val)=>{console.log(val)})

newArray=[]
students.forEach((val)=>{newArray.push(val)})
console.log(newArray)
    
//using Map
numbers=[2,3,4]
function double(res){
    return res*2;
}
let newArr = numbers.map(num=>double(num))  //forEach here returns undefined here
console.log(newArr)


let arr = numbers.filter((num) => num%2==0)
console.log(arr)
let arr1 = numbers.slice(0,2)
console.log(arr1)

numbers=[1,2,3,4,5]
let arr2 = numbers.splice(0,1)
console.log(arr2)
console.log(numbers)

//DOM manipulator using Query Selector/All using tag name,id and class