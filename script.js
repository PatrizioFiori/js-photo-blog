const endpoint = ("https://jsonplaceholder.typicode.com/photos?_limit=6")


let containerCarteUtenti = ""
let overlayOnOff = true
let overlayContainer = "" 


axios.get(endpoint)
    .then(function(response) {
        response.data.forEach(element => inserimentoFotoTitolo(element));
    })


    .catch(function(error) {
        console.log(error);
        alert(error)
    });


    function inserimentoFotoTitolo(element){
        const thumb = element.thumbnailUrl
        const titolo = element.title
        
        /*  per domani
        const albumId = element.albumId 
        const id = element.id
        const url = element.url
        console.log(albumId, id, titolo, url, thumb);
        */
        
        containerCarteUtenti +=
                            `<div class="col-md-4 interazioneCard">
                                <div class="card-utente">
                                    <img src=${thumb} alt="" class="img">
                                    <p class="mt-2">${titolo}</p>
                                </div>
                            </div>`

        document.querySelector(".sezioneRow").innerHTML = containerCarteUtenti        
        
        // Non sono sicuro al 100% di questa parte (Da studiare meglio)
        document.querySelectorAll(".interazioneCard").forEach(card => {
            card.addEventListener("click", comparsaScomparsa)
            
        })
    }
    


    const button = document.getElementById("btnChiusuraOverlay")
    button.addEventListener("click", comparsaScomparsa)
    
    
function comparsaScomparsa (){
    const overlayStatus = document.querySelector(".imgOverlay")
    

    if (overlayOnOff === true){
        overlayStatus.classList.remove('d-none');
        overlayOnOff = false 
        
    } else {
        overlayStatus.classList.add('d-none');
        overlayOnOff = true 
    }
    
    
}