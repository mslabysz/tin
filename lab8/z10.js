function cenzura(niedozwolone, zdanie) {
    return zdanie.split(' ').map(slowo => {
        for (let niedozwoloneSlowo of niedozwolone) {
            if (slowo.includes(niedozwoloneSlowo)) {
                slowo = slowo.replace(new RegExp(niedozwoloneSlowo, 'g'), '*'.repeat(niedozwoloneSlowo.length));
            }
        }
        return slowo;
    }).join(' ');
}
console.log(cenzura(['Ala', 'kot'], 'Ala ma kota i psa'));