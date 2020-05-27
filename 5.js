function convertDateToShamsi(date) {
    return moment(date, 'YYYY/M/D').locale('fa').format('ddd، ll');
}
console.log(convertDateToShamsi('1999/05/14'));