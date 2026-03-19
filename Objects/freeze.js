let student = {
    name: "Lilit",
    age: 20
};
Object.freeze(student);
student.age = 25;       
student.city = "Yerevan"; 
delete student.name;   

console.log(student);