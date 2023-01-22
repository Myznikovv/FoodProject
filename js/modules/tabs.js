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

export default tabs;