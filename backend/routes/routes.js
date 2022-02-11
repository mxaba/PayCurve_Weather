const router = require('express').Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const User = require('./../models/user')

router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });
        const results = await user.save();
        const { password, ...data } = await results.toJSON();
        res.send(data);
    } catch (error) {
        return res.status(400).send({ message: "User already exists"});
    }

});

router.get('/user', async (req, res) => {
    try {
        const cookie = req.cookies['jwt']
        const decodedJWT = jwt.verify(cookie, 'secretKeyStoring');

        if (!decodedJWT) {
            return res.status(400).send({ message: "You are not authorized" });
        }

        const user = await User.findOne({ _id: decodedJWT._id })
        const { password, ...data } = await user.toJSON();
        res.send(data);
    } catch (error) {
        return res.status(400).send({ message: "You are not authorized" });
    }
});

router.post('/logout', async (req, res) => {
    res.cookie('jwt', '', { maxAge: 0 });
    res.send({
        message: 'Log out Successfully'
    });
});

router.post('/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return res.status(400).send({ message: "user not found" });
    }

    if (!await bcrypt.compare(req.body.password, user.password)) {
        return res.status(400).send({ message: "Password is incorrect" });
    }

    const token = jwt.sign({ _id: user.id }, 'secretKeyStoring')
    res.cookie('jwt', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })

    res.send({
        message: 'Logged Successfully'
    });
});

module.exports = router;