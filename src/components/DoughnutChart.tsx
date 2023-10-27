import { Doughnut } from "react-chartjs-2";

type ChartData = {
  label: string;
  value: number;
};

type DoughnutChartProps = {
  sourceData: ChartData[];
};

const DoughnutChart: React.FC<DoughnutChartProps> = ({ sourceData }) => {
  return (
    <section className="card category-card">
      <Doughnut
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
              borderColor: [
                "rgba(43, 63, 229, 0.8)",
                "rgba(250, 192, 19, 0.8)",
                "rgba(253, 135, 135, 0.8)",
              ],
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              text: "Revenue Sources",
            },
          },
        }}
      />
    </section>
  );
};

export default DoughnutChart;
