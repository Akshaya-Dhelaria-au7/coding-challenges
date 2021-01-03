const {body} = require('express-validator')

const todoInput = [
    body('Title')
        .not()
        .isEmpty()
        .isLength({
            min:2,
            max:256
        })
        .withMessage("Title should be more than 2 characters"),

    body('Task')
        .not()
        .isEmpty()
        .isLength({
            min:2,
            max:256
        })
        .withMessage("Task should be more than 2 characters")
]


module.exports = todoInput