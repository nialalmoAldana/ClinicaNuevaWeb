// navbar toggling
const navbarShowBtn = document.querySelector('.navbar-show-btn');
const navbarCollapseDiv = document.querySelector('.navbar-collapse');
const navbarHideBtn = document.querySelector('.navbar-hide-btn');
const numero = document.getElementById('numero');

navbarShowBtn.addEventListener('click', function () {
    navbarCollapseDiv.classList.add('navbar-show');
});
navbarHideBtn.addEventListener('click', function () {
    navbarCollapseDiv.classList.remove('navbar-show');
});

// changing search icon image on window resize
window.addEventListener('resize', changeSearchIcon);
function changeSearchIcon() {
    let winSize = window.matchMedia("(min-width: 1200px)");
    if (winSize.matches) {
        document.querySelector('.search-icon img').src = "images/search-icon-dark.png";
    } else {
        document.querySelector('.search-icon img').src = "images/search-icon.png";
    }
}
changeSearchIcon();


// stopping all animation and transition
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

const tabLinks = document.querySelectorAll(".tab-link");
const tabContents = document.querySelectorAll(".tab-content");

tabLinks.forEach(function (tabLink) {
  tabLink.addEventListener("click", function () {
    const tabId = this.getAttribute("data-tab");
    const activeTab = document.querySelector(`#${tabId}`);
    tabLinks.forEach(function (tabLink) {
      tabLink.classList.remove("active");
    });
    tabContents.forEach(function (tabContent) {
      tabContent.classList.remove("active");
    });
    this.classList.add("active");
    activeTab.classList.add("active");
  });
});



const slider = document.querySelector('#slider');
const sliderContainer = document.querySelector('.slider-container');
const sliderImages = document.querySelectorAll('.slider-image');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let currentIndex = 0;
let intervalId;

function initSlider() {
  sliderImages[currentIndex].classList.add('active');
  startSlider();
}

function startSlider() {
  intervalId = setInterval(() => {
    resetSlider();
    if (currentIndex === sliderImages.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    sliderImages[currentIndex].classList.add('active');
  }, 10000);
}

function resetSlider() {
  sliderImages.forEach(image => {
    image.classList.remove('active');
  });
}

function prevSlide() {
  resetSlider();
  if (currentIndex === 0) {
    currentIndex = sliderImages.length - 1;
  } else {
    currentIndex--;
  }
  sliderImages[currentIndex].classList.add('active');
}

function nextSlide() {
  resetSlider();
  if (currentIndex === sliderImages.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  sliderImages[currentIndex].classList.add('active');
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

initSlider();

var swiper = new Swiper('.testimonial-slider', {
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
});



window.sr = ScrollReveral()
sr.reveral(".box1",{
  origin: 'left',
  interval: 106,
  duration: 2000,
  distance: '150%'
})

sr.reveral(".box2",{
  origin: 'left',
  interval: 106,
  duration: 2000,
  distance: '150%'
})


// Obtiene la ventana modal
var modal = document.getElementById("myModal");

// Obtiene el botón para cerrar la ventana modal
var closeBtn = modal.querySelector(".close");

// Muestra la ventana modal automáticamente después de 2 segundos
setTimeout(function() {
  modal.style.display = "block";
}, 2000);

// Cierra la ventana modal al hacer clic en la "x"
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});
