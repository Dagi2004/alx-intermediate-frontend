// DirectorInterface: Defines methods for a Director
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface: Defines methods for a Teacher
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implements DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class implements TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Function to create an employee (either a Director or Teacher)
function createEmployee(
  salary: number | string
): DirectorInterface | TeacherInterface {
  // If salary is a number and less than 500, return Teacher; otherwise, return Director
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

function isDirector(
  employee: DirectorInterface | TeacherInterface
): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Function to execute work based on employee type
function executeWork(employee: DirectorInterface | TeacherInterface): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks()); // If employee is a Director, call workDirectorTasks
  } else {
    console.log(employee.workTeacherTasks()); // If employee is a Teacher, call workTeacherTasks
  }
}

type Subjects = "Math" | "History";
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  }
  return "";
}
