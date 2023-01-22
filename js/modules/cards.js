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

export default cards;