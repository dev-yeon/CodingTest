// 라이브러리 형식으로 . 

/*
slick 이나, swiper 같은 라이브러리 형태로 특정 기능을 구현해서 객체화 시킨다. 

인스턴스의 갯수, 인스턴스가 사용하는 리소스의 양, 코드에 의해서 달라지지만, 

평균적으로 본다면 10개 미만 에서는 큰 문제가 발생할 여지는 적다. 
*/
//constructor 로 초기화가 가능하게 함. 
class Slider {
  constructor(el, opt){
    // class에서 this는 인스턴스임
    this.init(el, opt);
    this.bindingEvent();
  }
  init(el, opt){
    let elOpt ={
      //기본 선택자를 지정 
      panel : this.panel,
      btns : this.btns,
      slideSpeed : this.slideSpeed 
    }

    this.opt = Object.assign({},elOpt,opt);
    // 선택자 객체에서 나열이 가능한 속성으로 복사해서 객체로 변환 
    /*
    Object.assign(); 하나 이상의 소스 객체에서 대상 객체로 속성을 복사해서
    병합해주는 매서드 
    첫번째로 받은 객체를 반환한다. 
    {}  :  빈 객체 를 생성한다. elOpt와 opt의 속성이 병합되서 들어갈거다. 
    elOpt: 빈 객체에 복사될 객체 
    opt : 객체의 속성이 elOpt에서 복사된 속성에 덮어 쓰기 됨. 

    */ 
    this.frame = document.querySelector(el);

    this.panel = this.frame.querySelector(this.opt.panel);
    this.panelItem = this.panel.querySelectorAll('li'); 

    this.btns = this.frame.querySelector(this.opt.btns);
    this.btnsItem =this.btns.querySelectorAll('li');

    this.btnsArr = Array.from(this.btnsItem); // li를 배열로 변환 
    this.slideSpeed = this.opt.slideSpeed; // 진행시간을 설정 
    //this.slideSpeed = this.opt.slideSpeed; //  진행시간을 설정 
    this.enableClick = true;
    this.timer; 
    // console.log(el);
    // console.log(this.opt);
    // console.log(this.frame);
    // console.log(this.panel);
    // console.log(this.panelItem);
    // console.log(this.btns);
    // console.log(this.btnsItem);
  }//init 

  bindingEvent(){
    this.btnsItem.forEach((el)=>{
      el.addEventListener('click',()=>{
        let activeIndex = this.btnsArr.indexOf(el);
        // console.log(activeIndex);
        /*
        this를 사용하지 않는 이유는 
        - this는 인스턴스 자체를 의미하기 때문에, 현재 이벤트에서 this와는
        찾으려는 객체와 거리가 멀다. 
        (일반 함수에서 this와 class에서 this의 차이)
        */
      let isOn = el.classList.contains('on');
      let panelWidth = parseInt(getComputedStyle(this.frame).width)
      //contains() = 문자열을 찾아주는 이벤트 
      if(isOn){
        return 
      }// isOn이 true이면, slide를 실행하지 않고 즉시 종료하도록 

      if (this.enableClick){
        this.animate(this.panel, {
          prop: 'left',
          val: -panelWidth * activeIndex,
          duration : this.slideSpeed,
          callback : ()=> {
            if(this.opt.callback){
              this.opt.callback(activeIndex + 1);
            }
          }
        })
        this.activeSlide(activeIndex, this.btnsItem);
        this.activeSlide(activeIndex, this.panelItem);
        this.enableClick = false;
      }
      })
    })
  }//event 

  animate(item, option ){ 
    let startActive = performance.now()
    let currentVal; 
    let self = this
    /*
    this 를 사용 할 때, 변수에 담아서 사용하는 것과 , this 자체로 사용하는 것의 차이 
    
    함수와 콜백 함수를 처리할 때 특정 컨텍스트 내에서 사용 할 때 차이가 발생 
    
    let self = this 는 특정 컨텍스트 내부에서 this 의 값을 캡쳐해서 저장한 값 이 담겨져 있다. 의미를 변하지 않도록 한다. */
    
    if(option.prop === 'opacity') {
      currentVal = parseFloat(getComputedStyle(item)[option.prop]);
    }else {
      currentVal = parseInt(getComputedStyle(item)[option.prop]);
    }
    if(currentVal !== option.val){
      requestAnimationFrame(active);
    }
    function active(time){
      let lastTime = time - startActive;
      let currentTime = lastTime / option.duration;
      if (currentTime > 1){
        currentTime = 1 
      }
      if (currentTime < 1){
        self.timer = requestAnimationFrame(active);
      }else {
        cancelAnimationFrame(self.timer);
        self.enableClick = true;
      }
      if(option.callback) {
        option.callback();
      }
      let result = currentVal + (option.val -currentVal) * currentTime
      if (option.prop === 'opacity'){
        item.style[option.prop] = result
      } else {
        item.style[option.prop] = result + 'px'
      }
    }
  }
  activeSlide(idx, item){
    for (let el of item){
      el.className ='';
    }
    item[idx].classList.add('on');
  }
}