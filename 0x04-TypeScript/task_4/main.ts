import { Subjects } from "./Teacher";
import { Cpp } from "./Cpp";
import { React } from "./React";
import { Java } from "./Java";

// Create teacher objects
const teacher1: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 5,
};
const teacher2: Subjects.Teacher = {
  firstName: "Jane",
  lastName: "Smith",
  experienceTeachingReact: 3,
};
const teacher3: Subjects.Teacher = {
  firstName: "Alice",
  lastName: "Johnson",
  experienceTeachingJava: 0,
};

// Create subject instances
const cppSubject = new Cpp();
const reactSubject = new React();
const javaSubject = new Java();

// Assign teachers to subjects
cppSubject.setTeacher(teacher1);
reactSubject.setTeacher(teacher2);
javaSubject.setTeacher(teacher3);

// Get requirements and available teachers for each subject
console.log(cppSubject.getRequirements()); // "Here is the list of requirements for Cpp"
console.log(cppSubject.getAvailableTeacher()); // "Available Teacher: John"

console.log(reactSubject.getRequirements()); // "Here is the list of requirements for React"
console.log(reactSubject.getAvailableTeacher()); // "Available Teacher: Jane"

console.log(javaSubject.getRequirements()); // "Here is the list of requirements for Java"
console.log(javaSubject.getAvailableTeacher()); // "No available teacher"
