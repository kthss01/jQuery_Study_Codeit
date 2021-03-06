/*
  문자 개수 세기
  주어진 단어에 특정 알파벳이 몇 번 들어가는지 세기
*/

// 주어진 단어(word)에 특정 알파벳(ch)이 몇 번 들어가는지 세어주는 함수
function countCharacter(word, ch) {
    var count = 0;

    // 코드를 작성해주세요.
    count = word.toLowerCase().split('').filter(ele => ele === ch.toLowerCase()).length;

    return count;
}

// 단어 word에 알파벳 'A'가 몇 번 나오는지 세어주는 함수
function countA(word) {
    // 코드를 작성해주세요.
    // return word.toUpperCase().split('').filter(ele => ele === 'A').length;
    return countCharacter(word, 'A');
}

// 테스트 코드
console.log(countCharacter('AbaCedEA', 'E'));
console.log(countCharacter('AbaCedEA', 'X'));
console.log(countA('AbaCedEA'));
