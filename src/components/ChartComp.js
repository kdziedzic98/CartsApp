import React from "react";
import "../styles/ChartComp.css";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(CategoryScale);

const ChartComp = ({ data, setChart }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setChart(false);
    }
  };

  const chartData = {
    labels: data.products.map((product) => product.title),
    datasets: [
      {
        label: "Price",
        data: data.products.map((product) => product.price),
        backgroundColor: "red",
        borderColor: "red",
        borderWidth: 1,
      },
      {
        label: "Discounted price",
        data: data.products.map((product) =>
          Math.floor(product.discountedPrice / product.quantity)
        ),
        backgroundColor: "blue",
        borderColor: "blue",
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
          labels: {
            font: {
              size: 22,
              weight: "bold",
            },
          },
        },
      },
    },
  };

  return (
    <div className="backdrop" onClick={handleClick}>
      <div className="chart-container">
        <Line data={chartData} options={config} />
      </div>
    </div>
  );
};

export default ChartComp;
