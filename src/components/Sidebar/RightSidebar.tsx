import clsx from "clsx";
import styles from "./index.module.scss";
import { SurveyMetaDataType } from "@/shared/types";

interface RightSidebarProps {
  surveyMetaData: SurveyMetaDataType;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ surveyMetaData }) => {
  return (
    <aside className={clsx(styles.sidebar, styles.right)}>
      <div className={styles.logoBlock}>
        <p>Содержание</p>
      </div>
      <hr className={styles.hr} />
      <ul className={styles.navList}>
        {surveyMetaData.map((element) => (
          <li
            className={styles.navItem}
            key={element.id}
            onClick={() => {
              document
                .getElementById(element.id)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {element.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default RightSidebar;
