import { mockData } from "./mockData";
import getStringDistribution, { IConfig } from "@/utils/getStringDistribution";

const config: IConfig = {
  attributeName: "10. По какой специальности хотите заявиться?",
  rules: [
    ["back-end", "Backend Developer"],
    ["project manager", "Project manager"],
    ["qa", "QA"],
    ["front-end", "Frontend Developer"],
    ["дизайнер", "Designer"],
    ["android", "Mobile Developer"],
    ["mobile", "Mobile Developer"],
    ["ios", "Mobile Developer"],
    ["аналитик", "Analyst"],
    ["fullstack", "Fullstack Developer"],
  ],
  default: "Прочее",
};

export const distribution = getStringDistribution(mockData, config);

export const specializationData = Object.entries(distribution).sort((a, b) => {
  if (a[0] === "Прочее") return 1;
  if (b[0] === "Прочее") return -1;
  return b[1] - a[1];
});
