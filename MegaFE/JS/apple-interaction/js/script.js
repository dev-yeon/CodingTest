
(()=>{

  let yOffset = 0; // window.pageYoffset // 대입 변수 
  let prevScrollHeight = 0; // 현재 스크롤 위치보다 이전 스크롤 섹션의 스크롤 값
  let currentSection = 0; // 현재 활성화 된 섹션 
  let newSection = false //  새로운 섹션이 시작됨을 알려줌 
  let acc = 0.2; 
  let delayYoffset = 0; 
  let rafId;
  let rafState; 

  const sectionInfo = [
    {
      type: 'sticky', // 화면에 보여질 방식
      
      heightNum : 10, // 해당 섹션의 높이를 브라우저의 높이의 5 배로 설정 
      // 이미지를 스크롤 하기 위해서 여유 스크롤 영역을 만들기 위한 값 

      scrollHeight: 0, // 섹션의 실제 스크롤 높이 (이벤트가 들어오면 계산)
      objs : {
        container : document.querySelector('#scroll-section-0'),
        canvas: document.querySelector('#video-canvas-0'),
        context: document.querySelector('#video-canvas-0').getContext('2d'),
        videoImages: []// 이미지를 저장할 배열 
      },
      values : {
        videoImageCount : 64,// 사용될 이미지의 개수 
        imgSequence : [0,64],// 비디오 시퀀스 (첫프레임과 끝 프레임)
        canvas_opacity: [1,0, {start: 0.9, end:1 }] // 캔버스의 투명도 조절 
        // 1, 0 은 불투명도를 나타내며, start 0.9 와 end: 1은 스크롤 비율을 나타낸다. 
        // 스크롤 전체에 90%가 되면 투명해지기 시작하고, 스크롤이 100% 이 되면 완전히 투명해진다. 

      }
    }
  ] // section Info 
  function setCanvasImage(){
    // 캔버스에 보여줄 이미지를 로드하는 함수 
    let imgSize;
    for(let i =0; i<sectionInfo[0].values.videoImageCount; i++){
      imgItem = new Image();
      imgItem.src = `./images/section01/00${i+1}.png`; // 이미지 경로 설정 
      sectionInfo[0].objs.videoImages.push(imgItem);
      console.log(imgItem.src);
    }
  }//setCanvasImage
  //각 섹션의 높이 설정 함수 
  function setLayOut(){
    for (let i =0; i< sectionInfo.length; i++){
      if(sectionInfo[i].type ==='sticky'){
        sectionInfo[i].scrollHeight = sectionInfo[i].heightNum * window.innerHeight 
      }
      sectionInfo[i].objs.container.style.height =  `${sectionInfo[i].scrollHeight}px`
    }
    yOffset = window.pageYOffset;
    let totalScrollHeight = 0 ;
    for(let i = 0; i< scrollInfo.length; i++){
      totalScrollHeight += sectionInfo[i].scrollHeight; 
      if(totalScrollHeight >= yOffset){
        currentSection = i; 
        break
      }
    }
    document.body.setAttribute('id', `show-section-${currentSection}`);
    // 현재 위치한 section을 body에 id로 넘겨 줌. 

    // 애니메이션 값이 스크롤의 위치에 따라 어떻게 변화할지 계산
    // opacity , translate 같은 요소들 계산해주는 함수 


  }
  function calcValue (val, currentY){
    let resultValue; //최종적으로 반환할 계산된 값이 들어울 변수 
    const scrollH = sectionInfo[currentSection].scrollHeight; //현재 섹션의 전체 스크롤 길이 
    const scrollRatio = currentY / scrollH  ; // 현재 섹션에서 스크롤 이 된 비율 
    console.log(scrollRatio);


    //val 의 배열 길이가 3이면 애니메이션의 시작과 끝 범위가 정의된 경우 
    if(val.length === 3){
      const scrollStart = val[2].start * scrollH; // 애니메이션이 시작할 위치 (스크롤의 높이 기준)
      const scrollEnd = val[2].end * scroll; // 애니메이션이 끝나는 위치 (스크롤 높이 기준 )
      const scrollRealH = scrollEnd - scrollStart;  // 애니메이션이 진행되는 구간의 스크롤 높이 

      // 현재 스크롤의 위치가 애니메이션 영역 안에 있는지. 
      if(currentY >= scrollStart && currentY <= scrollEnd){
        resultValue = ((currentY -scrollStart)/scrollRealH) * (val[1]-val[0]) + val[0];
        // 애니메이션의 진행 비율을 계산하고 값으로 반환
      } else if (currentY < scrollStart ) {
         //스크롤이 애니메이션 범위보다 위에 있을 경우 시작 값으로 지정 
        resultValue = val[0]
      } else if(currentY < scrollEnd) {
        //스크롤이 애니메이션 범위보다 아래 있을 경우 종료 값으로 지정 
        resultValue = val[1]
      }
    }else {
      //배열의 길이가 2 일 경우 애니메이션 섹션 전체에서 발생 
      // 스크롤 비율에 따라 값을 계산 
      resultValue = scrollRatio * (val[1] - val[0]) + val[0]
    }
    return resultValue
  }
  function fixedMenu(){
    if(yOffset>1){
      document.body.classList.add('nav-fixed');
    } else {
      document.body.classList.remove('nav-fixed');
    }
  }

  window.addEventListener('load',()=>{
    setLayOut();
    window.addEventListener('scroll', ()=>{
      yOffset  = window.pageYOffset;
      fixedMenu();
    })
  })
  setCanvasImage()

})()