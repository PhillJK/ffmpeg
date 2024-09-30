process.on("message", (message) => {
    console.log("Received:", message);

    setTimeout(() => {
        process.send("Hello from child process");

        process.exit();
    }, 3000)
})