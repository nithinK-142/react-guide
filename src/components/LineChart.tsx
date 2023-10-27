import { Line } from "react-chartjs-2";

type ChartData = {
  label: string;
  revenue: number;
  cost: number;
};

type LineChartProps = {
  revenueData: ChartData[];
};

const LineChart: React.FC<LineChartProps> = ({ revenueData }) => {
  return (
    <section className="card revenue-card">
      <Line
        data={{
          labels: revenueData.map((data) => data.label),
          datasets: [
            {
              label: "Revenue",
              data: revenueData.map((data) => data.revenue),
              backgroundColor: "#064FF0",
              borderColor: "#064FF0",
            },
            {
              label: "Cost",
              data: revenueData.map((data) => data.cost),
              backgroundColor: "#FF3030",
              borderColor: "#FF3030",
            },
          ],
        }}
        options={{
          elements: {
            line: {
              tension: 0.5,
            },
          },
          plugins: {
            title: {
              text: "Monthly Revenue & Cost",
            },
          },
        }}
      />
    </section>
  );
};

export default LineChart;
