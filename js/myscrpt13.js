function funcA() {
    console.log('AAA');
}

funcA()

function funcB() {
    console.log(111);
    return 123;
    console.log(222);
    return 345;
    console.log(333);
    return 789;
}
console.log( funcB());

let num = funcB()

let x = function(){
    console.log('SAU');
}

x()

let y = () =>{
    console.log('IOT');
    return 999
}

console.log(y());

function funcC(x,y) {
    let z = x * 3
    console.log( y(z) );
    
}

funcC(10,(wow) => {
    console.log(wow * 3);
    return wow + wow + wow
} )
 
funcC(100 , function sau(x){
    return x ** 2  
})
