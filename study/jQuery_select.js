// CSS 선택자외에 jQuery에서 제공하는 선택 방법

// filter
// filter() ()안의 조건으로 선택된 요소를 한번 더 걸러줌
$('button').fitler('.color-3').text('SELECTED!');

// not
// not() filter()의 반대
// 선택된 요소 중에서 조건에 해당되는 것들을 제외
$('button').not('.color-3').text('SELECTED!');

// eq
// 선택된 요소들 중에서 n번째 요소 하나만 골라냄
$('button').eq(1).text('SELECTED');

// parent
// 부모 요소를 찾아줌
$('#btn-1').parent().css('background-color', 'black');

// children
// parent() 반대
// 선택된 요소의 자녀 요소를 모두 골라줌
$('#box-1').children().css('background-color', 'black');

// find
// 선택된 요소의 자녀, 자녀의 자녀, ... 를 골라주되 조건에 맞는 요소만 골라줌
// box-1의 자녀 요소 중 color-2 클래스가 있는 요소의 css를 적용
$('#box-1').find('.color-2').css('background-color', 'black');

// children()은 직속 자녀만 find()는 자손들 모두 찾아냄

// siblings
// siblings() 선택된 요소의 이웃 요소들을 골라줌
// () 안에 조건을 넣을 경우, filter 역할도 함께 해줌
$('#btn-1').siblings().text('SELECTED!');
