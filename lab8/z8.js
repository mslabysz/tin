const obliczenia = {
    prostokat: (a, b) => a * b,
    trapez: (a, b, h) => ((a + b) / 2) * h,
    rownoleglobok: (a, h) => a * h,
    trojkat: (a, h) => (a * h) / 2
};

function pole(figura, ...args) {
    return obliczenia[figura] ? obliczenia[figura](...args) : 'Nieznana figura';
}
console.log(pole('prostokat', 2, 3));
console.log(pole('trapez', 2, 3, 4));
console.log(pole('rownoleglobok', 2, 3));
console.log(pole('trojkat', 2, 3));