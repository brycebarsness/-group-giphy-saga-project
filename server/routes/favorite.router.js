const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

// return all favorite images
router.get("/", (req, res) => {
  const queryText = `SELECT * FROM favorites`;
  pool
    .query(queryText)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

// add a new favorite
router.post("/", (req, res) => {
  const gifToAdd = req.body;
  console.log(`Adding new favorite`, gifToAdd);
  let queryText = `INSERT INTO "favorites" ("url", "alt_text") VALUES ($1, $2)`;
  pool
    .query(queryText, [gifToAdd.images.downsized_medium.url, gifToAdd.title])
    .then((result) => {
      console.log("added gif to the favorite table");
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("error adding gif to favorite table", error);
      res.sendStatus(500);
    });
});

// update given favorite with a category id
router.put("/:favId", (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete("/", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
