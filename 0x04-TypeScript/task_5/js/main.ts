// task_5/js/main.ts

// Define the MajorCredits interface
interface MajorCredits {
  credits: number;
  brand: string; // unique identifier
}

// Define the MinorCredits interface
interface MinorCredits {
  credits: number;
  brand: string; // unique identifier
}

// Function to sum MajorCredits
function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "Major", // can be any unique identifier for MajorCredits
  };
}

// Function to sum MinorCredits
function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "Minor", // can be any unique identifier for MinorCredits
  };
}

// Example Usage:

const majorSubject1: MajorCredits = { credits: 3, brand: "Major" };
const majorSubject2: MajorCredits = { credits: 4, brand: "Major" };

const minorSubject1: MinorCredits = { credits: 2, brand: "Minor" };
const minorSubject2: MinorCredits = { credits: 1, brand: "Minor" };

// Summing credits of MajorSubjects
const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
console.log(
  `Total Major Credits: ${totalMajorCredits.credits} (Brand: ${totalMajorCredits.brand})`
);

// Summing credits of MinorSubjects
const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);
console.log(
  `Total Minor Credits: ${totalMinorCredits.credits} (Brand: ${totalMinorCredits.brand})`
);
