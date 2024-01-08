import { useState } from "react";
import ToggleMobileMenu from "./ToggleMobileMenu";
import styles from "./index.module.scss";
import logoSmall from "@/assets/logo_small.svg";
import clsx from "clsx";
import { navMenuMetaData } from "@/data/navMenuMetaData";
import { Link } from "react-router-dom";
import useHideOverflow from "./useHideOverflow";

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  useHideOverflow(isOpen);

  return (
    <>
      <nav className={styles.menu}>
        <div className={styles.logoWrapper}>
          <p className={styles.title}>Pineapple Practice</p>
          <img
            src={logoSmall}
            width={24}
            height={24}
            alt="Logo"
            className={styles.logo}
          />
        </div>
        <ToggleMobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
      <ul className={clsx(styles.popup, !isOpen && styles.hidden)}>
        {navMenuMetaData.map((navItem) => (
          <li key={navItem.name} className={styles.element}>
            <Link to={navItem.href} onClick={() => setIsOpen(false)}>
              {navItem.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MobileMenu;
