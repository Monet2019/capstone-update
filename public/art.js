const artContainer = document.querySelector('#art-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4004/api/art`

const artCallback = ({ data: art }) => displayArt(art)
const errCallback = err => console.log(err)

const getAllArt = () => axios.get(baseURL).then(artCallback).catch(errCallback)
const createArt = body => axios.post(baseURL, body).then(artCallback).catch(errCallback)
const deleteArt = id => axios.delete(`${baseURL}/${id}`).then(artCallback).catch(errCallback)
const updateArt = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(artCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let artist = document.querySelector('#artist')
    let price = document.querySelector('#price')
    let rating = document.querySelector('input[name="ratings"]:checked')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        artist: artist.value,
        price: price.value, 
        rating: rating.value, 
        imageURL: imageURL.value
    }

    createART(bodyObj)

    artist.value = ''
    price.value = ''
    rating.checked = false
    imageURL.value = ''
}

function createARTCard(art) {
    const ARTCard = document.createElement('div')
    ARTCard.classList.add('art-card')

    ARTCard.innerHTML = `<img alt='ART cover image' src=${art.imageURL} class="ART-cover-image"/>
    <p class="artist">${art.artist}</p>
    <div class="btns-container">
        <button onclick="updateART(${art.id}, 'minus')">-</button>
        <p class="ART-price">$${art.price}</p>
        <button onclick="updateART(${art.id}, 'plus')">+</button>
    </div>
    <button onclick="deleteART(${art.id})">delete</button>
    `


    artContainer.appendChild(artCard)
}

function displayArt(arr) {
    artContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createArtCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllAet()