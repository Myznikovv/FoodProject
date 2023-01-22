/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calculator.js":
/*!**********************************!*\
  !*** ./js/modules/calculator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calculator(){
    let sex,height, weight, age, ratio;
            
            
            
                if (localStorage.getItem("sex")){
                    sex =  localStorage.getItem("sex");
                }else{
                    sex = "female";
                    localStorage.setItem("sex", sex );
                }
                if (localStorage.getItem("ratio")){
                    ratio =  localStorage.getItem("ratio");
                }else{
                    ratio = "1.2";
                    localStorage.setItem("ratio", ratio );
                }
            
                const initLocalStorage = (activeClass, selector)=>{
                    let elements = document.querySelectorAll(selector);
            
                    elements.forEach((element)=>{
                        element.classList.remove(activeClass);
            
                        if(element.getAttribute("id") === localStorage.getItem("sex")){
                            element.classList.add(activeClass);
                        }
                        if(element.getAttribute("data-ratio") === localStorage.getItem("ratio")){
                            element.classList.add(activeClass);
                        }
                    } )
                };
            
                initLocalStorage("calculating__choose-item_active", "#gender div");
                initLocalStorage("calculating__choose-item_active", ".calculating__choose_big div");
            
                let   totalResult = document.querySelector('.span_result');
            
            
                const calcTotal = ()=>{
            
                    if(!sex || !height || !weight ||  !age || !ratio){
                        totalResult.textContent= "_____";
                    }else{
                        if(sex == "female"){
                            totalResult.textContent = Math.round((447.6 + (9.2 * weight) + (3.1*height) - (4.3 * age )) * ratio);
                        }else{
                            totalResult.textContent = Math.round((88.36 + (13.4 * weight) + (4.8*height) - (5.7 * age )) * ratio);
                        }
            
            
                    }
            
                };
            
                calcTotal();
            
                const getStaticValues= (activeClass,selector)=>{
                    const items = document.querySelectorAll(selector);
            
                    items.forEach(item =>{
                        item.addEventListener('click', (e)=>{
                            if (e.target.getAttribute("data-ratio")){
                                ratio = +e.target.getAttribute('data-ratio');
                               localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                            }else {
                                sex =  e.target.getAttribute('id');
                               localStorage.setItem('sex' , e.target.getAttribute('id') );
                            }
            
                            items.forEach(item=>{
                                item.classList.remove(activeClass);
                            })
                        
                            e.target.classList.add(activeClass);
            
                            calcTotal();
            
                        })
                    })
                }
            
                getStaticValues("calculating__choose-item_active", "#gender div");
                getStaticValues("calculating__choose-item_active", ".calculating__choose_big div");
            
            
                const getDynamicValues = (selector)=>{
                    const input = document.querySelector(selector);
            
                    input.addEventListener("input",()=>{
            
                        if(input.value.match(/\D/g)){
                            input.style.border = "1px solid red";
                        }else{
                            input.style.border = "none";
                        }
            
                        switch(input.getAttribute("id")){
                            case "height" :
                                height  =  +input.value;
                                break;
                            
                            case "weight" :
                                weight  =  +input.value;
                                break;
                            
                            case "age" :
                                age  =  +input.value;
                                break;
                        }
                    })
                    calcTotal();
                }
            
            
                getDynamicValues("#weight");
                getDynamicValues("#height");
                getDynamicValues("#age");

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function cards(){
    // Cards 

    class Card {
        constructor(photo, alt, title, description, price, parentSelector) {
            this.photo = photo;
            this.alt = alt;
            this.title = title;
            this.description = description;
            this.price = price;
            this.transfer = 27;
            this.transferToUHN();
            this.parent = document.querySelector(parentSelector);

        }
        transferToUHN() {
            this.price = this.price * this.transfer;
        }
        render() {
            const div = document.createElement('div');
            div.innerHTML = `
                <div class="menu__item">
                    <img src="${this.photo}" alt="${this.alt}">
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.description}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                </div>
            `;
            this.parent.append(div);
        }
    }

    //Fetch get 
    // const getResorces= async (url)=>{
    //     const res = await fetch(url);

    //     if (!res.ok){
    //         throw new Error(`Cannot fetch  ${url}, fetch status is ${res.status}`);
    //     }
             
    //     return await res.json();
    // }

    axios.get("http://localhost:3000/menu")
    .then(data =>{
       
        data.data.forEach(({img, atlImg, title, descr, price})=>{
            new Card(img, atlImg, title, descr, price,'.menu__field .container').render();
        })
    })

    
    
    // new Card(
    //     "img/tabs/vegy.jpg",
    //     "vegy",
    //     'Меню "Фитнес"',
    //     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    //     9,
    //     ".menu__field .container"
    // ).render();

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");




function forms(modalSelector, timerId, formSelector){
      //post

      const form = document.querySelectorAll(formSelector);

      form.forEach(item=>{
          bindPostData(item);
      })
  
  //message
      const message={
          loading:'img/spinner/spinner.svg',
          success:"Данные успешно отправленны. Мы свяжемся с вами как можно быстрее!",
          failure:"Что-то пошло не так"
      }
  
      function bindPostData(form){
          form.addEventListener('submit', (event)=>{
              event.preventDefault();
  
             
              const statusMessage = document.createElement('img');
              statusMessage.src = message.loading;
              statusMessage.style.cssText = `
              display: block;
              margin: 0 auto;`;
  
              form.insertAdjacentElement('afterend', statusMessage);
  
  
              const formData = new FormData(form);
  
              // Пример преобразования форм даты в js объект
              // const object ={};
              // formData.forEach(function(value,key){
              //     object[key] = value;
              // })
  
  
              const json = JSON.stringify(Object.fromEntries(formData.entries()));
  
  
              (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)("http://localhost:3000/requests", json )
              .then(data =>{
                  console.log(data);
                  showThanksModal(message.success);
                  statusMessage.remove();
              }).catch(()=>{
                  showThanksModal(message.failure);
                  statusMessage.remove();
              }).finally(()=>{
                  form.reset();
              })    
          })
      }
  
      function showThanksModal(message){
          const prevModalDialog = document.querySelector(".modal__dialog");
  
          prevModalDialog.classList.add('hide');
          (0,_modal__WEBPACK_IMPORTED_MODULE_0__.showModel)(modalSelector, timerId);
  
  
          const thanksModal = document.createElement('div');
          thanksModal.classList.add("modal__dialog");
          thanksModal.innerHTML = `
              <div class="modal__content">
                  <div data-close class="modal__close">&times;</div>
                  <div class="modal__title">${message}</div>
              </div>
          `;
          document.querySelector(".modal").append(thanksModal);
  
          setTimeout(()=>{
  
              thanksModal.remove();
              prevModalDialog.classList.add("show");
              prevModalDialog.classList.remove("hide");
              (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModel)(modalSelector);
          }, 3000);
  
      }
  
  
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModel": () => (/* binding */ closeModel),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "showModel": () => (/* binding */ showModel)
/* harmony export */ });

 function showModel(modalSelector, timerId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.remove("hide");
    modal.classList.add("show");
    document.body.style.overflow = "hidden";

    console.log(timerId)
    if(timerId){
        clearInterval(timerId);
    }
   

}

