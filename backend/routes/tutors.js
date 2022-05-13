var express = require("express");
var router = express.Router();

var monk = require("monk");
var db = monk("localhost:27017/TutorHub");
var collection = db.get("Tutors");
var collection2 = db.get("Users");
var collection3 = db.get("Appointments");

router.get("/", function (req, res) {
    console.log(collection)
    res.json(collection);
  });


router.post("/", function (req, res) {
  if (req.body.email) collection.find({email: req.body.email}, function (err, request) {
    if(request.length!=0){
      res.json({'status':'fail: user already exists'});
    }else collection.insert(
      {
        name: req.body.name,
        email: req.body.email,
        course: req.body.course,
        aboutMe : req.body.aboutMe,
        passHash: req.body.passHash,
        dailyTimeSlot: req.body.timeslot,

        profileImg: "",
        mobile: "",
        aboutMe: "",
	      course_name: "",
        totalHoursTaught: 0,
	      sumReview: 0,
	      totReview: 0,
	      comments: []
      },
      function (err, request) {
        if (err) throw err;
        res.json(request);
      }
    );
  });
});

router.put("/", function (req, res) {
  if (req.body.email) collection.find({email: req.body.email}, function (err, request) {
    if(request.length!=0){
      res.json({'status':'fail: user already exists'});
    }
  });
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


//to get tutor details and id, when a tutor logins.... response is tutor details along with status and type
router.post("/login", function (req, res) {
  if (req.body.email) collection.find({email: req.body.email}, function (err, request) {
    if (err) throw err;
    console.log(request.length)
    if(request.length!=0){
      if (request[0].passHash == req.body.passHash){
        request[0]['status']='success'
        request[0]['type']='tutor'
        res.json(request)
       }
     else{
       ress={'status':'fail'}
       res.json(ress)
     };
    }else{
      ress={'status':'fail'}
      res.json(ress)
    }
  });
});


//get all comments for particular tutor, needs tutor id in request
router.get("/comments", function (req, res) {
  if (req.body.id) collection.find({_id: req.body.id}, function (err, request) {
    if (err) throw err;
    res.json(request[0].comments);
  });
});

//get tutor appointments
router.post("/appointments", function (req, res) {
  if (req.body.id) collection3.find({tutor_id: req.body.id}, function (err, videos) {
    if (err) throw err;
    res.json(videos);
  });
});


// //give tutor id and available day/time array in format ['5-7,14-20', '', '', '17-19', '', '', '']
// router.put("/appointments", function (req, res) {
//   if (req.body.id) collection.find({_id: req.body.id}, function (err, request) {
//   collection.update(
//     { _id: req.body.id },
//     {
//       $set: {
//         dailyTimeSlot: req.body.timeslot
//       },
//     },
//     function (err, videos) {
//       if (err) throw err;
//       res.json(videos);
//     }
//   );
// });
// });

module.exports = router;