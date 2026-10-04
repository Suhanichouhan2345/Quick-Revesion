// ========================================
// JAVASCRIPT EXCEPTION HANDLING
// QUICK REVISION
// ========================================


// 1. try...catch

try {

    let result = 10 / 0;

    console.log(result);

} catch (error) {

    console.log("Error:", error);
}


// 2. ReferenceError

try {

    console.log(userName);

} catch (error) {

    console.log("Error:", error.message);
}


// 3. TypeError

try {

    let num = 10;

    num.toUpperCase();

} catch (error) {

    console.log("Error:", error.message);
}


// 4. finally
// finally hamesha execute hota hai

try {

    console.log("Try block");

} catch (error) {

    console.log("Catch block");

} finally {

    console.log("Finally block");
}


// 5. try + catch + finally

try {

    let number = 10;

    console.log(number.toUpperCase());

} catch (error) {

    console.log("Something went wrong:", error.message);

} finally {

    console.log("Execution completed");
}


// 6. throw
// Apna custom error create kar sakte hain

function checkAge(age) {

    if (age < 18) {

        throw new Error("Age must be 18 or above");
    }

    return "Eligible";
}

try {

    console.log(checkAge(15));

} catch (error) {

    console.log(error.message);
}


// 7. Custom Error

function checkNumber(number) {

    if (number < 0) {

        throw new Error("Number cannot be negative");
    }

    return number;
}

try {

    console.log(checkNumber(-5));

} catch (error) {

    console.log("Custom Error:", error.message);
}


// 8. Multiple operations in try

try {

    let a = 10;
    let b = 20;

    console.log(a + b);

    console.log(userName); // Error

    console.log("This will not execute");

} catch (error) {

    console.log("Error occurred:", error.message);
}


// 9. Error Object

try {

    console.log(undefinedVariable);

} catch (error) {

    console.log("Name:", error.name);
    console.log("Message:", error.message);
    console.log("Stack:", error.stack);
}


// 10. JSON Error Handling

try {

    let data = JSON.parse("invalid json");

    console.log(data);

} catch (error) {

    console.log("Invalid JSON:", error.message);
}


// 11. Fetch API Error Handling

async function getData() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {

            throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log("API Error:", error.message);
    }
}


// 12. Complete Example

function divide(a, b) {

    if (b === 0) {

        throw new Error("Cannot divide by zero");
    }

    return a / b;
}

try {

    let result = divide(10, 0);

    console.log(result);

} catch (error) {

    console.log("Error:", error.message);

} finally {

    console.log("Division operation completed");
}