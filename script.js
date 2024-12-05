const endpoint = ("https://jsonplaceholder.typicode.com/photos?_limit=6")

axios.get(endpoint)
    .then(function(response){
        console.log(response.data)
    })