class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getDescribe(){
        return`${this.name},${this.age} years old.`;
    }
};

let person1 =new Person('joy', 25);
console.log(person1.getDescribe());