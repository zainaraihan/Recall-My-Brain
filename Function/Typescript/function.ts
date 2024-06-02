// Function dengan parameted dan tipe returnnya
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(2, 4));

// Optional Parameter
// Ini berarti parameter 'name' dengan '?' yang berarti optional, dan functionnya ini tidak mengambalikan apapun ('void');
function greeting(name?: string): void {
    if (name) {
        console.log(`Hello, ${name}!`);
    } else {
        console.log(`Hello World!`);
    }
}
greeting('zain');

// Default Parameter
function greeting2(name: string = 'Dunia!') {
    console.log(`Hello ${name}`)
}
greeting2()

// Arrow Function
// Arrow function dalam typescrip juga memiliki tipe anotasi
const multipy = (x: number, z: number): number => {
    return x * z;
}
console.log(multipy(4, 3));

// Function Types
type mathOperation = (a: number, b: number) => number;
const addd: mathOperation = (a, b) => a + b;
const substract: mathOperation = (a, b) => a - b;
console.log(addd(5, 4));
console.log(substract(11, 5));

// Function Overloading
// Typescript mendukung Function Overloading, dimana bisa memiliki multiple function signatures dalam function yang sama;
function double(value: string): string;
function double(value: number): number;

function double(value: any): any {
    if (typeof value === "string") {
        return value + value;
    } else if (typeof value === "number") {
        return value * 2;
    }
}

console.log(double("hi"));

// ----------------------------------
// Callback
// Contoh Sederhana Callback

// definisikan tipe callbacknya
type Callback = (msg: string) => void;
// buat fungsi yang mengandung callback
function greetUser(name: string, callback: Callback) {
    const message = `Hello ${name}`;
    callback(message);
}

greetUser('zain', (msg: string) => {
    console.log(msg)
})

// Callback dengan multiple parameter
type MatOperation = (result: number) => void;

function addf(a: number, b: number, callback: MatOperation) {
    const result = a + b;
    callback(result);
}

addf(2, 4, (result: number) => {
    console.log(`The result is ${result}`);
})

// Callback with return type
type FilterCallback = (value: number) => boolean;

function filterArray(arr: number[], callback: FilterCallback): number[] {
    const filteredArray: number[] = [];
    for (const value of arr) {
        if (callback(value)) {
            filteredArray.push(value);
        }
    }
    return filteredArray;
}

const result = filterArray([3, 4, 5, 2, 3, 5], (value: number) => value > 4);
console.log(result);

// Asynchronous Callback
type AsyncCallback = (massage: string) => void;

function geet(name: string, callback: AsyncCallback) {
    setTimeout(() => {
        const result = `Hello, ${name}`;
        callback(result);
    }, 1000)
}

geet('zain', (msg: string) => {
    console.log(msg);
})

// Callback untuk dipakai ulang
type SuccessCallbacks = (response: string) => void;
type ErrorCallbacks = (error: Error) => void;

function fetchData(url: string, success: SuccessCallbacks, error: ErrorCallbacks) {
    // Simulate an API cell
    setTimeout(() => {
        if (url === 'valid.url') {
            success('Data Fetched Successfully');
        } else {
            error(new Error('Failed to fetch data'));
        }
    }, 1000)
}

fetchData('valid.url', (response: string) => {
    console.log(response);
}, (error: Error) => {
    console.log(error.message)
});
