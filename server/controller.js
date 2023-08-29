require('dotenv').config()
const CONNECTION_STRING = process.env.CONNECTION_STRING
const {Sequelize} = require('sequelize')
const db = new Sequelize(CONNECTION_STRING)

//module.exports = db

const art = require('./db.json')
let globalId = 56;

    
module.exports = {
    db,
        getArt: (req, res) => {
            res.status(200).send(art)
        },
        deleteArt: (req, res) => {
            let index = art.findIndex(elem => elem.id === +req.params.id);
            art.splice(index, 1);
            res.status(200).send(art);
        },
    createArt: (req, res) => {
      const { artist, rating, imageURL } = req.body
        let newArt = {
            id: globalId,
            artist: artist, 
            rating: +rating,
            imageURL
        }
        art.push(newArt);
        globalId++;
        res.status(200).send(art);
       
    },
    updateArt:  (req, res) => {
        const {type} = req.body;
        let index = art.findIndex(elem => +elem.id === +req.params.id);
        if(type === 'minus' && art[index].rating > 1){
            art[index].rating -= 1;
            res.status(200).send(art);
        } else if(type === 'plus' && art[index].rating < 5){
            art[index].rating += 1;
            res.status(200).send(art);
        } else {
            res.status(400).send('Invalid star rating!')
        }
    }
    }

