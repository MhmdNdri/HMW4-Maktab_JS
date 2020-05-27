const a = new Date(2014, 10, 2);

    const addMinutes = (date, min) => {
        date.setMinutes(min);
        return date;
    };

    console.log(addMinutes(a, 30));
