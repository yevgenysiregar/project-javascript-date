let today = new Date();
console.log(today);

let selectedDate = new Date(0);
console.log(selectedDate);

let newSelectedDate = new Date(24 * 3600 * 1000);
console.log(newSelectedDate);

let pickedDate = new Date("2018-9-19");
console.log(pickedDate);

let randomDate = new Date(2018, 9, 19, 9, 9, 6);
console.log(randomDate);

let date = new Date();
console.log(date.getDate());
console.log(date.getFullYear());
console.log(date.getMinutes());
console.log(date.getTime());
