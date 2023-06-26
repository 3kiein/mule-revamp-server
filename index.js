const express = require('express');
const app = express();
const port = 3001;
const morgan = require("morgan");
const cors = require("cors");

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

const Router = require("./router/Router")
app.use('/', Router)

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

