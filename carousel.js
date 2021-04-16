let currentIndex = 0

const IMAGES = [
    "img/img1.jpg",
    "img/img2.jpg",
    "img/img3.jpg"
]

const EFFECTS = [
    "animate__slideInLeft",
    "animate__fadeInLeft",
    "animate__fadeInRight",
    
]

const TITLES = [
    "Image One",
    "Image Two",
    "Image Three"
]

/*HW1: const -  aceeasta inseamna ca valoarea unei constante nu poate fi schimbata si nu poate fi redeclarata, valoarea lor ramane aceeasi, 
                fixa si nu trebuie schimbata pe parcurul intregului cod*/


function showImage(n) {

    let i = Math.round(Math.random()*3)

    carouselSlides.innerHTML = `
<img src="${IMAGES[n]}" class="animate__animated ${EFFECTS[i]}"/>
    `
}

function showTitle(n) {
    
    let i = Math.round(Math.random()*3)

    carouselTitles.innerHTML = `<h4 class="animate__animated ${EFFECTS[i]}">${TITLES[n]}</h4>`
}

function showIndicators(n) {
    carouselIndicators.innerHTML = ``
    for(let i = 0; i<IMAGES.length; i++) {
        if (i==n) {
            carouselIndicators.innerHTML += `<img src="${IMAGES[n]}" class="imageIndicator active"/>`
        } else {
            carouselIndicators.innerHTML += `<img src="${IMAGES[i]}" class="imageIndicator"/>`
        }
    }
}

function renderCarousel(n) {
    showImage(n)
    showTitle(n)
    showIndicators(n)
}

function next() {
    // HW2: add limit
    // HW3*: optimize
   if (currentIndex==IMAGES.length-1) {
        renderCarousel(currentIndex=0)
    } else {
        renderCarousel(++currentIndex)
    }
}

// HW4: finish prev function 

function prev() {
if (currentIndex==0) {
        renderCarousel(currentIndex=IMAGES.length-1)
    } else {
        renderCarousel(--currentIndex)
    }
}

function play() {
   
    setInterval(next, 5000)
}

function action() {
    switch (event.key) {
        case "ArrowRight": 
            next() 
        break
        case "ArrowLeft": 
            prev()
         break
       
    }
}

renderCarousel(currentIndex)