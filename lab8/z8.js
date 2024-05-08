const obliczenia = {
    prostokat: (a, b) => a * b,
    trapez: (a, b, h) => ((a + b) / 2) * h,
    rownoleglobok: (a, h) => a * h,
    trojkat: (a, h) => (a * h) / 2
};

function obliczPole(figura, ...args) {
    return obliczenia[figura] ? obliczenia[figura](...args) : 'Nieznana figura';
}
console.log(obliczPole('prostokat', 2, 3));