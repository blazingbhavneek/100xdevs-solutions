const { z } = require('zod');

const titleSchema = z.string().max(50);
const descSchema = z.string();
const idSchema = z.string();
const doneSchema = z.string().enum(['True', 'False']);

const createTodo = zod.object({
    title: titleSchema,
    description: descSchema,
    done: doneSchema
})

const updateTodo = zod.object({
    id: idSchema
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}