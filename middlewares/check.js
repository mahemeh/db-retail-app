const check = (req,res,next) => {
    if (req.params.userId) {
        next()    
    }
}

module.exports = check;