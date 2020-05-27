const differentDates = (first , second) => { 
    const year = Math.abs(first.getFullYear() - second.getFullYear());
    const month = Math.abs(first.getMonth() - second.getMonth());
    const day = Math.abs(first.getDay() - second.getDay());
    const hour = Math.abs(first.getHours() - second.getHours());
    const minutes = Math.abs(first.getMinutes() - second.getMinutes());
    const sec =  Math.abs(first.getSeconds() - second.getSeconds());

    return {year, month , day , hour , minutes , sec }
};

let first = new Date('1999-05-01T12:22:41');
let second = new Date('2020-06-20T23:19:01');




console.log(differentDates( first , second ));