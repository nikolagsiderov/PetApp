const towns = [
  {
    code: "1000",
    label: "София",
    region: "София-град",
    latlng: [42.698334, 23.319941],
  },
  {
    code: "4000",
    label: "Пловдив",
    region: "Пловдив",
    latlng: [42.698334, 23.319941],
  },
  {
    code: "9000",
    label: "Варна",
    region: "Варна",
    latlng: [42.698334, 23.319941],
  },
  {
    code: "8000",
    label: "Бургас",
    region: "Бургас",
    latlng: [42.698334, 23.319941],
  },
  {
    code: "6000",
    label: "Стара Загора",
    region: "Стара Загора",
    latlng: [42.698334, 23.319941],
  },
  {
    code: "6300",
    label: "Хасково",
    region: "Хасково",
    latlng: [42.698334, 23.319941],
  },
  {
    code: "6343",
    label: "Минерални бани",
    region: "Хасково",
    latlng: [42.698334, 23.319941],
  },
];

const useTowns = () => {
  const getAll = () => towns;

  const getByValue = (code: string) => {
    return towns.find((item) => item.code === code);
  };

  return {
    getAll,
    getByValue,
  };
};

export default useTowns;
