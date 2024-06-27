function Car(name, NIK, color, vinNum){
    this.name = name;
    this.NIK = NIK;
    this.color = color;
    this.vinNum = vinNum;
}

function Garage(){
    this.cars = [];
}

Garage.prototype.addCar = function(car){
    this.cars.push(car);
}

Garage.prototype.showAll = function(){
    const cars = this.cars;
    console.log('Our Cars : ');
    cars.forEach(car => {
        console.log(`${car.name} ${car.NIK}`)
    })
}

const car1 = new Car('Ferrari 488 Pista', 2020, 'yellow', '12345678910');
const car2 = new Car('Ferrari 458', 2014, 'yellow', '12345678911');
const car3 = new Car('Mclaren 765lt', 2022, 'yellow', '12345678912');
const car4 = new Car('Porsche 911 Turbo S', 2020, 'yellow', '12345678913');

const cars = [car1,car2,car3,car4];

const garage = new Garage();
for(let i = 0; i < cars.length; i++){
    garage.addCar(cars[i]);
}

garage.showAll()


