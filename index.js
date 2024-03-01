const express = require("express");
const cors = require("cors");
// const mongoose = require("mongoose");
require("dotenv").config();

// mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`, [], (err) => {
//     if (err) {
//         console.log(`DB connection failed at ${process.env.DB_URL}/${process.env.DB_NAME}`);
//     } else {
//         console.log(`DB connected at ${process.env.DB_URL}/${process.env.DB_NAME}`);
//     }
// });

const bridge = require("./api/bridge");

const app = express();
var corsOption = {
    origin: "*"
};
app.use(cors(corsOption));
app.use(express.json({ extended: false }));
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to layer 2 across bridge backend application." });
});

app.use("/", bridge);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} .`);
});
