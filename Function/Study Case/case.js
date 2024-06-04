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
function seperateNumbers(array){
    let even = [];
    let odd = [];

    for(arr of array){
        if(arr % 2 === 0){
            even.push(arr); 
        }else{
            odd.push(arr);
        }
    }

    return {even, odd};
}

const num = [32,56,345,23,54,34,51,65,97];
const {even, odd} = seperateNumbers(num);
console.log('Angka Genap : ' + even);
console.log('Angka Ganjil : ' + odd);