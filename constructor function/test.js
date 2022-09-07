function Car(model){
    this.model=model;
}
Car.prototype.getModel= function(){
    return this.model;
};
var toyota= new Car("fortuner");
console.log(toyota.getModel());
console.log(toyota instanceof Car)