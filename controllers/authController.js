const User = require("../models/userModel")
const bcrypt = require('bcrypt')



exports.signup = async (req, res) => {
    try {
        console.log('in')

        const userBody = await bcrypt.hash(req.body.password, 10);
        const user = await User.create({ username: req.body.username, password: userBody })
        res.status(200).json({
            message: 'success',
            data: user
        })

    } catch (e) {
        res.json({
            status: 'fail',
            message: e.message
        })
    }
}


exports.login = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username: username })
        if (!user) {
            return res.send("email or password is wrong")
        }


        const check = await bcrypt.compare(password, user.password);
        if (!check) {
            return res.send("email or password is wrong")
        }

        return res.status(200).json({
            message: 'success',
            data: user
        })
    } catch (e) {
        res.json({
            status: 'fail',
            message: e.message
        })
    }
}
