export const dataGenerator = (labels, startPages, progressExpectetion) => {
  return { labels, startPages, progressExpectetion };
};

const ddd = dataGenerator(
  ["January", "February", "March", "April", "May", "June", "July"],
  [5, 10, 15, 1, 3, 5, 6],
  [5, 10, 15, 20, 25, 30, 35]
);

export const data = {
  labels: ddd.labels,
  datasets: [
    {
      label: "plan",
      data: ddd.startPages,
      borderColor: "#FF6B08",
      backgroundColor: "#FF6B08",
    },
    {
      label: "fact",
      data: ddd.progressExpectetion,
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
