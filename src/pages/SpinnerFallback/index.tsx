import spinner from "./spinner.svg";
import styles from "./index.module.scss";

const SpinnerFallback: React.FC = () => {
  return (
    <main className={styles.container}>
      <img src={spinner} width={256} height={256} />
    </main>
  );
};

export default SpinnerFallback;
