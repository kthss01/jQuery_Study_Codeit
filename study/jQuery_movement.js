// jQuery의 동작부분 정리
// jQuery는 선택 + 동작으로 이루어짐
// 동작 부분에 해당하는 다양한 메서드가 잇음

// 클래스 관련
// item에 header라는 클래스 추가
$('#item').addClass('header');

// item에 header라는 클래스 제거
$('#item').removeClass('header');

// item에 header라는 클래스가 없으면 추가, 있으면 제거
$('#item').toggleClass('header');

// item에 header라는 클래스가 있으면 true, 없으면 false 리턴
$('#item').hasClass('header');

// 속성 관련
// 이미지 태그의 src 속성 받아오기
$('img').attr('src');

// 이미지 태그의 src 속성 지정하기
$('img').attr('src', 'images/logo.png');

// h1 태그의 텍스트 받아오기
$('h1').text();

// h1 태그에 텍스트 지정하기
$('h1').text('Hello World!');

// h1 태그에 HTML 텍스트 지정하기
$('h1').html('<b>Hello World!</b>');

// 스타일 관련
// item의 font-weight를 bold로 지정하기
$('#item').css('font-weight', 'bold');

// item의 background-color 가져오기
$('#item').css('background-color');
