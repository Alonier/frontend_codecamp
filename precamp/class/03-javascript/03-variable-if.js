//데이터 타입, 연산자 실습
1 + 1;
// 2
1 + "만원";
// '1만원'
1 + "1";
// '11'
1 - "1";
// 0
"123" == 123;
// true
"123" === 123;
// false
true && true;
// true
true && false;
// false
false || true;
// true
!false;
// true

//swtich 예문
let variable = [1, 2, 3, 4, 5];
// undefined
variable.forEach((element) => {
  switch (element) {
    case 1:
      console.log(1);
      break;
    case 2:
      console.log(2);
      break;
    default:
      console.log(1234);
  }
});
// VM5932:3 1
// VM5932:5 2
// 3VM5932:8 1234
// undefined

//Math 예문
Math.floor(Math.random() * 100000);
// 72146
Math.floor(Math.random() * 100000);
// 63880
Math.floor(Math.random() * 100000);
// 13501
Math.floor(Math.random() * 100000);
// 86611
Math.floor(Math.random() * 100000);
// 98925
String(Math.floor(Math.random() * 100000));
// '40172'
String(Math.floor(Math.random() * 100000)).padStart(6, "0");
// '049672'
String(Math.floor(Math.random() * 100000)).padStart(6, "0");
// '022991'
String(Math.floor(Math.random() * 100000)).padStart(6, "0");
// '063032'
