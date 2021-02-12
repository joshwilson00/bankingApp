import nodemailer from 'nodemailer';
require("dotenv").config();

class Mailer {
    constructor(from) {
        this.from = from;
        this.transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: `${process.env.EMAIL_ADDRESS}`,
                pass: `${process.env.EMAIL_PASSWORD}`
            }
        })
    }

    sendEmailInvite(to){
        const email = {
            from: this.from,
            to,
            subject: 'Invitation to join the BankingApp',
            html: `Hey ${to}!
            You have been invited to the BankingApp by ${this.from}. To sign up simply click <a href=${process.env.SIGNUP_LINK}>here</a>
            `,
            replyTo: 'no-reply@bankingApp.com'
        }

        this.transport.sendMail(email, (err, result) => {
            if (err) console.log(err)
            else console.log(result);
        })
    }
}

export default Mailer