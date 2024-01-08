import { mockData } from "./mockData";

const attributeName = "10. Какое настроение во время практики?";

// const probe = mockData
//   .map((personData: any) => personData[attributeName])
//   .reduce((acc: any, value: any) => {
//     const arr = value.split(", ");
//     arr.forEach((splitValue: string) => {
//       acc[splitValue] = (acc[splitValue] ?? 0) + 1;
//     });
//     return acc;
//   }, {});

const probe = new Set(
  mockData.map((personData: any) => personData[attributeName]),
);

export default probe;
