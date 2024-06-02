// Function dengan parameted dan tipe returnnya
function add(a, b) {
    return a + b;
}
console.log(add(2, 4));
// Optional Parameter
// Ini berarti parameter 'name' dengan '?' yang berarti optional, dan functionnya ini tidak mengambalikan apapun ('void');
function greeting(name) {
    if (name) {
        console.log("Hello, ".concat(name, "!"));
    }
    else {
        console.log("Hello World!");
    }
}
greeting('zain');
// Default Parameter
function greeting2(name) {
    if (name === void 0) { name = 'Dunia!'; }
    console.log("Hello ".concat(name));
}
greeting2();
// Arrow Function
// Arrow function dalam typescrip juga memiliki tipe anotasi
var multipy = function (x, z) {
    return x * z;
};
console.log(multipy(4, 3));
var addd = function (a, b) { return a + b; };
var substract = function (a, b) { return a - b; };
console.log(addd(5, 4));
console.log(substract(11, 5));
function double(value) {
    if (typeof value === "string") {
        return value + value;
    }
    else if (typeof value === "number") {
        return value * 2;
    }
}
console.log(double("hi"));
// buat fungsi yang mengandung callback
function greetUser(name, callback) {
    var message = "Hello ".concat(name);
    callback(message);
}
greetUser('zain', function (msg) {
    console.log(msg);
});
function addf(a, b, callback) {
    var result = a + b;
    callback(result);
}
addf(2, 4, function (result) {
    console.log("The result is ".concat(result));
});
function filterArray(arr, callback) {
    var filteredArray = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var value = arr_1[_i];
        if (callback(value)) {
            filteredArray.push(value);
        }
    }
    return filteredArray;
}
var result = filterArray([3, 4, 5, 2, 3, 5], function (value) { return value > 4; });
console.log(result);
function geet(name, callback) {
    setTimeout(function () {
        var result = "Hello, ".concat(name);
        callback(result);
    }, 1000);
}
geet('zain', function (msg) {
    console.log(msg);
});
function fetchData(url, success, error) {
    // Simulate an API cell
    setTimeout(function () {
        if (url === 'valid.url') {
            success('Data Fetched Successfully');
        }
        else {
            error(new Error('Failed to fetch data'));
        }
    }, 1000);
}
fetchData('valid.url', function (response) {
    console.log(response);
}, function (error) {
    console.log(error.message);
});
