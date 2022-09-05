class IndexController {
	static index = (req, res) => {
		res.json({
			name: 'Comic Book Site',
			version: 'v0.1.0',
		})
	}
}

module.exports = IndexController
