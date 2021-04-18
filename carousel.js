let currentIndex = 0
const IMAGES = [         
    "img/img1.jpg",    
    "img/img2.jpg",   
    "img/img3.jpg"   
]
const EFFECTS = [
    "animate__zoomIn",
    "animate__fadeInUp",
    "animate__fadeInRight"
]
const TITLES = [
    "Image One",   
    "Image Two",   
    "Image Three"    

]
/*HW1: const -  aceeasta inseamna ca valoarea unei constante nu poate fi schimbata si nu poate fi redeclarata, valoarea lor ramane aceeasi, 
                fixa si nu trebuie schimbata pe intreg cod*/
function showImage( n ) {
    let i = Math.round(Math.random() * 3)
        carouselSlides.innerHTML =`<img src="${IMAGES[n]}"class="animate__animated ${EFFECTS[i]}" />`
}

function showTitles( n ) {
    let i = Math.round(Math.random() * 3)
    carouselTitles.innerHTML = `<h4 class="animate__animated ${EFFECTS[i]}">${TITLES[n]}</h4>`
}

function showIndicators( n ) {
    carouselIndicators.innerHTML = ` `
    for(let i = 0; i < IMAGES.length; i++) {
        if(i == n) {
            carouselIndicators.innerHTML += `<img src="${IMAGES[n]}" class="imageIndicator active"/>`
        } else {
            carouselIndicators.innerHTML += `<img src="${IMAGES[i]}" class="imageIndicator"/>`
        }
        
    }
}

// HW4: finish prev function 

function prev() {
    if(currentIndex == 0) {
       currentIndex = ( currentIndex + 2 )
    } else {
        currentIndex--
    }
    showTitles(currentIndex)
    showImage(currentIndex)
    showIndicators(currentIndex)
}

function next() {
     // HW2: add limit
    // HW3*: optimize
    if(currentIndex === 2 ){
        currentIndex -= currentIndex 
    } else {
        currentIndex++
    }
    
    showTitles(currentIndex)
    showImage(currentIndex)
    showIndicators(currentIndex)
}
function play() {
    playButton.innerHTML = `<i class="fas fa-play play"></i>`
    setInterval(next, 3000)
}

function action() {
    switch(event.key) {
        case "ArrowRight": 
             if(currentIndex === 2 ) {
                currentIndex -= currentIndex 
            } else {
                currentIndex++
            } break
        case "ArrowLeft": 
        if(currentIndex == 0) {
             currentIndex = ( currentIndex + 2 )
           } else { 
                currentIndex--
           }break
    }
    showTitles(currentIndex)
    showImage(currentIndex)
    showIndicators(currentIndex)
}


showImage(currentIndex)
showTitles(currentIndex)
showIndicators(currentIndex)

function play() {
    setInterval(next , 4000)
}
