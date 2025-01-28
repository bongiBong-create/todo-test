import { Filter } from "../../../features/filter/ui";
import { Header } from "../../../features/header";
import { TasksSection } from "../../../features/tasks-section";

import styles from "./index.module.css";

export const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Filter />
        <TasksSection />
      </main>
    </>
  );
};
