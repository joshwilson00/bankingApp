import express from 'express';
import jwt from 'express-jwt';
import jwks from 'jwks-rsa';
import cors from 'cors';

// import { checkJWT } from './middleware/checkJWT';
// import { auth } from ('express-openid-connect');
require('dotenv').config()

const app = express();
app.use(cors());
app.use(express.json());

var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-fpx4zdsj.eu.auth0.com/.well-known/jwks.json'
  }),
  audience: 'https://banking',
  issuer: 'https://dev-fpx4zdsj.eu.auth0.com/',
  algorithms: ['RS256']
});


app.get('/', jwtCheck, (req, res) =>{
    console.log(process.env.AUTH0_DOMAIN);
    res.send({message: "hello"})})

  


app.listen(5000, ()=> {console.log('Listenting on PORT 5000')})