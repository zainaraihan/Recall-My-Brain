// Async Function
// Sebuah async function di deklarasikan dengan 'async', dan hasilnya pasti Promise
async function myAsyncFunction(){
    return 'Hello World!';
}

// Await Operator
// Operaor Await digunakan dalam Async Function untuk menjeda eksekusi sampai Promise lancar(resolved or rejected), dan untuk mengembealikan hasil resolved value.
async function example(){
    const result = await myAsyncFunction();
    console.log(result);
}

example();

// Error Handling
// Bisa menggunakan 'try catch' blocks untuk menghandle erron pada async function
async function exampleWithErrorHandling(){
    try{
        const result = await myAsyncFunction();
        console.log(result)
    }catch{
        console.error('An error occurred', error)
    }
}
exampleWithErrorHandling();

// Using async/await with Promises
function fetchUser(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({name: 'zain', age: 20});
        }, 1000);
    });
}

async function getUser(){
    const user = await fetchUser();
    console.log(user);
}

getUser();

// Concurrent Execuution
async function fetchUserData(){
    const [user, posts] = await Promise.all([fetchUser(), example()]);
    console.log(user, posts)
}
fetchUserData();

// ----------------------------
function fetchData2(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data Fetched Succesfully!');
        }, 2000);
    })
}

function fetchDataAndLog(){
    console.log('Fetching Data . . .');
    fetchData2();
}

fetchDataAndLog();

// ------------------------------------
// Contohnya seperti ini, si 'await' ini untuk menjeda agar si code di eksekusi dulu, jika tidak menggunakan async/await maka si code akan ditinggalkan dan lanjut ke code berikutnya

function a(nama){
    return new Promise((resolve) => {
        setTimeout(() => {
        const done = `Kumaha, ${nama}?`;
        resolve(done);
    }, 3000)
    })
    
}

async function nyapa(){
    console.log('Nanya Kabar')
    const hasil = await a('zain');
    console.log(hasil);
    console.log('Hehehe');
}

nyapa();