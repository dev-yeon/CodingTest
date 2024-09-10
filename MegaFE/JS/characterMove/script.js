
window.onload = () =>{

  const btns =document.querySelectorAll('.list  > li');
  const title = document.querySelectorAll('.title > li');
  const pic = document.querySelectorAll('.pic > li')
  btns.forEach((el,idx)=>{
    el.addEventListener('click', ()=> {
      // console.log(idx)
      activation(btns,idx);
      activation(title,idx);
      activation(pic,idx);
    })
  })
  function activation(item, idx){
    for(let el of item){
      el.classList.remove('on');
    }
    item[idx].classList.add('on');
  }

  window.addEventListener('mousemove', (e)=> {
    const img = document.querySelector('.pic li.on img'); 
    const deco1 = document.querySelector('.deco1 img');
    const deco2 = document.querySelector('.deco2 img');
    const deco3 = document.querySelector('.deco3 img');

    moveImg(img, e, 30, true); 
    moveImg(deco1, e, 100, true);
    moveImg(deco2, e, 100, false);
    moveImg(deco3, e, 50, false);
  })

  function moveImg(el,e, speed, reverse){
    let x; 
    let y;
    if  (reverse){
      x = - e.pageX;
      y = - e.pageY; 
    } else {
      x = e.pageX;
      y = e.pageY; 
    }
    el.style.left = x/ speed + 'px';
    el.style.top = y/ speed + 'px';
  }
}