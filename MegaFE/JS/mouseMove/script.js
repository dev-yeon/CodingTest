window.onload =() =>{
  /*
  1. 마우스가 움직일 때 마다 이미지의 순번을 바꿔서 이미지가 교체가 된다. 
  2. 이미지의 총 갯수가 영역의 가로 사이즈와 매치 
  3. 대입된 순번의 이미지를 백그라운드 경로에 대입 
  4. 이미지가 들어갈 div 를 동적으로 생성 
  */

  const canvas = document.querySelector('.canvas');
  
  let imgCount = 100; 
  let item = '<div></div>'; //이미지가 들어갈 단일 div 생성 

  // console.log(canvas.children);
  canvas.innerHTML = item; 
  // console.log(canvas.children);
  //항상 생성을 먼저 실행 후 다른 값을 넣는다. 

  let div = document.querySelector('.canvas > div');
  
  window.addEventListener('mousemove', function(e){
    let mouseX = e.pageX; 
    let winX = window.innerWidth; 
    let percent = parseInt((mouseX / winX) * imgCount) +1
    console.log(percent);
    
    if(percent > imgCount){
      percent = imgCount; 
      // 예외처리 
      // 계산된 인덱스가 이미지 갯수를 초과하는 경우 마지막 이미지 인덱스로 설정 
    }
    div.style.backgroundImage = `url(./videoimg/img${percent}.png)`;


  })
  
}