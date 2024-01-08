import styles from "./index.module.scss";
import graphIcon from "@/assets/icon_gr.svg";
import tableIcon from "@/assets/icon_table.svg";
import { GraphType } from ".";

interface GraphSwitcherProps {
  view: GraphType;
  setView: React.Dispatch<React.SetStateAction<GraphType>>;
}

const GraphSwitcher: React.FC<GraphSwitcherProps> = ({ view, setView }) => {
  return (
    <div className={styles.buttonWrapper}>
      <button
        className={view === "bar" ? styles.active : styles.inactive}
        onClick={() => setView("bar")}
      >
        <img
          src={graphIcon}
          width={16}
          height={16}
          alt="display bar chart view"
        />
      </button>
      <button
        className={view === "table" ? styles.active : styles.inactive}
        onClick={() => setView("table")}
      >
        <img src={tableIcon} width={16} height={16} alt="display table view" />
      </button>
    </div>
  );
};

export default GraphSwitcher;
