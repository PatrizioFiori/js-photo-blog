const endpoint = ("https://jsonplaceholder.typicode.com/photos?_limit=6")


let containerCarteUtenti = ""
let overlayOnOff = true
let overlayContainer = "" 

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
        const {thumbnailUrl, title, id, url,} = element

        document.querySelector(".sezioneRow").innerHTML += 
        `<div class="col-md-4 interazioneCard">
            <div class="card-utente">
                <img src=${thumbnailUrl} alt="" class="img">
                <p class="mt-2">${title}</p>
            </div>
        </div>
        `
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