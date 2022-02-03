let mongoose = require("mongoose")
const Schema = mongoose.Schema

const TaskSchema = Schema({
    title:String,
    description: String,
    status: {
        type: Boolean ,
        default: false
    },
    user_id: String
})

module.exports = mongoose.model('tasks',TaskSchema)