namespace Subjects {
  // Extend the Teacher interface using declaration merging
  export interface Teacher {
    experienceTeachingC?: number;
  }

  // Define Cpp class extending from Subject
  export class Cpp extends Subject {
    // Method to get the requirements for Cpp
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    // Method to get the available teacher for Cpp
    getAvailableTeacher(): string {
      if (
        this.teacher.experienceTeachingC &&
        this.teacher.experienceTeachingC > 0
      ) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}
