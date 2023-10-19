const labels = ["January", "February", "March", "April", "May", "June", "July"];

const startPages = [5, 10, 15, 1, 3, 5, 6];

const progressExpectetion = [5, 10, 15, 20, 25, 30, 35];

export const data = {
  labels,
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

export const options = {
  cubicInterpolationMode: "monotone",
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};
