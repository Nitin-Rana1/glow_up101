import { useEffect, useRef } from "react";
import Chart, { ChartData, ChartOptions } from "chart.js/auto";

interface HexagonDiagramProps {
  data: {
    labels: string[];
    values: number[];
  };
}

export default function HexagonDiagram({ data }: HexagonDiagramProps) {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (!ctx) return;
      const hexagonData: ChartData = {
        labels: data.labels,
        datasets: [
          {
            label: "Stats",
            data: data.values,
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            pointBackgroundColor: "rgba(75, 192, 192, 1)",
          },
        ],
      };
      const options: ChartOptions = {
        scales: {
          r: {
            beginAtZero: true,
            min: 0,
            max: 100,
            ticks: {
              stepSize: 20, // Set the step size for the radial axis
              display: false,
            },
            grid: {
              color: "gold",
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      };
      const chartInstance = new Chart(ctx, {
        type: "radar",
        data: hexagonData,
        options: options,
      });
      return () => {
        chartInstance.destroy();
      };
    }
  }, [data]);

  return (
    <canvas
      style={{ padding: "5vw 5vw 5vw 10vw" }}
      ref={chartRef}
      width={400}
      height={400}
    ></canvas>
  );
}
