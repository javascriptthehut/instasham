#Instasham

##Why?
We want to create a sham'tastic app which will upload your favorite images by feeding a URL into an input box.
It a fun exercise for us to learn:

 * REDIS - a non relational database
 * Relation between db, server and front end.
 * Data structures
 * Using XML HTTP requests
 * More Node.js


##What?

A form of wierd, shammy instagram!
The index page has a selection of 12 images, information about the user and the time of upload. At the center of the page there is an input box into which the user can insert the image URL.
The page will reload and refresh the image selection every time a user input a new image URL.

##How?

On load, the page will send a GET request which will check the DB for images and upload the public file, containing the front end files.
once the url has been put in by the user, a POST request is send to server and the new information is added to the database. Once the post is sent, the server sends back a message which will trigger the refreshing of the DOM and upload the last 12 items in the array stored int the db. this will include the most recent image added as well as the other 11 images stored before it.

HVAE FUN! :)
