let mongoose = require("mongoose")
const Schema = mongoose.Schema
//let bcrypt = require("bcrypt")

const UserSchema = new Schema({
    email:String,
    password: String
})

/*
UserSchema.methods.encryptPassword = function(password) {
    return bcrypt.hashSync(password,10)
}

UserSchema.methods.validatePassword = function(userpassword) {
    return bcrypt.compareSync(userpassword,this.password)
}*/


module.exports = mongoose.model('users',UserSchema)