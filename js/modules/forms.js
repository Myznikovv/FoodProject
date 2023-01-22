import { showModel , closeModel} from "./modal";
import { postData } from "../services/services";


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
  
  
              postData("http://localhost:3000/requests", json )
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
          showModel(modalSelector, timerId);
  
  
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
              closeModel(modalSelector);
          }, 3000);
  
      }
  
  
}

export default forms;