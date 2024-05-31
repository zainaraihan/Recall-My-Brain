// Deklarasi array dengan tipe data number
var numbers = [2, 3, 4, 5];
console.log(numbers[1]);
// Deklarasi array dengan tipe data string
var carType = ['supra', 'panamera', '911'];
console.log(carType[2]);
// Tipe data union
var mixedArray = ['aku', 8, 'dia'];
// Array Kosong
var kosong = [];
kosong[0] = 'audi';
kosong[1] = 'RS Q8';
kosong[2] = 2020;
console.log(kosong);
// Loop array tersebut dengan for
for (var i = 0; i < kosong.length; i++) {
    console.log(kosong[i]);
}
// Array dimensi
var matriks = [[1, 2, 3], ['porsche', '911', 'targa']];
for (var j = 0; j < matriks.length; j++) {
    for (var k = 0; k < matriks[j].length; k++) {
        console.log(matriks[j][k]);
    }
}
