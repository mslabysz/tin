function choinka(n){
    for(let i=0;i<n;i++){
        let row = '';
        for(let j=0;j<n-i;j++){
            row += '*';
        }
        for(let j=0;j<2*i;j++){
            row += ' ';
        }
        for(let j=0;j<n-i;j++){
            row += '*';
        }
        console.log(row);
    }
    console.log('*'.repeat(2*n));
}
choinka(10);