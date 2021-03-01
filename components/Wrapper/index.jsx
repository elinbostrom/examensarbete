import styles from "./Wrapper.module.scss";

export default function Wrapper({ children }) {
  return <section className={styles.wrapper}>{children}</section>;
}
