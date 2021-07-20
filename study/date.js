// Date 정리 노트
// 객체 만들기
let date = new Date(); // 현재 날짜로 설정된 Date 객체 생성되 리턴

// 원하는 날짜로 설정
// 1988년 6월 11일 5시 25분 30초
let date1 = new Date('Jun 11, 198 05:25:30');
let date2 = new Date('1988-06-11T05:25:30');

// 1999년 12월 15일 (날짜만)
let date3 = new Date('1999-12-15');
let date4 = new Date('12/15/1999');
let date5 = new Date('December 15 1999');
let date6 = new Date('Dec 15 1999');

// 날짜 정보 받아오기
date = new Date('June 11, 1988 05:25:30');
console.log(date.getFullYear()); // 1988
console.log(date.getMonth()); // 5
console.log(date.getDate()); // 11
console.log(date.getDay()); // 6
console.log(date.getHours()); // 5
console.log(date.getMinutes()); // 25
console.log(date.getSeconds()); // 30
console.log(date.getMilliseconds()); // 0
console.log(date.toString()); // Sat Jun 11 1988 05:25:30 GMT+1000 (KDT)
console.log(date.toLocaleString()); // 6/11/1988, 5:25:30 AM
console.log(date.toLocaleDateString()); // 6/11/1988
console.log(date.toLocaleTimeString()); // 5:25:30 AM

// getTime() 1970년 1월 1일 자정부터 몇 ms가 지났는지 알려줌
console.log(date.getTime()); // 581973930000
// 이 ms 값에 나눗셈을 적절히 사용하면 시,분,초,일 등의 단위로 변환 가능
console.log(date.getTime() + 'ms');
console.log(date.getTime()/ 1000 + '초');
console.log(date.getTime()/1000/60 + '분');
console.log(date.getTime()/1000/60/60 + '시간');

// 주의할 점
// getMonth()의 경우 0부터 시작하기 때문에 2는 3월 의미
// getDay()는 날짜가 아니라 요일을 리턴해주고, 일요일 0부터 시작해서 3은 수요일 의미
