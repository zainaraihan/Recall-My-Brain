// Menghitung Rata - Rata Nilai
function averageValue(grades){
    if(grades === 0) return 0;

    let total = 0
    for(grade of grades){
        total += grade;
    }

    return total/grades.length;
}

const a = [45,34,23,45,90,20];
console.log(averageValue(a));

// Memisahkan Nilai Ganjil dan Genap
function separateEvenOdd(array){
    let even = [];
    let odd = [];

    for(arr of array){
        if (arr % 2 === 0){
            even.push(arr);
        }else{
            odd.push(arr);
        }
    }

    return {even, odd};
}

const array = [1,2,3,4,5,90,82,38,43]
const {even, odd} = separateEvenOdd(array);
console.log("Angka Genap :" + even);
console.log("Angka Ganjil :" + odd)