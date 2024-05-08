function pascal(n) {
    let pascal = [[1]];

    for (let i = 1; i < n; i++) {
        let row = [];
        for (let j = 0; j <= i; j++) {
            let left = pascal[i - 1][j - 1] || 0;
            let right = pascal[i - 1][j] || 0;
            row.push(left + right);
        }
        pascal.push(row);
    }

    for (let row of pascal) {
        console.log(row.join(' '));
    }
}
pascal(5);