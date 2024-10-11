// <⚠️ DONT DELETE THIS ⚠️>
import './styles.css';
const colors = ['#1abc9c', '#3498db', '#9b59b6', '#f39c12', '#e74c3c'];
// <⚠️ /DONT DELETE THIS ⚠️>
const title = document.querySelector('h2');



/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {  // 마우스가 title 위에 올라갔을 때 처리
  handleMouseEnter: function () {
    title.innerText = 'The Mouse is here!';
    title.style.color = colors[0];
  },

  // 마우스가 title을 떠났을 때 처리
  handleMouseLeave: function () {
    title.innerText = 'The Mouse is gone!';
    title.style.color = colors[1];
  },

  // 창 크기가 변경되었을 때 처리
  handleWindowResize: function () {
    title.innerText = 'You just resized!';
    title.style.color = colors[2];
  },

  // 우클릭 감지 함수
  handleRightClick: function (event) {
    event.preventDefault(); // 기본 우클릭 메뉴를 차단
     
    title.innerText = 'You right-clicked!';
    title.style.color = colors[4];
  }};
// 이벤트 리스너 등록
title.addEventListener(
  'mouseenter',
  superEventHandler.handleMouseEnter.bind(superEventHandler)
);
title.addEventListener(
  'mouseleave',
  superEventHandler.handleMouseLeave.bind(superEventHandler)
);
window.addEventListener(
  'resize',
  superEventHandler.handleWindowResize.bind(superEventHandler)
);
window.addEventListener(
  'contextmenu',
  superEventHandler.handleRightClick.bind(superEventHandler)
);