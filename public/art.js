const artContainer = document.querySelector('#art-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4000/api/art`

const artCallback = ({ data: art }) => displayArt(art)
const errCallback = err => console.log(err)

const getAllArt = () => axios.get(baseURL).then(artCallback).catch(errCallback)
const createArt = body => axios.post(baseURL, body).then(artCallback).catch(errCallback)
const deleteArt = id => axios.delete(`${baseURL}/${id}`).then(artCallback).catch(errCallback)
const updateArt = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(artCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let artist = document.querySelector('#artist')
    let rating = document.querySelector('input[name="ratings"]:checked')
    let imageURL = document.querySelector('#img')
 console.log(rating)
    let bodyObj = {
        artist: artist.value,
        rating: rating.value, 
        imageURL: imageURL.value
    }

    createArt(bodyObj)

    artist.value = ''
    rating.checked = false
    imageURL.value = ''
}

function createArtCard(art) {
    const artCard = document.createElement('div')
    artCard.classList.add('art-card')

    artCard.innerHTML = `<img alt='Art cover image' src=${art.imageURL} class="ART-cover-image"/>
    <p class="artist">${art.artist}</p>
    <div class="btns-container">
        <button onclick="updateArt(${art.id}, 'minus')">-</button>
        <p class="Art-rating">${art.rating}</p>
        <button onclick="updateArt(${art.id}, 'plus')">+</button>
    </div>
    <button onclick="deleteArt(${art.id})">delete</button>
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

getAllArt()