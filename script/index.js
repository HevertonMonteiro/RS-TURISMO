'use strict';
// const navLinks = document.querySelectorAll('.nav-link');
//         navLinks.forEach(link => {
//             link.addEventListener('click', event => {
//                 event.preventDefault();
//                 const dialogBox = link.nextElementSibling;
//                 dialogBox.classList.toggle('show');
//             });
//         });


function mostraContact(){
    var contact = document.getElementById('ocult')
    var email = document.getElementById('email');
    var zap = document.getElementById('zap');
   
    if(contact.style.display === 'none' && email.style.display === 'none' && zap.style.display === 'none'){
        contact.style.display = 'block';
        email.style.display = 'block';
        zap.style.display = 'block';
    } else {
        contact.style.display = 'none';
        email.style.display = 'none';
        zap.style.display = 'none';
    }

}