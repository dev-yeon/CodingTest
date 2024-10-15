document.getElementById('game-form').addEventListener('submit', function(event){
  event.preventDefault();// 기본적으로 form이 제출되면 페이지가 새로고침되는데, 그걸 방지함

  const maxNumber =  parseInt(document.getElementById('max-number').value); 
  //parseInt()로 입력값을 정수로 변환한다.
  const userGuess = parseInt(document.getElementById('user-guess').value);
  // 랜덤 숫자 생성 (1에서 maxNumber 사이)
  const randomNumber = Math.ceil(Math.random() * maxNumber);
  //Math.ceil()과 Math.random()을 사용해 1에서 maxNumber 사이의 랜덤 숫자를 생성한다.

    // 사용자 입력과 랜덤 숫자 비교
  const resultMessage = document.getElementById('result');
  if (userGuess === randomNumber) {
    resultMessage.innerHTML = `You chose: ${userGuess}, the machine chose: ${randomNumber}. <strong>You won!</strong>`;
} else {
    resultMessage.innerHTML = `You chose: ${userGuess}, the machine chose: ${randomNumber}. <strong>Try again!</strong>`;
}
});