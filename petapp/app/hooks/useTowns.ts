const towns = [
  {
    value: "1000",
    label: "София",
    region: "София-град",
    latlng: [42.698334, 23.319941],
  },
  {
    value: "4000",
    label: "Пловдив",
    region: "Пловдив",
    latlng: [42.698334, 23.319941],
  },
  {
    value: "9000",
    label: "Варна",
    region: "Варна",
    latlng: [42.698334, 23.319941],
  },
  {
    value: "8000",
    label: "Бургас",
    region: "Бургас",
    latlng: [42.698334, 23.319941],
  },
  {
    value: "6000",
    label: "Стара Загора",
    region: "Стара Загора",
    latlng: [42.698334, 23.319941],
  },
  {
    value: "6300",
    label: "Хасково",
    region: "Хасково",
    latlng: [42.698334, 23.319941],
  },
  {
    value: "6343",
    label: "Минерални бани",
    region: "Хасково",
    latlng: [42.698334, 23.319941],
  },
];

const useTowns = () => {
  const getAll = () => towns;

  const getByValue = (value: string) => {
    return towns.find((item) => item.value === value);
  };

  return {
    getAll,
    getByValue,
  };
};

export default useTowns;
