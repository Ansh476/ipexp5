class PersonClass {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    printDetails = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
    }
}

const person1 = new PersonClass("Ansh", 20, "Male");
person1.printDetails(); 

function PersonConstructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    this.printDetails = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
    }
}

const person2 = new PersonConstructor("Sakshi", 25, "Female");
person2.printDetails();  


const personLiteral = {
    name: "Rahul",
    age: 40,
    gender: "Male",

    printDetails: function() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
    }
};

personLiteral.printDetails(); 

const Personobjcons = new Object();
    Personobjcons.name="Arnold"
    Personobjcons.age=50;
    Personobjcons.weight=80;
    Personobjcons["height"]=6.3
    Personobjcons.getFunction = function(){
        return "Name: "+this.name+" Age: "+this.age+" Weight: "+this.weight+" Height: "+this.height;
    }

console.log(Personobjcons.getFunction());
Personobjcons.location="Mumbai"
console.log(Personobjcons.location);


const nonMemberArrowFunction = (name, age, gender) => {
    console.log(`Name: ${name}, Age: ${age}, Gender: ${gender}`);
}

nonMemberArrowFunction("Karan", 27, "Female");  
