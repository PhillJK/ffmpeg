const axios = require("axios")
const FormData= require("form-data")
const fs = require("fs")

async function main() {
    const form = new FormData();

    form.append("video", fs.createReadStream(`./${process.argv[2]}`))

    try {
        const response = await axios.post("http://localhost:5000/video", form)
        console.log(response.data);
    } catch (error) {
        
    }
}


main()