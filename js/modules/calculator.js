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

export default calculator;