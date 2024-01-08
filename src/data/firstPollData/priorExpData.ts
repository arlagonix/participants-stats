import { mockData } from "./mockData";
import getStringDistribution, { IConfig } from "@/utils/getStringDistribution";

const config: IConfig = {
  attributeName:
    "21. Есть ли опыт участия в подобной практике (н-р, стажировка, пет-проект в коллективе и т.п.)?",
  rules: [
    ["да", "Да"],
    ["нет", "Нет"],
  ],
  default: "Прочее",
};

export const distribution = getStringDistribution(mockData, config);

export const priorExpData = Object.entries(distribution).sort((a, b) => {
  if (a[0] === "Прочее") return 1;
  if (b[0] === "Прочее") return -1;
  return b[1] - a[1];
});
