import styles from "./index.module.scss";
import logoSmall from "@/assets/logo_small.svg";
import { navMenuMetaData } from "@/data/navMenuMetaData";
import clsx from "clsx";
import { Link } from "react-router-dom";

interface LeftSidebarProps {
  /** Index of the element in the nav list that mush be highlighted */
  activeIndex?: number;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ activeIndex = 0 }) => {
  return (
    <>
      <aside className={clsx(styles.sidebar, styles.left)}>
        <nav>
          <Link to="/" className={styles.logoBlock}>
            <p>Pineapple Practice</p>
            <img src={logoSmall} width={24} height={24} alt="Logo" />
          </Link>
          <hr className={styles.hr} />
          <ul className={styles.navList}>
            {navMenuMetaData.map((navItem, index) => (
              <Link
                key={navItem.name}
                to={navItem.href}
                className={clsx(
                  styles.navItem,
                  index === activeIndex && styles.active,
                )}
              >
                <p>{navItem.name}</p>
              </Link>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default LeftSidebar;
