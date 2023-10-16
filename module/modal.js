import {qs, ce} from './dom-manipulation.js'
let picturesDetailsContainer = qs('.picture-details-container');

// finestra modale       

    let pictureDetails = ce('div')
    pictureDetails.classList.add('picture-details')
    let previousArrow = ce('span')
    let closeButton = ce('span')
    closeButton.classList.add('close-button')
    let nextArrow = ce('span')
  
    let imageContainer = ce('img')
    let textContainer = ce('div')
    let titleContainer = ce('h3');
    let descriptionContainer = ce('p')
    let copyrightContainer = ce('p')
    
    pictureDetails.append( imageContainer, textContainer)
    textContainer.append(titleContainer, descriptionContainer, copyrightContainer)
    picturesDetailsContainer.insertAdjacentElement('afterbegin', previousArrow)
    picturesDetailsContainer.insertAdjacentElement('afterbegin', closeButton)
    picturesDetailsContainer.append(pictureDetails, nextArrow)
    
    imageContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {

            textContainer.classList.toggle('showModal')
        }
    })
    
        
        function populateModal (pictures){
            let image = pictures.url
            let description = pictures.explanation
            let title = pictures.title 
            let copyright = pictures.copyright
            
            imageContainer.src = image;
            titleContainer.textContent = title ? title : 'No title available'
            descriptionContainer.textContent = description ? description : 'No description  available'
            copyrightContainer.textContent = copyright ? `© ${copyright}`: 'No copyrigth  available'
            nextArrow.innerHTML = `<i class="fa-solid fa-chevron-right" style="color: #fafafa;"></i>`
            previousArrow.innerHTML = ` <i class="fa-solid fa-chevron-left" style="color: #fafafa;"></i>`
            closeButton.innerHTML = `<i class="fa-solid fa-xmark fa-xs" style="color: #fafafa;"></i>`
            
        }

        
       let sliders = []

       function createSlider (pictures) {
            sliders.push(pictures) 
            let i = 1;

            nextArrow.addEventListener('click', next)
            previousArrow.addEventListener('click', previous) 
            

            function next () {
                let slider = sliders[i]
                if (i < sliders.length) {
                    populateModal(slider)   
                    i++;
                } else {
                    i = 0;
                    populateModal(slider)
                }
            }


            function previous () {
                            let slider = sliders[i]
                            if (i >= 0) {
                                populateModal(slider) 
                                i--;
                            } else {
                                i = sliders.length -1;
                                populateModal(slider)
                            }
                        }

            window.onkeyup = function (e){
                if(e.key ===  'ArrowRight') {
                    next()
                } else if (e.key === 'ArrowLeft') {
                    previous()
                }
            }
       }
       
    
    
       
        window.onclick = function (e){
            console.log(e)
            if (e.target === picturesDetailsContainer | e.target.className === 'fa-solid fa-xmark fa-xs'){
                console.log(e)
                picturesDetailsContainer.style.display = 'none'  
            }
            
            window.onkeydown = function (e){
                if (e.key === 'Escape') {
                    picturesDetailsContainer.style.display = 'none'
                }
            }
        }

     


        export{picturesDetailsContainer, pictureDetails,imageContainer, titleContainer, descriptionContainer, populateModal, createSlider}