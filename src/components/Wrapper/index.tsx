import styles from "./index.module.scss";

interface TitleProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<TitleProps> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default Wrapper;
