export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getNumber = (num: number) =>
  Math.floor(Math.random() * Math.floor(num));

export const getPercentage = () => Math.floor(Math.random() * 100);
