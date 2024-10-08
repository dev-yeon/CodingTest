/**
 * 배열을 탐색하는 방법
 */

// 테스트를 위한 배열 
const arr1 =  [10, 20, 30, 40, 50];

/**
 *  고전적 방법 - 반복문을 활용 해서 배열의 원소 탐색하기 
 */

for (let i = 0; i < arr1.length; i++){
  if (i == 3) {
    console.log('~~~~~반복 중단!');
    break;
  }
  console.log(`%d번째 원소 ==> %d`, i, arr1[i]);
  console.log(`${i}번째 원소 ==> ${arr1[i]}`);
}
console.log('---------------------------------');

/**
 * forEach 메서드를 활용해 배열의 모든 원소 탐색.
 * - 콜백 함수에게 배열의 값과 인덱스를 전달한다. 
 * - 콜박 함수는 원소의 수 만큼 순차적으로 실행된다. 
 */

const arr2 = [10,20,30,40,50];

arr2.forEach((v, i)=> {
  if(i ==3 ){
    console.log('반복중단 ~~~!!!');
    // break 는 for, while 문에서만 사용 가능하기 때문에 , 함수 안에서는 사용 할 수 없다. 
    //break; 
    //forEach의 콜백 함수에서 반복을 중단하고자 return을 사용 할 경우 현재 동작중인 콜백만 종료될 뿐, 전체 반복에는 영향이 없다.

    return;
  }
  console.log(`%d번째 원소 ==> %d`, i, v);
});
console.log('---------------------------------');

/**
 * 탐색을 중단하는 기능을 제공하는 some 함수 
 * - some 함수는 콜백 함수가 true를 리턴하는 순간,
 * 순환을 종료한다.
 */

const arr3 = [10,20,30,40,50];

arr3.some((v,i)=> {
  if (i == 3){
    console.log('3. 반복중단 ~~~!!!');
    return true;
  }
  console.log(`%d번째 원소 ==> %d`, i, v);
});
console.log('---------------------------------');

/**
 * 배열의 원소를 가공해서 새로운 배열 만들기 
 * 
 * map 함수에 전달된 콜백이 리턴하는 값들을 하나의 배열로 묶어서 hello 에 저장.
 * hello 는 반드시 원본 배열과 같은 길이를 갖는 배열이다. 
 * 리턴하지 않는 index에 대한 원소는 undefined가 된다. 
 */

const arr4 = [10,20,30,40,50];
const hello = arr4.map((v,i) =>{
  return v * 10;
});
console.log(hello);

// 화살표 함수는 처리로직이 한줄인 경우 "{}"와 ";","return"키워드 생략 가능하므로 .아래와 같이 표현이 가능하다. 
const arr5 = [10,20,30,40,50];
const world = arr5.map((v,i)=> v * 10);

console.log(world);

/**
 *  배열 검색
 */

const arr6 = [5, 12, 8, 131, 44];

// 주어진 판별함수를 만족하는 첫번째 값을 반환한다. 못 찾으면undefined를 반환한다.

//찾고자 하는 항목이 아닌 검색 규칙을 구현한 콜백 함수를 전달 해야 한다. 
const found1 = arr6.find((v)=> {
  // 파라미터로 전달되는 v는 배열의 모든 원소가 순차적으로 전달된다.
  console.log(`v=${v}`);
  // v를 우리가 원하는 조건에 충족하는지 검사해서 true,false를 리턴, 
  //true를 리턴하는 순간, 배열의 탐색을 중단한다. (break와 동일한 기능)
  
  if (v % 2 == 0){
    return true;
  } else {
    return false; 
  }
});
console.log(found1);

const arr7 = [ 5, 12, 8, 131, 44]; 
const found2 = arr7.find(v => v % 2 == 0); 
console.log(found2);

/**
 * 배열에서 특정 조건을 충족하는 원소를 추출하기 
 */
// 1) 전통적인 방법
const arr8 = [5, 12, 8, 131, 44]; 
const d1 = [];

for (let i =0; i<arr8.length; i++){
  if(arr8[i] % 2 == 0) {
    d1.push(arr8[i]);
  }
}
console.log(d1);

// 2) foreach를 사용하는 방법 
const arr9 = [5, 12, 8, 131, 44];
const d2 = [];

arr9.forEach ((v,i)=>{
  if(v % 2 == 0){
    d2.push(v);
  }
});
console.log(d2);

const arr10 = [ 5, 12, 8, 131, 44];
const d3 = arr10.filter(function (v, i){
  if (v % 2 == 0){
    // true가 리턴되는 경우 v는 d3배열의 원소로 저장된다
    // true를 리턴하더라도 배열의 모든 원소를 탐색하기 전까지는 종료되지 않는다. 
    return true;
  }else {
    // false가 리턴되는 경우, v는 버려진다.
    return false;
  } 
});
console.log(d3);

const arr11 = [5, 12, 8, 131, 44];
const d4 = arr11.filter((v,i)=> v % 2 ==0);
console.log(d4);

/**
 * 배열 정렬
 */
const arr12 = [2, 1, 15]; 
// 퀵 정렬 알고리즘을 사용해 배열 자체를 정렬한다. 
// 배열의 모든 원소를 문자열로 취급하기 때문에,
// 글자 정렬 기준이 적용된다. 
// arr12.sort();
// console.log(arr12);

// sort 함수도 정렬 조건을 콜백 함수로 처리한다. 
arr12.sort(function (a,b){
  // 정렬을 위해 비교되는 원소값들이 파라미터로 전달된다.
  console.log(`a=%s, b=%s`, a,b);
  // 리턴값이 양수인 경우 : a 가 b보다 크다.
  // 리턴 값이 음수인 경우 : b가 a보다 크다.
  if (a > b){
    return 1;
  } else {
    return -1;
  }
});
console.log(arr12);

//** 역순배치 */

let arr13 = [1, 2, 3, 4, 5];
arr13.reverse();
console.log(arr13); 

//** 배열의 각 요소를 순회하면서, callback 함수의 실행 값을 누적하여 하나의 결과 값을 반환 */
let arr14 = [1, 2, 3, 4, 5];

/** accumulator의 초기값 지정하기 */
// reduce의 콜백 함수의 다음에 두번째 인자로 acc의 초기값을 설정 할 수 있다. 
// 이 경우 cur에는 배열 (arr14)의 0번째 요소부터 전달되고 i는 0부터 시작된다. 

const result3 = arr14.reduce((acc, cur,i)=>{
  console.log( `acc=${acc}, cur=${cur}, i=${i}`);
  return acc + cur;
},0);
console.log(`result3 = ${result3}`);

/** 응용 */
const covid19 = [
  
]