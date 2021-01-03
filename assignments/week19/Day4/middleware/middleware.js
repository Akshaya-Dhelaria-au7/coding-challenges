const valid = (req, res, next) => {
    if (!req.body.todo) {
        res.status(400).send({
            error: 'Invalid Request'
        })
    }
    next();
};

export default valid;
