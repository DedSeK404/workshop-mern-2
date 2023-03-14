const IsAuth = require("./IsAuth")

const isAdmin = async (req, res, next) =>{
try {


if (req?.user.role != 'admin') {
 return   res.status(403).send({msg: "you are not an admin"})
}

next()
} catch (error) {
    res.status(500).send({ msg: error.message }); 
}
}

const isAuthorized = async (req, res, next) =>{
    try {
    
    
    if (req?.user.role != 'seller') {
     return   res.status(403).send({msg: "you are not authorized"})
    }
    
    next()
    } catch (error) {
        res.status(500).send({ msg: error.message }); 
    }
    }
module.exports={isAdmin, isAuthorized}

