const persons = [
    { name: 'Paul', age: 16 },
    { name: 'George', age: 17 },
    { name: 'Lucas', age: 21 },
    { name: 'Marco', age: 32 },
    { name: 'Peter', age: 18 },
    { name: 'Carl', age: 13 },
    { name: 'Simon', age: 24 },
    { name: 'Mark', age: 15 },
    { name: 'Sandra', age: 34 },
    { name: 'Alice', age: 28 }
];
const callback = () => {
    return "Ivy League University"
}
class Person {
    constructor(name, age) {
        this._name = name,
        this._age = age
    }
    get name() {
        return this._name
    }
    set name(name) {
        this._name = name
    }
    get age() {
        return this._age
    }
    set age(age) {
        this._age = age
    }
}
class Student extends Person{
    constructor(name, age, academy) {
        super(name, age),
        this._academy = academy
    }
    get academy() {
        return this._academy
    }
    set academy(academy) {
        this._academy = academy
    }
    signup(callback) {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`Congrats, you joined ${callback()}!`)
            }, 2000)
            
        })
        promise.then((msg) => console.log(msg))
    }

    
}

const student1 = new Student("Oxid", 26, "ULBS")
student1.signup(callback)

const students = []
for (let i = 0; i < persons.length; i++){
    students.push(new Student(persons[i].name, persons[i].age, callback()))
}
console.log("Students array:")
console.log(students)

class DataProcess {
    static studentInfo() {
        return students.map((student) => `${student.name}, aged ${student.age}, is a student of academy ${student.academy}.`)
    }
    static getAdults() {
        return students.filter((student) => student.age > 18)
    }
    static getAverageAge() {
        return students.reduce((sum, student) => sum + student.age, 0) / students.length
    }
}

console.log("Method studentInfo:")
const studentInfo = DataProcess.studentInfo()
console.log(studentInfo)

console.log("Over 18:")
const adults = DataProcess.getAdults()
console.log(adults)

console.log("Average students age")
const averageAge = DataProcess.getAverageAge()
console.log(averageAge)

console.log("Converted to JSON:")
const convertedToJSON = JSON.stringify(students)
console.log(convertedToJSON)

console.log("Converted from JSON:")
const convertedFromJSON = JSON.parse(convertedToJSON)
console.log(convertedFromJSON)