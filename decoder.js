const fs = require('fs');
const base64 = require('base64-js');

const inputFile = './decoder/input.txt';
const outputFile = './decoder/output.txt';

fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) throw err;

    const padding = '='.repeat((4 - data.length % 4) % 4);
    const paddedBase64String = data + padding;

    const bytes = base64.toByteArray(paddedBase64String);
    const decodedString = new TextDecoder().decode(bytes);

    fs.writeFile(outputFile, decodedString, (err) => {
        if (err) throw err;
        console.log(`Decoded string written to ${outputFile}`);
    });
});