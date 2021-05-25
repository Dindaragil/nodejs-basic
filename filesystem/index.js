const fs = require('fs');
const { resolve } = require('path');

const fileReadCallBack = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas!')
    }
    console.log(data);
}

fs.readFile(resolve(__dirname, 'notes.txt'), 'UTF-8', fileReadCallBack);