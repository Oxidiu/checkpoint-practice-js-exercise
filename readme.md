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


Create a class called Person, that has two properties, _name and _age.

Create another class called Student, which has an extra property called "_academy"
Write getters and setters for all the properties.

In the class Student:
 - write a method called "signup", which receives a callback. This callback function just returns "Develhope". The "signup" method returns a promise, that resolves with "Congrats, you joined ACADEMY_NAME!" after 2 seconds, where ACADEMY_NAME is the string that the callback will return. Use .then() and console.log the string we get when the promise resolves.

Call this signup method at least once, for a student.

Create another array called "students". For each person, create a new Student object, with the proper _name, _age, and the "_academy" will be the string we get from that previous callback. So if you were to change the string in the callback function to "Ivy League University", it'll also change what we have in our _academy property.

Make a class called DataProcess, and:
 - a  static method called studentInfo(), use .map and template strings, and create for each student the string "Sandra, aged 34, is as student of academy Develhope."
 - a static method called getAdults(), which returns all the students with age > 18. Use a filter()
 - a static method called getAverageAge(), that calculates the average age of all students. Use reduce()


Convert the array of Students to JSON, and then convert the json back to regular javascript.


