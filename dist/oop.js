"use strict";
class person {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    greet() {
        console.log(`hi, nama saya ${this.name} rumah 
                saya di kota ${this.address}`);
    }
}
class employe extends person {
    constructor(name, address, jobTittle) {
        super(name, address);
        this.jobTittle = jobTittle;
    }
    work() {
        console.log(`aku ${this.name}bekerja sebagai
                ${this.jobTittle}`);
    }
}
let employe1 = new employe('Dzakwan', "Brebes", 'Pedagang sembako');
employe1.greet();
employe1.work();
