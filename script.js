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


const groupMark = averageGroupMark(students);

students.forEach((item) => {
    console.log(`${item.name}: ${averageStudentMark(item)} points`);
});

console.log(`Group: ${groupMark} points`);


function calcAverageValue(array) {
    let result = 0;

    array.forEach((item) => (result += Number(item)));
    result = result / array.length;

    return result;
}

function averageStudentMark(person) {
    return calcAverageValue(person.marks);
}

function averageGroupMark(persons) {
    let marksArray = [];

    marksArray = persons.map((person) => person.marks);
    marksArray = marksArray.join().split(',');

    return calcAverageValue(marksArray);
}