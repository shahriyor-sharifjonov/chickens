$('.about__slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 467,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
  ]
});

function openDrop(){
  const popup = document.querySelector('.popup');
  popup.classList.add('active')
}

function closePopup(){
  const popup = document.querySelector('.popup');
  popup.classList.remove('active')
}

function openVideo(){
  const video = document.querySelector('.video');
  video.classList.add('active')
}

function closeVideo(){
  const video = document.querySelector('.video');
  video.classList.remove('active')
}

window.addEventListener('click', function(e){
  console.log(e.target);
  
  if(e.target.classList.contains('video__close')){
    console.log('asasgf');
    const video = document.querySelector('.video');
    video.classList.remove('active')
  }
})