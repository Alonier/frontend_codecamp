//1.객체 선언과 할당
let friend = { name: "이준희", age: 24, camp: "코드캠프" };
// undefined
friend;
// {name: '이준희', age: 24, camp: '코드캠프'}age: 24camp: "코드캠프"name: "이준희"[[Prototype]]: Object
friend.name;
// '이준희'
friend.age;
// 24
friend.camp;
// '코드캠프'

//2.배열 내 담긴 객체.
let students = [];
// undefined
let student1 = { name: "길동", pet: "강아지", house: "구로구" };
// undefined
let student2 = { name: "철수", pet: "고양이", house: "관악구" };
// undefined
let student3 = { name: "다희", pet: "미어캣", house: "강서구" };
// undefined
students.push(student1);
// 1
students.push(student2);
// 2
students.push(student3);
// 3
students;
// (3) [{…}, {…}, {…}]
students[0].name;
// '길동'
students.forEach((element) => {
  console.log(element.name);
});
// VM3780:2 길동
// VM3780:2 철수
// VM3780:2 다희

const fruits = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
  { number: 7, title: "딸기" },
  { number: 8, title: "천혜향" },
  { number: 9, title: "과일선물세트" },
  { number: 10, title: "귤" },
];
// undefined
fruits.forEach((element) => {
  console.log(`${element.number} ${element.title}`);
});
// VM4452:2 1 레드향
// VM4452:2 2 샤인머스켓
// VM4452:2 3 산청딸기
// VM4452:2 4 한라봉
// VM4452:2 5 사과
// VM4452:2 6 애플망고
// VM4452:2 7 딸기
// VM4452:2 8 천혜향
// VM4452:2 9 과일선물세트
// VM4452:2 10 귤
// undefined
