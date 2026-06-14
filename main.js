const express = require ('express');

const app = express();
const PORT = process.env.PORT || 3000;

// НОД (алгоритм Евклида)
function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

// НОК endpoint
app.get('/mashhurbeksaidov1199_gmail_com', (req, res) => {
    const { x, y } = req.query;

    const a = Number(x);    
    const b = Number(y);

    // Проверка на натуральные числа
    if (
        !Number.isInteger(a) ||
        !Number.isInteger(b) ||
        a <= 0 ||
        b <= 0
    ) {
        return res.type('text/plain').send('NaN');
    }

    const lcm = (a / gcd(a, b)) * b;

    return res.type('text/plain').send(String(lcm));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});