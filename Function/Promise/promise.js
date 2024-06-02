// Promise dibuat dengan konstruktur 'Promise', dimana membuat function sebagai argumen. Function ini memiliki dua paramter yaitu 'resolve' dan 'Reject'.
let promise = new Promise((resolve, reject) => {
    // Asynchronous disini
    let success = true;
    if(success){
        resolve('Operation was success');
    }else{
        reject('Operation failed');
    }
});
// Cara memanggilnya adalah dengan .then method, dimana ada dua callback function : satu untuk 'resolve' satu untuk 'reject'
promise.then((message)=> {
    console.log("Success : " + message);
}).catch((error)=> {
    console.log("Error : " + error);
});

// Cincin Promise
// Promise dapat diulang untuk menampilkan seri dari Asynchronous Operation dalam sequence. Setiap 'then' memanggil returns sebuah new Promise.
let promise2 = new Promise((resolve, reject) => {
    resolve(1);
})

promise2.then((result) => {
    console.log(result);
    return result * 2;
}).then((result) => {
    console.log(result);
    return result * 3;
}).then((result) => {
    console.log(result);
})

// Method '.catch'
let promise3 = new Promise((resolve, reject)=> {
    setTimeout(() => {
        reject('Something went wrong');
    }, 20)
})

promise3.then((result)=> {
    console.log(promise);
}).catch((error)=> {
    console.log('Error : ' + error)
});

// Method '.finally'
// method ini digunakan setelah promise selesai, tidak peduli hasilnya (resolve atau reject);
let promise4 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const result = false;
        if(result){
            resolve('Succed');
        }else{
            reject('Failed');
        }
    },20)
})
promise4.then((result) => {
    console.log('4Success : ' + result);
}).catch((error) => {
    console.log('4Error : ' + error);
}).finally(()=>{
    console.log("4Promise has been settled");
})

// Promise.all
// mengumpulkan semua resolve(jika resolve/reject tidak bisa dua duanya) menjadi sebuah promise baru (array)
let promiseA = Promise.resolve(3);
let promiseB = 34;
let promiseC = new Promise((resolve, reject)=> {
    setTimeout(resolve, 100, 'foo');
})

Promise.all([promiseA, promiseB, promiseC]).then((values)=>{
    console.log(values);
}).catch((error) => {
    console.log(error)
})

// contoh lain
let promisez1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 300, 'First Promise');
})
let promisez2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, 'Second Promise was Failed');
})
let promisez3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 300, 'Third Promise');
})
let promisez4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, 'Second Promise was Failed');
})

Promise.all([promisez1, promisez2, promisez3]).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error)
})

// Promise.race method mengembalikan resolve atau reject selama hasil inputnya resolve atau reject
Promise.race([promisez1, promisez3]).then((result) => {
    console.log(result)
})