// Day 18 - Hospital Management System

const patients = [
    {
        id: 101,
        name: "Rahul Sharma",
        age: 24,
        gender: "Male",
        disease: "Fever",
        doctor: "Dr. Mehta",
        bill: 2500,
        admitted: true
    },
    {
        id: 102,
        name: "Priya Verma",
        age: 31,
        gender: "Female",
        disease: "Migraine",
        doctor: "Dr. Sharma",
        bill: 4200,
        admitted: false
    },
    {
        id: 103,
        name: "Aman Singh",
        age: 45,
        gender: "Male",
        disease: "Diabetes",
        doctor: "Dr. Gupta",
        bill: 6500,
        admitted: true
    },
    {
        id: 104,
        name: "Neha Patel",
        age: 28,
        gender: "Female",
        disease: "Fever",
        doctor: "Dr. Mehta",
        bill: 1800,
        admitted: false
    },
    {
        id: 105,
        name: "Rohit Jain",
        age: 52,
        gender: "Male",
        disease: "Blood Pressure",
        doctor: "Dr. Gupta",
        bill: 7800,
        admitted: true
    },
    {
        id: 106,
        name: "Sneha Yadav",
        age: 36,
        gender: "Female",
        disease: "Asthma",
        doctor: "Dr. Sharma",
        bill: 5300,
        admitted: true
    },
    {
        id: 107,
        name: "Vikas Tiwari",
        age: 19,
        gender: "Male",
        disease: "Infection",
        doctor: "Dr. Mehta",
        bill: 2200,
        admitted: false
    }
];


// 1. Display all patients

function displayPatients() {
    console.log("========== ALL PATIENTS ==========");

    patients.forEach((patient) => {
        console.log(
            `${patient.id} - ${patient.name} - ${patient.disease}`
        );
    });
}


// 2. Find patient by ID

function findPatient(id) {
    const patient = patients.find((patient) => {
        return patient.id === id;
    });

    if (patient) {
        console.log("\n========== PATIENT FOUND ==========");
        console.log(patient);
    } else {
        console.log("\nPatient not found");
    }
}


// 3. Find admitted patients

function admittedPatients() {
    const result = patients.filter((patient) => {
        return patient.admitted === true;
    });

    console.log("\n========== ADMITTED PATIENTS ==========");
    console.log(result);
}


// 4. Find discharged patients

function dischargedPatients() {
    const result = patients.filter((patient) => {
        return patient.admitted === false;
    });

    console.log("\n========== DISCHARGED PATIENTS ==========");
    console.log(result);
}


// 5. Find patients by disease

function patientsByDisease(disease) {
    const result = patients.filter((patient) => {
        return patient.disease === disease;
    });

    console.log(
        `\n========== ${disease.toUpperCase()} PATIENTS ==========`
    );

    console.log(result);
}


// 6. Find patients above a certain age

function patientsAboveAge(age) {
    const result = patients.filter((patient) => {
        return patient.age > age;
    });

    console.log(
        `\n========== PATIENTS ABOVE ${age} ==========
`
    );

    console.log(result);
}


// 7. Calculate total hospital bill

function totalBill() {
    const total = patients.reduce((sum, patient) => {
        return sum + patient.bill;
    }, 0);

    console.log("\nTotal Hospital Collection:", total);
}


// 8. Calculate average bill

function averageBill() {
    const total = patients.reduce((sum, patient) => {
        return sum + patient.bill;
    }, 0);

    const average = total / patients.length;

    console.log(
        "\nAverage Patient Bill:",
        average.toFixed(2)
    );
}


// 9. Find patient with highest bill

function highestBill() {
    const patient = patients.reduce((highest, current) => {
        return current.bill > highest.bill
            ? current
            : highest;
    });

    console.log("\n========== HIGHEST BILL ==========");
    console.log(patient);
}


// 10. Get patient names

function patientNames() {
    const names = patients.map((patient) => {
        return patient.name;
    });

    console.log("\n========== PATIENT NAMES ==========");
    console.log(names);
}


// 11. Find patients treated by a doctor

function patientsByDoctor(doctor) {
    const result = patients.filter((patient) => {
        return patient.doctor === doctor;
    });

    console.log(
        `\n========== ${doctor.toUpperCase()} PATIENTS ==========`
    );

    console.log(result);
}


// 12. Sort patients by bill

function sortByBill() {
    const result = [...patients].sort((a, b) => {
        return b.bill - a.bill;
    });

    console.log("\n========== PATIENTS BY BILL ==========");

    result.forEach((patient) => {
        console.log(
            `${patient.name} - ₹${patient.bill}`
        );
    });
}


// 13. Sort patients by age

function sortByAge() {
    const result = [...patients].sort((a, b) => {
        return b.age - a.age;
    });

    console.log("\n========== PATIENTS BY AGE ==========");

    result.forEach((patient) => {
        console.log(
            `${patient.name} - ${patient.age} years`
        );
    });
}


// 14. Count male and female patients

function genderCount() {
    const result = patients.reduce((count, patient) => {

        if (!count[patient.gender]) {
            count[patient.gender] = 0;
        }

        count[patient.gender]++;

        return count;

    }, {});

    console.log("\n========== GENDER COUNT ==========");
    console.log(result);
}


// 15. Doctor-wise patient count

function doctorCount() {
    const result = patients.reduce((count, patient) => {

        if (!count[patient.doctor]) {
            count[patient.doctor] = 0;
        }

        count[patient.doctor]++;

        return count;

    }, {});

    console.log("\n========== DOCTOR PATIENT COUNT ==========");
    console.log(result);
}


// 16. Discharge patient

function dischargePatient(id) {
    const patient = patients.find((patient) => {
        return patient.id === id;
    });

    if (!patient) {
        console.log("\nPatient not found");
        return;
    }

    if (!patient.admitted) {
        console.log("\nPatient is already discharged");
        return;
    }

    patient.admitted = false;

    console.log(
        `\n${patient.name} discharged successfully`
    );
}


// 17. Admit patient

function admitPatient(id) {
    const patient = patients.find((patient) => {
        return patient.id === id;
    });

    if (!patient) {
        console.log("\nPatient not found");
        return;
    }

    if (patient.admitted) {
        console.log("\nPatient is already admitted");
        return;
    }

    patient.admitted = true;

    console.log(
        `\n${patient.name} admitted successfully`
    );
}


// 18. High bill patients

function highBillPatients(amount) {
    const result = patients.filter((patient) => {
        return patient.bill > amount;
    });

    console.log(
        `\n========== BILL ABOVE ₹${amount} ==========`
    );

    console.log(result);
}


// Function Calls

displayPatients();

findPatient(103);

admittedPatients();

dischargedPatients();

patientsByDisease("Fever");

patientsAboveAge(40);

totalBill();

averageBill();

highestBill();

patientNames();

patientsByDoctor("Dr. Mehta");

sortByBill();

sortByAge();

genderCount();

doctorCount();

dischargePatient(101);

admitPatient(102);

highBillPatients(5000);