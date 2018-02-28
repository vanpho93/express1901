const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>');
});

// app.get('/', (req, res) => {
//     res.send('<h1>Hi</h1>');
// });

app.get('/chao/:name', (req, res) => {
    const { name } = req.params;
    res.send(`<h1>Hello ${name} </h1>`);
});

app.get('/tinh/:tenPhepTinh/:soA/:soB', (req, res) => {
    const { tenPhepTinh, soA, soB } = req.params;
    const pt = new PhepTinh(tenPhepTinh, soA, soB);
    res.send(pt.getResultString());
});
class PhepTinh {
    constructor(tenPhepTinh, soA, soB) {
        this.tenPhepTinh = tenPhepTinh;
        this.soA = soA;
        this.soB = soB;
    }

    getSign() {
        if (this.tenPhepTinh === 'CONG') return '+';
        if (this.tenPhepTinh === 'TRU') return '-';
        if (this.tenPhepTinh === 'NHAN') return '*';
        return '/';
    }

    getResultString() {
        const { soA, soB } = this;
        const sign = this.getSign();
        const veTrai = `${soA} ${sign} ${soB}`;
        const kq = eval(veTrai);
        return `${veTrai} = ${kq}`;
    }
}

app.listen(3000, () => console.log('Server started.'));
