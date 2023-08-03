var swiper = new Swiper("#carousel", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    480: {
      slidesPerView: 1, // 1 slides
    },
    800: {
      slidesPerView: slides.length > 1 ? 2 : 1, // 2 slides
    },
    1000: {
      slidesPerView: slides.length > 2 ? 3 : (slides.length > 1 ? 2 : 1),  // 3 slides
    },
  }
});

function appendSlide() {
  const swiperContent = document.querySelector('#swiper-content');
  slides.forEach(item => {

    // CREATE ELEMENT
    const slide = document.createElement('div')
    const content = document.createElement('div')
    const imageContainer = document.createElement('div')
    const image = document.createElement('div')
    const title = document.createElement('h2')
    const subtitle = document.createElement('p')

    // ADD ATTRIBUTES TO ELEMENT
    slide.className = "swiper-slide"
    content.className = "swiper-content"
    image.className = "swiper-img"
    image.style.backgroundImage = `url('${item.image}')`
    imageContainer.className = "swiper-img-container"
    title.innerText = item.title
    subtitle.innerText = item.subtitle

    // APPEND CHILD ELEMENT
    imageContainer.appendChild(image)
    content.appendChild(imageContainer)
    content.appendChild(title)
    content.appendChild(subtitle)
    slide.append(content)
    swiperContent.appendChild(slide);
  });
}

window.onload = appendSlide;
