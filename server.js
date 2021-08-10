const express = require("express");
const app = express();

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyUserRoutes = require("./server/routes/word.routes");
AllMyUserRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
