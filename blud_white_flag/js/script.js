// 청기 내려 버튼 클릭 시
// $('#btn1').on('click', function() {
//   $('.blue').css('transform', 'rotate(45deg)');
// });
$('#btn1').on('click', blueDown);

function blueDown() {
  $('.blue').addClass('down');
  setTimeout(flagsUp, 1000);
}

// 청기 내리지 말고 백기 내려
// $('#btn2').on('click', function() {
//   $('.white').css('transform', 'rotate(45deg)');
// })

$('#btn2').on('click', whiteDown);

function whiteDown() {
  $('.white').addClass('down');
  setTimeout(flagsUp, 1000);
}

// 점선 청기 내려
// $('#btn3').on('click', function() {
//   $('.blue.dot').css('transform', 'rotate(45deg)');
// });
$('#btn3').on('click', blueDotDown);

function blueDotDown() {
  $('.blue.dot').addClass('down');
  setTimeout(flagsUp, 1000);
}

// 깃발 1초 후에 올라오도록 설정
// setTimeout(someFunction, 1000); 과 같은 형태로 사용

function flagsUp() {
  $('.flag').removeClass('down');
}
