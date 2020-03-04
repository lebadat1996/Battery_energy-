let Battery = function (energy) {
        this.energy=energy;
        //dat gia tri nang luong
        this.setEnergy=function (energy) {
            this.energy = energy;
        };
        // tra ve gia tri nang luong
        this.getEnergy=function () {
            return this.energy
        };
        //nag luong ping giam
        this.decreaseEnergy=function () {
            if (this.energy>0){
                this.energy--;
            }
        }
};
let FlashLamp = function () {

    this.setBattery = function (battery) {
        this.battery = battery;
    };

    this.getBatteryInfo = function () {
        return this.battery.getEnergy();
    };

    this.light = function () {
        if(this.status){
            alert("Lighting");
        } else {
            alert("Not lighting");
        }
    };

    this.turnOn = function () {
        this.status = true;
        this.battery.decreaseEnergy();
    };

    this.turnOff = function () {
        this.status = false;
    }
};
let battery = new Battery(100);
battery.setEnergy(98);
let flashLamp = new FlashLamp();
flashLamp.setBattery(battery);
document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");
flashLamp.light();

document.write("Turn on<br/>");
flashLamp.turnOn();
flashLamp.light();
document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");

document.write("Turn off<br/>");
flashLamp.turnOff();
flashLamp.light();

