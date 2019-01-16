const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

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

app.get("/characters/search", (req, res) => {
  const queryName = req.query.q.toLowerCase();

  const foundCharacter = characters.data.find(character => {
    return character.name.toLowerCase().includes(queryName);
  });

  res.send({
    query: req.query,
    data: foundCharacter
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

app.post("/characters", (req, res) => {
  const newCharacter = {
    id: characters.next_id,
    name: req.body.name,
    house: req.body.house
  };

  const newCharacters = {
    next_id: characters.next_id + 1,
    data: characters.data.concat(newCharacter)
  };

  characters = newCharacters;

  res.send({
    newData: newCharacter,
    data: characters
  });
});

app.delete("/characters/remove/:id", (req, res) => {
  const characterId = characters.data.find(character => {
    return character.id === Number(req.params.id);
  });

  const deleteCharacter = characters.data.filter((character, index) => {
    return character.id !== characterId.id;
  });

  characters.data = deleteCharacter;

  res.send({
    choosen: characterId,
    data: deleteCharacter
  });
});
app.listen(3000, err => {
  console.log(`Server running at http://localhost:3000`);
});
