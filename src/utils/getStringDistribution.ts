import { IMockDataObject } from "@/shared/types";

interface IDistribution {
  [attribute: string]: number;
}

export interface IConfig {
  attributeName: string;
  rules: string[][];
  default: string;
}

const getStringDistribution = (
  data: IMockDataObject[],
  config: IConfig,
  isConsoleTable = false,
  splitValues = true,
) => {
  const consoleTableArray: object[] = [];
  const res = data.reduce((acc: IDistribution, personData: IMockDataObject) => {
    const attributeValue = personData[config.attributeName]
      .toString()
      .toLowerCase();
    const derivedValues = splitValues
      ? attributeValue.split(", ")
      : [attributeValue];

    const updateAcc = (attributeName: string) => {
      acc[attributeName] = (acc[attributeName] ?? 0) + 1;
    };

    for (const derivedValue of derivedValues) {
      let needUpdateDefault = true;
      for (const rule of config.rules) {
        const [substr, attributeName] = rule;
        if (derivedValue.includes(substr)) {
          updateAcc(attributeName);
          needUpdateDefault = false;
          if (isConsoleTable)
            consoleTableArray.push({
              fullValue: attributeValue,
              value: derivedValue,
              substring: substr,
              category: attributeName,
            });
          break;
        }
      }
      if (needUpdateDefault) {
        updateAcc(config.default);
        if (isConsoleTable)
          consoleTableArray.push({
            fullValue: attributeValue,
            value: derivedValue,
            substring: null,
            category: config.default,
          });
      }
    }

    return acc;
  }, {});
  if (isConsoleTable) console.table(consoleTableArray);
  return res;
};

export default getStringDistribution;
