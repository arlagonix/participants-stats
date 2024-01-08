import { mockData } from "./mockData";
import getStringDistribution, { IConfig } from "@/utils/getStringDistribution";

const config: IConfig = {
  attributeName: "9. Сколько времени готовы уделять практике в неделю?",
  rules: [
    ["10 - 12 часов", "10 - 12 часов"],
    ["готов трудиться 25/8", "Готов трудиться 25/8"],
    ["более 12 часов", "Более 12 часов"],
    ["6 - 8 часов", "6 - 8 часов"],
  ],
  default: "Прочее",
};

export const distribution = getStringDistribution(mockData, config);

export const expectedTimeData = Object.entries(distribution).sort((a, b) => {
  if (a[0] === "Прочее") return 1;
  if (b[0] === "Прочее") return -1;
  return b[1] - a[1];
});
