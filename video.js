const fs = require("fs");
const ffmpeg = require("fluent-ffmpeg");
const pathModule = require("path");

process.on("message", (payload) => {
    const { path, name } = payload;

    ffmpeg(path)
        .fps(30)
        .addOptions(["-crf 28"])
        .on("end", () => {
            endProcess(path, { err: null });
        })
        .on("error", (err) => {
            endProcess(path, { err });
        })
        .save(pathModule.resolve(__dirname, "static", name));
});

function endProcess(path, payload) {
    fs.unlink(path, (err) => {
        if (err) {
            console.log("Video Processing [File deletion error]:", err);
        }
    });

    process.send(payload);

    process.exit();
}
