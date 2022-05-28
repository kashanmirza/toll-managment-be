exports.checkMondayandWednesday = (param) => {
    const date = new Date(param);
    return date.getDay() === 1 || date.getDay() === 3;
}