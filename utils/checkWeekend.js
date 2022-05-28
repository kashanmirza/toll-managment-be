exports.checkWeekend = (param) => {
    const date = new Date(param);
    return date.getDay() == 6 || date.getDay() == 0 ? true : false;
  };
  