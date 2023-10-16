import {start_date, end_date} from './module/api.js'

import {openHamburger} from './module/header.js' 
import {mainPicture, pictureOfTheDay, PreviusImages} from './module/main.js'

import {createChart, createMarsTodayContent} from './module/chart.js'
import { apiKey } from './module/apiKey.js'

openHamburger()

let astronomyPicturesURL = './mock/astronomy-pictures.json'
// let astronomyPicturesURL = `https://api.nasa.gov/planetary/apod?start_date=${start_date}&end_date=${end_date}&api_key=${apiKey}&thumbs=true`

let fetchPictures = () => {
    let pictures = fetch(astronomyPicturesURL) 
    .then(res => {
        if (res.ok) { // se res.ok === true, puoi convertire l'oggetto che arriva  - ok proprietà di responsive 
            return res.json()
        } else {
            throw new Error(res.status) // THROW LANCIA L'ERRORE (OGGETTO A CUI PASSIAMO la risposta del server con la sua proprieta status in cui c'è il tipo di errore - 404) => bisogna 'acchiapparlo' quindi CATCH
        }
    }).catch(
        error => mainPicture.textContent = error // visualizziamo nel dom l'errore (possiamo visualizzarlo in maniera differente per i diversi status gestendo il tutto con lo switch case)
    )//.finally ()  finally viene eseguito sempre 
    return pictures
            
}

let fetchedPictures = fetchPictures()
    .then(pictures => {
        pictureOfTheDay(pictures)
        PreviusImages(pictures)
    })


    // TABELLA

let curiosityData = 'https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json'

let fetchCuriosityData = () => {
    let data = fetch(curiosityData)
        .then (res => res.json())
        .then (data => data.soles) // ritorno solo l'array soles 
    
        return data;
    }

    // anno marziano dura 668 giorni/sol
    // voglio prendere sol i giorni dell'ultimo anno

    
    
    fetchCuriosityData()
    .then (
        res => {
            let marsWeatherData = []; 
            for (let i = 0; i < 668; i++){ // ciclo for per prendere i giorni dell'ultimo anno
                marsWeatherData.push(res[i]) // che inserisco nell'array    
            }
            return marsWeatherData // quando concateno più then deve ritornare sempre qualcosa (fetch asincrona, se mettessi il console.log dell'array dopo la fetch, risulterebbe sempre vuota, perchè la risposta della fetch arriva dopo)
        }
        )
        .then (data => { 
            createMarsTodayContent (data)
            createChart (data)
        }
    )


    











