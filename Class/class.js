// Defining Class
// Class merupakan 'special function', dan sama seperti function yang bisa di tuliskan 'Function Expression' dan 'Function Declaration', class juga bisa dituliskan dengan 'Class Declaration' dan 'Class Expression'.

// Declaration
class Rectangle{
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

// Expression; Class nya anonymous tapi ditugaskan menjadi sebuah variable
const Rectangle2 = class {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
}

// Expression; Class nya memiliki nama sendiri.
const Rectangle3 = class Rectangle4{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
}

// Static Methods and Fields
// Keyword "Static" mendefinisikan static method atau field untuk sebuah class. Static properties (Method dan Fields) mendefinisikan Class itu sendiri daripada setiap instance.
class Point {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    static displayName = "Point";
    displayName2 = "Point 2";
    static distance(a, b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5,5);
const p2 = new Point(10,10);
console.log(p1.displayName) // Undifined (karena static)
console.log(p1.displayName2)
console.log(p1.distance);
console.log(p2.displayName); // Undifined (karena static)
console.log(p2.displayName2);
console.log(p2.distance)

console.log(Point.displayName); // "Point" (karena static merupakan special keyword untuk method yang hanya bisa dipanggil untuk class itu sendiri)
console.log(Point.distance(p1, p2))

// Field Declarations
// 'Class Fields' sama seperti object properties, bukan variables, jadi jangan menggunakan keywords seperti 'const' untuk mendeklarasikannya. 'public' dan 'private' juga seharusnya tidak digunakan juga. 
class Rectangle5{
    height = 0;
    width;
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
}

// Private Properties
// Itu akan error untuk mereferensikan 'private fields' diluar body class.
class Rectangle4 {
    #height = 0;
    #width;
    constructor(height, width){
        this.#height = height;
        this.#width = width;
    }
}

// Inheritance
// 'extends' keyword digunakan pada class declaration atau class expression untuk membuat class sebagi anak dari construcor yang lain (baik class atau function)
class Animal{
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal{
    constructor(name){
        super(name); //call the super class constructor and pass in the name parameter;
    }
    speak(){
        console.log(`${this.name} barks`);
    }
}

const a = new Animal('Mitzie');
const d = new Dog('Mitzie');

a.speak();
d.speak();

// Contoh lain
// jika ingin memanggil method yang ada pada parents nya sebelum menggunakan this
class Cat{
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} make a noises`);
    }
}

class Lion extends Cat{
    speak(){
        super.speak();
        console.log(`${this.name} roars`)
    }
}

const l = new Lion('Komeng');
l.speak();