const express = require("express");
const cors = require("cors");
const PORT = 5000;
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).json({hello: true});
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})