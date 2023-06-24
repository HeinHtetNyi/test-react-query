import useTodos from "../hooks/useTodos";

const TodoList = () => {
    const {data: todos, error, isLoading} = useTodos()

    if (error) return <div>{error.message}</div>

    if (isLoading) return <div>Loading...</div>

    return (  
        <ul>
            {todos?.map((todo => (
                <li key={todo.id}>
                    {todo.title}
                </li>
            )))}
        </ul>
    );
}
 
export default TodoList;