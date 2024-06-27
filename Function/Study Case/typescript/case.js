// Menghitung rata rata nilai
function averageValue(grades) {
    if (grades.length === 0) {
        return 0;
    }
    ;
    var total = 0;
    for (var _i = 0, grades_1 = grades; _i < grades_1.length; _i++) {
        var grade = grades_1[_i];
        total += grade;
    }
    return total / grades.length;
}
var vl = new Array(3, 5, 6, 2, 4, 6);
console.log(averageValue(vl));
