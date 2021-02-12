import Mailer from '../utils/Mailer';


export default (req, res) => {
    const mailer = new Mailer(req.body.from);
    mailer.sendEmailInvite(req.body.to);
    res.sendStatus(200);
}