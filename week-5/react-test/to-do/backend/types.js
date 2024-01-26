const { z } = require('zod');

const titleSchema = z.string().max(50);
const descSchema = z.string();
const idSchema = z.string();
const doneSchema = z.boolean();

const createTodo = z.object({
    title: titleSchema,
    description: descSchema,
    done: doneSchema
})

const updateTodo = z.object({
    id: idSchema
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}