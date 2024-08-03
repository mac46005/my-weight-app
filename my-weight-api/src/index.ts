import app from "./app";
import dotenv from 'dotenv';


const PORT = process.env.PORT;

app.listen(PORT, () => {console.log(`my-weight-api running on port ${PORT}`)});