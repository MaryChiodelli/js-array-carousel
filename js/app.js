const slides = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg'
];

const slidesWrapperEl = document.querySelector('.slides-wrapper');

// creare il contenuto dello slider
for (let i = 0; i < slides.length; i++) {
    // creare l'elemento li
    const li = document.createElement('li');
    li.classList.add('slide');

    // aggiungo la classe active al primo list item
    if (i === 0) {
        li.classList.add('active');
    }

    // crare l'elemento img
    const img = document.createElement('img');
    img.src = slides[i];
    
    // inserire il contenuto dello slider nella pagina
    li.append(img);
    slidesWrapperEl.append(li);
}

console.log(slides);