const {User, Thought} = require("../models");

module.exports = {
    createThought: ({body},res) => {
        let{thoughtText, username, userId} = body;

        Thought.create({thoughtText, username}).then(data => {
            console.log(data);
        })
    
    }
    // getThoughts: (req,res) => User.find().then(data => res.json(data))
}