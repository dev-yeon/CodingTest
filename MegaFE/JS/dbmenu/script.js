/*
메뉴 만들기
https://www.db-dvp.co.kr/ 참고 (해당 사이트에 포커스는 구현되어 있지 않습니다.)

1. 메인메뉴에 마우스를 오버하면 해당하는 메인메뉴의 서브메뉴만 출력됩니다.
2. 다른 메뉴로 옮겨지면 기존의 서브메뉴를 닫히고 새로운 서브메뉴가 출력됩니다.
3. 위의 행동은 css에서 힌트를 얻을수 있습니다.

4. tab키로 메인메뉴에 접근하면 서브메뉴가 내려옵니다.
5. tab키는 메인메뉴와 그 서브뮤네를 순차적으로 순회하며 해당 메인메뉴의 서브메뉴의 마지막 서브메뉴에 포커스가 벗어나면 
서브메뉴는 사라집니다.
6. 위의 행동은 css에서 힌트를 얻을수 있습니다.
*/

window.onload = () =>{
  menu();
}

function menu() {
  // 모든 메인 메뉴 항목을 선택 
  const mainMenus = document.querySelectorAll('.gnb > li');

  mainMenus.forEach(menu => {
    // 마우스를 올렸을 때, mouseover 이벤트 
    menu.addEventListener('mouseover', () => { 
      //모든 서브메뉴 숨기기
      hideAllSubmenus();
      //현재 메뉴의 서브메뉴만 표시 
      const submenu = menu.querySelector('.submenu');
      if (submenu){
        submenu.classList.add('on');
      }
      });
    // 마우스가 메뉴에서 벗어났을 때 (mouseleave 이벤트)
    menu.addEventListener('mouseleave', ()=>{
      const submenu = menu.querySelector('.submenu');
      if(submenu){
        submenu.classList.remove('on');
      }
    });
    // 키보드로 tab 키를 통해 접근하였을 때, focus in 이벤트 
    menu.addEventListener('focusin', ()=> {
      hideAllSubmenus();
      const submenu = menu.querySelector('.submenu');
      if(submenu){
        submenu.classList.add('on');
      }
    });
    // 포커스가 벗어났을 때.(focusout이벤트)
    menu.addEventListener('focuscout',()=> {
      const submenu = menu.querySelector('.submenu');
      if(submenu){
        submenu.classList.remove('on');
      }
    });
  });
  // 서브메뉴를 모두 숨기는 함수
  function hideAllSubmenus() {
    const submenus = document.querySelectorAll('.submenu');
    submenus.forEach(submenu => {
      submenu.classList.remove('on');
    })
  }
}