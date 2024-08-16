'use strict';
const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', event => {
                event.preventDefault();
                const dialogBox = link.nextElementSibling;
                dialogBox.classList.toggle('show');
            });
        });


