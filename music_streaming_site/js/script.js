// setTimeout(showPlaylist, 0);
// showPlaylist();

// playlist 효과
// $(playlist[i]).postion() 이용
/*
  [0] top:93
  [1] 368 = 93 + 240 + 35(margin-bottom)
  [2] 643 = 93 + 275 * 2
  [n] n = 93 + 275 * n;

  n 중간 위치 - 93 + 275 * n + 120

  93 의 의미 navbar height 59 + container margin-top 35
*/

//
// $(window).on('scroll', showPlaylist);
//
// function showPlaylist() {
//   console.log($(window).scrollTop())
//
//   let playlist = $('.playlist');
//
//   for (let i = 0; i < playlist.length; i++) {
//     let height = $(window).height() + $(window).scrollTop();
//     let midHeight = $(playlist[i]).position().top + $(playlist[i]).height() / 2;
//     console.log(height + " " + midHeight);
//     if (height >= midHeight)
//       $(playlist[i]).animate({opacity: 1}, 1000);
//   }
// }

function scrollHandler() {
  const windowBottom = $(window).scrollTop() + $(window).height();

  // 모든 playlist를 하나씩 살펴보고
  // 그 playlist의 중간 지점의 좌표가 windowBottom보다 작으면
  // 그 playlist 보이기

  // const playlists = $('.playlist');
  // for (let i = 0; i < playlists.length; i++) {
  //   const playlist = $(playlists[i]);
  //   const playlistHalf = playlist.position().top + playlist.outerHeight() / 2;
  //
  //   if (playlistHalf < windowBottom) {
  //     playlist.animate({'opacity': '1'}, 1500);
  //   }
  // }

  $('.playlist').each(function() {
    const playlist = $(this);
    const playlistHalf = playlist.position().top + playlist.outerHeight() / 2;

    if (playlistHalf < windowBottom) {
      playlist.animate({'opacity': '1'}, 1500);
    }
  });

  // let lastPlaylist = $($('.playlist')[$('.playlist').length - 1]);
  // let lastPlaylistBottom = lastPlaylist.position().top + lastPlaylist.outerHeight() + parseInt(lastPlaylist.css('margin-bottom'));
  // console.log(lastPlaylist.css('margin-bottom'));
  //
  // console.log(lastPlaylistBottom + " " + windowBottom);

  // 이 페이지 전체 높이 = 밑의 좌표

  // if (windowBottom === lastPlaylistBottom) {
  if (windowBottom === $(document).height())
    $('.to-top-btn').fadeIn(1000); // defualt 400
  } else {
    $('.to-top-btn').fadeOut(1000); // default 400
  }
}

$(window).on('scroll', scrollHandler);

scrollHandler();

// .to-top-btn 버튼 클릭시
$('.to-top-btn').on('click', function() {
  $('html, body').animate({scrollTop: 0}, 1500);
  // $('.to-top-btn').fadeOut(1000);
});
