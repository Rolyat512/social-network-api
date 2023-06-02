const {User, Thought} = require("../models");

module.exports = {
    createThought: ({body},res) => {
        let{thoughtText, username, userId} = body;

        Thought.create({thoughtText, username}).then(({_id}) => {
            console.log(data, userId)
            User.findOneAndUpdate(
                {_id: userId}, 
                {$addToSet: {thoughts: _id}},
                {new: true}
                ).then(data => res.json(data))
        })
    }
    // getThoughts: (req,res) => User.find().then(data => res.json(data))
}