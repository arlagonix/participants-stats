import styles from "./index.module.scss";

interface TitleProps {
  children: React.ReactNode;
  id?: string;
}

const Subtitle: React.FC<TitleProps> = ({ children, id }) => {
  return (
    <h2 className={styles.subtitle} id={id}>
      {children}
    </h2>
  );
};

export default Subtitle;
