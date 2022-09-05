const express = require('express')
const router = express.Router()
const IndexController = require('../controllers/index.controller')
const {
	createItem,
	deleteItemsById,
	getAllItems,
	getItemById,
	updateItemById,
} = require('../controllers/comics.controller')

router.route('/').get(IndexController.index)

router.route('/comics').post(createItem).get(getAllItems)

router
	.route('/comics/:id')
	.delete(deleteItemsById)
	.put(updateItemById)
	.get(getItemById)

module.exports = router
