import { mockData } from "./mockData";
import getStringDistribution, { IConfig } from "@/utils/getStringDistribution";

const config: IConfig = {
  attributeName: "7. Вы сейчас работает",
  rules: [
    ["учусь", "Учусь"],
    ["не работаю", "Не работаю"],
    ["работаю", "Работаю"],
    ["в декретном отпуске", "В декретном отпуске"],
  ],
  default: "Прочее",
};

export const distribution = getStringDistribution(mockData, config);

export const workingStatusData = Object.entries(distribution).sort((a, b) => {
  if (a[0] === "Прочее") return 1;
  if (b[0] === "Прочее") return -1;
  return b[1] - a[1];
});
