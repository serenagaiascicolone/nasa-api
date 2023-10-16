// HEADER
import {qs, ce} from './dom-manipulation.js'


//variabili
let menu = ['astronomy picture of the day', 'curiosity data', 'previus images']
let x = window.matchMedia("(max-width: 576px)") // viene applicato l'else negli schermi mobile 
let hamburger = qs('.hamburger')
let nav = qs('nav')


menu.forEach(menuElement => {
    // let nav = qs('nav');
    let link = ce('a');
    nav.append(link);
    link.textContent = menuElement
    

    // ANCORE LINK 
    link.addEventListener('click', function (e) {
       if(e.target.textContent === 'astronomy picture of the day'){
        window.location.hash = "#astronomy-picture"
       }
       
       if (e.target.textContent === 'curiosity data') {
        window.location.hash = "#mars-today"
       }

       if (e.target.textContent === 'previus images') {
        console.log('puoi procedere')
        window.location.hash = "#previus-images"
       } 

        // MEDIA QUERY PER NASCONDERE NAV AL CLICK SU UN LINK MENU 
       if (x.matches) { // If media query matches
        nav.classList.toggle('show')
        hamburger.classList.toggle('open')
    } else {
        nav.classList.remove('show')
        hamburger.classList.remove('open')
      }

    })
})


// BOTTON HAMBURTER 
function openHamburger () {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open')
        nav.classList.toggle('show')
    })
}





export { openHamburger}