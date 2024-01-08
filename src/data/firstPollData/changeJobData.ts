import { mockData } from "./mockData";
import getStringDistribution, { IConfig } from "@/utils/getStringDistribution";

const config: IConfig = {
  attributeName: "27. Как часто вы меняете или готовы менять работу?",
  rules: [
    ["раз в 1 -2 года", "Раз в 1 -2 года"],
    ["раз в 3 - 4 года", "Раз в 3 - 4 года"],
    ["реже чем раз в 5 лет", "Реже чем раз в 5 лет"],
    ["1 раз в год и чаще", "1 раз в год и чаще"],
  ],
  default: "Прочее",
};

export const distribution = getStringDistribution(mockData, config);

export const changeJobData = Object.entries(distribution).sort((a, b) => {
  if (a[0] === "Прочее") return 1;
  if (b[0] === "Прочее") return -1;
  return b[1] - a[1];
});
