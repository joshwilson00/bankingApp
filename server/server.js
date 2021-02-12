require("dotenv").config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import User from "./models/User";
import jwtCheck from "./middleware/checkJWT";
import signupController from "./controllers/signupController";
import Mailer from './utils/Mailer';
const app = express();
app.use(cors());
app.use(express.json());
app.use(jwtCheck);

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected to the MongoDB.`))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send({ message: "hello" });
});

app.post("/signup", signupController);

app.post('/invite', (req, res) => {
  const mailer = new Mailer(req.body.from);
  mailer.sendEmailInvite(req.body.to);
  res.sendStatus(200);
})


app.listen(process.env.PORT, () => {
  console.log(`Listenting on PORT ${process.env.PORT}`);
});
