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

const Chart = ({ labels, startPages, progressExpectetion, current }) => {
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
        data: startPages,
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
        Amont of pages / DAY <PagesPerDay>{current.pagesPerDay}</PagesPerDay>
      </LineUpperText>
      <Line options={options} data={data} />
    </LineWrapper>
  );
};

export default Chart;
