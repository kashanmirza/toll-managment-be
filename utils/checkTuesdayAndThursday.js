exports.checkTuesdayAndThursday = (param) => {
    const date = new Date(param);
    return date.getDay() === 2 || date.getDay() === 4;
}