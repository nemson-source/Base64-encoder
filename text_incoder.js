const fs = require('fs');
const base64 = require('base64-js');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Enter the input text:');
readline.question('', (InputText) => {
    console.log('Enter the output folder (with a filename and extanmtion):');
    readline.question('', (OutputFolder) => {
    incode(InputText, OutputFolder);
        readline.close();
    });
});

const incode = (InputText, OutputFolder) => {

    const bytes = new TextEncoder().encode(InputText);
    const base64String = base64.fromByteArray(bytes);

    fs.writeFile(OutputFolder, base64String, (err) => {
        if (err) throw err;
        console.log(`Encoded string written to ${OutputFolder}`);
        console.log(`this is the incoded text: ${base64String}`)
    });
    setTimeout(() => {
        process.exit()
      }, 10000)
}