'use strict'

const express = require ('express');
const router = express.Router();

//GET /questions
 //Route for questions collection
router.get("/", (req, res) => {

  res.json({response: "You sent me a GET request"});
});

//POST /questions
 //Reoute for creating questions
router.post("/", (req, res) => {
  res.json({
    response: "You sent me a POST request",
    body: req.body
  });
});

//GET /questions
router.get("/:qID", (req, res) => {
  res.json({
    response: "You sent me a GET request for ID: " + req.params.qID
    });
});

//POST /questions/:id/answers
 //Reoute for creating an answer
router.post("/:qID/answers", (req, res) => {
  res.json({
    response: "You sent me a POST request to /answers",
    questionId: req.params.qID,
    body: req.body
  });
});


//PUT /questions/:id/answers/:aID
 //Edit a specific answer answer
router.put("/:qID/answers/:aID", (req, res) => {
  res.json({
    response: "You sent me a PUT request to /answers",
    questionId: req.params.qID,
    answerId: req.params.aID,
    body: req.body
  });
});

//DELETE /questions/:id/answers/:aID
 //Delete a specific answer answer
router.delete("/:qID/answers/:aID", (req, res) => {
  res.json({
    response: "You sent me a DELETE request to /answers",
    questionId: req.params.qID,
    answerId: req.params.aID    
  });
});

//POST /questions/:id/answers/:aID/vote-up
 //POST /questions/:id/answers/:aID/vote-down
 //Vote on a specific answer
router.post("/:qID/answers/:aID/vote-:dir", function (req, res, next) {
    if(req.params.dir.search(/^(up|down)$/) === -1) {
      const err = new Error('Not Found');
      err.status = 404;
      next(err)
       } else {
      next();
    }
},  (req, res) => {
    res.json({
    response: "You sent me a POST request to /vote-" + req.params.dir,
    questionId: req.params.qID,
    answerId: req.params.aID,
    vote: req.params.dir    
  });
});

//Get /questions/5/answers
// router.get("/5/answers")
module.exports = router;