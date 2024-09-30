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
   const video = req.file;

   if(video && video.path) {
    const child = fork(
                path.resolve(__dirname, "../videoProcessing.js")
            );

            child.send({
                path: video.path,
                name: `proccessed_${video.filename}`
            });

            child.on("message", (err) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send("Error occured")
                }

                res.send("Successful")
            });
   } else {
    res.send("File not uploaded")
   }
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})