const convertData = (oldData: any) => {
  const newData: Array<any> = [];

  const brands = new Set(oldData.map((od: any) => od.brand));

  brands.forEach((brand: any) => {
    newData.push({
      brand: brand,
      data: oldData.filter((od: any) => od.brand === brand),
    });
  });

  return newData;
};

export default convertData;
