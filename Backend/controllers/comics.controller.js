const { JSONResponse } = require('../lib/helper')
const Comics = require('../models/comics.model')

/**
 * ### Description
 * Get all Comics
 */
exports.getAllItems = async (req, res) => {
	try {
		const comics = await Comics.find()
		JSONResponse.success(res, 'Success.', comics, 200)
	} catch (error) {
		JSONResponse.error(res, 'Fail to load comic', error, 500)
	}
}

/**
 * ### Description
 * Creating an comic
 */
exports.createItem = async (req, res) => {
	try {
		const comics = await Comics.create(req.body)
		JSONResponse.success(res, 'Success.', comics, 200)
	} catch (error) {
		JSONResponse.error(res, 'Fail to load comic', error, 500)
	}
}

/**
 * ### Description
 * Deleting Comics from list
 */
exports.deleteItemsById = async (req, res) => {
	try {
		const comic = await Comics.findById(req.params.id)
		if (comic) await comic.delete()
		JSONResponse.success(res, 'Success.', comic, 200)
	} catch (error) {
		JSONResponse.error(res, 'Fail to load comic', error, 500)
	}
}

// Getting Comics by id
exports.getItemById = async (req, res) => {
	try {
		const comic = await Comics.findById(req.params.id)
		JSONResponse.success(res, 'Success.', comic, 200)
	} catch (error) {
		JSONResponse.error(res, 'Fail to load comic', error, 500)
	}
}

// Update Comics by id
exports.updateItemById = async (req, res) => {
	try {
		const comic = await Comics.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		})
		JSONResponse.success(res, 'Success.', comic, 200)
	} catch (error) {
		JSONResponse.error(res, 'Fail to load comic', error, 500)
	}
}
