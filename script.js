let toggle = document.querySelector('.fa-bars-staggered');
toggle.addEventListener('click', () => {
    let nav = document.querySelector('.left nav');
    nav.style.left = '0px';
})



let close = document.querySelector('.fa-xmark');
close.addEventListener('click',()=>{
      let nav = document.querySelector('.left nav');
    nav.style.left = '-80%';
})
