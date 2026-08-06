class Student {
    constructor(id, name, course, marks) {
        this.id = id;
        this.name = name;
        this.course = course;
        this.marks = marks;
    }

    getGrade() {
        if (this.marks >= 90) return "A";
        if (this.marks >= 80) return "B";
        if (this.marks >= 70) return "C";
        if (this.marks >= 60) return "D";
        return "F";
    }
}

class StudentManager {
    constructor() {
        this.students = [];
    }

    addStudent(student) {
        this.students.push(student);
    }

    removeStudent(id) {
        this.students = this.students.filter(student => student.id !== id);
    }

    updateMarks(id, newMarks) {
        const student = this.students.find(student => student.id === id);
        if (student) {
            student.marks = newMarks;
        }
    }

    searchStudent(name) {
        return this.students.filter(student =>
            student.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    getTopper() {
        return this.students.reduce((topper, student) =>
            student.marks > topper.marks ? student : topper
        );
    }

    getAverageMarks() {
        const total = this.students.reduce(
            (sum, student) => sum + student.marks,
            0
        );
        return total / this.students.length;
    }

    displayStudents() {
        console.table(
            this.students.map(student => ({
                ID: student.id,
                Name: student.name,
                Course: student.course,
                Marks: student.marks,
                Grade: student.getGrade()
            }))
        );
    }
}

const manager = new StudentManager();

manager.addStudent(new Student(1, "Rahul", "Java", 92));
manager.addStudent(new Student(2, "Priya", "MERN", 78));
manager.addStudent(new Student(3, "Aman", "Python", 85));
manager.addStudent(new Student(4, "Sneha", "C++", 67));
manager.addStudent(new Student(5, "Rohit", "Java", 95));

manager.displayStudents();

console.log("Average Marks:", manager.getAverageMarks());

console.log("Topper:");
console.log(manager.getTopper());

console.log("Search Result:");
console.log(manager.searchStudent("Priya"));

manager.updateMarks(4, 88);

console.log("After Updating Marks:");
manager.displayStudents();

manager.removeStudent(2);

console.log("After Removing Student:");
manager.displayStudents();