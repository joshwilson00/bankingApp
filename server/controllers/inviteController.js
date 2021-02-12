import Mailer from '../utils/Mailer';


export default async (req, res) => {
    try {
        const mailer = new Mailer(req.body.from);
        await mailer.sendEmailInvite(req.body.to);
        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(500);
    }

}