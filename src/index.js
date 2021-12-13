console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function() {
    console.log("The DOM has loaded");
    fetch(imgUrl)
    .then (function(response) {
        return response.json()
    })
    .then(function(json) {
        for (const element of json.message) {
            console.log(element)
            appendImage(element)
        }
    })
});

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const breedUrl = 'https://dog.ceo/api/breeds/list/all'


const main = document.querySelector('body')

function appendImage(e) {
    var img = document.createElement('img');
    img.src = e
    document.querySelector('body').appendChild(img)
}
