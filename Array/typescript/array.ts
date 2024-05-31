// Deklarasi array dengan tipe data number
let numbers: number[] = [2, 3, 4, 5];
console.log(numbers[1]);

// Deklarasi array dengan tipe data string
let carType: string[] = ['supra', 'panamera', '911'];
console.log(carType[2]);

// Tipe data union
let mixedArray: (number | string)[] = ['aku', 8, 'dia'];

// Array Kosong
let kosong: any[] = [];
kosong[0] = 'audi';
kosong[1] = 'RS Q8';
kosong[2] = 2020;

console.log(kosong);

// Loop array tersebut dengan for
for (let i: number = 0; i < kosong.length; i++) {
    console.log(kosong[i]);
}

// Array dimensi
let matriks: any[][] = [[1, 2, 3], ['porsche', '911', 'targa']];
for (let j: number = 0; j < matriks.length; j++) {
    for (let k: number = 0; k < matriks[j].length; k++) {
        console.log(matriks[j][k]);
    }
}