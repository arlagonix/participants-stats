import { mockData } from "./mockData";

const attributeName = "34. С каким настроением идете на практику?";

const probe = mockData
  .map((personData) => personData[attributeName])
  .reduce((acc: any, value: any) => {
    const arr = value.split(", ");
    arr.forEach((splitValue: string) => {
      acc[splitValue] = (acc[splitValue] ?? 0) + 1;
    });
    return acc;
  }, {});

export default probe;
