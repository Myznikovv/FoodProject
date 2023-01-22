function slider(){
      // slider 

const slider = document.querySelector(".offer__slider"),
    buttonLeft = document.querySelector(".offer__slider-prev"),
    buttonNext = document.querySelector(".offer__slider-next"),
    slides = document.querySelectorAll(".offer__slide"),
    total = document.querySelector("#total"),
    current = document.querySelector("#current");

    let slideIndex = 1;
     

    showSlider(slideIndex);

    if(slides.length <10){
        total.textContent  = `0${slides.length}`;
    }else{
        total.textContent  = slides.length;
    }

    function showSlider(n){
        if (slides.length<n){
            slideIndex = 1;
        }

        if(n < 1){
            slideIndex = slides.length;
        }

        slides.forEach(slide=>{
            slide.classList.add('hide');
        })

        slides[slideIndex-1].classList.add('show');
        slides[slideIndex-1].classList.remove('hide');

        if(slides.length <10){
            current.textContent  = `0${slideIndex}`;
        }else{
            current.textContent  = slideIndex;
        }
    }
    function  plusSlide(n){
        showSlider(slideIndex += n);
    }

    buttonLeft.addEventListener('click', ()=>{
        plusSlide(-1);
    })

    buttonNext.addEventListener('click', ()=>{
        plusSlide(1);
    })

}

export default slider;