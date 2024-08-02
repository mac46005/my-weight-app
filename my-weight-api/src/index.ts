import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

let app = express();



app.use(express.json());
app.use(express.urlencoded({extended: true}));



const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`my-weight-api running on port ${PORT}`);
})