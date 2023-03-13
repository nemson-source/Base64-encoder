const fs = require('fs');
const base64 = require('base64-js');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Enter the input file (with the file path):');
readline.question('', (InputFile) => {
    console.log('Enter the output folder (with a filename and extanmtion):');
    readline.question('', (OutputFolder) => {
    incode(InputFile, OutputFolder);
        readline.close();
    });
});

const incode = (InputFile, OutputFolder) => {

    fs.readFile(InputFile, 'utf8', (err, data) => {
        if (err) throw err;

        const padding = '='.repeat((4 - data.length % 4) % 4);
        const paddedBase64String = data + padding;

        const bytes = base64.toByteArray(paddedBase64String);
        const decodedString = new TextDecoder().decode(bytes);

        fs.writeFile(OutputFolder, decodedString, (err) => {
            if (err) throw err;
            console.log(`Decoded string written to ${OutputFolder}`);
            console.log(`this is the Decoded string: ${decodedString}`);
        });
    });
    setTimeout(() => {
        process.exit()
      }, 10000)
}