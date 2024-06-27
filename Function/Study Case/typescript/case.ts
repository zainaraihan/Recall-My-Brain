// Menghitung rata rata nilai
function averageValue(grades: number[]) {
    if (grades.length === 0) {
        return 0;
    };


    let total: number = 0;
    for (let grade of grades) {
        total += grade
    }

    return total / grades.length;
}

const vl: number[] = new Array(3, 5, 6, 2, 4, 6);
console.log(averageValue(vl))