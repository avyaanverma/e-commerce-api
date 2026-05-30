import app from "./src/app.js";
import { connectToDb } from "./src/config/db.js";

app.listen(3000, ()=>{
    connectToDb();
    console.log("Server started on http://localhost:3000")
})