const db = require('mongoose')

let itemsSchema = new db.Schema({
	title: { type: String, required: true },
	artist: { type: String, required: true },
	price: { type: Number, required: true },
	category: { type: String, required: true },
})

module.exports = db.model('comics', itemsSchema)
