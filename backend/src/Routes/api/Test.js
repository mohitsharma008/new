const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const Blog = require("../../Models/Test");

//@route  POST api/users
//@desc  Register user
//@access   Public

router.post(
  "/",
  check("text", "Text is required").not().isEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      console.log("hello");
      const newBlog = new Blog({
        text: req.body.text,
      });
      const blog = await newBlog.save();

      res.json(blog);
    } catch (err) {
      res.status(500).send("Server Error");
    }
  }
);
module.exports = router;
