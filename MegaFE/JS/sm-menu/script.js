window.onload = ()=> {
  menu()
}

function menu(){
  /* 
  1. 메인 메뉴를 over 하면 over된 메인메뉴의 서브메뉴만 드랍 
  2. 서브메뉴의 길이에 따라서. header의 height가 달라짐.  
  
  */
 // a 한테만 이벤트를 주고 싶다면 querySelector , a,b,c,d 등등에 주고 싶다면(중복) 
  const header = document.querySelector('.header');
  const mainMenu = document.querySelectorAll('.main-menu > li');
  const subMenu = document.querySelectorAll('.sub-menu');
  const mainMenuItem = document.querySelectorAll('.main-menu > li > a');
  const subMenuItem = document.querySelectorAll('.sub-menu > li > a'); //focus할때 적용되도록 하기 
  const headerH = header.offsetHeight;
  console.log(headerH)

  mainMenu.forEach((el)=>{
  const mainMenuLink = el.querySelector('a');
  //각각의 mainMenu에 있는 a 태그를 선택 
  mainMenuLink.addEventListener('mouseenter', onMenu);
  mainMenuLink.addEventListener('focus', onMenu);
  el.addEventListener('mouseleave', offMenu);
  //enter 와 leave로 드롭박스 형식일때 짠다. 

  el.addEventListener('focusout', function(e){
    if(!el.contains(e.relatedTarget)){
      offMenu();
    }
    // !el.contains = 특정 요소가 다른 요소를 포함하는지 여부를 확인하는 메서드 
    // 현재 로직에서는 포커스가 이동한 새로운 요소가 el의 자식요소인지 확인하는 용도로 쓰임 
    // relatedTarget = 이벤트가 발생할 때 포커스가 새로운 대상을 참조 
  });
});
  subMenuItem.forEach((el)=>{
    el.addEventListener('focus', function(){
      subMenuItem.forEach((link)=>{
        link.classList.remove('on');
      })
      this.classList.add('on');
    })
  })
  // subMenuItem.forEach((el)=>{
  //   el.addEventListener('focus', onSubMenuFocus);
  // });

// 일반 function의 this는 이벤트를 일으킨 나. 

// function onSubMenuFocus(){
//   offMenu();
//   const subMenuItem = this.parentElement.parentElement;
//   if (subMenuItem){
//     subMenuItem.classList.add('on');
//     headerHeight(subMenuItem);
//   }
// }
function onMenu(){
  offMenu() // 기존에 열린 메뉴를 다 닫는 reset 개념

  this.classList.add('on') //mainMenu
  const subMenuItem = this.nextElementSibling; 
  // console.log(subMenuItem);
  if(subMenuItem) {
    // subMenu가 있을때에만 on을 붙인것 
    subMenuItem.classList.add('on');
    headerHeight(subMenuItem);
  }
}
function headerHeight(subMenuItem){
  // 현재 over 된 메인메뉴의 서브 메뉴의 li를 찾아서 li 의 높이 값 * 
  //갯수만큼 header 의 높이값에 대입하는 함수 
  const subMenuLi = subMenuItem.querySelectorAll('li');
  const subMenuLiSize = subMenuLi.length;
  // console.log(subMenuLiSize);
  if (subMenuLiSize > 0) {
    const subMenuH = subMenuLi[0].offsetHeight;
    const gnbH = subMenuH * subMenuLiSize;
    // console.log(subMenuH);

    header.style.height = `${gnbH + headerH }px`

    }
  }
  function offMenu(){
    subMenu.forEach((el)=>{
      el.classList.remove('on');

    })
    mainMenu.forEach((el)=>{
      el.classList.remove('on');
    })
    mainMenuItem.forEach((el)=>{
      el.classList.remove('on');
    })
    header.style.height = `${headerH}px`

  }

}