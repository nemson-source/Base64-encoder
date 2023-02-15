const fs = require('fs');
const base64 = require('base64-js');

const inputFile = './encoder/input.txt';
const outputFile = './encoder/output.txt';

fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) throw err;

    const bytes = new TextEncoder().encode(data);
    const base64String = base64.fromByteArray(bytes);

    fs.writeFile(outputFile, base64String, (err) => {
        if (err) throw err;
        console.log(`Encoded string written to ${outputFile}`);
    });
});