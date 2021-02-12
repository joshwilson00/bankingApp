import User from '../models/User';

export default (req, res) => {
  User.findById(req.query.fId, (err, result) => {
    if (err) {
        res.sendStatus(500);
        return;
    }
    if (result) {
        res.status(200).json({ email: result.email})
        return;
    }
    res.status(400).json({err: "Invalid Id"})
  });
};
