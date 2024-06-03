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
console.log(averageValue(a))