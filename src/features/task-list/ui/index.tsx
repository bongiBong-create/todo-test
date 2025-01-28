import { FC } from "react";
import { Task } from "../../task/ui";
import { ITask } from "../../task/model";

import styles from "./index.module.css";

interface ITasks {
  todos: ITask[];
}

export const TaskList: FC<ITasks> = ({ todos }) => {
  
  return (
    <ul className={styles.list}>
      {todos?.map((todo: ITask) => (
        <Task
          key={todo.id}
          todo={todo.todo}
          id={todo.id}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
};
