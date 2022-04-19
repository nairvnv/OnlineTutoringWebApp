var express = require("express");
var router = express.Router();

var monk = require("monk");
var db = monk("localhost:27017/TutorHub");
var collection = db.get("Appointments");


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
      student_name: req.body.student_name,
      tutor_name: req.body.tutor_name,
      course_name: req.body.course_name,
      appointment_date: req.body.appointment_date,
      appointment_time: req.body.appointment_time,
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