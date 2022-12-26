const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/todos", (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos", {
      headers: {
        "Accept-Encoding": "application/json",
      },
    })
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => console.log("error"));
});
app.listen(port, () => {
  console.log("listing on port 3000");
});
