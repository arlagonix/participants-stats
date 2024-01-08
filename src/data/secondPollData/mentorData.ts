import { IDistribution, IMockDataObject } from "@/shared/types";
import { mockData } from "./mockData";

const attributeName =
  "8. Как вы можете оценить помощь ментора по 5-балльной шкале: 5 - отлично, 1- никак?";

const distribution = mockData.reduce(
  (acc: IDistribution, personData: IMockDataObject) => {
    const label =
      typeof personData[attributeName] === "number"
        ? personData[attributeName]
        : "Не обращался за помощью";
    const currentValue = acc[label] ?? 0;
    acc[label] = currentValue + 1;
    return acc;
  },
  {},
);

export const mentorData = Object.entries(distribution).sort((a, b) => {
  return +b[1] - +a[1];
});
