import { mockData } from "./mockData";
import getStringDistribution, { IConfig } from "@/utils/getStringDistribution";

const config: IConfig = {
  attributeName: "10. Какое настроение во время практики?",
  rules: [
    ["ровное", "Настроение ровное"],
    ["страх", "Есть страх и неуверенность в своих силах"],
    ["скептическое", "Скептическое, особенных результатов не жду"],
    ["воодушевленное", "Воодушевленное"],
    ["все бесит", "Все бесит, я недоволен (-на)"],
  ],
  default: "Прочее",
};

export const distribution = getStringDistribution(
  mockData,
  config,
  false,
  false,
);

export const moodData = Object.entries(distribution).sort((a, b) => {
  if (a[0] === "Прочее") return 1;
  if (b[0] === "Прочее") return -1;
  return b[1] - a[1];
});
