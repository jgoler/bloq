const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');

// @route  GET api/profile/me
// @desc   Gets the current users profile
// @access Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await User.findById(req.user.id).select('-password');

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
})


module.exports = router;