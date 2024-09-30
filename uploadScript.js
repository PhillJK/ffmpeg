const axios = require("axios")
const FormData= require("form-data")
const fs = require("fs")

async function main() {
    const form = new FormData();

    form.append("video", fs.createReadStream("./1658132922_looped_1658132922.mp4"))

    try {
        const response = await axios.post("http://localhost:5000/video", form)
        console.log(response.data);
    } catch (error) {
        
    }
}


main()