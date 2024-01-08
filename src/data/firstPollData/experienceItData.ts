import { mockData } from "./mockData";
import getStringDistribution, { IConfig } from "@/utils/getStringDistribution";

const config: IConfig = {
  attributeName: "23. Есть ли опыт работы в ИТ?",
  rules: [
    ["нет", "Нет"],
    ["менее 1 года", "Менее 1 года"],
    ["от 1 года до 3-х лет", "От 1 года до 3-х лет"],
    ["более 3-х лет", "Более 3-х лет"],
  ],
  default: "Прочее",
};

export const distribution = getStringDistribution(mockData, config, false);

export const experienceItData = Object.entries(distribution).sort((a, b) => {
  if (a[0] === "Прочее") return 1;
  if (b[0] === "Прочее") return -1;
  return b[1] - a[1];
});
