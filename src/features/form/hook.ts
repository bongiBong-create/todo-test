import { useState } from "react";
import { useAppDispatch } from "../../shared/hooks/useStore";
import { addTodo } from "../../app/store/reducers/todosSlice";

export const useForm = () => {
  const dispatch = useAppDispatch();
  const [todo, setTodo] = useState<string>("");

  const changeTodo = (e) => {
    setTodo(e.target.value);
  };

  const addNewTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      todo,
      completed: false,
    };
    dispatch(addTodo(newTodo));
    setTodo("");
  };

  return {
    changeTodo,
    addNewTodo,
    todo,
  }
}