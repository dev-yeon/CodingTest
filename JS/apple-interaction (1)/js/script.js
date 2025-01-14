
(()=> {
    //전역변수 설정 
    let yOffset = 0;
    let prevScrollHeight = 0; 
    let currentSection = 0;
    let newSection = false; 
    let acc = 0.3; 
    let delayYOffset = 0;
    let rafId;
    let rafState; 
    const video = document.querySelector('#scroll-section-1 video');


    //section 정리 
    // 애니메이션이 들어가지 않는 section은 type를 normal 
    // 애니메이션이 들어가는 section은 type를 sticky로 지정한다. 

    const sectionInfo = [
      {
        type: 'sticky',
        heightNum : 3,  // 해당 섹션의 높이를 화면 기준으로 배수로 늘림. (1080 * 3) , normal에서 사용할 필요 X 
        scrollHeight : 0, // 섹션의 실제 스크롤 높이 (이벤트가 들어오면서 계산)
        objs : {
          container : document.querySelector('#scroll-section-0'),
          canvas : document.querySelector('#video-canvas-0'),
          context : document.querySelector('#video-canvas-0').getContext('2d'),
          title : document.querySelector('.section-0-title'),
          title_text : document.querySelector('.section-0-title .title'),
          text : document.querySelector('.section-0-text'),
          videoImages : [] // 이미지를 저장할 배열 
        }, 
        values : {
          videoImageCount :  64, // 사용할 이미지의 갯수 
          imgSequence : [0,64],  // 이미지 시퀀스지정 (첫 프레임과 끝 프레임 설정)
          canvas_opacity : [1,0, {start : 0.0, end: 0.5}], // 캔버스의 투명도를 스크롤 비중에 따라 조절 
          
          title_opacity : [1,0 , {start: 0.1, end : 0.55}],
          title_scale : [1, 2, {start : 0.1, end :  0.6}],

          text_opacity : [0, 1, {start : 0.7, end :  0.9}],
          text_scale : [1, 1.5, {start : 0.7, end :  0.9}],

          text_opacity_out : [1, 0, {start:0.91, end: 0.95}]
        } 
      }, // 첫 번째 section에 대한 info 
      {
        type: 'sticky',
        heightNum : 2,
        scrollHeight : 0,
        objs :{
          container : document.querySelector('.scroll-1-text'),
          video : document.querySelector('#scroll-section-1 video'),
          words : [] // . 으로 나눈 글자들을 넣을 배열 

        },
        values :{
          video_opacity : [0, 1, {start: 0.1, end: 0.3 }],
          text_opacity : [0.5, 1, {start: 0 , end: 1}],
          
          video_opacity_out : [1, 0, {start: 0.7 , end: 1}] 
        }

      }// 두 번째 section에 대한 info 

    ]// sectionInfo
    function setWords(){
      const splitWords = sectionInfo[1].objs.container;
      const content = splitWords.innerText; 
      const words = content.split(/\./);
      splitWords.innerHTML = '';
      words.forEach((el, idx)=>{
        const text = document.createElement('span');
        text.innterHTML = `${el.trim()}. `;
        text.classList.add('word');
        sectionInfo[1].objs.words.push(text);
        splitWords.appendChild(text);
        console.log(words);
      })
    }
    
    function setCanvasImage (){
      // 캔버스에 보여줄 이미지를 로드 
      let imgItem; 
      //section01 
      for (let i = 0; i < sectionInfo[0].values.videoImageCount; i++ ){
        imgItem = new Image();
        imgItem.src =  `./images/section01/00${i + 1}.png`; // 이미지 경로 설정 
        sectionInfo[0].objs.videoImages.push(imgItem)
        console.log(imgItem)
      }
    }// setCanvasImage
    function setLayOut(){
      // sectionInfo 에서 받은 heightNum 을 받아서, section길이를 늘려주는 함수 
      for (let i = 0;  i < sectionInfo.length; i++){
        if(sectionInfo[i].type === 'sticky'){
          sectionInfo[i].scrollHeight = sectionInfo[i].heightNum * window.innerHeight;
        } else if(sectionInfo[i].type === 'normal'){
          sectionInfo[i].scrollHeight = sectionInfo[i].objs.container.offsetHeight;
        }
        sectionInfo[i].objs.container.style.height = `${sectionInfo[i].scrollHeight}px`
      }
      yOffset = window.pageYOffset 
      let totalScrollHeight = 0;
      for(let i =0; i < sectionInfo.length; i++){
        totalScrollHeight += sectionInfo[i].scrollHeight;
        if(totalScrollHeight >= yOffset){
          currentSection = i;
          break
        }
      }
      document.body.setAttribute('id',`show-section-${currentSection}`)
    }//setLayOut
    // 스크롤을 할 때마다 값을 변하게 해주는 요소 
    function scrollLoop() {
      // 스크롤 애니메이션 
      newSection = false; 
      prevScrollHeight = 0; 
      console.log('11');
      for(let i = 0; i< currentSection; i++){
        prevScrollHeight += sectionInfo[i].scrollHeight;
      }
      const currentScrollHeight = sectionInfo[currentSection].scrollHeight;
      
      //다음 섹션으로 전환 
      if(yOffset > prevScrollHeight + currentScrollHeight){
        if(currentSection < sectionInfo.length -1){
          newSection = true; 
          currentSection++
        }
        document.body.setAttribute('id', `show-section-${currentSection}`)
      } else if (yOffset < prevScrollHeight){
        if(currentSection > 0){
          newSection = true;
          currentSection--;
        } else {
          currentSection = 0;
        }
        document.body.setAttribute('id', `show-section-${currentSection}`)
      }
      //currentSection 이 변경된 후에 prevScrollHeight의 값을 재 계산
      prevScrollHeight = 0;
      for (let i = 0; i< currentSection; i++){
        prevScrollHeight += sectionInfo[i].scrollHeight
      }
      if(newSection) return // 새로운 섹션이 있을 때에는 애니메이션을 실행시키지 않는다. 
      playAnimation() // 현재 섹션에서 애니메이션이 적용되야하기 때문에. 
    } // scroll loop 

    function loop(){
      // requestAnimationFrame 를 사용해서, 화면 갱신마다 애니메이션을 부드럽게 실행해주는 함수 
      delayYOffset = delayYOffset + (yOffset - delayYOffset) * acc 
      //애니메이션의 부드러움을 제어하는 함수. 
      // 스크롤의 지연효과를 만들어 즉시 스크롤이 즉시 반영이 아니라.  부드럽게 따라오도록 만들어줌
      // 새로운 section 에 진입하지 않았다면 애니메이션 효과 적용 
      if(!newSection) {
        if(currentSection === 0 ){
          const currentYOffset = delayYOffset - prevScrollHeight;
          const objs = sectionInfo[currentSection].objs // 현재 섹션에 있는 객체를 찾음 
          const values = sectionInfo[currentSection].values // 현재 섹션의 효과 찾기 
          objs.context.clearRect(0,0,objs.canvas.width, objs.canvas.height);
          let sequence = Math.round(calcValue(values.imgSequence, currentYOffset))
          
          if(objs.videoImages[sequence]){
            objs.context.drawImage(objs.videoImages[sequence],0,0)
          }
        }
      }
      if(delayYOffset <1){
        scrollLoop()
      }
      rafId = requestAnimationFrame(loop)
      // 스크롤의 위치가 지연된 스크롤 위치와 차이가 없으면 애니메이션이 중단됨. 
      if(Math.abs(yOffset - delayYOffset) <1){
        cancelAnimationFrame(rafId)
        rafState = false // 애니메이션이 실행중이지 않음 체크 

      }
    }

    function calcValue (val, currentY){
      let resultValue; // 최종적으로 반환할 계산된 값이 들어올 변수 
      const scrollH =  sectionInfo[currentSection].scrollHeight; // 현재 섹션의 전체 스크롤 길이 
      const scrollRatio = currentY / scrollH  // 현재 섹션에서 스크롤 된 비율 
      
      //val의 배열 길이가 3이면, 애니메이션의 시작과 끝 범위가 지정된 경우로 봄. 
      if(val.length === 3 ){
        const scrollStart = val[2].start * scrollH; // 애니에미션이 시작할 위치 (스크롤의 높이 기준 )
        const scrollEnd = val[2].end * scrollH; //  애니에미션이 끝나는 위치 (스크롤의 높이 기준 )
        const scrollRealH = scrollEnd - scrollStart;  // 애니메이션이 진행되는 구간의 스크롤 높이 

        // 현재 스크롤의 위치가 애니메이션 진행 영역 안에 있는 경우
        if(currentY >= scrollStart  && currentY <= scrollEnd){
          resultValue = ((currentY - scrollStart) / scrollRealH ) * (val[1] - val[0]) + val[0]
          // 애니메이션의 진행 비율을 계산하고, 값으로 반환 할 것임. 

        } else if (currentY < scrollStart ){
          resultValue = val[0]
          // 스크롤이 애니메이션 범위보다 위에 있으면, 시작값으로 고정
        } else if ( currentY > scrollEnd){ 
          // 스크롤이 애니메이션 범위보다 아래에 있으면, 시작값으로 고정
          resultValue = val[1]
        }

      }else {
        // 배열의 길이가 2 일 경우 애니메이션 섹션 전체에서 발생 
        // 스크롤 비율에 따라 값을 계싼 
        resultValue =  scrollRatio * (val[1] - val[0]) + val[0];
      }
      return resultValue
    }//calcValue 

    function playAnimation(){
      const objs = sectionInfo[currentSection].objs;
      const values  = sectionInfo[currentSection].values;
      let currentYOffset = yOffset - prevScrollHeight; //색션내에서 스크롤의 위치
      const scrollH = sectionInfo[currentSection].scrollHeight; // 현재 섹션의 스크롤 높이
      let scrollRatio = currentYOffset / scrollH // 현재 섹션 내에서 스크롤 된 비율 (0~1)

      // 이전 섹션으로 넘어가는 경우 currentYoffset 이 음수가 되는 것을 방지 0 으로 고정 

      if (currentYOffset < 0) {
        currentYOffset = 0; 
        scrollRatio = 0;
      } 
      //섹션을 끝까지 스크롤 한 경우 ratio 값이 1보다 커지는 경우를 방지 
      if(scrollRatio > 1){
        scrollRatio = 1; 
      }
      switch(currentSection){
        // 섹션의 인덱스 마다 다른 애니메이션이 적용되기 때문에, if 문 보다는 switch 문으로 작성하는 것이
        // 깔끔
        case 0 : 
          if(scrollRatio <= 0.6) {
            objs.title.style.opacity = calcValue(values.title_opacity, currentYOffset)
            objs.title.style.transform =  `translate(-50%, -50%) scale(${calcValue(values.title_scale, currentYOffset)})`
          }
          // text 
          if(scrollRatio> 0.6 && scrollRatio <= 0.9) {
            objs.text.style.opacity = calcValue(values.text_opacity, currentYOffset)
            objs.text.style.transform =  `translate(-50%, -50%) scale(${calcValue(values.text_scale, currentYOffset)})`
          } else {
            objs.text.style.opacity = calcValue(values.text_opacity_out, currentYOffset)
          }
          break
        case 1: 
          if(scrollRatio <= 0.8){
            video.play();
            objs.video.style.opacity = calcValue(values.video_opacity,currentYOffset);
          } else {
            objs.video.style.opacity = calcValue(values.video_opacity_out,currentYOffset);
          }
          const triggerPoint = window.innerHeight / 1.5 // 뷰포트의 중간 지점 
          let activeIndex = -1; 
          objs.words.forEach ((el, idx)=> {
            const rect = el.getBoundingClientRect();
            const elementMiddle = rect.top + rect.height / 2 
            if (elementMiddle < triggerPoint){
              activeIndex = idx
            } 
          })
          objs.words.forEach((el,idx)=> {
            if(idx === activeIndex){
              el.style.opacity = 1
            } else {
              el.style.opacity = 0.5
            }
          })
          break;
      }// switch 
    }
    //메뉴 fixed 
    function fixedMenu(){
      if(yOffset > 1) {
        document.body.classList.add('nav-fixed')
      }else {
        document.body.classList.remove('nav-fixed')
      }
    }
    window.addEventListener('load', ()=>{
      video.pause();
      setLayOut();
    })
    window.addEventListener('scroll', ()=>{
      yOffset = window.pageYOffset
      fixedMenu()
      scrollLoop()
      playAnimation()

      if(!rafState) {
        rafId = requestAnimationFrame(loop);
        rafState = true;
      }
    })
    setWords()// 
    setCanvasImage() // 스크립트 실행시 이미지 미리 로드 
  })()