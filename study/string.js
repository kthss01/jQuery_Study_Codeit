// String 정리 노트

// 문자열의 길이
let str = 'Codeit';
console.log(str.length);

// 특정 인덱스의 문자 받아오기
console.log(str.charAt(2)); // d
// str[index]와 str.charAt(index) 약간의 차이 있는데 같은 셈임

// 문자열 안에서 다른 문자열 검색
// str.indexOf(serachValue)
/*
  포함되어 있다면 문자열이 시작되는 문자의 인덱스 리턴
  포함되어 있지 않다면 -1 리턴
  여러 번 포함되어 있으면, 처음 발견된 인덱스가 리턴
*/
str = 'Hello World!';

console.log(str.indexOf('e')); // 1
console.log(str.indexOf('z')); // -1
console.log(str.indexOf('ello')); // 1
console.log(str.indexOf('o')); // 4

// 마지막 인덱스 찾기
// lastIndexOf indexOf와 동일한데, 가장 뒤에 위치한 검색 결과를 찾아줌
console.log(str.lastIndexOf('o')); // 7

// 대소문자 변환
// 대문자로 바꾸기
console.log(str.toUpperCase());

// 소문자로 바꾸기
console.log(str.toLowerCase());

// 문자열 자르기
// 시작 지점과 끝 지점으로 자르기
// str.substring(indexStart, indexEnd) indexEnd전까지 문자열 자름
// indexEnd 안쓰면 끝까지 문자열 잘림
str = "Heelo World!";
console.log(str.substring(2, 5)); // llo
console.log(str.substring(2)); // llo World!

// 시작 지점과 길이로 자르기
// str.substr(start, length)를 하면 start부터 길이 length의 문자열이 잘림
console.log(str.substr(2, 5)); // llo W

// 앞뒤의 공백을 없애기
str = '      Hello World!     ';
console.log(str.trim()); // Hello World!
