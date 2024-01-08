import { mockData } from "./mockData";
import getStringDistribution, { IConfig } from "@/utils/getStringDistribution";

const config: IConfig = {
  attributeName: "31. Как часто вы отдыхаете?",
  rules: [
    ["каждые 3 месяца", "Каждые 3 месяца"],
    ["не нуждаюсь в отдыхе", "Не нуждаюсь в отдыхе"],
    ["раз в полгода", "Раз в полгода"],
    ["раз в год", "Раз в год"],
    ["раз в два года", "Раз в два года"],
  ],
  default: "Прочее",
};

export const distribution = getStringDistribution(mockData, config);

export const leisureFrequencyData = Object.entries(distribution).sort(
  (a, b) => {
    if (a[0] === "Прочее") return 1;
    if (b[0] === "Прочее") return -1;
    return b[1] - a[1];
  },
);
