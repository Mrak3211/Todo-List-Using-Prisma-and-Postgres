import { TodoType } from "@/components/Todo";
import { RootState } from "@/store";
import {
  addTodoAction,
  deleteTodoAction,
  getTodoAction,
  updateTodoAction,
} from "@/store/actions/todo.action";
import { TodoState } from "@/store/reducers/todo.reducer";
import { useDispatch, useSelector } from "react-redux";

const useTodo = () => {
  const dispatch = useDispatch();
  const { todos, isLoading } = useSelector<RootState, TodoState>(
    (state: any) => state?.todo
  );

  const addTodo = async (body: TodoType) => {
    return await dispatch<any>(addTodoAction(body));
  };

  const getTodo = async () => {
    return await dispatch<any>(getTodoAction());
  };

  const updateTodo = async (body: { id: string; completed: boolean }) => {
    return await dispatch<any>(updateTodoAction(body));
  };

  const deleteTodo = async (body: string) => {
    return await dispatch<any>(deleteTodoAction({ id: body }));
  };

  return {
    todos,
    isLoading,
    addTodo,
    getTodo,
    updateTodo,
    deleteTodo,
  };
};

export default useTodo;
