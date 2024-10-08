/*
1. 각 a태그를 클릭했을대 a태그에 있는 href를 받아옵니다 메서드명은 getAttribute("href");
*href의 경로는 이미지경로와 같습니다.
2. 1번에서 받아온 값을 showBox의 배경으로 전달해주세요
3. a태그에 있는 텍스트 예를들면 두번째 a태그의 텍스트는 BRAND IDENTITY입니다.
텍스트를 h1에 전달해주세요

4. 선택된 a태그의 색깔을 흰색으로 변경해주세요*/ 

// 모든 a 태그 가져오기
const links = document.querySelectorAll('.btns a');

// 제목 요소와 showBox 요소 가져오기 
const showBox = document.querySelector('.showBox');
const title = document.querySelector('#gallery h1');

// 각  a 태그에 클릭 이벤트 . 
links.forEach((link, index) => {
  link.addEventListener('click', function(event){
    event.preventDefault(); //기본동작인 링크 이동을 막기 
    //1. href 속성 값을 가져오기
    const imageSrc = link.getAttribute('href');
    //2. showBox의 배경 으로 설정 
    showBox.style.backgroundImage =`url(${imageSrc})`;
    //3. a 태그의 택스트를 h1 에 전달한다. 
    title.textContent = link.textContent;

    //4. 모든 링크의 색깔을 초기화 하고. 선택된 a링크의 색을 흰색으로 변경
    links.forEach(link =>link.style.color = '#999');//초기화
    link.style.color = '#fff';

    // 현재 선택된 이미지 번호로 업데이트
    document.querySelector('.controls strong').textContent = index + 1 ; 
    /*
    숙제 제출이 늦었습니다. 
    그렇게 평가해 주시니, 정말 감사합니다. ㅜㅜ
    항상 양질의 수업주제와 실습 파일들로 공부 하게 해주셔서 정말 감사합니다.
    코드를 다 완성하고서도 완성된 페이지가 너무 세련되고 이뻐서 만족하고.
    제가 실제로 써먹을수 있는 포트폴리오 구성도 풍성해지는 느낌 입니다.
    
    */ 
  });
});