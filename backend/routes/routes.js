const router = require('express').Router();
const bcrypt = require('bcryptjs')
const User = require('./../models/user')

router.post('/register', async(req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
    });
    const results = await user.save();
    const {password, ...data} = await results.toJSON();
    res.send(data);
});

router.post('/login', async(req, res) => {
    const user = await User.findOne({email: req.body.email});

    if(!user) {
        return res.status(404).send({message: "user not found"});
    }

    if(!await bcrypt.compare(req.body.password, user.password)){
        return res.status(404).send({message: "Password is incorrect"});
    }

    res.send(user);
});

module.exports = router;