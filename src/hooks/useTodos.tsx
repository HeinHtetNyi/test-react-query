import { useQuery } from "react-query";
import TodoServices from "../services/todo-services";
import { Todo } from "../types/todo-types";

const useTodos = () => {
    return useQuery<Todo[], Error>('todos', () => TodoServices.getTodoList().then(res => res.data))
}
 
export default useTodos;