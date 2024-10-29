const bodyEl = document.querySelector('body');
const menu = document.querySelector('#menu');
const hamburguer = document.querySelector('.hamburguer');
const sideMenu = document.querySelector('.sideMenu');
const liAll = document.querySelectorAll('li');
const hamChilds = document.querySelectorAll('.hamburguer > div');
const sectionDiv = document.querySelectorAll('section div');

function selectBackground() {
    bodyEl.classList.toggle('bg-color-gray-16');
    bodyEl.classList.toggle('color-gray-01');
    bodyEl.classList.toggle('bg-color-gray-01');
    bodyEl.classList.toggle('color-gray-16');

    hamChilds.forEach(x => {
        x.classList.toggle('bg-color-gray-16');
        x.classList.toggle('bg-color-gray-01');
    });

    liAll.forEach((value) => {
        value.classList.toggle('box-shadow-light');
        value.classList.toggle('box-shadow-black');
    });

    sectionDiv.forEach((value) => {
        value.classList.toggle('box-shadow-light');
        value.classList.toggle('box-shadow-black');
    });
};

function activeMenu() {
    sideMenu.classList.toggle('on-menu');
    sideMenu.classList.toggle('off-menu');
    menu.classList.toggle('display-none');

    if (hamChilds[0].className.includes('rotation-1')) { 
        hamburguer.removeAttribute('style');
    }

    hamChilds.forEach((x, i) => {
        switch (i) {
            case 0:
                x.classList.toggle('rotation-1');
                break;
            case 1:
                x.classList.toggle('visibility-hidden');
                break;
            case 2:
                x.classList.toggle('rotation-2');
                break;
        };
    });
};

function x () {
    sectionDiv.forEach(x => {
       x.classList.toggle('rotate-scale');
    })
}

x();


