function hello(){
    console.log("Hello")
}
hello()
function add(num1,num2){
    return num1+num2
}
let sum=add(2,4);
console.log(sum);
let add1=function(a,b){
    return a+b;
}
console.log(add1(3,5))

let obj={
    nam:"Deep",
    surname:"Patel",
    fun : ()=>{
        return "hello"
    }
}
console.log(obj.nam)
console.log(obj.surname)
console.log(obj.fun)

let obj1={
    nam:"Deep",
    surname:"Patel",
    age:20,
    fun : ()=>{
        return "hello"
    }
}
let arr=[obj,obj1]
console.log(arr[0].nam)
obj.fun()

let {namee}=obj1;
console.log(namee)
