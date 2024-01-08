import { mockData } from "./mockData";
import getStringDistribution, { IConfig } from "@/utils/getStringDistribution";

const config: IConfig = {
  attributeName:
    "24. Есть ли у вас достижения в учебе (медаль, диплом с отличием)?",
  rules: [
    ["да", "Да"],
    ["нет", "Нет"],
  ],
  default: "Прочее",
};

export const distribution = getStringDistribution(mockData, config);

export const achievementPresenceData = Object.entries(distribution).sort(
  (a, b) => {
    if (a[0] === "Прочее") return 1;
    if (b[0] === "Прочее") return -1;
    return b[1] - a[1];
  },
);
