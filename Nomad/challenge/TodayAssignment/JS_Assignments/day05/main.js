function changeBackgroundColor() {
  const width = window.innerWidth;
  const h1 = document.querySelector('h1');

  if (width > 1200) {
    document.body.style.backgroundColor = 'orange';
    h1.style.color = 'white';
  } else if (width > 800) {
    document.body.style.backgroundColor = 'slateblue';
    h1.style.color = 'white';
  } else if (width > 500) {
    document.body.style.backgroundColor = 'steelblue';
    h1.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'lightcoral';
    h1.style.color = 'white';
  }
}

// Listen to window resize events
window.addEventListener('resize', changeBackgroundColor);

// Call the function once to set the initial color based on the current width
changeBackgroundColor();