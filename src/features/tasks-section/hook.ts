import { useEffect } from "react";
import { filterAll, getTodos } from "../../app/store/reducers/todosSlice";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/useStore";

export const useTasksSection = () => {
  const dispatch = useAppDispatch();
  const { filterTodos, todos } = useAppSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodos({ limit: 10 }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterAll())
  }, [todos.length])

  return {
    filterTodos,
  }
}