window.onload = () =>{
  const bgSlider = document.querySelector('#slider');
  const slider = document.querySelector('#slider2');
  //버튼

  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');

  phoneSlider(); 

  function phoneSlider(){
    const itemUl = slider.querySelector('ul');
    const itemLi = itemUl.querySelectorAll('li');
    const itemSize = itemLi.length;
    console.log(itemSize);

    itemUl.style.width =  `${100 * itemSize}%`
    itemUl.style.height = `100%`;
    itemUl.style.marginLeft = `-100%`;

    //li 설정 
    itemLi.forEach((el)=> {
      el.style.width =  `${100 / itemSize}%`
      el.style.height =  `100%`; 
      el.style.float =  `left`;
    })

    itemUl.insertBefore(itemLi[itemSize-1], itemUl.firstChild);
  }

  next.addEventListener('click',function(){
    nextSlider();
  })

  function nextSlider(){
    const itemUl = slider.querySelector('ul');
    const itemLiw = itemUl.querySelector('li').offsetWidth;
    console.log(itemLiw);

    itemUl.style.transition = `margin-left ${speed}ms`;
    itemUl.style.marginLeft = `-${itemLiw * 2}px`
    
    itemUl.appendChild(itemUl.querySelector('li:first-of-type'));

    setTimeout(() => {
      itemUl.appendChild(itemUl.querySelector('li:first-of-type'));
      itemUl.style.marginLeft = `-${itemLiw}px`
      itemUl.style.transition = ``;
    },speed )
  }
}