// Array 정리 노트

// 배열의 길이
let brands = ['Apple', 'Coca-Cola', 'Starbucks'];
console.log(brands.length); // 3

// 배열에서 특정 값 찾기
// 문자열에서 썻던 indexOf가 배열에서도 똑같이 동작
console.log(brands.indexOf('Starbucks')); // 2
console.log(brands.indexOf('Kakao')); // -1

// 배열에 값 추가
// array.push(item1) item1이 array배열의 끝에 추가
brands.push('Kakao');

brands.push('Samsung', 'LG', 'Facebook');

// 배열에서 값 빼기
// array.pop() array의 마지막 요소가 배열에서 빠지고 그 마지막 요소가 리턴됨
let lastBrand = brands.pop();

// 배열을 문자열로 바꾸기
// brands.join() 내용이 합쳐짐
console.log(brands.join('###')); // ###로 이어져서 붙음
