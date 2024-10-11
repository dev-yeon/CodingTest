- getElementsByClassName() : 많은 element를 가져올때 씀(array를 반환)
- getElementsByTagName() : name을 할당할 수 있음(array를 반환)
- querySelector : element를 CSS selector방식으로 검색할 수 있음 (ex. h1:first-child)
단 하나의 element를 return해줌
⇒ hello란 class 내부에 있는 h1을 가지고 올 수 있다(id도 가능함)
- 첫번째 element만 가져옴
- 조건에 맞는 세개 다 가져오고 싶으면 querySelectorAll
⇒ 세개의 h1이 들어있는 array를 가져다 줌
- querySelector("#hello); 와 getElementById("hello"); 는 같은 일을 하는 것임
하지만 후자는 하위요소 가져오는 것을 못하므로 전자만 쓸거다

원하는 값을 불러오는 방법에는 여러가지 있다.

getElementById >> 하나의 값
getElementsByClassName >> 배열
getElementsByTagName . . . >> 배열

위에서 id 빼고는 배열을 가져오기 때문에 title.innerText 와 같은 방법은 사용할 수 없다.
또
Grab me3
처럼 Id를 가진 태그의 하위 태그를 선택하고 싶을 때 위의 방법으로는 한계가 있다.
이때 사용하는 게 querySelector/querySelectorAll

const title = document.querySelector(".hellos h1"); 와 같이 쓰면
.hellos h1 마치 css 선택자 처럼 원하는 요소를 선택 가능
console.log((title.innerText = "히힛")); 화면에 글자가 히힛으로 바뀐다

** 단 hello라는 class를 가진 h1태그가 여러개인 경우 querySelectorAll을 써야 한다.
선택자가 id인 경우엔 #hello
만약 요소를 특정하지 않고 선택자만 쓰는 경우
>> const title = document.querySelector(".hellos");


Grab me3

hello

라고 써도 grab me3와 hello 모두 선택됨
그리고 여기서 만약 업데이트를 하면
>>console.log((title.innerText = "히힛"));
>> 결과는 grab me3, hello 둘 다 사라지고 히힛으로 대체된다.