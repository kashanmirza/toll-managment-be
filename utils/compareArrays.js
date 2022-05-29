exports.compareArrays = (arr1, arr2, key) => {
  let res = [];
  res = arr1.filter((el1) => {
    return arr2.find((el2) => {
      return (
        el2[key].replace(/\s/g, "").toLowerCase() ===
        el1[key].replace(/\s/g, "").toLowerCase()
      );
    });
  });
  return res;
};
