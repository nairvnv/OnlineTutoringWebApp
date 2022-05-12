var express = require("express");
var router = express.Router();

var monk = require("monk");
var db = monk("localhost:27017/TutorHub");
var collection = db.get("Users");
var collection2 = db.get("Tutors");
var collection3 = db.get("Appointments");



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
  

module.exports = router;