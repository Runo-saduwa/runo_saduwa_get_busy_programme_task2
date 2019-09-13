const express = require('express');
const axios = require('axios');
const router = express.Router();

//@route        /profile
//@desc         Consume API 
//@access       Public
router.get('/profile', async (req, res) => {
	try {
		const data = await axios.get('http://www.somaku.com/users/1');
		res.send(data.data);
	} catch (e) {
		res.send(e);
	}
});


module.exports = router