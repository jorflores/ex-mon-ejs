let jwt = require("jsonwebtoken")

function verifyToken(req,res,next){


    //req.cookies.token
let token =  '' ;

if (!token) {
    return res.redirect('/login')
}

else {

    // Aqui hariamos la logica de validar token

}

}

module.exports = verifyToken