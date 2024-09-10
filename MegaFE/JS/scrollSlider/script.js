window.onload = () => {
  /*
  가로 스크롤의 값을 세로 스크롤에 값에 추가해서 전체  스크롤에 길이를 늘리는 구조 . 
  */
  let wScrollTop = window.pageXOffset; //  현재 창의 스크롤 위치 
  const winH = window.innerHeight;  //브라우저 창의 높이 
  const winW =  window.innerWidth; // 브라우저 창의 넓이 

  const itemClass =  'slider';
  const itemActive = `${itemClass}-active`; 
  const itemEnd = `${itemClass}-end`

  const sliderSection = document.querySelectorAll('.horizontal-scroll');
  sliderSection.forEach((el)=> {
    //현재 sliderSection 이 가지고 있는 위치값.
    //sliderSection 이 가지고 있는 가로 컨텐츠의 위치를 받아와야 함. 
    setScroll(el); // sliderSection 가 가지고 있는 가로 스크롤 값 세팅  
    setActive(el);
    

  })
  window.addEventListener('scroll',()=>{
    wScrollTop = window.pageYOffset; //스크롤 이벤트가 실행되면 pageYOffset 값을 새로 받아옴 
    sliderSection.forEach((el)=>{
      setActive(el);
      activeScroll(el);
    })
  })
  function setActive(el) {
    const contentY = el.getBoundingClientRect();
    //각 요소의 크기와 위치를 받아옴. (현재 화면에 보이는지 체크하기 위함.)

    console.log(contentY);
    el.querySelectorAll(`.${itemClass}`).forEach((itemClassEl)=>{
      //특정 요소에 있는 클래스를 제거 
        itemClassEl.classList.remove(itemActive); 
        itemClassEl.classList.remove(itemEnd); 

    })

    if(contentY.bottom < 0 ){
      console.log('333')
      el.querySelectorAll(`.${itemClass}`).forEach((itemClassEl)=>{
        itemClassEl.classList.add(itemList)
        
      })
    }else {
      console.log('sss')
      el.querySelectorAll(`.${itemClass}`).forEach((itemClassEl)=> {
        if(contentY.top <= 0){
          itemClassEl.classList.add(itemActive);
        }else if (contentY.bottom<= winH ){
          itemClassEl.classList.add(itemEnd);
        }
      })
    }


  }
  function setScroll(el) {
    const sectionClass = el.classList[0];
    const contentWrapper =el.querySelector(`.${sectionClass}-item`);
    // console.log(sectionClass);
    // console.log(contentWrapper);

    const contentWrapperScrollW = contentWrapper.scrollWidth;  
    //contentWrapper 안에 있는 전체 콘텐츠의 가로 길이를 가져옴 (보이지 않는 컨텐츠 )
    // console.log(contentWrapperScrollW); 
    el.contentWrapper = contentWrapper 
    el.contentWrapperScrollW = contentWrapperScrollW 

    
    el.rightMax = - (contentWrapperScrollW - winW);
    // 컨텐츠를 완전하게 스크롤 하기 위해서  필요한 최대 왼쪽 값을 반환한다. 
    el.style.height =  `${el.contentWrapperScrollW}px`
    el.innerHeight = el.offsetHeight; 
    // 요소의 높이에 offsetHeight  값을 대입해서 컨텐츠의 전체 높이를 저장함. 
    //컨텐츠를 완전하게 스크롤 하기 위해서 필요한 최대 왼쪽값을 반환 .

    el.init = true // 초기화 여부 boolean 값으로 반환 
    el.transformX = '0' //초기 위치값 설정 
    el.classList.add(`${sectionClass}-init`);
  }

  function activeScroll(el){
    const scrollP = wScrollTop - el.offsetTop; 
    //scrollP 는 scroll 이벤트가 발생하면 새로 받아오는 wScrollTop 값에 el 가 가지고 있는 offsetTop 만큼
    //빼서 스크롤 위치를 계산 
    const scrollCenter = scrollP /(el.innerHeight - (winH - winW))

    //해당 컨텐츠가 세로로 스크롤 된 비율을 반환하는 값 
    const transformP = scrollCenter * el.contentWrapperScrollW;  
    //세로 스크롤 위치에 따라 콘텐츠가 가로로 얼마나 이동해야 하는지  계산해주는 값 
    // el.contentWrapper.style.transform = `translateX(${-transformP}px)`;  // 가로 이동 적용
    let toTransform = - (transformP);
    toTransform = Math.min(0,toTransform);
    
    // 0 보다 크면 0 이 반환 0 이하면 toTransform 값이 변환
    // 처음 위치보다 더 왼쪽으로 가지 못하도록 제한 

    toTransform = Math.max(toTransform, el.rightMax);
    //toTransform 의 값이 0 보다 작은지 
    //toTransform 의 값이 현재 움직이는 totransform이 el.rightMax보다 큰지를 판단 
    //0 보다 작거나 el.rightMax보다 크면 영역을 벗어나지 못하도록 제어 

    el.transformX = toTransform; 
    el.contentWrapper.style.transform =   `translate(${el.transformX}px)`
  }
}