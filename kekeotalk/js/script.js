/*
  과제
  메시지를 입력하고 '전송' 버튼을 클릭하면 새로운 말풍선이 생깁니다.
  친구가 보낸 말풍선은 .friend-bubble 클래스를 갖고 있지만, 내가 보낸 말풍선은 .my-bubble 클래스를 갖고 있습니다.
  메시지가 전송되면 <textarea>는 다시 빈 칸이 됩니다.
  <textarea>가 비어 있으면 메시지는 보내지지 않습니다.
*/

// 메세지 전송
$('#send').on('click', sendMessage);

function sendMessage() {
  const message = $('#new-message').val();
  // console.log(message);
  if (!message) // 빈 문자열이면 false;
    return;

  // console.log('test');

  $('.chatbox').append(`
    <div class='my-bubble bubble'>
      ${message}
    </div>
    `);

  $('#new-message').val('');
}
