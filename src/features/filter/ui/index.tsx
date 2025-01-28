import { filters } from "../config";
import { useFilter } from "../hook";

import { Button } from "../../../shared/ui/button";

import styles from "./index.module.css";

export const Filter = () => {
  const { active, handler } = useFilter();

  return (
    <div className={styles.filter}>
      {filters?.map((filter) => (
        <Button
          active={filter.id === active}
          handler={() => handler(filter)}
          key={filter.id}
        >
          {filter.title}
        </Button>
      ))}
    </div>
  );
};
