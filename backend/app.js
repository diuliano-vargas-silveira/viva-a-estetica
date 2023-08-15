const express = require('express');

const app = express();

app.use(express.json());

// TODO find a way to use process.env.PORT here
app.listen(3000, () => {
    console.log("Server listening on PORT: ", 3000);
});

app.get("/status", (req, res) => {
    const status = {
        "Status": "Running"
    };

    res.send(status);
});
