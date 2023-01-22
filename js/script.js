import timer  from "./modules/timer";
import slider  from "./modules/slider";
import forms  from "./modules/forms";
import cards from"./modules/cards";
import modal from "./modules/modal";
import tabs from "./modules/tabs";
import calculator from "./modules/calculator";
import { showModel } from "./modules/modal";

window.addEventListener("DOMContentLoaded", function(){
        const timerId = setTimeout(()=> showModel('.modal', timerId), 5000);

        tabs('.tabheader__item','.tabcontent',".tabheader__items","tabheader__item_active");
        slider();
        forms('.modal', timerId, 'form');
        cards();
        modal('.modal', "[data-modal]", timerId);
        calculator();
        timer('2023-04-20', ".timer");  
            
});

