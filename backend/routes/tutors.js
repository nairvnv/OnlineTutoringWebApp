var express = require("express");
var router = express.Router();

var monk = require("monk");
var db = monk("localhost:27017/TutorHub");
var collection = db.get("Tutors");


router.get("/", function (req, res) {
  if (req.body.id) collection.find({_id: req.body.id}, function (err, videos) {
    if (err) throw err;
    res.json(videos);
  });
  else collection.find({}, function (err, videos) {
    if (err) throw err;
    res.json(videos);
  });
});


router.post("/", function (req, res) {
  collection.insert(
    {
      name: req.body.name,
      email: req.body.email,
      course: req.body.course,
      passHash: req.body.passHash
    },
    function (err, videos) {
      if (err) throw err;
      res.json(videos);
    }
  );
});

router.put("/", function (req, res) {
  collection.update(
    { _id: req.body.id },
    {
      $set: {
        email: req.body.email,
        mobile: req.body.mobile,
        aboutMe: req.body.aboutMe,
      },
    },
    function (err, videos) {
      if (err) throw err;
      res.json(videos);
    }
  );
});

router.delete("/", function (req, res) {
  collection.remove({ _id: req.body.id }, function (err, videos) {
    if (err) throw err;
    res.json(videos);
  });
});


module.exports = router;