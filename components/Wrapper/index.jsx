import styles from "./Wrapper.module.scss";
import cn from "classnames";

export default function Wrapper({ children, btn, courses }) {
  return (
    <section
      className={cn({
        [styles.wrapper]: !btn && !courses,
        [styles.wrapper_buttons]: btn,
        [styles.wrapper_courses]: courses,
      })}
    >
      {children}
    </section>
  );
}
