namespace Subjects {
  // Extend the Teacher interface using declaration merging
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  // Define React class extending from Subject
  export class React extends Subject {
    // Method to get the requirements for React
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    // Method to get the available teacher for React
    getAvailableTeacher(): string {
      if (
        this.teacher.experienceTeachingReact &&
        this.teacher.experienceTeachingReact > 0
      ) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}
