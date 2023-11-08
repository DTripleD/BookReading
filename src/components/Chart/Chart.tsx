import { LineUpperText, LineWrapper, PagesPerDay } from "./Chart.styled";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const Chart = ({ labels, progressExpectetion, current, perDay }) => {
  let currentDatee: string | null = null;
  let sumOfPages = 0;
  const resultArray: number[] = [];

  for (const item of current.stats) {
    const date = item.time.split(" ")[0];

    if (date !== currentDatee) {
      if (currentDatee !== null) {
        resultArray.push(sumOfPages);
      }
      currentDatee = date;
      sumOfPages = item.pagesCount;
    } else {
      sumOfPages += item.pagesCount;
    }
  }

  if (currentDatee !== null) {
    resultArray.map((num) => (sumOfPages += num));
    resultArray.push(sumOfPages);
  }

  const options = {
    cubicInterpolationMode: "monotone",
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: "plan",
        data: resultArray,
        borderColor: "#FF6B08",
        backgroundColor: "#FF6B08",
      },
      {
        label: "fact",
        data: progressExpectetion,
        borderColor: "#091E3F",
        backgroundColor: "#091E3F",
      },
    ],
  };

  return (
    <LineWrapper>
      <LineUpperText>
        Amont of pages / DAY{" "}
        <PagesPerDay>{current.pagesPerDay || perDay || 0}</PagesPerDay>
      </LineUpperText>
      <Line options={options} data={data} />
    </LineWrapper>
  );
};

export default Chart;
