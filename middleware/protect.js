const User = require("../models/userModel")

exports.protect = async (req, res, next) => {
    // console.log(req.session, "req.session")

    // const { user } = req.session
    // if (!user) {
    //     return res.send("Unauthorized !!!!")
    // }

    // const userCheck = await User.findOne({ username: user.username })
    // if (!userCheck) {
    //     return res.send("Unauthorized !!!!")
    // }
    next()
}