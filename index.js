const express = require("express");
const cors = require("cors");
const { fork } = require("child_process");
const upload = require("./middleware/multer");

const PORT = 5000;
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).json({hello: true});
})

app.post("/video", upload.single("video"),(req, res) => {
    console.log(req.body);
    console.log(req?.file);

    res.send("Success");
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})