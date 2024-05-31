// Array Literal
let fruits = ['grappe', 'apple', 'mango'];
console.log(fruits[2]);

// Array Constructor
let cars = new Array();
let cars2 = new Array(3);
let cars3 = new Array('volvo', 'toyota', 'honda');
console.log(cars3[2]);

// Buat array kosong lalu isi dengan array baru
let vgs = [];
vgs[0] = 'onion';
vgs[1] = 'carrot';
vgs[2] = 'tomato';
console.log(vgs[2]);

// -----------------------------------------------

// Properti Array dan Method Array

// 1. .push() menambah satu elemen di belakang
cars3.push('nissan');
console.log(cars3[cars3.length-1]);

// 2. .pop() menghilangkan satu elemen di belakang
cars3.pop();
console.log(cars3);

// 3. .shift() menghapus elemen pertama di dalam array
cars3.shift();
console.log(cars3)

// 4. .unshift() menambah elemen dibagian depan
cars3.unshift('porsche');
console.log(cars3);

// 5. .indexOf() menampilkan elemen keberapa
console.log(cars3.indexOf('porsche'));

// 6. .splice(index ke berapa, mau hapus berapa(optional), yang mau ditambahkan(optional)) menambah atau menghilangkan elemen di array
cars3.splice(1, 0, 'mitsubishi');
console.log(cars3)
console.log('jika 0 nya diganti menjadi 1 maka toyota akan hilang dalam array ini ')

// 7. .slice(mulai, dan berapa) membuat array baru dari array yang ada
let cars4 = cars3.slice(1,3);
console.log(cars3);
console.log(cars4)

// 8. .forEach(function (item, index)) mengeluarkan semua array
cars3.forEach(function(item, index){
    console.log(index, item)
})

// -----------------------------------------------

// Looping Array

// 1. For
for(let i = 0; i < cars3.length; i++){
    console.log(cars3[i]);
}

// 2. For..Of
for(let fruit of fruits){
    console.log(fruit)
}

// 3.F ForEach
cars3.forEach(function(car){
    console.log(car)
})

// -----------------------------------------------

// Array Dimension

let matrix = [
    [1,2,3],
    [4,3,5],
    [
        ['aku', 'dia', 'kamu'],
        ['senin', 'selasa', 'rabu'],
        ['maret', 'juni', 'januari']
    ]
]

console.log(matrix);
console.log(matrix[2][1][2]);

for(let j = 0; j < matrix.length; j++){
    for(let k = 0; k < matrix[j].length; k++){
        
        // console.log(typeof matrix[j][k])
        if(typeof matrix[j][k] === "object"){
            for(let l = 0; l< matrix[j][k].length; l++){
                console.log(matrix[j][k][l])
            }
        }else{
            console.log(matrix[j][k]);
        }
    }
}