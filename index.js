const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let characters = {
  next_id: 5,
  data: [
    {
      id: 1,
      name: "Harry Potter",
      house: "Gryffindor"
    },
    {
      id: 2,
      name: "Draco Malfoy",
      house: "Slytherin"
    },
    {
      id: 3,
      name: "Hermione Granger",
      house: "Gryffindor"
    },
    {
      id: 4,
      name: "Ron Weasley",
      house: "Gryffindor"
    }
  ]
};

app.get("/", (req, res) => {
  res.send("Draco dormiens nunquam titillandus");
});

app.get("/characters", (req, res) => {
  res.send({
    count: characters.data.length,
    data: characters.data
  });
});

app.get("/characters/:id", (req, res) => {
  const character = characters.data.find(character => {
    return character.id === Number(req.params.id);
  });

  res.send({
    data: character
  });
});

app.listen(3000, err => {
  console.log(`Server running at http://localhost:3000`);
});
