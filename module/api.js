 let endMills = Date.now()
 let numberPreviusImages = 16
 let daysMills = convertDaysInMills (numberPreviusImages);
 let startMills = endMills - daysMills; 

 function convertDaysInMills(days){
     return days * 24 * 60 * 60 * 1000; 
 }

 function createFormattedDate (millis){
     let date = new Date(millis);

    let[year, month, day] = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
     
        return `${year}-${month}-${day}`
 }


 let start_date = createFormattedDate(startMills)


let end_date = createFormattedDate(endMills)



export {numberPreviusImages, endMills, daysMills, startMills, convertDaysInMills, createFormattedDate, start_date, end_date}

