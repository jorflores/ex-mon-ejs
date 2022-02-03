let jwt = require("jsonwebtoken")

function verifyToken(req,res,next){


    //req.cookies.token
let token =  req.cookies.token || '' ;

if (!token) {
    return res.redirect('/login')
}

else {

    // Aqui hariamos la logica de validar token

    jwt.verify(token, process.env.SECRET, function(err, datos){

    if (err) {
        console.log(err)
        return res.redirect('/login')
    }
    else {

        req.userId = datos.id
        next()
    }


    })

}

}

module.exports = verifyToken