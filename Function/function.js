// ///////////////////////////////// //
//                                   //
// function namaFunction(parameter){ //
//     // Body                       //
// }                                 //
//                                   //
// ///////////////////////////////// //

// Function Declaration
// Function ini bisa dipanggil sebelum di definisikan (hoisting)
greet('zain');
function greet(name){
    console.log(`Hello, ${name}`);
}

// -------------------------------

// Function Expression
// Function ini bukan sebuah hoisting maka tidak bisa dipanggil sebelum didefinisikan
const greet2 = function(name){
    console.log(`Hi, ${name}`);
}
greet2('araihan')

// -------------------------------

// Arrow Function
// Tidak memiliki 'this' sendiri dan bagusnya untuk non-method functions
const greet3 = (name) => `My name is ${name}`;
console.log(greet('Muh'));

// -------------------------------

// Immedietly Invoked Function Expression (IIEF)
// sebuah IIFE adalah sebuah function yang berjalan langsung setelah didefinisikan. Pattern ini lebih sering digunakan untuk membuat local scope untuk menghindari polusi global scope
(function(){
    console.log("This function runs immedietly");
})();

// -------------------------------

// Function with default parameters
function greet4(name = 'stranger'){
    console.log(`Salam Kenal, ${name}`);
}
greet4();
greet4('abdel');

// -------------------------------

// Rest parameters dan Speed operator
function sum(...numbers){
    return numbers.reduce((acc, curr) => acc+curr, 0);
}

console.log(sum(1,2,3,4));

const nums = [3,5,2,23,2];
console.log(sum(...nums));

// -------------------------------

// High - Order Functions
// Function yang memiliki parameter sebuah fungsi
function filter(arr, callback){
    const result = [];
    for(const item of arr){
        if(callback(item)){
            result.push(item);
        }
    }
    return result;
}

const isEven = (num) => num % 2 === 0;
console.log(filter([2,3,4,1,5,2], isEven))

// -------------------------------

// Callback Function
function fetchData(callback){
    setTimeout(()=>{
        callback("Data Fetched!")
    }, 2000);
}

fetchData((messege)=>{
    console.log(messege)
})