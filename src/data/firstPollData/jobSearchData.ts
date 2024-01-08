import { mockData } from "./mockData";
import getStringDistribution, { IConfig } from "@/utils/getStringDistribution";

const config: IConfig = {
  attributeName: "32. В поиске работы по ИТ профессии?",
  rules: [
    ["да", "Да"],
    ["нет", "Нет"],
    ["есть оффер", "Есть оффер"],
  ],
  default: "Прочее",
};

export const distribution = getStringDistribution(mockData, config);

export const jobSearchData = Object.entries(distribution).sort((a, b) => {
  if (a[0] === "Прочее") return 1;
  if (b[0] === "Прочее") return -1;
  return b[1] - a[1];
});
