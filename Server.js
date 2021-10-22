const express = require("express");
const mongoose = require("mongoose");
const {uri} = require('./connectionString')
const fs = require('fs')
const app = express();
const db = mongoose.connect(uri);
const path = require('path')
const courseRouter = express.Router();
const port = process.env.PORT || 3000;
const Course = require("./models/courseModel");
app.use(express.static("build"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

courseRouter
  .route("/courses")
  .post((req, res) => {
    const course = new Course(req.body);
    course.save();
    return res.status(201).json(course);
  })
  .get((req, res) => {
    Course.find({}, (err, courses) => {
      if (err) {
        return res.send(err);
      }
      console.log(courses)
      return res.json(courses);
    });
  });


courseRouter
  .route("/courses/:courseId")
  .delete((req, res) => {
    Course.deleteOne({"_id": `${req.params.courseId}`}, (err) => {
      if (err) {
        return res.send(err);
      }
      return res.json({"Success": "true"});
    });
  })
  .patch((req, res) => {
    Course.updateOne({"_id": `${req.params.courseId}`}, req.body, (err, result) => {
      if (err) {
        return res.send(err);
      }
      else{
        return res.json(result)
      }
    })
  })
  .post((req, res) => {
    Course.updateOne({"_id": `${req.params.courseId}`}, req.body, (err, result) => {
      if (err) {
        return res.send(err);
      }
      else{
        return res.json(result)
      }
    })
  })
  .put((req, res) => {
    Course.replaceOne({"_id": `${req.params.courseId}`}, {
        courseId: req.body.courseId,
        courseName: req.body.courseName,
        time: req.body.time,
        location: req.body.location || false
    }, (err, result) => {
      if(err) {
        res.send(err)
      }
      else {
        res.json(result)
      }
    })
  })
  .get((req, res) => {
    Course.findById(req.params.courseId, (err, course) => {
        if (err) {
          return res.send(err);
        }
        if (course) {
          return res.json(course)
        }
        return res.sendStatus(404);
      });
    });
app.use((req, res, next) => {
    fs.appendFile(
        path.join(__dirname, 'log.txt'), 
        `Reqest Ip: ${req.ip} at ${new Date().toTimeString().substr(0, 8)}\n`,
        'utf-8',
        (err) => {
        if(err) {
            return err
        } else {
            return
        }
    })
    next()
})
app.use("/api", courseRouter);

app.get("/", (req, res) => {
  res.send("Welcome to my API!");
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

