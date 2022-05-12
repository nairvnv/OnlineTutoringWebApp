var express = require("express");
var router = express.Router();

var monk = require("monk");
var db = monk("localhost:27017/TutorHub");
var collection = db.get("Users");
var collection2 = db.get("Tutors");

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

  router.put("/review", function (req, res) {
    collection2.update(
      { _id: req.body.id },
      {
        $inc:{
          totReview: 1,
          sumReview: req.body.review
        }
      },
      function (err, videos) {
        if (err) throw err;
        res.json(videos);
      }
    );
  });
  

module.exports = router;