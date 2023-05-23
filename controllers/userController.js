const {User} = require("../models");

module.exports = {
    createUser: ({body},res) => User.create(body).then(data => res.json(data)),
    getUsers: (req,res) => User.find().select('-__v').then(data => res.json(data)),
    getSingleUser: ({params},res) => {
        User
            .find({_id: params.id})
            .populate('friends')
            .populate('thoughts')
            .then(data => res.json(data))
    },
    updateUser: (req,res) => {
        User 
            .findOneAndUpdate(
                {_id: req.params.id},
                {$set: req.body},
                {
                    runValidators: true, 
                    new: true
                }
            ).then(data => res.json(data))
    },
    removeUser: ({params},res) => {
        User
            .findOneAndDelete(
                {_id: params.id}
            ).then(data => res.json(data))
    }
}