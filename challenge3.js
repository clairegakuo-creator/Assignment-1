let marks = [78, 45, -5, 92, 60, 101, 55, 38];

let validCount = 0;
let passCount = 0;
let failCount = 0;
let totalSum = 0;

let highestMark = -1;
let highestStudent = 0;

for (let i = 0; i < marks.length; i++) {
  let currentMark = marks[i];
  let studentNumber = i + 1; // Student numbers start at 1, but list indexes start at 0

  if (currentMark < 0 || currentMark > 100) {
    console.log(`Student ${studentNumber}: invalid mark, skipped`);
    continue; // Skips to the next student immediately
  }

  validCount++;
  totalSum += currentMark;

  if (currentMark > highestMark) {
    highestMark = currentMark;
    highestStudent = studentNumber;
  }

  let grade = "";
  if (currentMark >= 80) {
    grade = "A";
  } else if (currentMark >= 70) {
    grade = "B";
  } else if (currentMark >= 60) {
    grade = "C";
  } else if (currentMark >= 50) {
    grade = "D";
  } else {
    grade = "E";
  }
  
  let status = "";
  if (currentMark >= 50) {
    status = "Pass";
    passCount++;
  } else {
    status = "Fail";
    failCount++;
  }

  console.log(`Student ${studentNumber}: ${currentMark} - Grade ${grade} (${status})`);
}

let average = totalSum / validCount;

console.log("--------------------");
console.log(`Valid marks: ${validCount}`);
console.log(`Passed: ${passCount}`);
console.log(`Failed: ${failCount}`);
console.log(`Average: ${average.toFixed(1)}`);
console.log(`Highest: ${highestMark} (Student ${highestStudent})`);