import { mockData } from "./mockData";
import getStringDistribution, { IConfig } from "@/utils/getStringDistribution";

const config: IConfig = {
  attributeName: "8. Ваша цель участия в практике?",
  rules: [
    ["опыт командной работ", "Опыт командной работы"],
    ["расширение знакомств", "Расширение знакомств"],
    ["новые знания", "Новые знания"],
  ],
  default: "Прочее",
};

export const distribution = getStringDistribution(mockData, config);

export const goalData = Object.entries(distribution).sort((a, b) => {
  if (a[0] === "Прочее") return 1;
  if (b[0] === "Прочее") return -1;
  return b[1] - a[1];
});
