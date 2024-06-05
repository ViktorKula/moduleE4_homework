function Electrics(name, power) {
    this.name = name;
    this.power = power;
    this.inOnline = false;    // метод, который определяет прибор как включенный в розетку
}

Electrics.prototype.online = function () {
    console.log(this.name + ' on a charge.');
    this.inOnline = true;
}

Electrics.prototype.offline = function () {
    return this.inOnline ? this.power : 0;
}

const laptop = new Electrics('Dell', 5);
const mobile = new Electrics('Iphone', 3);
const lamp = new Electrics('Lamp', 20);

console.log(laptop.offline() + mobile.offline());

laptop.online();
console.log(laptop.offline() + mobile.offline() + lamp.offline());

mobile.online();
console.log(laptop.offline() + mobile.offline() + lamp.offline());

lamp.online();
console.log(laptop.offline() + mobile.offline() + lamp.offline());
