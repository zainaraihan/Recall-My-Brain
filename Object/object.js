// Apa itu object?
// Dalam javascript, objek adalah kumpulan key. Kumpulan key(disebut properties) yang sebuah string, dan isi valuenya bisa berupa tipe apa saja, termasuk object, array, function dll.

// ***********************************************
// CARA MENULIS OBJECT
// Object literal notation.
let person = {
    firtsName: 'Zain',
    lastName: 'Araihan',
    age: 30,
    sayHello: function(){
        console.log("Hello : " + this.firtsName);
    }
}

// 'new Object()' Syntax
let person2 = new Object();
person2.firtsName = 'Zain';
person2.lastName = 'Araihan';
person2.age = 30;
person2.sayHello = function(){
    console.log("Hi " + this.firtsName);
}

// Consturctor Function
// menggunakan huruf pertama kappital
// propertiesnya dipanggil dengan this.
function Person3(firtsName, lastName, age){
    this.firtsName = firtsName;
    this.lastName = lastName;
    this.age = age;
    this.sayHello = function(){
        console.log("Apa kabar " + this.firtsName);
    }
}

// Bisa dipanggil berulang-ulang
let zain = new Person3("Zain", "Araihan", 30);
let rehan = new Person3("Muhamad", "Rehan", 20);

// ***********************************************

// ***********************************************

// MENGAKSES OBJECT

// Dot Nation
console.log(person.firtsName);
// Bracket Notion
console.log(zain["lastName"]);

// ***********************************************

// ***********************************************

// MENAMBAH DAN MENGEDIT PROPERTI DALAM OBJECT
person.lastName = "Joy";
console.log(person.lastName);
rehan['age'] = 39;
console.log(rehan.age);

// ***********************************************

// ***********************************************

// MENGHAPUS PROPERTI
console.log(person2.age);
delete person2.age;
console.log(person2.age);

// ***********************************************

// ***********************************************

// METHOD DALAM OBJECT

let calculator = {
    add : function(a, b){
        return a+b;
    },
    subtract : function(a, b){
        return a-b;
    }
}

console.log(calculator.add(3, 5));
console.log(calculator.subtract(9, 3));