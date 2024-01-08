import { mockData } from "./mockData";
import getStringDistribution, { IConfig } from "@/utils/getStringDistribution";

const config: IConfig = {
  attributeName: "26. Как часто вы оставляете дела недоделанными?",
  rules: [
    ["крайне редко", "Крайне редко"],
    ["бывает", "Бывает"],
    ["никогда", "Никогда"],
    ["часто", "Часто"],
  ],
  default: "Прочее",
};

export const distribution = getStringDistribution(mockData, config);

export const undoneDeedsData = Object.entries(distribution).sort((a, b) => {
  if (a[0] === "Прочее") return 1;
  if (b[0] === "Прочее") return -1;
  return b[1] - a[1];
});
