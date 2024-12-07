const endpoint = ("https://jsonplaceholder.typicode.com/photos?_limit=6")

let overlayOnOff = true


axios.get(endpoint)
    .then(function(response) {
        response.data.forEach(element => inserimentoFotoTitolo(element));
        document.querySelectorAll(".interazioneCard").forEach(card => {
            card.addEventListener("click", comparsaScomparsa)
        })
    })

    .catch(function(error) {
        console.log(error);
        alert(error)
    });


    function inserimentoFotoTitolo(element){
        const {thumbnailUrl, title} = element

        document.querySelector(".sezioneRow").innerHTML += 
        `<div class="col-md-4 interazioneCard" data-thumbnail="${thumbnailUrl}">
            <div class="card-utente">
                <img src=${thumbnailUrl} alt="" class="img">
                <p class="mt-2">${title}</p>
            </div>
        </div>
        `
    }
    


    const button = document.getElementById("btnChiusuraOverlay")
    button.addEventListener("click", comparsaScomparsa)
    addEventListener("keydown", comparsaScomparsa) //debug per l'ispezione
    
    
function comparsaScomparsa (event){
    
    const overlayStatus = document.querySelector(".imgOverlay");
    const imgOnOverlay = document.getElementById("fotoOverlay");    
        

    

    if (event.type === "click" && event.currentTarget.classList.contains("interazioneCard")) {
        const card = event.currentTarget //associo a card l'elemento che è stato cliccato e che ha subito l'evento
        const thumbnailUrl = card.getAttribute("data-thumbnail") //tramite GetAttribute estraggo il valore di data 
        imgOnOverlay.src = thumbnailUrl; //associo il valore estratto alla riga 52 all'SRC della classe imgOnOverlay definita a riga 45
    }

    if (overlayOnOff === true){
        overlayStatus.classList.remove('d-none');
        overlayOnOff = false 
        
    } else {
        overlayStatus.classList.add('d-none');
        overlayOnOff = true 
    }
    
    
}