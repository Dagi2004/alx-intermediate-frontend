namespace Subjects {
  // Extend the Teacher interface using declaration merging
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  // Define Java class extending from Subject
  export class Java extends Subject {
    // Method to get the requirements for Java
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    // Method to get the available teacher for Java
    getAvailableTeacher(): string {
      if (
        this.teacher.experienceTeachingJava &&
        this.teacher.experienceTeachingJava > 0
      ) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}
