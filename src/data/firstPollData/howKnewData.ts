import { mockData } from "./mockData";
import getStringDistribution, { IConfig } from "@/utils/getStringDistribution";

const config: IConfig = {
  attributeName: "22. Как узнали о практике от Pineapple Practice?",
  rules: [
    [
      "пост/репост в соцсетях и мессенджерах",
      "Пост/репост в соцсетях и мессенджерах",
    ],
    ["пост/репост на linkedin", "Пост/репост на LinkedIn"],
    ["рекомендации друзей", "Рекомендации друзей, которые проходили практику"],
  ],
  default: "Прочее",
};

export const distribution = getStringDistribution(mockData, config, false);

export const howKnewData = Object.entries(distribution).sort((a, b) => {
  if (a[0] === "Прочее") return 1;
  if (b[0] === "Прочее") return -1;
  return b[1] - a[1];
});
