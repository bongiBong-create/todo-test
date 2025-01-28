import { FC } from "react";
import { ITask } from "../model";
import { useTask } from "../hook";

import styles from "./index.module.css";

export const Task: FC<ITask> = ({ todo, completed, id }) => {
  const { isChecked, changeChecked } = useTask({ todo, completed, id });

  return (
    <li
      className={
        isChecked ? `${styles.item} ${styles["item--completed"]}` : styles.item
      }
    >
      <h3 className={styles.title}>{todo}</h3>
      <input onChange={changeChecked} type="checkbox" checked={isChecked} />
    </li>
  );
};
