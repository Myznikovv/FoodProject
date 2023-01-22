
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

export default modal;
export {closeModel, showModel};