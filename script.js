'use strict';

const students = [{
        id: 10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7]
    },
    {
        id: 11,
        name: 'John Doe',
        marks: [9, 8, 7, 6, 7]
    },
    {
        id: 12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8]
    },
    {
        id: 13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9]
    }
];

const PROPERTYMARKS = 'marks';
const PROPERTYNAME = 'name';


const groupMark = averageGroupMark(students);

students.forEach((item) => {
    console.log(`${item[PROPERTYNAME]}: ${averageStudentMark(item)} points`);
});

console.log(`Group: ${groupMark} points`);


function calcAverageValue(array) {
    let result = 0;

    array.forEach((item) => (result += Number(item)));
    result = result / array.length;

    return result;
}

function averageStudentMark(person) {
    let marksArray = [];
    marksArray = person[PROPERTYMARKS];

    const averageMark = calcAverageValue(marksArray);

    return averageMark;
}

function averageGroupMark(persons) {
    let marksArray = [];

    marksArray = persons.map((person) => person[PROPERTYMARKS]);
    marksArray = marksArray.join().split(',');

    return calcAverageValue(marksArray);
}