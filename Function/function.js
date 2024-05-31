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
// Dalam Javascript, callback function adalah function yang digunakan sebagai argumen di dalam function lain dan dieksekusi ketika beberapa operasi telah di selesaikan. Callback - Callback biasanya digunakan untuk menghandle Operasi Asynchronous seperti network request, file I/O, timers dan events.
function fetchData(callback){
    setTimeout(()=>{
        callback("Data Fetched!")
    }, 1000);
}

fetchData((messege)=>{
    console.log(messege)
})

// // Simple Callback Function
function doSomething(callback){
    console.log('Doing Something . . .');
    callback();
}

function Something(){
    console.log('Done!');
}

doSomething(Something);

// // Asynchronous Callback dengan setTimeout
function fetchData2(callback){
    setTimeout(()=> {
        const data = 'Data Selesai di Fetch!';
        callback(data);
    }, 1000);
}

function handleData(data){
    console.log(data);
}

fetchData2(handleData);

// // Error First Callback
function doTask(callback){
    const error = false;
    const result = "Task Completed";

    setTimeout(() => {
        if(error){
            callback("An Error Occured", null);
        }else{
            callback(null, result);
        }
    }, 1000)
}

doTask(function(err, result){
    if(err){
        console.log(err);
    }else{
        console.log(result)
    }
})

// // Nested Callback (Callback Hell)
function firstTask(callback){
    setTimeout(()=> {
        console.log('First Data Completed');
        callback();
    }, 1000)
}
function secondTask(callback){
    setTimeout(()=> {
        console.log('Second Data Completed');
        callback();
    },1000)
}
function thirdTask(callback){
    setTimeout(()=> {
        console.log('Third Data Completed');
        callback();
    }, 1000)
}

firstTask(function(){
    secondTask(function(){
        thirdTask(function(){
            console.log('All Tasks Completed')
        })
    })
})

// Menghindari Callback Hell dengan Promise

function taskPertama(){
    return new Promise((resolve) => {
        setTimeout(()=> {
            console.log("Task Pertama Selesai");
            resolve();
        }, 1000)
    })
}

function taskKedua(){
    return new Promise((resolve)=> {
        setTimeout(()=>{
            console.log("Task Kedua Selesai");
            resolve();
        },1000)
    })
}

function taskKetiga(){
    return new Promise((resolve)=> {
        setTimeout(()=>{
            console.log("Task Ketiga Selesai");
            resolve();
        },1000)
    })
}

taskPertama()
        .then(taskKedua)
        .then(taskKetiga)
        .then(() => {
        console.log('Semua task telah selesai')
})