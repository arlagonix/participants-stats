import { mockData } from "./mockData";
import getStringDistribution, { IConfig } from "@/utils/getStringDistribution";

const config: IConfig = {
  attributeName: "30. Как часто ваши ожидания не оправдываются?",
  rules: [
    ["редко", "Редко"],
    ["часто", "Часто"],
    ["никогда", "Никогда"],
  ],
  default: "Прочее",
};

export const distribution = getStringDistribution(mockData, config);

export const expectationsData = Object.entries(distribution).sort((a, b) => {
  if (a[0] === "Прочее") return 1;
  if (b[0] === "Прочее") return -1;
  return b[1] - a[1];
});
