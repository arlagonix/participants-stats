import { IDistribution, IMockDataObject } from "@/shared/types";
import { mockData } from "./mockData";

const attributeName = "3. Роль в команде";

const firstLetterToUppercase = (s: string) => s[0].toUpperCase() + s.slice(1);

const distribution = mockData.reduce(
  (acc: IDistribution, personData: IMockDataObject) => {
    const label = firstLetterToUppercase(personData[attributeName].toString());
    const currentValue = acc[label] ?? 0;
    acc[label] = currentValue + 1;
    return acc;
  },
  {},
);

export const rolesData = Object.entries(distribution).sort(
  (a, b) => b[1] - a[1],
);
