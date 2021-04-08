import styles from "./Button.module.scss";
import cn from "classnames";

export default function Button({ btnText, setActiveInfo, activeInfo }) {
  return (
    <button
      className={cn({
        [styles.button]: activeInfo !== btnText && btnText !== "Minneslunden",
        [styles.button_active]: activeInfo === btnText,
        [styles.button_memorylane]: btnText === "Minneslunden",
      })}
      onClick={() => setActiveInfo(btnText)}
    >
      {btnText}
    </button>
  );
}
