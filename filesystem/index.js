const fs = require('fs');
const { resolve } = require('path');

const fileReadCallBack = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas!')
    }
    console.log(data);
}

fs.readFileSync(resolve(__dirname, 'notes.txt'), 'UTF-8', fileReadCallBack);

const data1 = fs.readFileSync(resolve(__dirname, 'notes.txt'), 'UTF-8');
console.log(data1);