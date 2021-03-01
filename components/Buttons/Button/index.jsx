import styles from "./Button.module.scss";
import cn from "classnames";

export default function Button({ btnText, setActiveInfo, activeInfo }) {
  return (
    <button
      className={cn({
        [styles.button]: activeInfo != btnText,
        [styles.button_active]: activeInfo === btnText,
      })}
      onClick={() => setActiveInfo(btnText)}
    >
      {btnText}
    </button>
  );
}
