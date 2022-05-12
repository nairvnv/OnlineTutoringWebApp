var express = require("express");
var router = express.Router();

var monk = require("monk");
var db = monk("localhost:27017/TutorHub");
var collection = db.get("Tutors");
var collection2 = db.get("Users");
var collection3 = db.get("Appointments");

router.get("/", function (req, res) {
  if (req.body.id) collection.find({_id: req.body.id}, function (err, request) {
    if (err) throw err;
    res.json(request);
  });
  else collection.find({}, function (err, request) {
    if (err) throw err;
    res.json(request);
  });
});


router.post("/", function (req, res) {
  collection.insert(
    {
      name: req.body.name,
      email: req.body.email,
      course: req.body.course,
      aboutMe : req.body.aboutMe,
      passHash: req.body.passHash
    },
    function (err, request) {
      if (err) throw err;
      res.json(request);
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
    function (err, request) {
      if (err) throw err;
      res.json(request);
    }
  );
});

router.delete("/", function (req, res) {
  collection.remove({ _id: req.body.id }, function (err, request) {
    if (err) throw err;
    res.json(request);
  });
});

//needs tutor id in request
router.get("/comments", function (req, res) {
  if (req.body.id) collection.find({_id: req.body.id}, function (err, request) {
    if (err) throw err;
    res.json(request[0].comments);
  });
});

//get tutor appointments
router.get("/appointments", function (req, res) {
  if (req.body.id) collection3.find({_id: req.body.id}, function (err, videos) {
    if (err) throw err;
    res.json(videos[0]);
  });
});


module.exports = router;