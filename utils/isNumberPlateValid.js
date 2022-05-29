exports.isNumberPlateValid = (param) => {
    const checkPlate = new RegExp(/[A-Z]{3}-[0-9]{3}/);
    return checkPlate.test(param);
}