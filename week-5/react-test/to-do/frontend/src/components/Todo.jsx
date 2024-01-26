/* eslint-disable react/jsx-key */
export function Todo({todos}){
    return <div>
        {todos.map(function(todo){
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <h3>{todo.completed}</h3>
            </div>
        })}
    </div>
}