"use strict";
// INDEX SIGNATURES
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: -50,
    Dave: 42,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
let prop = "Pizza";
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (let transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysTransactions[`luciano`]);
const student = {
    name: "luciano",
    GPA: 3.5,
    classes: [100, 200],
};
// console.log(student.test)
for (let key in student) {
    console.log(`${key} - ${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key} - ${student[key]} `);
};
logStudentKey(student, "GPA");
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
for (let key in monthlyIncomes) {
    console.log(monthlyIncomes[key]);
}
