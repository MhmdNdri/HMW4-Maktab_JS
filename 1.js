
function dateConverter(date) {
    return moment(date, 'YYYY/M/D').locale('fa').format('YYYY/M/D')
}

console.log(dateConverter('1999/05/14'));


