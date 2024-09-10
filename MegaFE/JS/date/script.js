window.onload = () => {
  formData();
}
/*
select를 찾아서 그 안에 option들의 값을 찾아서 내용을 새로 생성되는 ul > li구조의 형태에
그대로 이식하는 것

1. select에 있는 option의 갯수 파악
2. option안에 있는 값을 출력
3. 1,2 에 있는 내용을 새로 생성되는 태그에 이식

*/
//셀렉트 외부 클릭 이벤트 감지 
// window.addEventListener('click', (event)=>{
//     document.querySelectorAll('.select-styled.active').forEach(activeSelect => {
//         if(!activeSelect.contains(event.target)){
//             activeSelect.classList.remove('active');
//             const list = activeSelect.nextElementSibling;
//             if(list){
//                 list.style.display ='none'
//             }
//         }
//     });
// });

function formData() {
  const selects = document.querySelectorAll('select');
  // console.log(selects)

  selects.forEach(el => {
      const selectItem = el.children.length;
      // console.log(selectItem)
      el.classList.add('select-hidden');
      //select는 화면상에서 출력되면 안되기 때문에 전체적으로 display:none처리

      const wrapper = document.createElement('div');
      wrapper.className = 'select';//새로 생성된 div에 class를 부여
      el.parentNode.insertBefore(wrapper, el);
      wrapper.appendChild(el);

      const styledSelect = document.createElement('div');
      styledSelect.className = 'select-styled';
      styledSelect.textContent = el.children[0].textContent;
      wrapper.appendChild(styledSelect)

      const list = document.createElement('ul');
      list.className = 'select-options';
      wrapper.appendChild(list);

      for (let i = 0; i < selectItem; i++) {
          const listItem = document.createElement('li');
          listItem.textContent = el.children[i].textContent;
          listItem.setAttribute('rel', el.children[i].value)
          list.appendChild(listItem)
      }

      const listItems = list.querySelectorAll('li');
      // console.log(listItems)
      //list는 미리 만들어진 요소가 아닌 중간에 스크립트로 추가된 요소이기 때문에
      //추가되기 전에 미리 찾아놓게 되면 찾을수 없는 에러가 나오게 된다.
      //스크립트로 추가한 요소를 찾는 경우 추가된 코드 다음에 찾아야 한다.

      styledSelect.addEventListener('click', (e) => {
        // e.stopPropagation(); // 상위 element에서 이벤트를 전파하는걸 막아줌
          document.querySelectorAll('.select-styled.active').forEach(active => {
              if (active !== styledSelect) {
                  active.classList.remove('active');
              }
          })
          styledSelect.classList.toggle('active');
          list.style.display = list.style.display === 'block' ? 'none' : "block";
      })
      listItems.forEach(item=>{
          item.addEventListener('click', (e)=>{
              styledSelect.textContent = e.target.textContent;
              // console.log(e.target.textContent)
              styledSelect.classList.remove('active');
              el.value = e.target.getAttribute('rel');
              list.style.display = 'none'
          })
      })
      document.addEventListener('click',(e)=>{
        // styledSelect.classList.remove('active');
        // list.style.display = 'none';
        if(!styledSelect.contains(e.target) && !list.contains(e.target)){
            styledSelect.classList.remove('active');
            list.style.display = 'none';
        }
    });
});
}