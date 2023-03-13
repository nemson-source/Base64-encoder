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

        const bytes = new TextEncoder().encode(data);
        const base64String = base64.fromByteArray(bytes);

        fs.writeFile(OutputFolder, `${base64String} \n file path and name: ${__filename}`, (err) => {
            if (err) throw err;
            console.log(`Encoded string written to ${OutputFolder}`);
            console.log(`this is the incoded text: ${base64String}`)
        });
    });
    setTimeout(() => {
        process.exit()
      }, 10000)
}