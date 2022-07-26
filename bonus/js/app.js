const slides = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg'
];

const slideElements = [];
let startIndex = 0;

const slidesWrapperEl = document.querySelector('.slides-wrapper');
const arrowRightEL = document.querySelector('.arrow-right');
const arrowLeftEL = document.querySelector('.arrow-left');

// creare il contenuto dello slider
for (let i = 0; i < slides.length; i++) {
    // creare l'elemento li
    const li = document.createElement('li');
    li.classList.add('slide');

    // aggiungo la classe active al primo list item
    if (i === startIndex) {
        li.classList.add('active');
    }

    // crare l'elemento img
    const img = document.createElement('img');
    img.src = slides[i];
    
    // inserire il contenuto dello slider nella pagina
    li.append(img);
    slidesWrapperEl.append(li);
    slideElements.push(li);
}

arrowRightEL.addEventListener('click', function () {
    // togliere la classe active dal list item corrente
    const currentSlide = slideElements[startIndex];

    // SE list item corrente è l'ultima
    if (startIndex === slideElements.length - 1) {
        currentSlide.classList.remove('active');

        // aggiungere la classe active al primo list item
        const nextSlide = slideElements[0];
        nextSlide.classList.add('active');
        startIndex = 0;
    } else {
        currentSlide.classList.remove('active');

        // aggiungere la classe active al list item successivo
        const nextSlide = slideElements[startIndex + 1];
        nextSlide.classList.add('active');
        startIndex++;
    }
});

arrowLeftEL.addEventListener('click', function () {
    // togliere la classe active dal list item corrente
    const currentSlide = slideElements[startIndex];

    // SE list item corrente è il primo
    if (startIndex === 0) {
        currentSlide.classList.remove('active');
        
        // aggiungere la classe active all'ultimo list item
        const prevSlide = slideElements[slideElements.length - 1];
        prevSlide.classList.add('active');
        startIndex = slideElements.length - 1;
    } else {
        currentSlide.classList.remove('active');
    
        // aggiungere la classe active al list item precedente
        const prevSlide = slideElements[startIndex - 1];
        prevSlide.classList.add('active');
        startIndex--;
    }
});