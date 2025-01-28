import { FC, ReactNode } from "react";

import styles from "./index.module.css";

interface IButton {
  children: ReactNode;
  handler: () => unknown;
  active?: boolean;
}

export const Button: FC<IButton> = ({ children, handler, active }) => {
  return (
    <button
      className={active ? styles["button--active"] : styles.button}
      onClick={handler}
    >
      {children}
    </button>
  );
};
