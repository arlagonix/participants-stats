import { mockData } from "./mockData";
import getStringDistribution, { IConfig } from "@/utils/getStringDistribution";

const config: IConfig = {
  attributeName: "29. Что вы делаете, когда чувствуете усталость?",
  rules: [
    ["отдыхаю дома", "Отдыхаю дома"],
    ["переключаюсь на другие дела", "Переключаюсь на другие дела"],
    ["занимаюсь любимым хобби", "Занимаюсь любимым хобби"],
    ["продолжаю работать", "Продолжаю работать"],
    ["уезжаю", "Уезжаю"],
  ],
  default: "Прочее",
};

export const distribution = getStringDistribution(mockData, config);

export const leisureData = Object.entries(distribution).sort((a, b) => {
  if (a[0] === "Прочее") return 1;
  if (b[0] === "Прочее") return -1;
  return b[1] - a[1];
});
