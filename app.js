const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require('./db');                 // starts MongoDB connection
const Song = require('./models/songs');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const router = express.Router();

router.get("/songs", async (req, res) => {
  try {
    console.log("➡️ GET /api/songs");
    const songs = await Song.find();
    console.log("Songs from DB:", songs);
    res.json(songs);
  } catch (err) {
    console.error("Error in GET /api/songs:", err);
    res.status(500).send("Error fetching songs");
  }
});

app.use("/api", router);

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

router.post("/songs", async (req, res) => {
    try{
        const song = new Song(req.body);
        await song.save();
        res. status(201).json(song);
        console.log(song)
    }
    catch(err){
        res.status(400).send(err)
    }
    });