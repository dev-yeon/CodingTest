window.onload = () =>{
  const forData = new FormData();
}

class ForData{
  constructor() {
    
    this.selects = document.querySelectorAll('select'); 
    this.init();// 보통 초기값이라는 의미
    this.bindingEvent();
  }
  init(){
    /* 
    init은 초기 값을 의미하는 말로, 선택자, 시작값을 작성할 때 선언해서 사용 함. 

    */ 
    this.selects.forEach(el=> {
      const selectItem = el.children.length;
      el.classList.add('select-hidden'); 
      const wrapper = document.createElement('div');
      wrapper.className = 'select'; 
      el.parentNode.insertBefore(wrapper,el);
      wrapper.appendChild(el)

      const styledSelect = document.createElement('div');
      styledSelect.className = 'select'
      styledSelect.textContent =el.children[0].textContent
      wrapper.appendChild(styledSelect);

      const list = document.createElement('ul');
      list.className = 'select-options';
      wrapper.appendChild(list)
      
      for(let i = 0; i< selectItem; i++){
        const listItem = document.createElement('li');
        listItem.textContent = el.children[i].textContent;
        listItem.setAttribute('rel', el.children[i].value);
        list.appendChild(listItem);
      }

      this.bindingEvent(styledSelect, list, el);
    })
  }
  bindingEvent(styledSelect, list, el){
    const listItems = list.querySelectorAll('li');
    console.log(listItems)

    styledSelect.addEventListener('click',(e)=>{
      e.stopPropagation();

      document.querySelectorAll('.select-styled.active').forEach(active=>{
        if(active !== styledSelect){
          active.classList.remove('active');
          active.nextElementSibling.style.display = 'none'; 
        }
      })
      styledSelect.classList.toggle('active'); 
      list.style.display = list.style.display === 'block' ? 'none' : 'block'
    })
    listItems.forEach(item =>{
      item.addEventListener('click', (e)=>{
        // 실제로 눈에 보이는 작업은 아니지만 데이터 값을 전송하기 위함. 
        e.stopPropagation();
        styledSelect.textContent = e.target.textContent;
        styledSelect.classList.remove('active');
        el.value = e.target.getAttribute('rel');
      })
    })

    document.addEventListener('click',()=>{
      styledSelect.classList.remove('active');
      list.style.display = 'none';
    })
  }
} 