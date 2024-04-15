console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  let currenttime = new Date().getHours();
  if (currenttime >= 6 && currenttime < 12) {
    return "good morning";
  } else if (currenttime >= 13 && currenttime < 18) {
    return "good afternoon";
  } else if (currenttime >= 19 && currenttime < 22) {
    return "good evening";
  } else (currenttime >= 23 && currenttime < 5) {
    return "good night";
  }
  // Code here
}

function getDayColor() {
  const currentDay = new Date().getDay();
  switch (currentDay) {
    case 0: // Sunday
    case 6: // Saturday
      return "hotpink";
    case 1: // Monday
      return "darkgray"
    case 2: // Tuesday
    case 3: // Wednesday
    case 4: // Thursday
    case 5: // Friday
      return "lightblue";
  }
}
display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
