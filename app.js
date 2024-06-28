const fs = require('fs');

const filePath = './texto.txt';

function lerArquivo(){
    fs.readFile(filePath, 'utf8', (err, data)=>{
        if(err){
            console.error('Erro ao ler o arquivo',err);
            return;
        }
        console.log('Have a nice day.');
        console.log(data);
    });
}

module.exports = {
    lerArquivo
};