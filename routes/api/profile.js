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
/*
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
*/

/*
note: below is the function that works
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

  //console.log(profileFields);

  try {
    let userProfiles = []
    //const userProfiles = await User.find({}, { grade: profileFields.grade, grade: 1 }, { school: profileFields.school, school: 1 });

    //const userProfiles = await User.find({}, { grade: profileFields.grade, grade: 1 });
    if (profileFields.grade && profileFields.gender && profileFields.school) {
      userProfiles = await User.find({ grade: profileFields.grade, gender: profileFields.gender, school: profileFields.school });
    } else if (profileFields.grade && profileFields.gender) {
      userProfiles = await User.find({ grade: profileFields.grade, gender: profileFields.gender });
    } else if (profileFields.grade && profileFields.school) {
      userProfiles = await User.find({ grade: profileFields.grade, school: profileFields.school });
    } else if (profileFields.grade) {
      userProfiles = await User.find({ grade: profileFields.grade });
    } else if (profileFields.school && profileFields.gender) {
      userProfiles = await User.find({ school: profileFields.school, gender: profileFields.gender });
    } else if (profileFields.school) {
      userProfiles = await User.find({ school: profileFields.school });
    } else if (profileFields.gender) {
      userProfiles = await User.find({ gender: profileFields.gender });
    } else {
      userProfiles = await User.find({});
    }
    // const userProfiles = await User.find({ grade: profileFields.grade });
    //const userProfiles = await User.find({ gender: req.query.gender, grade: req.query.grade, school: req.query.school });

    console.log(userProfiles);
    res.json(userProfiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
*/

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

  const query = {};
  if (profileFields.grade)
    query.grade = profileFields.grade;

  if (profileFields.gender)
    query.gender = profileFields.gender;

  if (profileFields.school)
    query.school = profileFields.school;
  try {
    const userProfiles = await User.find(query);
    /*
      .then(users => {
        //Your matched users will be in variable users
        console.out(users)
      })
      */
    res.json(userProfiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }

});


// @route  POST api/profile/addingfriend
// @desc   Add friend to a user
// @access Private

//need to make sure it can't add the same user twice
router.post("/addingfriend", auth,
  async (req, res) => {
    const currentUser = await User.findById(req.user.id);

    const newFriend = await User.findById(req.body.newFriendID);

    const newFriendData = {
      name: newFriend.name,
      user: newFriend.id
    }

    try {
      /*
      //console.log(currentUser.friends);
      //console.log(currentUser.friends[0]);
      currentUser.friends.filter(member => {
        console.log("member.toString() " + member.toString());
        console.log("req.user.id " + req.user.id);
        console.log("member._id.toString() " + member.user.toString());
      })
      */
      /*
      if (currentUser.friends.filter(member => member.toString() === req.user.id).length > 0) {
        return res.status(400).json({ msg: 'Already added as a friend' });
      }
      */
      /*
      if (currentUser.friends.filter(member => member.id === req.body.newFriendID)) {
        return res.status(400).json({ msg: 'User is already a friend' });
      }
      */
      if (
        currentUser.friends.filter(member => member.user.toString() === req.body.newFriendID).length > 0) {
        return res.status(400).json({ msg: 'That user is already your friend' });
      }



      currentUser.friends.unshift(newFriendData);
      await currentUser.save();
      return res.json(currentUser);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }

  });

module.exports = router;