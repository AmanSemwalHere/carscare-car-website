
document.addEventListener('DOMContentLoaded', function () {

  const sr = ScrollReveal({
    duration: 2000,
    distance: '20px',
    reset: true
  });

  sr.reveal(".hero-box h1", { origin: 'bottom', delay: 100 });
  sr.reveal(".hero-box .para1", { origin: 'bottom', delay: 100 });
  sr.reveal(".but1", { origin: 'top', delay: 50 });
  sr.reveal(".car-box", { origin: 'top', delay: 50 });
});

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menu-icon');
  const navList = document.querySelector('.menu-items');

  menuIcon.addEventListener('click', function () {
    menuIcon.classList.toggle('bx-x');
    navList.classList.toggle('open');
  });
});



document.addEventListener('DOMContentLoaded', function () {
  const images = [
    'camaro-zl1-summit-white.jpg',
    'Chevrolet_Camaro_grey.jpeg',
    'purepng.com-red-chevrolet-camaro-zl1-carcarvehicletransportchevrolet-9615246509155nzjd.png',
  ];

  let currentImageIndex = 0;
  const camaroCar = document.getElementById('camaro_car');

  function changeImage() {
    camaroCar.style.opacity = 0; 
    setTimeout(() => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      camaroCar.src = images[currentImageIndex];
      camaroCar.style.opacity = 1; 
    }, 500);
  }

  setInterval(changeImage, 5000);
});