function closeModel(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = '';
}

function modal(modalSelector, triggerSelector, timerId){
     //Modal

     const modal = document.querySelector(modalSelector),
        modalTrigger  =document.querySelectorAll(triggerSelector);

     modalTrigger.forEach(btn=>{
        btn.addEventListener('click', () => showModel(modalSelector, timerId));
     })
     
    


     modal.addEventListener('click', (e) => {
         if (e.target === modal  || e.target.getAttribute("data-close") == "") {
             closeModel(modalSelector);
         }
     })
 
     document.addEventListener("keydown", (e) => {
         if (e.code === "Escape" && modal.classList.contains("show")) {
             closeModel(modalSelector);
         }
     })
 
 
     function scrollOpen() {
         if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 2) {
             showModel(modalSelector, timerId);
             window.removeEventListener('scroll', scrollOpen);
         }
     }
     window.addEventListener("scroll", scrollOpen);
 
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);


/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabsSelector, tabsContentSelector, tabsContainerSelector, activeClassSelector){
    //TABS

    const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll( tabsContentSelector),
        tabsContainer = document.querySelector(tabsContainerSelector);


    function clearContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
        })
        tabs.forEach(item => {
            item.classList.remove(activeClassSelector);
        })
    }

    function showContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClassSelector);
    }

    clearContent();
    showContent();

    tabsContainer.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    clearContent();
                    showContent(i);
                }
            })
        }
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(deadline, timerContainerSelector){
    //TIMER 
    function nullFirst(number) {
        if (number < 10 && number >= 0) {
            return `0${number}`;
        } else return number;
    }

    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;

        const t = Date.parse(endtime) - Date.parse(new Date());

        if (t <= 0) {
            days = hours = minutes = seconds = 0;
        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24));
            hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            minutes = Math.floor((t / (1000 * 60)) % 60);
            seconds = Math.floor((t / (1000)) % 60);
        }

        return {
            'totalTime': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }

    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector("#hours"),
            minutes = timer.querySelector("#minutes"),
            seconds = timer.querySelector("#seconds");

        updateClock();
        let timerInterval = setInterval(updateClock, 1000);
        

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = nullFirst(t.days);
            hours.innerHTML = nullFirst(t.hours);
            minutes.innerHTML = nullFirst(t.minutes);
            seconds.innerHTML = nullFirst(t.seconds);

            if (t.totalTime <= 0) {
                clearInterval(timerInterval);
            }
        }
    }

    setClock(timerContainerSelector, deadline);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });
const postData= async (url, data)=>{
    const res = await fetch(url,{
         method: "POST",
         body: data,
         headers:{
             'Content-type': 'application/json; charset=utf-8'
         }
     });

     return await res.json();
 }


 

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calculator */ "./js/modules/calculator.js");









window.addEventListener("DOMContentLoaded", function(){
        const timerId = setTimeout(()=> (0,_modules_modal__WEBPACK_IMPORTED_MODULE_4__.showModel)('.modal', timerId), 5000);

        (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__["default"])('.tabheader__item','.tabcontent',".tabheader__items","tabheader__item_active");
        (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])();
        (0,_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])('.modal', timerId, 'form');
        (0,_modules_cards__WEBPACK_IMPORTED_MODULE_3__["default"])();
        (0,_modules_modal__WEBPACK_IMPORTED_MODULE_4__["default"])('.modal', "[data-modal]", timerId);
        (0,_modules_calculator__WEBPACK_IMPORTED_MODULE_6__["default"])();
        (0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__["default"])('2023-04-20', ".timer");  
            
});


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map