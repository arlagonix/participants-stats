import styles from "./index.module.scss";
import { useState } from "react";
import GraphSwitcher from "./GraphSwitcher";
import TableView from "./TableView";
import BarChartView from "./BarChartView";
import Subtitle from "../Subtitle";

export type GraphType = "bar" | "table";
export type DataType = [string, number][];

interface Props {
  name: string;
  description: string;
  data: DataType;
  id?: string;
  participantsNumber: number;
}

const StatsSection: React.FC<Props> = ({
  data,
  name,
  description,
  id,
  participantsNumber,
}) => {
  const maxValue = Math.max(...data.map(([, value]) => value));
  const [view, setView] = useState<GraphType>("bar");
  return (
    <section className={styles.section}>
      <div className={styles.headerWrapper}>
        <Subtitle id={id}>{name}</Subtitle>
        <GraphSwitcher view={view} setView={setView} />
      </div>
      <p className={styles.description}>{description}</p>
      <BarChartView
        display={view === "bar"}
        data={data}
        maxValue={maxValue}
        participantsNumber={participantsNumber}
      />
      <TableView
        display={view === "table"}
        data={data}
        participantsNumber={participantsNumber}
      />
    </section>
  );
};

export default StatsSection;
