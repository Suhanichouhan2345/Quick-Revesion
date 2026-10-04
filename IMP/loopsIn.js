// ========================================
// JAVASCRIPT LOOPS - QUICK REVISION
// ========================================


// 1. FOR LOOP
// Syntax:
// for (initialization; condition; increment) {
//     code
// }

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// 2. FOR LOOP - REVERSE

for (let i = 5; i >= 1; i--) {
    console.log(i);
}


// 3. FOR LOOP - EVEN NUMBERS

for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) {
        console.log(i);
    }
}


// 4. FOR LOOP - ODD NUMBERS

for (let i = 1; i <= 10; i++) {

    if (i % 2 !== 0) {
        console.log(i);
    }
}


// 5. WHILE LOOP

let i = 1;

while (i <= 5) {

    console.log(i);

    i++;
}


// 6. WHILE LOOP - REVERSE

let j = 5;

while (j >= 1) {

    console.log(j);

    j--;
}


// 7. DO-WHILE LOOP

let k = 1;

do {

    console.log(k);

    k++;

} while (k <= 5);


// 8. DO-WHILE - RUNS AT LEAST ONCE

let x = 10;

do {

    console.log(x);

    x++;

} while (x < 5);


// 9. FOR...OF LOOP
// Used mainly for arrays

let fruits = ["Apple", "Mango", "Banana"];

for (let fruit of fruits) {

    console.log(fruit);
}


// 10. FOR...IN LOOP
// Used mainly for objects

let student = {
    name: "Suhani",
    age: 20,
    course: "B.Tech"
};

for (let key in student) {

    console.log(key);
    console.log(student[key]);
}


// 11. NESTED LOOP

for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {

        console.log(i, j);
    }
}


// 12. BREAK
// Loop ko completely stop karta hai

for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}


// 13. CONTINUE
// Current iteration skip karta hai

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}


// 14. LOOP THROUGH ARRAY USING NORMAL FOR LOOP

let numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {

    console.log(numbers[i]);
}


// 15. LOOP THROUGH ARRAY USING for...of

for (let number of numbers) {

    console.log(number);
}


// 16. MULTIPLICATION TABLE

let number = 5;

for (let i = 1; i <= 10; i++) {

    console.log(number + " x " + i + " = " + number * i);
}


// 17. SUM OF NUMBERS

let sum = 0;

for (let i = 1; i <= 5; i++) {

    sum = sum + i;
}

console.log("Sum =", sum);


// 18. FIND EVEN NUMBERS FROM ARRAY

let nums = [1, 2, 3, 4, 5, 6];

for (let num of nums) {

    if (num % 2 === 0) {

        console.log(num);
    }
}


// 19. FIND LARGEST NUMBER

let values = [10, 25, 5, 40, 15];

let largest = values[0];

for (let value of values) {

    if (value > largest) {

        largest = value;
    }
}

console.log("Largest =", largest);