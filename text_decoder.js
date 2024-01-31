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
    const padding = '='.repeat((4 - InputText.length % 4) % 4);
    const paddedBase64String = InputText + padding;
    const bytes = base64.toByteArray(paddedBase64String);
    const decodedString = new TextDecoder().decode(bytes);
    fs.writeFile(OutputFolder, decodedString, (err) => {
        if (err) throw err;
        console.log(`Decoded string written to ${OutputFolder}`);
        console.log(`this is the decoded text: ${decodedString}`)
    });
    setTimeout(() => {
        process.exit()
      }, 10000)
}
