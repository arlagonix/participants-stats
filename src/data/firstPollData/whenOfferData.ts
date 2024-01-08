import { mockData } from "./mockData";
import getStringDistribution, { IConfig } from "@/utils/getStringDistribution";

const config: IConfig = {
  attributeName:
    "33. Что вы сделаете, если в процессе практики получите предложение, о работе?",
  rules: [
    ["буду совмещать", "Буду совмещать"],
    ["уйду", "Уйду из практики"],
    ["есть оффер", "Есть оффер"],
  ],
  default: "Прочее",
};

export const distribution = getStringDistribution(
  mockData,
  config,
  false,
  false,
);

export const whenOfferData = Object.entries(distribution).sort((a, b) => {
  if (a[0] === "Прочее") return 1;
  if (b[0] === "Прочее") return -1;
  return b[1] - a[1];
});
