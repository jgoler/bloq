const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const multer = require('multer');
const auth = require('../../middleware/auth');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname)
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage, limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

//@route  POST api/users
//@desc   Register user
//@access Public
router.post('/', [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
      }

      user = new User({
        name,
        email,
        password
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(payload, config.get('jwtSecret'),
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }

  });


//@route  POST api/users/images
//@desc   Store user images
//@access Private
router.post("/images", upload.single('image'),
  async (req, res) => {
    try {
      console.log(req.file);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });

// @route Post api/users/bio
// @desc  Adds bio, grade, and gender
// @access Private
router.post("/bio", [auth, [
  check('bio', 'Bio is required').not().isEmpty(),
  check('gender', 'Please select a gender').not().isEmpty(),
  check('grade', 'Please select a grade').not().isEmpty()
]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      bio,
      gender,
      grade
    } = req.body;

    console.log(req.body);

    try {
      let desiredUser = await User.findById(req.user.id);


      if (desiredUser) {
        desiredUser.bio = bio;
        desiredUser.gender = gender;
        desiredUser.grade = grade;
        await desiredUser.save();
        return res.json(desiredUser);
      }

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }

  });

module.exports = router;