import { mainPicture } from "./main"

export function handleError(error){
    let errorMessage = 'Mi dispiace'
    mainPicture.textContent = errorMessage
    switch(error) {
        case '400':
            errorMessage = 'La foto non è ancora stata scattata. Ritorna domani'
            break
        
        case '404':
            errorMessage = 'Pagina non trovata'
        break

        case '403':
            errorMessage = 'Boh'
        break
    }
}