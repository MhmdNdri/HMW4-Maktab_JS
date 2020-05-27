const yechizi = {
    country: 'Iran',
    capital: 'Tehran',
    population: '18M'
};

function convertObjToList(object) {
    return Object.entries(object);
}

console.log(convertObjToList(yechizi))