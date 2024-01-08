import { IMockDataObject, mockData } from "./mockData";

interface IAgeDistributionData {
  "Не указано"?: number;
  "< 18"?: number;
  "18-24"?: number;
  "25-29"?: number;
  "30-34"?: number;
  "35-39"?: number;
  "40-44"?: number;
  "45-49"?: number;
  "50-54"?: number;
  "55-59"?: number;
}

const ageDistributionData = mockData.reduce(
  (acc: IAgeDistributionData, personData: IMockDataObject) => {
    const attribute = "5. Ваш возраст (полных лет)";
    const attributeValue = personData[attribute];
    if (typeof attributeValue !== "number")
      acc["Не указано"] = (acc["Не указано"] ?? 0) + 1;
    else if (attributeValue <= 18) acc["< 18"] = (acc["< 18"] ?? 0) + 1;
    else if (attributeValue <= 24) acc["18-24"] = (acc["18-24"] ?? 0) + 1;
    else if (attributeValue <= 29) acc["25-29"] = (acc["25-29"] ?? 0) + 1;
    else if (attributeValue <= 34) acc["30-34"] = (acc["30-34"] ?? 0) + 1;
    else if (attributeValue <= 39) acc["35-39"] = (acc["35-39"] ?? 0) + 1;
    else if (attributeValue <= 44) acc["40-44"] = (acc["40-44"] ?? 0) + 1;
    else if (attributeValue <= 49) acc["45-49"] = (acc["45-49"] ?? 0) + 1;
    else if (attributeValue <= 54) acc["50-54"] = (acc["50-54"] ?? 0) + 1;
    else if (attributeValue <= 59) acc["55-59"] = (acc["55-59"] ?? 0) + 1;
    return acc;
  },
  {},
);

export const ageData = Object.entries(ageDistributionData).sort((a, b) => {
  if (a[0] === "Не указано") return 1;
  if (b[0] === "Не указано") return -1;
  return a[0].localeCompare(b[0]);
});
