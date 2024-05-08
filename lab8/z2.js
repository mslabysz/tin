function wypiszPodzielne(a, b, c) {
    for (let i = a; i <= b; i++) {
        if (i % c === 0) {
            console.log(i);
        }
    }
}
wypiszPodzielne(1,100,2);