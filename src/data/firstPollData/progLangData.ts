import { mockData } from "./mockData";
import getStringDistribution, { IConfig } from "@/utils/getStringDistribution";

const config: IConfig = {
  attributeName: "12. Язык программирования",
  rules: [
    ["javascript", "JavaScript"],
    ["java", "Java"],
    ["python", "Python"],
    ["c#", "C#"],
    ["с#", "C#"],
    ["kotlin", "Kotlin"],
    ["sql", "SQL"],
    ["dart", "Dart"],
    ["swift", "Swift"],
    ["go", "Go"],
    ["c++", "C++"],
    ["php", "PHP"],
  ],
  default: "Прочее / Нет языка",
};

export const distribution = getStringDistribution(mockData, config);

export const progLangData = Object.entries(distribution).sort((a, b) => {
  if (a[0].includes("Прочее")) return 1;
  if (b[0].includes("Прочее")) return -1;
  return b[1] - a[1];
});
