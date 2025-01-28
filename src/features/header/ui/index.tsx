import { Form } from "../../form/ui";
import styles from "./index.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1>ToDoList</h1>
        <Form />
      </div>
    </header>
  );
};
