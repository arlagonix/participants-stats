import { IDistribution, IMockDataObject } from "@/shared/types";
import { mockData } from "./mockData";

const attributeName =
  "5. Как вы оцениваете свой вклад в работу над проектом по 5-балльной шкале: 5 - огромный, 1 - ничем не помог";

const distribution = mockData.reduce(
  (acc: IDistribution, personData: IMockDataObject) => {
    const label =
      typeof personData[attributeName] === "number"
        ? personData[attributeName]
        : "Прочее";
    const currentValue = acc[label] ?? 0;
    acc[label] = currentValue + 1;
    return acc;
  },
  {},
);

export const impactData = Object.entries(distribution).sort((a, b) => {
  if (a[0] === "Прочее") return 1;
  if (b[0] === "Прочее") return -1;
  return +b[0] - +a[0];
});
