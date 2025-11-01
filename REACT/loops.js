for(let i=0;i<5;i++){
    console.log(i);
}
let arr=[10,20,30,40,50];
for(let num of arr){
    console.log(num);
}
let i=3;
while(i<10){
    console.log(i);
    i=i+1;
}

let newarr=arr.map(neww=>neww+10);
console.log(newarr);

let newarr2=arr.map(function(neww){
    return neww*20;
})
console.log(newarr2);

let filterd=arr.filter(num => num>20);
    console.log(filterd);


let readd=arr.reduce((sum,current) => sum+current,100);
    console.log(readd);

