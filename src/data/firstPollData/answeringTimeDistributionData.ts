import { mockData } from "./mockData";

const distribution = mockData.map((element) => element["Отметка времени"]);

function transformTimestampsToChartData(timestamps: string[]) {
  const countMap: { [key: string]: number } = {};

  timestamps.forEach((timestamp) => {
    // Manually parse the timestamp
    const [datePart] = timestamp.split(" ");
    const [day, month, year] = datePart.split(".").map(Number);

    // Create a label for the day
    const label = `${day.toString().padStart(2, "0")}.${month
      .toString()
      .padStart(2, "0")}.${year}`;

    countMap[label] = (countMap[label] || 0) + 1;
  });

  const chartData: [string, number][] = Object.entries(countMap).map(
    ([label, count]) => [label, count],
  );
  return chartData;
}

export const answeringTimeDistributionData =
  transformTimestampsToChartData(distribution);
