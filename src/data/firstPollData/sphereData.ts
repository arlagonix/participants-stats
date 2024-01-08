import { mockData } from "./mockData";
import getStringDistribution, { IConfig } from "@/utils/getStringDistribution";

const config: IConfig = {
  attributeName: "20. Выберите свою текущую сферу деятельности",
  rules: [
    ["it", "IT"],
    ["промышленность и производство.", "Промышленность и производство"],
    ["медицина", "Медицина"],
    ["продажи", "Продажи"],
    ["образование", "Образование"],
    ["финансы", "Финансы"],
    ["реклама и печать", "Реклама и печать"],
    ["бизнес", "Бизнес"],
    ["транспорт", "Транспорт"],
    ["энергетика", "Энергетика"],
    ["строительство", "Строительство"],
  ],
  default: "Прочее",
};

const distribution = getStringDistribution(mockData, config);

export const sphereData = Object.entries(distribution).sort((a, b) => {
  if (a[0] === "Прочее") return 1;
  if (b[0] === "Прочее") return -1;
  return b[1] - a[1];
});
