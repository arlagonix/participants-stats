import { mockData } from "./mockData";
import getStringDistribution, { IConfig } from "@/utils/getStringDistribution";

const config: IConfig = {
  attributeName: "6. Образование",
  rules: [
    ["неоконченное высшее", "Неоконченное высшее"],
    ["высшее очное", "Высшее очное"],
    ["высшее заочное", "Высшее заочное"],
    ["среднее", "Среднее"],
  ],
  default: "Прочее",
};

export const distribution = getStringDistribution(mockData, config);

export const educationData = Object.entries(distribution).sort((a, b) => {
  if (a[0] === "Прочее") return 1;
  if (b[0] === "Прочее") return -1;
  return b[1] - a[1];
});
