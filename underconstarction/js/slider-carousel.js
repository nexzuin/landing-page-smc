// HARDCODE

// const slides = [
//   {
//     title: "Company Profile",
//     subtitle: "Warung Pintar",
//     image: "images/slider/image1.png"
//   },
// ]

var swiper = new Swiper("#carousel", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
  }
});

function appendSlide() {
  const swiperContent = document.querySelector('#swiper-content');
  slides.forEach(item => {

    // CREATE ELEMENT
    const slide = document.createElement('div')
    const content = document.createElement('div')
    const image = document.createElement('img')
    const title = document.createElement('h2')
    const subtitle = document.createElement('p')

    // ADD ATTRIBUTES TO ELEMENT
    slide.className = "swiper-slide"
    content.className = "swiper-content"
    image.src = item.image
    image.alt = item.title
    title.innerText = item.title
    subtitle.innerText = item.subtitle

    // APPEND CHILD ELEMENT
    content.appendChild(image)
    content.appendChild(title)
    content.appendChild(subtitle)
    slide.append(content)
    swiperContent.appendChild(slide);
  });
}

window.onload = appendSlide;
