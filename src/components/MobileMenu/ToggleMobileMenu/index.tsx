// Source: https://codepen.io/fromwireframes/pen/arMrYp
import styles from "./index.module.scss";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleMobileMenu: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <div className={styles["menu-icon"]}>
      <input
        className={styles["menu-icon__cheeckbox"]}
        type="checkbox"
        checked={isOpen}
        onChange={() => setIsOpen((prev) => !prev)}
      />
      <div>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default ToggleMobileMenu;
