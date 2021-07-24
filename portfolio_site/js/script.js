// 메뉴 색 바꾸기
// $(window).on('scroll', function(){
//
//   let about = $('.about');
//   let contact = $('.contact');
//
//   // console.log(about.position().top + " " + $(window).scrollTop());
//
//   if (about.position().top < $(window).scrollTop()) {
//     // about.animate({'background-color' : '#4a4a4a'}, 1000);
//     // console.log($('.navbar .menu-right li button'));
//     $('.navbar .menu-right li button').each(function() {
//       this.animate({'color' : '#4a4a4a'}, 1000);
//     });
//   } else {
//     $('.navbar .menu-right li button').each(function() {
//       this.animate({'color' : 'white'}, 1000);
//     });
//   }
//
// });

function scrollHandler() {
  // if($(window).scrollTop() >= $('.contact').position().top) {
  //   $('.menu-right button').css('color', '#4a4a4a');
  //
  //   // $('.contact .vertical-center').animate({
  //   //   'opacity' : '1',
  //   //   'top' : '0'
  //   // }, 1000);
  //
  // } else if ($(window).scrollTop() >= $('.about').position().top) {
  if ($(window).scrollTop() >= $('.about').position().top) {
    $('.menu-right button').css('color', '#4a4a4a');

    // $('.about .vertical-center').animate({
    //   'opacity' : '1',
    //   'top' : '0'
    // }, 1000);

    // 막대기 애니메이션
    $('.skill').each(function() {
      const skill = $(this)
      const percentage = skill.find('.percentage').text();
      skill.find('.inner-bar').animate({'width' : percentage}, 1000);
    });

  } else {
    $('.menu-right button').css('color', 'white');

    // $('.header .vertical-center').animate({
    //   'opacity' : '1',
    //   'top' : '0'
    // }, 1000);
  }

  // 각 섹션을 보고
  // 현재 스크롤 위치가 그 섹션보다 아래에 있으면
  // 그 섹션의 vertical-center를 animate하기
  $('section').each(function() {
    if ($(window).scrollTop() >= $(this).position().top) {
      $(this).find('.vertical-center').animate({'top' : 0, 'opacity': 1}, 800);
    }
  })
}

$(window).on('scroll', scrollHandler);

// 처음 페이지가 로딩됐을 때
scrollHandler();

// 섹션 스크롤
// $('#about-btn').on('click', function() {
//
//   const aboutTop = $('.about').position().top;
//   console.log(aboutTop);
//
//   $('html, body').animate({scrollTop : aboutTop}, 1000);
//
// });
//
// $('#contact-btn').on('click', function() {
//
//   const contactTop = $('.contact').position().top;
//   console.log(contactTop);
//
//   $('html, body').animate({scrollTop : contactTop}, 1000);
//
// });

$('.menu-right button').on('click', function() {
  const id = $(this).attr('id');
  if (id === 'about-btn') {
    $('html, body').animate({scrollTop: $('.about').position().top}, 1000);
  } else if (id === 'contact-btn') {
    $('html, body').animate({scrollTop: $('.contact').position().top}, 1000);
  }
});
