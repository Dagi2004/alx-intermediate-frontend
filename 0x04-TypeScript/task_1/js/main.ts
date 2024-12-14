interface Teacher {
  readonly firstName: string; // Immutable after initialization
  readonly lastName: string; // Immutable after initialization
  fullTimeEmployee: boolean; // Must be defined
  yearsOfExperience?: number; // Optional attribute
  location: string; // Must be defined
  [key: string]: any; // Allow additional attributes
}

const teacher1: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};
const teacher2: Teacher = {
  firstName: "Jane",
  lastName: "Smith",
  fullTimeEmployee: false,
  location: "Los Angeles",
  yearsOfExperience: 10,
  contract: true, // Adding an additional attribute
};
console.log(teacher1);
console.log(teacher2);

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
const printTeacher = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
