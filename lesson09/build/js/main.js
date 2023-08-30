"use strict";
// Utility Types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compsi101",
    title: "final project",
    grade: 0,
};
// console.log(
//   updateAssignment(assign1, {
//     grade: 95,
//   })
// )
const assignGraded = updateAssignment(assign1, {
    grade: 95,
});
// Required and Readonly
const recordAssignment = (assign) => {
    //send to db
    return assign;
};
const assignVerified = recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
// Readonly object can't have its properties being reassigned
// assignVerified.grade = 24
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
// Record
const hexColorMap = {
    red: "FF0000",
    green: "0000FF",
    blue: "00FF00",
};
const finalGrades = {
    Sara: "B",
    Kelly: "U",
};
const gradeData = {
    Sara: {
        asasign1: 74,
        asasign2: 68,
    },
    Kelly: {
        asasign1: 24,
        asasign2: 15,
    },
};
const score = {
    studentId: "k123",
    grade: 85,
};
const preview = {
    studentId: "k321",
    title: "The Final Project",
};
// Return Type
// type newAssign = {
//   title: string
//   points: number
// }
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility types", 100);
console.log(tsAssign);
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .catch((err) => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then((users) => console.log(users));
