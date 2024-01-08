import { answeringTimeDistributionData } from "@/data/secondPollData/answeringTimeDistributionData";
import { helpColleguesData } from "@/data/secondPollData/helpColleguesData";
import { impactData } from "@/data/secondPollData/impactData";
import { interestsData } from "@/data/secondPollData/interestsData";
import { mentorData } from "@/data/secondPollData/mentorData";
import { moodData } from "@/data/secondPollData/moodData";
import { rolesData } from "@/data/secondPollData/rolesData";
import { SurveyMetaDataType } from "@/shared/types";

export const surveyMetaData: SurveyMetaDataType = [
  {
    name: "Прохождение опроса",
    description: "Распределение участников по дате прохождения опроса.",
    data: answeringTimeDistributionData,
    id: "answeringTimeDistributionData",
  },
  {
    name: "Роли",
    description: "Распределение участников по их ролям в команде.",
    data: rolesData,
    id: "rolesData",
  },
  {
    name: "Вклад в работу",
    description:
      "Распределение участников по тому, как они оценивают свой вклад в работу над проектом по 5-балльной шкале: 5 - огромный, 1 - ничем не помог.",
    data: impactData,
    id: "impactData",
  },
  {
    name: "Помощь от коллег",
    description:
      "Распределение участников по тому, помогают ли им пребывание в профессиональном сообществе коллег их профессии.",
    data: helpColleguesData,
    id: "helpColleguesData",
  },
  {
    name: "Помощь от ментора",
    description:
      "Распределение участников по тому, как они оценивают помощь ментора по 5-балльной шкале: 5 - отлично, 1 - никак.",
    data: mentorData,
    id: "mentorData",
  },
  {
    name: "Реализация интересов",
    description:
      "Распределение участников по тому, удается ли им реализовать свои интересы.",
    data: interestsData,
    id: "interestsData",
  },
  {
    name: "Настроение",
    description: "Распределение участников по их настроению во время практики.",
    data: moodData,
    id: "moodData",
  },
];
