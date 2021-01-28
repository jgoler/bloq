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


// @route  GET api/profile/add
// @desc   Gets the recommend profiles
// @access Private
router.get('/add', auth, async (req, res) => {

  const {
    grade,
    gender,
    school
  } = req.body;

  const profileFields = {};

  if (grade) profileFields.grade = grade;
  if (gender) profileFields.gender = gender;
  if (school) profileFields.school = school;
  try {
    const userProfiles = await User.find({}, { grade: profileFields.grade, grade: 1 });

    if (userProfiles.length === 0) {
      return res.status(404).json({ msg: 'No profiles' });
    }

    numUserProfiles = userProfiles.length;

    const profiles = [];

    for (i = 0; i < numUserProfiles; i++) {
      const profile = await User.findById(userProfiles[i]).select('-password');

      //console.log(profile);

      if (profile) {
        profiles.push(profile);
      }
    }
    const filteredBySchoolProfiles = [];
    if (profileFields.school) {
      for (z = 0; z < profiles.length; z++) {
        if (profiles[z].school === school) {
          filteredBySchoolProfiles.push(profiles[z]);
        }
      }
    } else {
      for (t = 0; t < profiles.length; t++) {
        filteredBySchoolProfiles.push(profiles[t]);
      }
    }

    const filteredByGenderProfiles = [];
    if (profileFields.gender) {
      for (x = 0; x < filteredBySchoolProfiles.length; x++) {
        if (filteredBySchoolProfiles[x].gender === gender) {
          filteredByGenderProfiles.push(filteredBySchoolProfiles[x]);
        }
      }
    } else {
      for (p = 0; p < filteredBySchoolProfiles.length; p++) {
        filteredByGenderProfiles.push(filteredBySchoolProfiles[p]);
      }
    }

    res.json(filteredByGenderProfiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


module.exports = router;