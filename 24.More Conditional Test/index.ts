let car: string = 'Subaru';
let age: number = 25;
let numbers: number[] = [1, 2, 3, 4];

console.log("Is car == 'Subaru'? I predict True.")
console.log(car == 'Subaru');

console.log("Is car === 'Subaru'? I predict False.")
console.log(car === 'Subaru');

console.log("Is car != 'Toyota'? I predict True.")
console.log(car != 'Toyota');

console.log("Is car !== 'Subaru'? I predict False.")
console.log(car !== 'Subaru');

console.log("Is car.toLowerCase() == 'subaru'? I predict True.")
console.log(car.toLowerCase() == 'subaru');

console.log("Is car === car.toLowerCase()? I predict False.")
console.log(car === car.toLowerCase());

console.log("Is age == 25? I predict True.")
console.log(age == 25);

console.log("Is age != 30? I predict True.")
console.log(age == 30);

console.log("Is age > 30? I predict False.")
console.log(age > 30);

console.log("Is age <= 25? I predict True.")
console.log(age <= 25);

console.log("Is age > 20 && age < 30? I predict True.")
console.log(age > 20 && age < 30);

console.log("Is age > 30 || age < 18? I predict False.")
console.log(age > 30 || age < 18);

console.log("Is 3 in numbers? I predict True.")
console.log(3 in numbers);

console.log("Is 5 not in numbers? I predict True.")
console.log(5 in numbers);

