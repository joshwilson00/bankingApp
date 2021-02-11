import User from '../models/User';

export default (req, res) => {
  User.findOne({ email: req.body.email }, (err, result) => {
    if (!result) {
      const user = new User(req.body);
      user.save((err) => {
        if (err) res.status(500).json({ message: err.message });
        else res.status(201).json({ user });
      });
    } else res.status(200).json({ user: result });
  });
};
