import todoList from '../models/main';

const control = {

    getOne: (req, res) => {
        const todo = todoList.getOne(req.params.id);
        res.send({ 
            data: todo
        });
    },

    getAll: (req, res) => {
        const todo = todoList.getAll();
        res.send({ 
            data: todo
        });
    },

    insert: (req, res) => {
        todoList.insert(req.body.todo);
        res.status(200).send({
            data: req.body
        });
    },

    update: (req, res) => {
        const todo = todoList.update(req.params.id, req.body.todo);
        res.status(200).json({
            data: todo
        });
    },

    remove: (req, res) => {
        const todo = todoList.remove(req.params.id)
        res.send({ 
            data: todo
        })
    }
}

export default control;




