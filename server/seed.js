const db = require('./controller.js')


const seed = () => {
    db.query(`
        CREATE TABLE form (
            id SERIAL PRIMARY KEY,
            name VARCHAR(30),
            date DATE,
            description VARCHAR(400),
            complete BOOLEAN
        );
    `).then(() => {
        console.log('Seeded :)')
    })
}

module.exports = seed