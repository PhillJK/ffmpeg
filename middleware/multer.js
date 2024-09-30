const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const folder = path.resolve(__dirname, "../static");

        cb(null, folder);
    },
    filename: function (req, file, cb) {
        const ext = file.originalname.split(".").pop();
        const id = `${uuid()}.${ext}`;

        req.fileId = id;
        cb(null, id);
    },
});

module.exports = multer({ storage });