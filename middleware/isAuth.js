'use strict'

module.exports = function isAuthenicated(req, res, next) {
	if (req.user) {
		return next()
	}

	return res.status(404).send({})
}