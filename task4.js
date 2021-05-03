function Device(name,power){
    this.name=name
    this.power=power
}

function Lamp(color,weight){
    this.color=color
    this.weight=weight
}
function Leptop(memory,cost){
    this.memory=memory
    this.cost=cost

}
Device.prototype.connect = function(){
    console.log(`${this.name} connected to electricity,and used ${this.power}kW`)
}

Device.prototype.disconnect = function(){
    console.log(`${this.name} disconnected to electricity`)
    this.power = 0
    

}
Device.prototype.checkPower = function () {
    // проверить текущий расход 
    if (this.power) {
        console.log(`${this.name} uses ${this.power} kW electricity`)
    }
    else {
        console.log(`${this.name} is not pluged in`)
    }
};

Lamp.prototype= new Device('Lamp',23)
const lamp = new Lamp('red',300)
lamp.connect()
lamp.checkPower()
lamp.disconnect()
lamp.checkPower()

Leptop.prototype = new Device('Dell',1000)
const leptop = new Leptop(512,10000)
leptop.connect()
leptop.checkPower()
leptop.disconnect()
leptop.checkPower()

