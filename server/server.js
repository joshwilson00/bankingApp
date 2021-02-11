require('dotenv').config()
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import jwtCheck from './middleware/checkJWT';
// import { auth } from ('express-openid-connect');
const app = express();
app.use(cors());
app.use(express.json());
app.use(jwtCheck);

mongoose.connect(process.env.MONGO_DB, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=> console.log(`Connected to the MongoDB.`)).catch(err => console.log(err));


app.get('/', (req, res) =>{res.send({message: "hello"})})

  


app.listen(process.env.PORT, ()=> {console.log(`Listenting on PORT ${process.env.PORT}`)})