import { TaskList } from "../../task-list";
import { useTasksSection } from "../hook";

import styles from "./index.module.css";

export const TasksSection = () => {
  const { filterTodos } = useTasksSection();

  return (
    <section className={styles.tasks}>
      <h2 className={styles.title}>Tasks</h2>
      <TaskList todos={filterTodos} />
    </section>
  );
};
