import User from '../models/User';

export default (req, res) => {
    if (!req.body.sendTo) {
        res.send(400).json({ err: "You must specify a person to send to"});
        return;
    }
    if (req.body.amount < 0) {
        res.send(400).json({ err: "You must specify a positive number to send"});
        return;
    }
    // Check Users both exist
    User.findOne({ email: req.body.sendTo }, (err, result) => {
        if (!result) {
            res.status(400).json({ err: "This user does not exist"})
            return;
        } else {
            User.findOne({ email: req.body.email }, (err, result) => {
                if (!result) {
                    res.status(400).json({ err: "Please signup first"})
                    return;
                } else {
                    if (result.balance < req.body.amount) {
                        res.status(400).json({ err: "You do not have enough money"})
                    } else {
                        updateBalances(req, res);
                    }
                }
            });
        }
    });
};

function updateBalances(req, res) {
    User.findOneAndUpdate({ email: req.body.email }, {$inc: {balance: -Math.abs(req.body.amount)}}, {new: true}, (err, doc) => {
        if (err) {
            res.sendStatus(500);
            return;
        }
        User.findOneAndUpdate({ email: req.body.sendTo }, {$inc: {balance: req.body.amount}}, {new: true}, (err1, doc1) => {
            if (err1) {
                res.sendStatus(500);
                return;
            }
            res.send(200).json({user: doc})
        })
    })
}