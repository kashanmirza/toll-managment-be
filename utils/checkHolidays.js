exports.checkHolidays = (param) => {
  const currentYear = new Date().getFullYear();
  var holidayOne = new Date("23/03/" + currentYear);
  var holidayTwo = new Date("14/08/" + currentYear);
  var holidayThree = new Date("25/12/" + currentYear);
  const date = new Date(param);
  if (
    holidayOne.getTime() === date.getTime() ||
    holidayTwo.getTime() === date.getTime() ||
    holidayThree.getTime() === date.getTime()
  ) {
    return true;
  }
  return false;
};
