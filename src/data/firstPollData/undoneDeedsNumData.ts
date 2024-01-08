import { mockData } from "./mockData";
import getStringDistribution, { IConfig } from "@/utils/getStringDistribution";

const config: IConfig = {
  attributeName: "28. Сколько сейчас у вас незавершенных дел?",
  rules: [
    ["два и более", "Два и более	"],
    ["одно", "Одно"],
    ["все завершено", "Все завершено	"],
  ],
  default: "Прочее",
};

export const distribution = getStringDistribution(mockData, config);

export const undoneDeedsNumData = Object.entries(distribution).sort((a, b) => {
  if (a[0] === "Прочее") return 1;
  if (b[0] === "Прочее") return -1;
  return b[1] - a[1];
});
