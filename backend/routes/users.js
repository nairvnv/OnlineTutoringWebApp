var express = require("express");
var router = express.Router();

var monk = require("monk");
var db = monk("localhost:27017/TutorHub");
var collection = db.get("Users");
var collection2 = db.get("Tutors");
var collection3 = db.get("Appointments");



//to add new user to db
router.post("/", function (req, res) {
  collection.insert(
    {
      name: req.body.name,
      email: req.body.email,
      passHash: req.body.passHash
    },
    function (err, request) {
      if (err) throw err;
      res.json(request);
    }
  );
});


//to update user details
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

//to delete a user
router.delete("/", function (req, res) {
  collection.remove({ _id: req.body.id }, function (err, request) {
    if (err) throw err;
    res.json(request);
  });
});

//to get user details and id, when a user logins.... response is user details along with status and type
router.get("/login", function (req, res) {
  if (req.body.email) collection.find({email: req.body.email}, function (err, request) {
    if (err) throw err;
    if(request.length!=0){
      if (request[0].passHash == req.body.passHash){
        request[0]['status']='success'
        request[0]['type']='user'
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


//api routes to get, update and delete favorites
router.get("/favorites", function (req, res) {
    if (req.body.id) collection.find({_id: req.body.id}, function (err, videos) {
      if (err) throw err;
      res.json(videos[0].favorites);
    });
    else collection.find({}, function (err, videos) {
      if (err) throw err;
      res.json(videos);
    });
  });
  
  router.put("/favorites", function (req, res) {
    collection.update(
      { _id: req.body.id },
      {
        $push: {
          favorites: req.body.favorites
        },
      },
      function (err, videos) {
        if (err) throw err;
        res.json(videos);
      }
    );
  });

  router.delete("/favorites", function (req, res) {
    collection.update(
        { _id: req.body.id },
        {
          $pull: {
            favorites: req.body.favorites
          },
        },
        function (err, videos) {
          if (err) throw err;
          res.json(videos);
        }
      );
  });

  //api to insert comments in db
  router.put("/comments", function (req, res) {
    collection2.update(
      { _id: req.body.id },
      {
        $push: {
          comments: req.body.comments
        },
      },
      function (err, videos) {
        if (err) throw err;
        res.json(videos);
      }
    );
  });

  
  // api route to send review to db and get updated review
  router.put("/review", function (req, res) {
    collection2.update(
      { _id: req.body.id },
      {
        $inc:{
          totReview: 1,
          sumReview: req.body.review
        }
      },
    );
    collection2.find({_id: req.body.id}, function (err, ress) {
      if (err) throw err;
      console.log(ress)
      res.json({"rating": Math.round((ress[0].sumReview/ress[0].totReview + Number.EPSILON) * 100) / 100});
    });

  });



  // api routes for PROFILE IMAGES
  router.get("/userimg", function (req, res) {
    if (req.body.id) collection.find({_id: req.body.id}, function (err, videos) {
      if (err) throw err;
      res.json(videos[0].profileImg);
    });
    else collection.find({}, function (err, videos) {
      if (err) throw err;
      res.json(videos);
    });
  });
  
  router.put("/userimg", function (req, res) {
    collection.update(
      { _id: req.body.id },
      {
        $set: {
          profileImg: req.body.profileImg
        },
      },
      function (err, videos) {
        if (err) throw err;
        res.json(videos);
      }
    );
  });

  router.get("/tutorimg", function (req, res) {
    if (req.body.id) collection2.find({_id: req.body.id}, function (err, videos) {
      if (err) throw err;
      res.json(videos[0].profileImg);
    });
    else collection2.find({}, function (err, videos) {
      if (err) throw err;
      res.json(videos);
    });
  });
  
  router.put("/tutorimg", function (req, res) {
    collection2.update(
      { _id: req.body.id },
      {
        $set: {
          profileImg: req.body.profileImg
        },
      },
      function (err, videos) {
        if (err) throw err;
        res.json(videos);
      }
    );
  });


  //get user appointments
  router.get("/appointments", function (req, res) {
    if (req.body.id) collection3.find({student_id: req.body.id}, function (err, videos) {
      if (err) throw err;
      res.json(videos);
    });
  });

  //book appointment
  router.put("/appointments", async function (req, res) {
    


    if (req.body.tutor_id) collection2.find({_id: req.body.tutor_id}, function (err, videos) {
      let appointments=[]
      if (err) throw err;

      var main_tp=videos[0].dailyTimeSlot.split("-")
      var main_time=[]
      main_tp.forEach(str => {
        main_time.push(Number(str))
      });

      var check_tp=req.body.timeslot.split("-")
      var check_time=[]
      check_tp.forEach(str => {
        check_time.push(Number(str))
      });


      if (check_time[0]>=main_time[0] && check_time[1]<=main_time[1]){
        collection3.find({tutor_id: req.body.tutor_id,student_id : req.body.student_id}, function (err, req2) {
          for (let reqq of req2) {
          
            var apt_date = reqq.appointment_date
            var my_date = req.body.date

            if(my_date!==apt_date){
            var main_tmp=reqq.appointment_time.split("-");
            var main_time=[]
            main_tmp.forEach(str => {
              main_time.push(Number(str))
            });
            console.log(check_time,main_time)

            if ((check_time[0]<main_time[0] && check_time[1]<=main_time[0]) ||
              (check_time[0]>=main_time[1] && check_time[1]>main_time[1])){
                console.log(reqq)
                appointments.push(reqq)
                console.log(appointments)

            }
          }
        }
        console.log('here')
        console.log(appointments)
        res.json(appointments)

        });
      }
    });

  });

module.exports = router;