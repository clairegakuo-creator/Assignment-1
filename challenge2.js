let goal = 5000;
let month = 1;
let saving = 100;
let total = 0;

while (total < goal) {
  
  total = total + saving;

  if (saving >= 500) {
    console.log(`Month ${month}: saved KES ${saving}, total KES ${total} - Big month!`);
  } else {
    console.log(`Month ${month}: saved KES ${saving}, total KES ${total}`);
  }

  if (total >= goal) {
    console.log(`Goal reached in month ${month} with KES ${total}!`);
    break;
  }

  month = month + 1;
  saving = saving + 50;
}