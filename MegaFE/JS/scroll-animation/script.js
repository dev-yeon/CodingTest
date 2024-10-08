window.onload = () =>{
  /* 
  1. 스크롤이 되는 값을 받아와서, 특정 위치에서 이미지를 교체 해서 연속된 동작처럼 보이게 하기. 
  2. 특정 스크롤 위치에서 텍스트 나오게 하기 .
  */
  const wrapper = document.querySelector('.canvas_wrap');
  const canvas = document.createElement('canvas'); // canvas태그 생성 
  const scrollBody = document.querySelector('.fix_motion');
  const ctx = canvas.getContext('2d');
  //getContext() canvas 태그에서 사용하는 매서드 중 그림을 그리는 기능을 제공하는 매서드 
  //canvas 태그는 그래픽을 그리는 도화지의 기능을 하는 태그이다. 

  const imgSrc = './images/seq/';
  const imgFormat = '.jpg'
  const imgLength = 116;
  const imgArr =[];
  let imgCurrent = 0; 

  let scrollH; 
  let sectionOffsetTop;
  let sectionTop;
  let scrollW;
  let scrollPercent;
  let percent; 
  
  let imgWidth;
  let imgHeight; 

  init(); 

  function init(){
    wrapper.appendChild(canvas);
    for(let i =0; i<imgLength; i++){
      const img = new Image();
      const imgPath =   `${imgSrc}${i}${imgFormat}`;
      console.log(imgPath);
      img.src = imgPath; 

      img.onload = () => {
        imgCurrent += 1; 
        if(imgCurrent=== imgLength) {
          setProperty();
          scrollFunc(); 
        }
      }
      imgArr.push(img);
    }
  }
  function setProperty(){
    scrollH = scrollBody.offsetHeight;  // scrollBody 의 높이 
    scrollW = window.pageYOffset; // 현재 스크롤의 위치 
    sectionOffsetTop = scrollBody.getBoundingClientRect().top + scrollW; //페이지 상단에서 scrollbody 의 시작 위치 
    sectionRealH = scrollH - window.innerHeight;
    sectionTop = scrollW - sectionOffsetTop;
    // scrollPercent = sectionTop / scrollH;
    scrollPercent = sectionTop / sectionRealH;
    
    percent = scrollPercent *100; 
    if(sectionRealH <= 0 ){
      scrollPercent = 0 // 최소값 설정
    }
    imgWidth = window.innerWidth; 
    imgHeight = window.innerHeight; 

    canvas.width = imgWidth;
    canvas.height  = imgHeight; 

  }
  function scrollFunc(){
    const sequence = Math.min(imgLength - 1, Math.max(0, Math.floor(imgLength * scrollPercent)))
    if (imgArr[sequence]){
      canvasRender(sequence);
    }
  }

  function canvasRender(sequence){
    ctx.clearRect(0,0,imgWidth,imgHeight);
    ctx.drawImage(imgArr[sequence],0,0,imgWidth,imgHeight);
  }
  window.addEventListener('scroll',()=>{
    setProperty();
    scrollFunc(); 
  })

}