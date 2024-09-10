  
// 페이지가 로드되면 parallaxPage 함수를 실행한다. 
window.onload = () => {
  parallaxPage() 
}

/*페럴렉스 스크롤과 관련된 모든 기능을 처리할 함수를 정의*/
function parallaxPage(){
  let section;
  let navItem;
  let base = -500;
  let sectionOffset = []; // 각 section의 위치를 저장할 배열을 선언 
  init()
  // 이 함수를 호출하여 초기 설정을 수행합니다. 
  // 이 함수 안에서 각 section의 위치를 계산하고, 필요한 이벤트를 연결합니다.

  function init(){
    // 페이지에 있는 모든 section 요소들을 선택하고 section 변수에 저장합니다.
    section = document.querySelectorAll('section');
    //네비게이션 메뉴(#navi) 안에 있는 모든 li 요소들을 선택하고 navItem 변수에 저장합니다.
    navItem = document.querySelectorAll('#navi > li');
    //각 섹션의 위치를 계산하여 sectionOffset 배열에 저장하는 함수입니다.
    calcSectionOffset();
    //스크롤, 클릭, 리사이즈 등의 이벤트를 처리할 수 있도록 이벤트 핸들러를 연결하는 함수입니다.
    bindingEvent();
  }
/*섹션들의 위치를 계산하는 함수입니다.  */
  function calcSectionOffset() {
    sectionOffset = Array.from(section).map(el=>el.offsetTop)
    // console.log(sectionOffset)
    /*	
    sectionOffset = Array.from(section).map(el => el.offsetTop);: 각 section의 offsetTop(문서의 맨 위에서부터의 거리)을 계산하여 sectionOffset 배열에 저장합니다. 
     */
  }
  /*각종 이벤트를 설정하는 함수 */
  function bindingEvent(){
    window.addEventListener('resize', calcSectionOffset) 
    //브라우저 창 크기가 바뀔 때마다 calcSectionOffset 함수를 호출해서 섹션들의 위치를 다시 계산합니다.
    window.addEventListener('scroll', onScroll)
    //사용자가 페이지를 스크롤할 때 onScroll 함수를 실행하도록 합니다.
    section.forEach(el=>el.addEventListener('wheel',onWheel))
    // 각 section에서 마우스 휠이 움직일 때마다 onWheel 함수를 실행하도록 합니다.
    navItem.forEach(el=>el.addEventListener('click', onClick))
    //네비게이션 메뉴의 각 항목을 클릭할 때마다 onClick 함수를 실행하도록 합니다. 
  }
  /* 마우스 휠이 움직일 때 실행되는 함수 */
  function onWheel(e){
    const deltaY = e.deltaY || -e.wheelDelta ||  e.detail; 
    //마우스 휠이 위로 스크롤하는지, 아래로 스크롤하는지 방향을 확인합니다.
    const currentIdx = Array.from(section).indexOf(this);
    //현재 휠 이벤트가 발생한 section의 인덱스를 찾아냅니다.
    if(deltaY < 0 && currentIdx > 0 ) {
      // console.log(currentIdx-1);
      // 마우스 휠이 위로 움직이고 현재 섹션이 첫 번째 섹션이 아니라면, 이전 섹션으로 이동합니다.
      moveSection(currentIdx -1 );

    } else if (deltaY > 0 && currentIdx < section.length -1){
      moveSection(currentIdx + 1);
      // console.log(currentIdx+1);
      //마우스 휠이 아래로 움직이고 현재 섹션이 마지막 섹션이 아니라면, 다음 섹션으로 이동합니다. 
    }
  }
  /*  특정 섹션으로 부드럽게 스크롤 이동시키는 함수입니다.  */
  function moveSection (idx){
    const targetOffset = sectionOffset[idx]; //이동할 섹션의 위치를 계산 
    const currentScrollP = document.documentElement.scrollTop;  //현재 스크롤 위치를 가져옵니다. 
    const scrollDisP =  targetOffset - currentScrollP; // 현재 위치에서 이동할 섹션까지의 거리를 계산
    const speed = 500; //애니메이션 속도를 설정
    let isPlay; //애니메이션이 실행 중인지 확인하는 변수

    /*스크롤 애니메이션을 실행하는 함수 */
    function scrollMotion (step) {
      if(!isPlay){
        isPlay = step;
      } 
      const progress = step - isPlay;
      const percent = Math.min(progress / speed, 1);
      window.scrollTo(0, currentScrollP + scrollDisP * percent);
      if (progress < speed){
        window.requestAnimationFrame(scrollMotion);
      }
    }
    //애니메이션을 부드럽게 실행할 수 있도록 브라우저에 요청
    window.requestAnimationFrame(scrollMotion);
  }
  /*사용자가 페이지를 스크롤할 때 실행되는 함수 */
  function onScroll(){
    const scrollTop = document.documentElement.scrollTop; // 현재 스크롤 위치를 가져옵니다.
    let activeIdx = 0; //현재 활성화된 섹션의 인덱스를 저장하는 변수 

    // 활성화 되고 있는 인덱스 찾기 
    for(let i = 0; i<sectionOffset.length; i++){
      if(scrollTop >= sectionOffset[i] + base){
        activeIdx = i; 
      }
    }
    section.forEach((el)=> {
      el.classList.remove('on');
    })
    navItem.forEach((el) => {
      el.children[0].classList.remove('on');
    })
    section[activeIdx].classList.add('on');
    navItem[activeIdx].children[0].classList.add('on');
  }
  function onClick(e){
    const idx = Array.from(navItem).indexOf(this);
    console.log(idx);
    moveSection(idx);

  }
}