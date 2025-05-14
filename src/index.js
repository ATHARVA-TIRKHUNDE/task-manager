import dotenv from "dotenv";
import app from "./app.js";
import conenctDB from "./config/db.js";

dotenv.config({
    path: "./.env"
})

conenctDB();

const port = process.env.PORT || 3000 ;

app.listen( port, () => {
    console.log(`Server is listening on ${process.env.PORT}`)
})