import { v4 as uuid } from 'uuid';

const todoList = {
    todo: [],

    getOne: (id) => {
        for (let obj of this.todo) {
            if (obj.id === id) {
                return obj
            }
        }
    },

    getAll: () => {
        return this.todo;
    },

    insert: (item) => {
        this.todo.push({
            id: uuid(),
            todo: item,
            time: new Date()
        });
    },

    update: (id, item) => {
        for (let obj of this.todo) {
            if (obj.id === id) {
                obj.todo = item;
                return obj
            }
        }
    },

    remove: (id) => {
        let index = 0
        for (let obj of this.todo) {
            if (obj.id === id) {
                const todo = this.todo.splice(index, 1);
                return todo
            }
            index++;
        }
    }
}

export default todoList;

