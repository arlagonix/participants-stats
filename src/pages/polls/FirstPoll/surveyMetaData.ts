import { educationData } from "@/data/firstPollData/educationData";
import { ageData } from "@/data/firstPollData/ageData";
import { gendersData } from "@/data/firstPollData/genderData";
import { workingStatusData } from "@/data/firstPollData/workingStatusData";
import { goalData } from "@/data/firstPollData/goalData";
import { expectedTimeData } from "@/data/firstPollData/expectedTimeData";
import { specializationData } from "@/data/firstPollData/specializationData";
import { progLangData } from "@/data/firstPollData/progLangData";
import { sphereData } from "@/data/firstPollData/sphereData";
import { priorExpData } from "@/data/firstPollData/priorExpData";
import { howKnewData } from "@/data/firstPollData/howKnewData";
import { experienceItData } from "@/data/firstPollData/experienceItData";
import { achievementPresenceData } from "@/data/firstPollData/achievsPresenceData";
import { undoneDeedsData } from "@/data/firstPollData/undoneDeedsData";
import { changeJobData } from "@/data/firstPollData/changeJobData";
import { undoneDeedsNumData } from "@/data/firstPollData/undoneDeedsNumData";
import { leisureData } from "@/data/firstPollData/leisureData";
import { expectationsData } from "@/data/firstPollData/expectationsData";
import { leisureFrequencyData } from "@/data/firstPollData/leisureFrequencyData";
import { jobSearchData } from "@/data/firstPollData/jobSearchData";
import { whenOfferData } from "@/data/firstPollData/whenOfferData";
import { moodData } from "@/data/firstPollData/moodData";
import { osData } from "@/data/firstPollData/osData";
import { educationDurationData } from "@/data/firstPollData/educationDurationData";
import { SurveyMetaDataType } from "@/shared/types";
import { answeringTimeDistributionData } from "@/data/firstPollData/answeringTimeDistributionData";

export const surveyMetaData: SurveyMetaDataType = [
  {
    name: "Прохождение опроса",
    description: "Распределение участников по дате прохождения опроса",
    data: answeringTimeDistributionData,
    id: "answeringTimeDistributionData",
  },
  {
    name: "Пол",
    description: "Распределение участников по их полу",
    data: gendersData,
    id: "gendersData",
  },
  {
    name: "Возраст",
    description: "Распределение участников по их возрасту",
    data: ageData,
    id: "ageData",
  },
  {
    name: "Образование",
    description: "Распределение участников по их образованию",
    data: educationData,
    id: "educationData",
  },
  {
    name: "Статус",
    description: "Распределение участников по их статусу",
    data: workingStatusData,
    id: "workingStatusData",
  },
  {
    name: "Цель",
    description: "Распределение участников по их цели участия в проекте",
    data: goalData,
    id: "goalData",
  },
  {
    name: "Время на практику",
    description:
      "Распределение участников по тому, сколько времени они готовы уделять проекту в неделю.",
    data: expectedTimeData,
    id: "expectedTimeData",
  },
  {
    name: "Специализация",
    description: "Распределение участников по их специализациям.",
    data: specializationData,
    id: "specializationData",
  },
  {
    name: "Язык программирования",
    description: "Распределение участников по их языкам программирования.",
    data: progLangData,
    id: "progLangData",
  },
  {
    name: "Операционная система",
    description: "Распределение участников по их операционным системам.",
    data: osData,
    id: "osData",
  },
  {
    name: "Время обучения",
    description: "Распределение участников по времени их обучения на курсах.",
    data: educationDurationData,
    id: "educationDurationData",
  },
  {
    name: "Сфера деятельности",
    description: "Распределение участников по их текущей сфере деятельности.",
    data: sphereData,
    id: "sphereData",
  },
  {
    name: "Опыт в подобной практике",
    description:
      "Распределение участников по наличию опыта участия в подобной практике. Например, стажировка, пет-проект в коллективе и т.п.",
    data: priorExpData,
    id: "priorExpData",
  },
  {
    name: "Как узнали о практике",
    description:
      "Распределение участников по тому, каким образом они узнали о практике Pineapple Practice.",
    data: howKnewData,
    id: "howKnewData",
  },
  {
    name: "Опыт в IT",
    description: "Распределение участников по наличию опыта работы в IT.",
    data: experienceItData,
    id: "experienceItData",
  },
  {
    name: "Достижения в учёбе",
    description:
      "Распределение участников по наличию достижений в учёбе (медаль, диплом с отличием).",
    data: achievementPresenceData,
    id: "achievementPresenceData",
  },
  {
    name: "Недоделанные дела",
    description:
      "Распределение участников по тому, как часто они оставляют дела недоделанными.",
    data: undoneDeedsData,
    id: "undoneDeedsData",
  },
  {
    name: "Частота смены работы",
    description:
      "Распределение участников по тому, как часто они меняют или готовы менять работу.",
    data: changeJobData,
    id: "changeJobData",
  },
  {
    name: "Число незавершенных дел",
    description:
      "Распределение участников по тому, сколько у них сейчас незавершенных дел.",
    data: undoneDeedsNumData,
    id: "undoneDeedsNumData",
  },
  {
    name: "Как справляетесь с усталостью",
    description:
      "Распределение участников по тому, что они делают, когда чувствуют усталость.",
    data: leisureData,
    id: "leisureData",
  },
  {
    name: "Частота неоправданных ожиданий",
    description:
      "Распределение участников по тому, как часто их ожидания не оправдываются.",
    data: expectationsData,
    id: "expectationsData",
  },
  {
    name: "Частота отдыха",
    description: "Распределение участников по тому, как часто они отдыхают.",
    data: leisureFrequencyData,
    id: "leisureFrequencyData",
  },
  {
    name: "Поиск работы в IT",
    description:
      "Распределение участников по тому, находятся ли они в поиске работы по ИТ.",
    data: jobSearchData,
    id: "jobSearchData",
  },
  {
    name: "Получение оффера",
    description:
      "Распределение участников по тому, что они будут делать, если найдут работу в процессе практики.",
    data: whenOfferData,
    id: "whenOfferData",
  },
  {
    name: "Настроение",
    description:
      "Распределение участников по тому, с каким настроением они идут на практику.",
    data: moodData,
    id: "moodData",
  },
];
