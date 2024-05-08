function czyTrojkaPitagorejska(a, b, c) {
    let liczby = [a, b, c].sort((x, y) => x - y);
    return Math.pow(liczby[0], 2) + Math.pow(liczby[1], 2) === Math.pow(liczby[2], 2);
}
console.log(czyTrojkaPitagorejska(3, 4, 5));