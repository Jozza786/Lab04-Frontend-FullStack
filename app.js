class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    getGrade() {
        return this.marks >= 80 ? "A" :
               this.marks >= 70 ? "B" :
               this.marks >= 50 ? "C" : "F";
    }
}

let students = [
    new Student("Jozza", 85),
    new Student("Sara", 72),
    new Student("Ahmed", 45),
    new Student("Abbas", 91),
    new Student("Ali", 58),
    new Student("Zara", 38)
];

//  Pass / Fail
students.forEach(student => {
    let result = student.marks >= 50 ? "Pass" : "Fail";

    console.log(
        student.name + ": " +
        student.marks + " -> " +
        result
    );
});

//  passing students
let passingStudents = students.filter(student => student.marks >= 50);

let passingNames = passingStudents.map(student => student.name);

console.log("Passing students:", passingNames);

//  class average
let totalMarks = students.reduce((sum, student) => {
    return sum + student.marks;
}, 0);

let classAverage = totalMarks / students.length;

console.log("Class average:", classAverage);

// Sorting
let sortedStudents = [...students].sort((a, b) => b.marks - a.marks);

//  top scorer
let [topStudent] = sortedStudents;

console.log("Top scorer:", topStudent.name, "(" + topStudent.marks + ")");