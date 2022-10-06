var fruit; // 변수 선언
fruit = "apple" // 변수 초기화

var fruit = "apple"; // 변수 선언 및 초기화


// 데이터 변경
var fruit = "apple";
fruit = "banana";  

// 자바스크립트 사용 방법
<body>
    <script src="index.js"></script>
</body>

// 실습 1 변수 생성
// 변수의 데이터를 웹 화면에 출력하기 위해서는 document.write(변수명)을 사용하실 수 있습니다.
// var를 사용하여 변수 fruit을 선언하고, 데이터 apple을 삽입합니다.
var fruit = "apple";
// var를 사용하여 변수 box를 선언하고, 데이터 banana를 삽입합니다.
var box = "banana";
// document.write();을 사용하여 변수 fruit과 box의 데이터를 확인합니다.
document.write(fruit, box);
// 변수 box의 데이터를 tomato로 변경합니다.
box = "tomato";
// document.write();을 사용하여 변수 box의 변경된 데이터를 확인합니다.
document.write(box);
// document.writeln();을 사용하면 출력값 사이에 공백을 넣을 수 있습니다.
document.writeln(fruite, box);


// 함수
// 변수로 선언하여 함수 생성
var func1 = function() {
    console.log("Func1");
}   

func1(); // 함수 호출

// 함수 자체에 이름을 지정하여 함수 생성
function func1() {
    console.log("Func1");
} 

func1(); 

// 매개변수, 인자, return
var area = function(width, height) {  // width, height : 매개변수
    return width * height; 
}
area(10, 20);  // 10, 20 : 인자 


// 함수 데이터 호출 방법
var area = function(width, height) {
    return width * height;
}
// 새 변수를 생성한 후, 그 변수를 console.log()로 감싸기
var result = area(10, 20);
console.log(result);  // 200을 화면에 출력 
// 함수 자체를 console.log()로 감싸기 
console.log(area(10,20));  // 변수를 거치지 않고 출력


// 배열
var fruit = ["사과", "배", "수박"];
// 출력 : ["사과", "배", "수박"]

// 배열 데이터 추출 
var fruit = ["사과", "배", "수박"];
console.log(fruit[0]); //0번째 인덱스의 데이터 추출

// 배열 데이터 변경하기
var fruit = ["사과", "배", "수박"];
fruit[0] = "포도";
console.log(fruit); // ["포도", "배", "수박"]


// 객체
var student = {   // student 라는 변수에 아래 객체들이 들어있음
    name : "inkwon",  // name이라는 프로퍼티의 문자열 데이터
    age : 20, // age라는 프로퍼티의 숫자 데이터
    skills : ["자바스크립트", "HTML", "CSS"], // skills라는 프로퍼티의 배열 데이터
    sum : function (num1, num2) { return num1 + num2;} // sum이라는 메서드의 함수
}

// 객체 데이터 출력하기 
console.log(student.name); // 객체명.프로퍼티명
console.log(student['name']); // 객체명["프로퍼티명"]

// 객체 데이터 변경하기 
student.name = "Park"; // name 프로퍼티의 데이터 변경
console.log(student.name); // park 출력


// undefined, null
var unde;       // 변수 선언은 된 상태이지만 변수의 초기화가 되지 않음(데이터가 입력되지 않은 상태)
var empty = null;   // 이 데이터는 비어있다고 명시한 것 / undefined는 뭐가 차있다 비어있다고 말해주지 않은 상태


// 실습 2 
