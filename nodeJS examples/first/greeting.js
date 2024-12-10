const currentHour = new Date().getHours();

let greeting;
if (currentHour < 12) {
    greeting = "Good Morning!";
} else if (currentHour < 16) {
    greeting = "Good Afternoon!";
} else {
    greeting = "Good Evening!";
}

console.log(greeting);