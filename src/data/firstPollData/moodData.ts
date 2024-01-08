import { mockData } from "./mockData";
import getStringDistribution, { IConfig } from "@/utils/getStringDistribution";

const config: IConfig = {
  attributeName: "34. С каким настроением идете на практику?",
  rules: [
    ["ровное", "Настроение ровное"],
    ["страх", "Есть страх и неуверенность"],
    ["скептическое", "Скептическое"],
    ["воодушевленное", "Воодушевленное"],
  ],
  default: "Прочее",
};

export const distribution = getStringDistribution(mockData, config);

export const moodData = Object.entries(distribution).sort((a, b) => {
  if (a[0] === "Прочее") return 1;
  if (b[0] === "Прочее") return -1;
  return b[1] - a[1];
});
