const jwt = require('jsonwebtoken')

const userAuth = (req, res, next) => {
    const authHeader = req.headers['auth-token']
    jwt.verify(authHeader, "secret", (err, data) => {
        // console.log(logoutTokens)
        if (err) {
            console.log("error is " + err)
            res.status(401).json({
                message: "Please login in again"
            })
        }    
        else {
            console.log("Data is "+JSON.stringify(data))
            req.app.set("data1", data)
            next()
        }
    })
}

module.exports = userAuth