// OUR WORKS
function ourWorks(slides = []) {

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

// OUR CLIENTS
function ourClients(slides = []) {

  const ourClientWrapper = document.querySelector("#our_clients")
  const prev = document.createElement('div')
  const next = document.createElement('div')

  prev.className = "our_clients_prev"
  next.className = "our_clients_next"

  next.style = `
    position: absolute;
    left: 20px;
    top: 40%;
    z-index: 1;
  `
  prev.style = `
    position: absolute;
    right: 20px;
    top: 40%;
    z-index: 1;
  `

  next.innerHTML = `<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAjUlEQVRIS+3UUQqAIBAEUD1pdbM6qe1AgfixOzvln4IQFPN016xl8qiT88sCwgqrJTotudk8IkEBEL49wXh2kSzQh8O4bO7eLjJAOhwwC0jhLCCHM8CncAUIT83YcKYH4y5SCANgUTLCAjKSASQkC4zIr39yf0DQEwz3mmCOqXfNUO+UElHB70cLCMt1A1tzGxn9eZDjAAAAAElFTkSuQmCC"/>`
  prev.innerHTML = `<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAkElEQVRIS+3UYQqAIAwFYD1Z3aQ6WXXTNiiQke69of8U+iP5vtqGOQ1eeXB+moBbYbREuyQt8hxuonkBATT8fM9dLIIAGroVH0YhCKDZYQQFwggDhBAWoJEewC2qTtrvYgHb7Ga4igxAhzNAKBwFwuEoUF4Vbs1tp9EeKLK2pqXXFNVyqvvoH9DB34EJuKV7AHAKGhm94LHAAAAAAElFTkSuQmCC"/>`

  ourClientWrapper.appendChild(prev)
  ourClientWrapper.appendChild(next)

  const swiper = new Swiper("#our_clients", {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 20,
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 3000, // Delay between slides in milliseconds (3 seconds in this example)
      disableOnInteraction: false, // Autoplay continues after user interactions (e.g., swipe)
    },
    // Navigation arrows
    navigation: {
      nextEl: '.our_clients_next',
      prevEl: '.our_clients_prev',
    },

    //  
    breakpoints: {
      480: {
        slidesPerView: 1, // 1 slides
      },
      800: {
        slidesPerView: slides.length > 2 ? 3 : slides.length, // 2 slides
      },
      1000: {
        slidesPerView: slides.length > 4 ? 5 : slides.length,  // 3 slides
      },
    }
  });

  const wrapper = document.querySelector("#our_clients_content")

  slides.forEach((item) => {
    const slide = document.createElement('div')
    const img = document.createElement('div')

    slide.className = "swiper-slide"
    img.style = `
    background-image: url("${item.image}");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: contain;
    padding-top: 60%;
    width: calc(100% - 30px);
    `
    slide.style = `
    display: flex;
    align-items: center;
    justify-content: center;
    `
    slide.append(img)
    wrapper.appendChild(slide)
  })

}