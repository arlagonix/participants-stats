import styles from "../index.module.scss";
import { surveyMetaData } from "./surveyMetaData";

import StatsSection from "@/components/StatsSection";
import MobileMenu from "@/components/MobileMenu";
import { participantsNumber } from "@/data/firstPollData/mockData";
import { LeftSidebar, RightSidebar } from "@/components/Sidebar";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";

const FirstPoll: React.FC = () => {
  return (
    <>
      <MobileMenu />
      <LeftSidebar activeIndex={1} />
      <RightSidebar surveyMetaData={surveyMetaData} />
      <Wrapper>
        <header className={styles.header}>
          <Title>
            Статистика по опросу Pineapple Practice от сентября 2023 года
          </Title>
          <p className={styles.description}>
            Опрос проводился в сентябре 2023 года.
            <br />В нем участвовало {participantsNumber} человек.
          </p>
        </header>
        {surveyMetaData.map((element) => (
          <StatsSection
            key={element.id}
            name={element.name}
            description={element.description}
            data={element.data}
            id={element.id}
            participantsNumber={participantsNumber}
          />
        ))}
      </Wrapper>
    </>
  );
};

export default FirstPoll;
