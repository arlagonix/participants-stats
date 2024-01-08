import { IMockDataObject, mockData } from "./mockData";

/** `{Муж: 38, Жен: 51}` */
interface IGendersDistribution {
  [gender: string]: number;
}

const gendersDistributionData = mockData.reduce(
  (acc: IGendersDistribution, personData: IMockDataObject) => {
    const label = personData["4. Ваш пол"] === "Муж" ? "Мужчины" : "Женщины";
    const currentValue = acc[label] ?? 0;
    acc[label] = currentValue + 1;
    return acc;
  },
  {},
);

export const gendersData = Object.entries(gendersDistributionData).sort(
  (a, b) => b[1] - a[1],
);
