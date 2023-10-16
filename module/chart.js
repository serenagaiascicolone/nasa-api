import {qs, ce} from './dom-manipulation.js'



let chrt = document.getElementById("myChart");
let marsToday = qs('#mars-today')
let loading = qs('.loading')


// funzione per creare contenuto del div mars-today
function createMarsTodayContent (data) {
    let today = data[0]
    
    let title = ce('h4');
    title.textContent = 'Curiosity Today'

    let todaySol = ce('p')
    todaySol.textContent = `This is my ${today.sol} Martian day`

    let todayWeather = ce('p')
    todayWeather.textContent = `Today the weather is ${today.atmo_opacity}`
    chrt.before( title, todaySol, todayWeather)

  
    
}


function createChart(weatherData) {
            
    weatherData.reverse()
    loading.style.display = 'none'
       
        let myChart = new Chart (chrt,    
        {
            type: 'line',
            data: {
                labels: weatherData.map(data => data.sol),
                datasets: [
                    {
                    label: 'Min',
                     data: weatherData.map(data => +data.min_temp),
                     borderColor: "#030A8C",
                    fill: false
                },
                    {
                    label: 'Max',
                     data: weatherData.map(data => +data.max_temp),
                     borderColor: "#F22F1D",
                    fill: false
                },
            
            ]},
            options: {
                legend: true, 
                responsive: true,
                // animations: {
                //     tension: {
                //       duration: 1000,
                //       easing: 'linear',
                //       from: 1,
                //       to: 0,
                //       loop: true
                //     }
                //   },
               
                
            },
        }) 
      
        }

// funzione a cui passiamo i dati che stanno arrivando dal server. 
// function myChart (weatherData) { 
      
//     let formattedData = weatherData.map (data => {

//         return [data.sol, +data.min_temp, +data.max_temp] // + per convertire le stringhe in un numero
//     })
    
//     // per ogni giorno abbiamo un array con le sole proprietà mappate (sol, min_temp e max_temp)
    
//     let chartData = [ // array con etichette a cui arriveranno (vedi sotto) i valori che abbiamo mappatto di formattedData (dal più piccolo al più grande)
//         ['Date', 'Min', 'Max']
//     ]

//     // dichiaro di nuovo la variabile con l'array ribaltato, poichè nel grafico i valori più bassi stanno a sinistra
//     formattedData = formattedData.reverse()
    
//     // riempiamo la chart con i valori 
//     for (let data of formattedData){
//         chartData.push(data)
//     }
   

    
//     // disegnamo la chart
//     let finalData = google.visualization.arrayToDataTable(chartData) // metodo che prende un array e lo trasforma in tabella => che crea google

//     function drawChart () {
//         let options = {
//             title: 'Mars Weather Data',
//             // curveType: 'function',
//             hAxis: {
//                 title: 'Sols',
//                 titleTextStyle: {
//                 color: '#F22F1D'    
//                 }
//             },
//             vAxis: {
//                 title: 'Temp (Celsius)',
//                 titleTextStyle: {
//                 color: '#F22F1D' ,
//             },
//             ticks: [-80, -60, -40, -20, 0, 10] //  sostituire i valori dell'asse Y (VALORI TEMPERATURA)
//             },
//             legend: { position: 'right' },
//             height: 500, 
//             width: 500,
            
           
//           };
//     }


//     let chart = new google.visualization.LineChart(document.getElementById('mars-data')); // dove posizionare la tabella di tipo line chart nel DOM 
//     chart.draw(finalData, drawChart());

// //    window.onresize = boh;

// //    function boh () {
// //     chart.style.width = window.innerWidth
  
// //    }
    
// }

export {createChart, createMarsTodayContent}