// 요소 추가하기

// 형제 태그 추가
// 모든 li 요소 바로 뒤에 이 요소 생김
$('li').after('<li class="item">새로운 아이템</li>');

// 바로 뒤에 하나만 생기게 하고 싶으면
$('#todo-list li:last-child').after('<li class="item">새로운 아이템</li>');

// 앞에 넣으려면
$('#todo-list li:first-child').before('<li class="item">새로운 아이템</li>');

// 자식 태그 추가
// append 함수 마지막 자식 뒤에 추가
$('ul').append('<li class="item">새로운 아이템</li>');
// prepend 함수 첫번재 자식 앞에 추가
$('ul').prepend('<li class="item">새로운 아이템</li>');

// 요소 이동과 삭제
// 요소 이동
$('#cleaning').before($('#movie')); // 이와 같이 있던 요소를 before after 해주며 됨

$('#todo-list').append($('#movie')); // append repend로도 이동 가능
$('#todo-list').append($('.important')); // 여러개 태그들도 한번의 이동 가능

// 요소 삭제
$('#movie').remove(); // 해당 요소 선택해서 삭제
