// function for responsive navagation bar
var getBarsId = document.querySelector('#bars-id');
var getNavUlId = document.querySelector('.nav-links');
getBarsId.addEventListener('click', () => {
  getNavUlId.classList.toggle('show_nav');
});

// first accordion active
document.querySelector('.accordion-des').style.display = 'block';
