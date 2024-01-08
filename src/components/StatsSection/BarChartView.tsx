import clsx from "clsx";
import styles from "./index.module.scss";
import { DataType } from ".";
import React from "react";

interface BarChartViewProps {
  display?: boolean;
  data: DataType;
  maxValue: number;
  participantsNumber: number;
}

const BarChartView: React.FC<BarChartViewProps> = ({
  display,
  data,
  maxValue,
  participantsNumber,
}) => {
  return (
    <div className={clsx(styles.wrapper, !display && styles.displayNone)}>
      {data.map(([key, value]) => (
        <React.Fragment key={key}>
          <div className={styles.barElement}>
            <p className={styles.label}>{key}</p>
            <div
              className={clsx(
                styles.bar,
                (key.includes("Прочее") || key.includes("Не указано")) &&
                  styles.inactive,
              )}
              style={{ width: `${(value / maxValue) * 100}%` }}
            >
              <p className={styles.text}>
                {((value / participantsNumber) * 100).toFixed(0)}%
              </p>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default BarChartView;
