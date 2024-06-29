class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    // Getter; 'Special Method' yang digunakan untuk mengambil nilai pada property pada class Javascript;
    get area(){
        return this.calcArea()
    }

    // Method
    calcArea(){
        return this.height * this.width;
    }

    *getSides() {
        yield this.height;
        yield this.width;
        yield this.height;
        yield this.width;
    }

}

const square = new Rectangle(10,20);

console.log(square.area);
console.log([...square.getSides()]);