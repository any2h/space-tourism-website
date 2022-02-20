const tabList = document.querySelector('[role="tablist"]'),
    tabs = tabList.querySelectorAll('[role="tab"]'),
    tabPicture = document.querySelectorAll('picture'),
    tabContent = document.querySelectorAll('article');


tabList.addEventListener('keydown', changeTabFocus);

tabs.forEach(tab => {
    tab.addEventListener('click', changeTabPanel);
});


let counter = 0;
function changeTabFocus(e) {
    if (e.keyCode === 37) {
        tabs[counter].setAttribute('tabindex', -1);
        counter--;

        if (counter < 0) {
            counter = tabs.length-1;
        }
    } else if (e.keyCode === 39) {
        tabs[counter].setAttribute('tabindex', -1);
        counter++;

        if (counter > tabs.length-1) {
            counter = 0;
        }
    }

    tabs[counter].setAttribute("tabindex", 0);
    tabs[counter].focus();
}

function changeTabPanel(e) {
    const target = e.target,
        targetPanel = target.getAttribute('aria-controls'),
        targetPicture = target.dataset.image,
        tabContainer = target.parentNode,
        mainContainer = tabContainer.parentNode;

    hideElement(mainContainer, 'picture');
    showElement(mainContainer, `#${targetPicture}`);

    hideElement(mainContainer, '[role="tabpanel"]');
    showElement(mainContainer, `#${targetPanel}`);

    mainContainer.querySelector('[aria-selected="true"]').setAttribute('aria-selected', false);
    target.setAttribute('aria-selected', true);
}

function hideElement(parent, elem) {
    parent.querySelectorAll(elem).forEach(elem => elem.setAttribute('hidden', ''));
}

function showElement(parent, elem) {
    parent.querySelector(elem).removeAttribute('hidden');
}

// tabList.addEventListener('keydown', (e) => {
//     const target = e.target;

//     if (e.keyCode === 39) {
//         if (target.nextElementSibling !== null) {
//             target.setAttribute('tabindex', -1);
//             target.nextElementSibling.setAttribute('tabindex', 0);
//             target.nextElementSibling.focus();
//         } else {
//             target.setAttribute('tabindex', -1);
//             tabList.firstElementChild.setAttribute('tabindex', 0);
//             tabList.firstElementChild.focus();
//         } 
//     } else if (e.keyCode === 37) {
//         if (target.previousElementSibling !== null) {
//             target.setAttribute('tabindex', -1);
//             target.previousElementSibling.setAttribute('tabindex', 0);
//             target.previousElementSibling.focus();
//         } else {
//             target.setAttribute('tabindex', -1);
//             tabList.lastElementChild.setAttribute('tabindex', 0);
//             tabList.lastElementChild.focus();
//         }
//     }
// });
