
window.onload = () =>{
  slider();
}

function slider(){
  const slider = document.querySelector('#slider');
  const panel = document.querySelector('.panel');
  const panelItem = document.querySelectorAll('.panel > li');
  const btnItem = document.querySelectorAll('.navi > li');
  const circle = document.querySelector('#circle');
  let speed = 500;
  let timer;
  let enableClick = true;

  btnItem.forEach((el)=>{
    el.addEventListener('click', onClick)
  })

  function onClick(){
    if (!enableClick) return;  // 클릭이 가능할 때만 실행
    const idx = Array.from(btnItem).indexOf(this);
    // console.log(idx);
    const panelWidth = parseInt(getComputedStyle(slider).width);
    // console.log(panelWidth);
    //getComputedStyle(선택자) // 선택자에 있는 모든 css 속성값을 반환해 준다. 

    // activeSlide(idx, btnItem);
    // activeSlide(idx, panelItem);
    // activeSlide(idx);
    // moveSlide(panel,{prop: 'left', val: -panelWidth * idx, duration : speed 
    // })
    // btnItem.forEach(el =>{
    //   el.classList.remove('on');
    // })
    // btnItem[idx].classList.add('on');
    // panelItem.forEach(el=>{
    //   el.classList.remove('on');
    // })
    // panelItem[idx].classList.add('on');
    if (enableClick){
      activeSlide(idx, btnItem);
      activeSlide(idx, panelItem);
      moveSlide(panel,{prop: 'left', val: -panelWidth * idx, duration : speed 
      })
      enableClick = false;
    }
    circle.className = '';
    circle.classList.add(`rot${idx+1}`)
  }

  function activeSlide(idx, item){
    item.forEach(el=>{
      el.classList.remove('on')
    })
    item[idx].classList.add('on')
  }
  /*
  
  */
  function moveSlide(el, opt){
    // console.log(opt);
    let startActive = performance.now();
    // performance.now(); 애니메이션이 실행되는데 걸리는 시간을 모니터링 
    // console.log(startActive);
    let currentVal; // 현재 애니메이션이 적용되는 객체의 속성을 전달해줄 변수 

    if(opt.prop === 'opacity') {
      currentVal = parseFloat(getComputedStyle(el)[opt.prop]);
      // console.log(currentVal);
    } else {
      currentVal = parseInt(getComputedStyle(el)[opt.prop]);
      // console.log(currentVal)
    }
    //getComputedStyle 로 left나 opacity 의 속성값을 가져옴 
    // opacity 는 소숫점 사용하기에 parseFloat , left는 정수이므로 parseInt 
    if (currentVal !== opt.val){
      requestAnimationFrame(slide);

    }
    function slide(time){
      // slide는 requestAnimationFrame 의 프레임을 처리 
      let lastTime =  time - startActive; 
      // 애니메이션이 시작된 이후 경과된 시간을 계산
      // let currentTime = lastTime / opt.duration;
      /* 
      currentTime 은 애니메이션이 얼마나 진행되었는지, 받아오는 변수 ,
      보통 0~1 사이의 값을 가지고 있다.
      0 = 시작전, 1 은 완료 

      */
      let currentTime = Math.min(lastTime / opt.duration, 1);  // 애니메이션 진행도를 1 이하로 제한
      // if (currentTime < 0){
      //   currentTime = 0
      // currentTime 이 0 보다 작으면 currentTime 을 0 으로 설정 
      // 0 보다 아래인 음수로 처리되는 경우를 방지하기 위해서 최소값을 0 으로 제한. 
      // } 
      // if (currentTime > 1) {
      //   currentTime = 1 
      // }
      // currentTime 이 1 보다 클 경우 최대 값을 1 보다 설정.  
      // duration 값보다 애니메이션이 더 진행되는 것을 방지하기 위해서 설정 . 
      if( currentTime < 1 ) {
        timer = requestAnimationFrame(slide);
      } else {
        cancelAnimationFrame(timer); 
        enableClick =true;  // 애니메이션이 끝난 후 다시 클릭 가능하게 설정 
      }
      let result = currentVal + (opt.val - currentVal) * currentTime;
      if(opt.prop === 'opacity'){
        el.style[opt.prop] = result
      } else {
        el.style[opt.prop] = result + `px`;
      }
    }
  }
}
/* 
requestAnimationFrame 과 setinterval 의 차이 
requestAnimationFrame 
-  브라우저가 화면을 새로 갱신하기 전에 호출된 콜백 함수를 실행 
- 브라우저가 새로 갱신하는 시간이 보통 초당 60 프레임을 실행
- 브라우저가 갱신되는 시간과 동기화되서 사용 
- 화면 갱신과 동기화해서 사용하기 떄문에 애니메이션이 좀 더 부드럽게 실행 
- 메모리 사용면에서도 효율적 
- 브라우저가 표현 할 수 있는 최적의 프레임 (60fps, 16 ms 마다 한번씩 랜더링 할때마다 콜백 함수를 실행  )



setInterval 
-특정 지점에서 애니메이션을 실행하도록 하는 메서드  
- 지정된 시간 간격 마다 콜백함수를 반복 실행 (화면이 랜더링 되는 시간을 체크하지 않는다.)
- 시간 간격이 지날수록 , 프레임이 차이나기 시작함. 
- 브라우저가 실행되고 있지 않아도, 계속 실행되기 때문에 리소스의 낭비 
*/