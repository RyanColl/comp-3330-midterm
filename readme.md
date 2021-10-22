# Course Router

The router created by this express server is for capturing our course data in an api format. POSTman lets you GET, POST, PUT, PATCH, and DELETE from this rest API using the given course format. Each course has a date, so with a respective react app, we would be able to sort and categorize these based on that. For now, all we need to see is that we can GET, POST, PUT, PATCH, and DELETE from this rest API properly.

# Heroku

The app is hosted as a RESTAPI on: https://comp-3330-midterm.herokuapp.com/

# Command Line

The scripts I chose to include in my project today were the start script: "node Server.js", and the dependencies script: "npm i". Because we are not using React, we do not need a build script to bundle the react app before hosting.

# RESTAPI

The REST API I created for this midterm deals with courses that include a date for further sorting in a react app. Each course has a time, and with a react front end, we could display these times as tables in a schedule. I used a course Router and the Mongoose Models to create a RESTAPI that reaches out and interacts with the courses db in the mongo atlas. As I said before, these courses would be ready for pulling and sorting into a react app for a schedule.

## GET 

We use the GET request to pull all of the course data from Mongo.

## POST

We use the POST request to add new courses into our course DB

## PUT && PATCH

We can use the PUT and PATCH requests similarily to insert new information into a specified course given the ID.

## DELETE

We can use the DELETE request to delete from our database the course with the given ID.

