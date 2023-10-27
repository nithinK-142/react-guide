import { Bar } from "react-chartjs-2";

type ChartData = {
  label: string;
  value: number;
};

type BarChartProps = {
  sourceData: ChartData[];
};

const BarChart: React.FC<BarChartProps> = ({ sourceData }) => {
  return (
    <section className="card customer-card">
      <Bar
        data={{
          labels: sourceData.map((data) => data.label),
          datasets: [
            {
              label: "Count",
              data: sourceData.map((data) => data.value),
              backgroundColor: [
                "rgba(43, 63, 229, 0.8)",
                "rgba(250, 192, 19, 0.8)",
                "rgba(253, 135, 135, 0.8)",
              ],
              borderRadius: 5,
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              text: "Revenue Source",
            },
          },
        }}
      />
    </section>
  );
};

export default BarChart;
