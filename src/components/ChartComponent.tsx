import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "../style/ChartComponent.css";

export interface IData {
  data_year: number;
  Burglary: string;
}

export interface PDFContentProps {
  data: IData[];
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false, // This will remove the vertical grid lines
        color: "#BAC2DB",
      },
      ticks: {
        color: "#626E99", // this will change the color of the labels
        font: {
          family: "Poppins",
          size: 9,
          weight: "500",
          lineHeight: 1.33,
        },
      },
    },
    y: {
      grid: {
        drawBorder: false, // This will prevent the grid lines from exceeding the y-axis
        drawTicks: false, // This will prevent the ticks from being drawn on the y-axis
        color: "#BAC2DB",
      },
      ticks: {
        color: "#626E99", // this will change the color of the labels
        font: {
          family: "Poppins",
          size: 9,
          weight: "500",
          lineHeight: 1.33,
        },
        padding: 10,
      },
    },
  },
  plugins: {
    legend: {
      position: "top" as const,
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

const ChartComponent = ({ data }: PDFContentProps) => {
  const labels = data.map((item: any) => item.data_year);
  const burglary = data.map((item: any) => item["Burglary"]);
  console.log("debug", { labels, burglary });

  const chartData: any = {
    labels: labels,
    datasets: [
      {
        label: "Dataset 1",
        data: burglary,
        borderColor: "#1463FF",
        backgroundColor: "#FFFFFF",
        pointRadius: 0,
        borderWidth: 1.54,
      },
    ],
  };

  return (
    <>
      <div className="chart-header">
        <img
          src="/location-share.png"
          width="16px"
          height="16px"
          alt="location-share"
        />
        <p>Crime</p>
        <div className="line" />
      </div>
      <div className="box-header">
        <p>Burglary</p>
      </div>
      <div className="box-content">
        <div className="left">Arrests</div>
        <div className="chart-wrap">
          <Line options={options} data={chartData} width={500} height={151} />
        </div>
      </div>
    </>
  );
};

export default ChartComponent;
