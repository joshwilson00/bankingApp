require('dotenv').config()
import express from 'express';
import jwt from 'express-jwt';
import jwks from 'jwks-rsa';
import cors from 'cors';

import jwtCheck from './middleware/checkJWT';
// import { auth } from ('express-openid-connect');
console.log(process.env.AUTH0_DOMAIN)
const app = express();
app.use(cors());
app.use(express.json());

app.use(jwtCheck);

app.get('/', (req, res) =>{
    console.log(process.env.AUTH0_DOMAIN);
    res.send({message: "hello"})})

  


app.listen(5000, ()=> {console.log('Listenting on PORT 5000')})