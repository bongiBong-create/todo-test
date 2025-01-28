import { useEffect, useState } from "react";
import { useAppDispatch } from "../../shared/hooks/useStore";
import { ITask } from "./model";
import { toggleTodoCompleted } from "../../app/store/reducers/todosSlice";

export const useTask = ({ id, todo, completed }: ITask) => {
  const [isChecked, isSetIsChecked] = useState(completed);
  const dispatch = useAppDispatch();

  const changeChecked = (e) => {
    const check = e.target.checked;
    isSetIsChecked(check);
    const completedTask = {
      id,
      todo,
      completed: check,
    };

    dispatch(toggleTodoCompleted(completedTask));
  };

  useEffect(() => {
    isSetIsChecked(completed);
  }, [completed]);


  return {
    isChecked,
    changeChecked,
  }
}