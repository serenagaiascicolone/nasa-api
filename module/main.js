import {qs, ce} from './dom-manipulation.js'
import {populateModal, createSlider} from './modal.js'
import { numberPreviusImages } from './api.js'
let mainPicture = qs('#main-picture')

        // estrarre l'immagine odierna
            function pictureOfTheDay(pictures) {
                pictures.reverse()
                mainPicture.innerHTML = '' // PER SVUOTARE IL CONTENITORE ALL'ARRIVO DEI DATI
                for (let i = 0; i < pictures.length - numberPreviusImages; i++){
                    
                    // creare il contenuto di main picture
                    
                    let image = pictures[i].url;
                    let description = pictures[i].explanation;
                    let title = pictures[i].title;
                    let copyright = pictures[i].copyright
                    

                    let img = ce('img')
                    let imgContent = checkMediaType(pictures[i])
                    // img.src = imgContent
                    // img.src = img ? image : '/esercizio-nasa/img/image-no-available.jpg'
                    if (image) {
                        img.src = image;
                    } else {
                        img.src = '/img/image-no-available.jpg'    
                    }
                   
                   
                    
                    let textContainer = ce('div')
                    textContainer.classList.add('text-container')
                    
                    mainPicture.append(img, textContainer)

                    let titleContainer = ce('h3')
                    titleContainer.textContent = title ? title : 'No title available'

                    let descriptionContainer = ce('p')
                    // descriptionContainer.textContent = description;
                    descriptionContainer.textContent = description ? description : 'No description  available'
                 

                    let copyrightContainer = ce('p')
                    // copyrightContainer.textContent = `© ${copyright}`
                    copyrightContainer.textContent = copyright ? `© ${copyright}`: 'No copyrigth  available'
                   
             

                    textContainer.append(titleContainer, descriptionContainer, copyrightContainer)


                }
            }
               


            

               function checkMediaType (pictures){
                if (pictures.media_type == 'image') {
                    return pictures.url
                } else if (pictures.media_type == 'video'){
                    pictures.url  = '/img/placeholder-video.png' 
                   return pictures.url
               // nel caso in cui ci fossero video, viene mostrata un'immagine di anteprima
                }
               }

let picturesContainer = qs('.pictures-container')       
            //prendere le picture restanti
            function PreviusImages(pictures) {
                
                picturesContainer.innerHTML = ''
                for (let i = 1; i < pictures.length; i++){
                    //popolare la sezione previus images 
                  let pictureContainer = ce('div')
                  pictureContainer.classList.add('picture-container')
                  picturesContainer.append(pictureContainer)
                  
                  let previusImage = ce('img')
                 let previusImageContent = checkMediaType(pictures[i])
                 previusImage.src = previusImageContent
                  pictureContainer.append(previusImage)
                  
                  createSlider (pictures[i])

                  pictureContainer.addEventListener('click', (e) =>{
                    if (e.target.tagName === 'IMG') {
                        picturesDetailsContainer.style.display = 'flex'
                        populateModal(pictures[i]);
                    }
                })
                
            }
            }
            
let picturesDetailsContainer = qs('.picture-details-container');

        

export{mainPicture, pictureOfTheDay, picturesContainer, PreviusImages}