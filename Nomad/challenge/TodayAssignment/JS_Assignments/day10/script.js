function getTimeUntilChristmas() {
  const today = new Date();  // 현재 날짜
  const year = today.getFullYear();  // 현재 연도
  const christmas = new Date(year, 11, 25);  // 크리스마스 날짜 설정

  // 만약 크리스마스가 이미 지나갔다면, 다음 해 크리스마스까지 남은 시간을 계산
  if (today > christmas) {
    christmas.setFullYear(year + 1);  // 내년 크리스마스 날짜로 설정
  }

  const remainingTime = christmas - today;  // 크리스마스까지 남은 시간 (밀리초)
  const totalSeconds = Math.floor(remainingTime / 1000);  // 밀리초를 초 단위로 변환

  const days = Math.floor(totalSeconds / (60 * 60 * 24));  // 남은 일 수
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));  // 남은 시간
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);  // 남은 분
  const seconds = totalSeconds % 60;  // 남은 초

  return {
    days,
    hours,
    minutes,
    seconds
  };
}

function updateCountdown() {
  const countdownElement = document.getElementById('countdown');
  const { days, hours, minutes, seconds } = getTimeUntilChristmas();
  countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// 1초마다 카운트다운을 업데이트
setInterval(updateCountdown, 1000);

// 페이지 로드 시 바로 카운트다운 업데이트
updateCountdown();