const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
require("./server/config/mongoose.config");



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


require("./server/routes/word.routes")(app);


app.listen(port, () => console.log("The server is all fired up on port 8000"));
