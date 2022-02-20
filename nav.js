const navToggle = document.querySelector('.mobile-nav-toggle'),
    nav = document.querySelector('.primary-navigation'),
    lis = nav.querySelectorAll('li');

navToggle.addEventListener('click', () => {
    if (nav.dataset.state === "closed") {
        nav.dataset.state = "opened";
        document.body.style.overflow = 'hidden';
        navToggle.setAttribute("aria-expanded", "true");
    } else {
        nav.dataset.state = "closed";
        document.body.style.overflow = '';
        navToggle.setAttribute("aria-expanded", "false");
    }
});