import { Button } from "../../../shared/ui/button";
import { useForm } from "../hook";

import styles from "./index.module.css";

export const Form = () => {
  const { changeTodo, addNewTodo, todo } = useForm();

  return (
    <form className={styles.form}>
      <input className={styles.input} value={todo} onChange={(e) => changeTodo(e)} type="text" />
      <Button handler={(e) => addNewTodo(e)}>Добавить задачу</Button>
    </form>
  );
};
