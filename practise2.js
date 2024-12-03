// Задание 2
for (let x = 1; i < 11; x++) {
    console.log(x);
}
let b = 10;
while (b >= 1) {
    console.log(j);
    j--;
}
// Задание 3
const lectures = ['Тема 1', 'Тема 2', 'Тема 3'];
let practices = ['Практика 1', 'Практика 2', 'Практика 3'];
lectures.push('Тема 4'); 
practices.unshift('Практика 0'); 
lectures.forEach((lecture) => {
    console.log(lecture);
});
 
practices.forEach((practice) => {
    console.log(practice);
});

function printArray(array) {
    console.log(array.join(','));
}

printArray(lectures);
printArray(practices);
 
// Задание 4
const lecture = ['Оема 1', 'Тема 2', 'Тема 3'];
lecture.push('Оема 4'); 
function filterLecturesByO(lecturesArray) {
    return lecturesArray.filter(lecture => lecture.startsWith('О'));
}
const filteredLectures = filterLecturesByO(lecture);
console.log(filteredLectures);