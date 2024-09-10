// window.onload = () => {

//     //마우스가 스크롤 할 때마다 이미지가 확대 되는 모션
//     //이미지의 확대되는 값은 모두 다르게 적용
//     //스크롤되는 양은 컨텐츠의 양과 비례


//     const progressBar = document.querySelector('.progressBar');
//     const imgs = document.querySelectorAll('.parallax_image');
//     const imgsNum = imgs.length;// 속도를 대입하기 위한 값


//     let scrollTop = 0; //최초로 시작하는 스크롤 위치

//     //문서의 전체길이를 100%로 가정하고 현재 스크롤되는 문서의 위치를 백분율로 표시

//     window.addEventListener('scroll', onScroll);

//     function onScroll() {
//         scrollTop = document.documentElement.scrollTop;
//         // console.log(scrollTop)
//         let documentH = document.body.clientHeight;
//         let windowH = window.innerHeight;
//         // console.log(documentH)

//         const percent = Math.ceil(scrollTop / (documentH - windowH) * 100);
//         progressBar.style.width = percent + '%';

//         imgs.forEach((el, index) => {
//             const transZ = scrollTop / (imgsNum * (imgsNum - index))
//             el.style.transform = `perspective(300px) translateZ(${transZ}px)`
//         })

//     }

// }

//함수 리팩토링 작업
/*
리팩토링의 가장 큰 목적은
1. 가독성
2. 유지보수

*/
window.onload = ()=>{
  perspectivePage()
}
function perspectivePage(){
  //사용되는 변수를 선언
  let progressBar;
  let imgs;
  let imgsNum;
  let scrollTop;
  let documentH;
  let windowH
  let percent;
  let transZ;

  //기능별로 함수의 분리
  init()//초기값의 선언을 할때 보통 init()이라는 함수명을 자주 사용
  bindingEvent();
  

  function init(){
      progressBar = document.querySelector('.progressBar');
      imgs = document.querySelectorAll('.parallax_image');
      imgsNum = imgs.length;
      scrollTop = 0;
      updateDemensions();//초기화 시점에 문서 높이와 창 높이를 업데이트 
  }

  function bindingEvent(){
      window.addEventListener('scroll',onScroll);
  }

  function updateDemensions(){
      documentH = document.body.clientHeight;
      windowH = window.innerHeight;
  }

  function onScroll(){
      scrollTop = document.documentElement.scrollTop;
      percent = Math.ceil(scrollTop / (documentH - windowH)*100)

      progressBar.style.width = percent + '%';

      imgs.forEach((el,idx)=>{
          transZ = scrollTop / (imgsNum * (imgsNum - idx));
          el.style.transform = `perspective(300px) translateZ(${transZ}px)`;
      })


  }
}

