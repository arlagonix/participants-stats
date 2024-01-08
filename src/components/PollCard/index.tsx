import { Link } from "react-router-dom";
import styles from "./index.module.scss";

interface PollCardProps {
  title: string;
  description: string;
  href: string;
}

const PollCard: React.FC<PollCardProps> = ({ title, description, href }) => {
  return (
    <Link to={href} className={styles.cardWrapper} draggable={false}>
      <article className={styles.card}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.bottomWrapper}>
          <p className={styles.description}>{description}</p>

          <p className={styles.link}>Открыть ➔</p>
        </div>
      </article>
    </Link>
  );
};

export default PollCard;
