import styles from "./index.module.scss";
import PollCard from "@/components/PollCard";
import Subtitle from "@/components/Subtitle";

const PollsData = () => {
  return (
    <>
      <Subtitle>Данные по опросам</Subtitle>
      <div className={styles.cards}>
        <PollCard
          title="Сентябрь 2023"
          description="Опрос проводился в сентябре 2023 года. В нем участвовало 110 человек."
          href="/1"
        />
        <PollCard
          title="Ноябрь 2023"
          description="Опрос проводился в начале ноября 2023 года. В нем участвовал 51 человек."
          href="/2"
        />
      </div>
    </>
  );
};

export default PollsData;
