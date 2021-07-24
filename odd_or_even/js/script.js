// 짝수 버튼
$('#even-btn').on('click', function(){
  $('.card').each(function() {
    // console.log(Number($(this).text()) % 2);
    if (Number($(this).text()) % 2 === 0) {
      console.log(Number($(this).text()));
      console.log($(this));
      $(this).toggleClass('selected');
    } else {
      $(this).removeClass('selected');
    }
  })
});

// 홀수 버튼
$('#odd-btn').on('click', function(){
  $('.card').each(function() {
    if (Number($(this).text()) % 2 === 1) {
      $(this).toggleClass('selected');
    } else {
      $(this).removeClass('selected');
    }
  })
});
