const map = (num) => {
    let res = 0;
    if (num > 100) {
        console.error('try number under 100')
    } else {
        for (let i = 1; i <= num; i++) {
            res = num / 20;
        }
        console.log(`${num} in (1~100) Range is ${res} in (1~5) Range`)
    }

};

map(70);