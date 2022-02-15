const User = require('../models/User');
const { verifyToken, verifyAndAuthorize, verifyAndAdmin } = require('./verifyToken');

const router = require('express').Router();

//update
router.put("/:id", verifyAndAuthorize, async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, {new: true});
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json(error);
    }
});

//delete
router.delete("/:id", verifyAndAuthorize, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");
    } catch (error) {
        res.status(500).json(error);
    }
})

//get user
router.get("/find/:id", verifyAndAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json(error);
    }
})

//get all user
router.get("/find/allUsers", verifyAndAdmin, async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
})


//get all user
router.get("/", verifyAndAdmin, async (req, res) => {
    const query = req.query.new;
    try {
        const users = query ? await User.find().sort({_id: -1}).limit(5) : await User.find();
        
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;