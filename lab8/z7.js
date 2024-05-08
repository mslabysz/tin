function poleProstokata(a, b) {
    return a * b;
}

function poleTrapezu(a, b, h) {
    return ((a + b) / 2) * h;
}

function poleRownolegloboku(a, h) {
    return a * h;
}

function poleTrojkata(a, h) {
    return (a * h) / 2;
}

function pole(figura, ...args) {
    switch (figura) {
        case 'prostokat':
            return poleProstokata(...args);
        case 'trapez':
            return poleTrapezu(...args);
        case 'rownoleglobok':
            return poleRownolegloboku(...args);
        case 'trojkat':
            return poleTrojkata(...args);
        default:
            return 'Nieznana figura';
    }
}
console.log(pole('prostokat', 2, 3));
console.log(pole('trapez', 2, 3, 4));
console.log(pole('rownoleglobok', 2, 3));
console.log(pole('trojkat', 2, 3));