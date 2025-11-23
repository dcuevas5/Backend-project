// setup.. this is similar to when we use our default tags in HTML
const express = require('express');
//we have to use cors for to host a front end and backend on the same device
var cors = require('cors');

// activate or tell this app variable to be and express server
const app = express();
app.use(cors());
const router = express.Router();


// making an api using routes
// Routes are used to handle browser requests. Te look like URL's. The difference is that when the browser request a route, it is dynamically handle by using a function.

 // Get or regular request when someone goes to hhtps://localhost:3000/hello. When using a function an a route, we almost always have a parameter or handle a response and request

router.get("/songs", function(req, res) {
        const songs= [
        {
        title: "We found love",
        artist: "Rihanna",
        popularity: 10,
        releasteDate: new Date("2011-09-22"),
        genre:["electro house"],
        },
        {
        title: "Happy",
        artist: "Pharrell Williams",
        popularity: 10,
        releasteDate: new Date("2013-11-21"),
        genre:["soul","new soul" ],
        }
    ];
  
    res.json(songs);
});
    

// All request that usually use an api start with / api... so the url would be https://localhost:3000/api/songs
app.use("/api", router);
app.listen(3000);