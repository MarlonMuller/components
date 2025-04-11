// Slider de patrocinadores

window.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector('.slider-sponsors');
    const images = slider.querySelectorAll('img');

    images.forEach(image => {
        const clone = image.cloneNode(true);
        slider.appendChild(clone);
    });

    const totalWidth = images.lenght * (images[0].offsetWidth + 20);

    slider.style.width = `${totalWidth}px`;

    let currentPosition = 0;

    const moveSlider = () => {
        currentPosition -= 1;
        if(currentPosition <= -totalWidth/2){
            currentPosition = 0;
        }

        slider.style.transform = `translateX(${currentPosition}px)`;
        requestAnimationFrame(moveSlider);
    }

    requestAnimationFrame(moveSlider);
})