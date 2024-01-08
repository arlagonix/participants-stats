import { LeftSidebar } from "@/components/Sidebar";
import Title from "@/components/Title";
import MobileMenu from "@/components/MobileMenu";
import Wrapper from "@/components/Wrapper";

import DataSection from "./DataSection";
import PredictionsSection from "./PredictionsSection";
import PollsData from "./PollsData";

const MainPage = () => {
  return (
    <>
      <MobileMenu />
      <LeftSidebar activeIndex={0} />
      <Wrapper>
        <Title>Pineapple Practice</Title>
        <PollsData />
        <DataSection />
        <PredictionsSection />
      </Wrapper>
    </>
  );
};

export default MainPage;
