import { mockData } from "./mockData";
import getStringDistribution, { IConfig } from "@/utils/getStringDistribution";

const config: IConfig = {
  attributeName: "13. Используемая вами операционная система?",
  rules: [
    ["windows", "Windows"],
    ["linux", "Linux"],
    ["ios", "iOS"],
    ["macos", "MacOS"],
  ],
  default: "Прочее",
};

export const distribution = getStringDistribution(mockData, config);

export const osData = Object.entries(distribution).sort((a, b) => {
  if (a[0] === "Прочее") return 1;
  if (b[0] === "Прочее") return -1;
  return b[1] - a[1];
});
