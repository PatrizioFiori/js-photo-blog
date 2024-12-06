const endpoint = ("https://jsonplaceholder.typicode.com/photos?_limit=6")


let containerCarteUtenti = ""

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
                            `<div class="col-md-4">
                                <div class="card-utente" id="interazioneCard">
                                    <img src=${thumb} alt="" class="img">
                                    <p class="mt-2">${titolo}</p>
                                </div>
                            </div>`

        document.querySelector(".sezioneRow").innerHTML = containerCarteUtenti        
        
    }




    /*
    Click sulla carta -> event listener al click ->
    
    */