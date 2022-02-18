const navToggle = document.querySelector('.mobile-nav-toggle'),
    nav = document.querySelector('.primary-navigation'),
    lis = nav.querySelectorAll('li');

navToggle.addEventListener('click', () => {
    if (nav.dataset.state === "closed") {
        nav.dataset.state = "opened";
        navToggle.setAttribute("aria-expanded", "true");
    } else {
        nav.dataset.state = "closed";
        navToggle.setAttribute("aria-expanded", "false");
    }
});