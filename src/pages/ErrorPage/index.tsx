import { useRouteError } from "react-router-dom";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <main className={styles.main}>
      <h1>Произошла ошибка при загрузке страницы</h1>
      <p style={{ maxWidth: "64ch", textAlign: "center" }}>
        Обычно это происходит когда не удалось найти запрашиваемую страницу или
        когда произошла какая-то другая ошибка.
      </p>
      <p>
        <Link to="/">Вернуться на главную страницу</Link>
      </p>
    </main>
  );
}
