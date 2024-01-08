import clsx from "clsx";
import styles from "./index.module.scss";
import { DataType } from ".";

interface TableViewProps {
  display: boolean;
  data: DataType;
  participantsNumber: number;
}

const TableView: React.FC<TableViewProps> = ({
  display,
  data,
  participantsNumber,
}) => {
  return (
    <table
      className={clsx(
        styles.wrapper,
        styles.table,
        !display && styles.displayNone,
      )}
    >
      <thead className={styles.header}>
        <tr className={styles.row}>
          <th>Вариант</th>
          <th>№</th>
          <th>%</th>
        </tr>
      </thead>
      <tbody className={styles.body}>
        {data.map(([key, value]) => (
          <tr key={key} className={styles.row}>
            <td>{key}</td>
            <td>{value}</td>
            <td>{((value / participantsNumber) * 100).toFixed(0)}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableView;
