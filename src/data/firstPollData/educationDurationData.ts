import { mockData } from "./mockData";
import getStringDistribution, { IConfig } from "@/utils/getStringDistribution";

const config: IConfig = {
  attributeName: "16. Как долго учитесь на курсах в месяцах?",
  rules: [
    ["уже закончил обучение", "Уже закончил обучение"],
    ["3 - 6 мес.", "3 - 6 мес."],
    ["6 - 9 мес.", "6 - 9 мес."],
    ["9 - 12 мес.", "9 - 12 мес."],
    ["от 0 до 3 мес.", "от 0 до 3 мес."],
    ["macos", "MacOS"],
    ["macos", "MacOS"],
  ],
  default: "Прочее",
};

export const distribution = getStringDistribution(mockData, config);

export const educationDurationData = Object.entries(distribution).sort(
  (a, b) => {
    if (a[0] === "Прочее") return 1;
    if (b[0] === "Прочее") return -1;
    return b[1] - a[1];
  },
);
