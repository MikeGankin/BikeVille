const mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 'auto',
    spaceBetween: 100,
    // loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});

const swiperWrapper = document.querySelector('.swiper-wrapper');

swiperWrapper.addEventListener('mouseover', (e) => {
  let target = e.target;

  if (target.className === 'slide-content') {
    let parent = target.closest('.swiper-slide');
    let parentImg = parent.querySelector('.slide-img');
    target.classList.add('hovered');
    parentImg.style.transform = 'translate(-50%, -50%) scale(1.3)';
  }
});

swiperWrapper.addEventListener('mouseout', (e) => {
  let target = e.target;
 
  if (target.className === 'slide-content') {
    let parent = target.closest('.swiper-slide');
    let parentImg = parent.querySelector('.slide-img');
    target.classList.remove('hovered');
    parentImg.style.transform = '';
  }
});
