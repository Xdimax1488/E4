class Device {
    constructor(name, power) {
        this.name = name
        this.power = power
    };
    connect (){
        console.log(`${this.name} connected to electricity,and used ${this.power}kW`)
    };
    disconnect (){
        console.log(`${this.name} disconnected to electricity`)
        this.power = 0
    };
    checkPower () {
        // проверить текущий расход 
        if (this.power) {
            console.log(`${this.name} uses ${this.power} kW electricity`)
        }
        else {
            console.log(`${this.name} is not pluged in`)
        }
    };
}

class Lamp extends Device{
    constructor(color,weight,name, power){
        super(name,power);
        this.color=color
        this.weight=weight

    }
}

class Leptop extends Device{
    constructor(memory,cost,name, power){
        super(name,power);
        this.memory=memory
        this.cost=cost

    }
}


const lamp = new Lamp('red',300,'Lamp',23)
lamp.connect()
lamp.checkPower()
lamp.disconnect()
lamp.checkPower()


const leptop = new Leptop(512,10000,'Dell',1000)
leptop.connect()
leptop.checkPower()
leptop.disconnect()
leptop.checkPower()

