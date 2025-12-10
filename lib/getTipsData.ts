interface Tips {
  title: string;
  heading: string;
  body: string;
}

export const getTipsData = (tips: (id: string) => string): Tips[] => {
  const tipsArray = [];
  for (let i = 1; i <= 11; i++) {
    const tipsObj = {
      title: tips(`${i}.title`),
      heading: tips(`${i}.heading`),
      body: tips(`${i}.body`),
    };
    tipsArray.push(tipsObj);
  }

  return tipsArray;
};
