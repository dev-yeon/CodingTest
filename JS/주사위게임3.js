// function solution(a, b, c, d) {
//     const dice = [a, b, c, d].sort((x, y) => x - y);  // 주사위 값을 오름차순으로 정렬

//     if (dice[0] === dice[3]) {  // 네 주사위가 모두 같은 경우
//         return 1111 * dice[0];
//     } else if (dice[0] === dice[2] || dice[1] === dice[3]) {  // 세 주사위가 같고, 나머지 하나가 다른 경우
//         const p = dice[1];  // 세 번 나온 숫자
//         const q = dice[0] === dice[2] ? dice[3] : dice[0];  // 한 번 나온 숫자
//         return (10 * p + q) ** 2;
//     } else if (dice[0] === dice[1] && dice[2] === dice[3]) {  // 두 개씩 같은 경우
//         return (dice[0] + dice[2]) * Math.abs(dice[0] - dice[2]);
//     } else if (dice[0] === dice[1] || dice[1] === dice[2] || dice[2] === dice[3]) {  // 두 개가 같고 나머지 두 개가 다른 경우
//         const p = dice[1];  // 두 번 나온 숫자
//         const q = dice[0] === dice[1] ? dice[2] : dice[0];  // 첫 번째 다른 숫자
//         const r = dice[3];  // 두 번째 다른 숫자
//         return q * r;
//     } else {  // 네 숫자가 모두 다른 경우
//         return dice[0];  // 가장 작은 숫자 반환
//     }
// }

function solution(a, b, c, d) {
  // 주사위 값의 빈도를 저장할 객체
  const dice = [a, b, c, d];
  const counts = {};

  // 주사위 값의 빈도를 계산
  dice.forEach((num) => {
      counts[num] = (counts[num] || 0) + 1;
  });

  const values = Object.values(counts);  // 주사위 값의 빈도만 추출
  const keys = Object.keys(counts).map(Number);  // 주사위 값 추출 (문자열을 숫자로 변환)

  if (values.length === 1) {  // 네 주사위 값이 모두 같은 경우
      return 1111 * keys[0];
  } else if (values.includes(3)) {  // 세 주사위 값이 같고 하나가 다른 경우
      const p = keys[values.indexOf(3)];  // 세 번 나온 숫자
      const q = keys[values.indexOf(1)];  // 한 번 나온 숫자
      return (10 * p + q) ** 2;
  } else if (values.length === 2 && values.includes(2)) {  // 두 주사위 값이 각각 두 번씩 같은 경우
      const [p, q] = keys;  // 두 번 나온 두 숫자
      return (p + q) * Math.abs(p - q);
  } else if (values.length === 3) {  // 두 주사위가 같고, 나머지 두 주사위가 다른 경우
      const p = keys[values.indexOf(2)];  // 두 번 나온 숫자
      const others = keys.filter(key => counts[key] === 1);  // 한 번 나온 나머지 두 숫자
      return others[0] * others[1];
  } else {  // 네 주사위 값이 모두 다른 경우
      return Math.min(...keys);  // 가장 작은 숫자 반환
  }
}