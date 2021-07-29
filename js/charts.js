var data = {
  labels: "MyChart",
  datasets: [
    {
      label: "Dataset 1",
      data: [2, 3, 4, 5, 6],
      borderColor: Utils.CHART_COLORS.red,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
    },
    {
      label: "Dataset 2",
      data: [2, 8, 4, 7, 6],
      borderColor: Utils.CHART_COLORS.blue,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
    },
  ],
};

var config = {
  type: "line",
  data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  },
};

var myChart = document.getElementById("myChart").getContext("2d");

var chart1 = new Chart(myChart, config);
