const fs = require('fs');
const { lerArquivo } = require('../app');

jest.mock('fs');

describe('Testes para lerArquivo()', () => {
    
    test('Deve ler corretamente o arquivo', () => {
        const mockData = 'Conteúdo do arquivo de teste.';
        fs.readFile.mockImplementation((path, encoding, callback) => {
            callback(null, mockData);
        });

        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

        lerArquivo();

        expect(consoleSpy).toHaveBeenCalledWith('Have a nice day.');
        expect(consoleSpy).toHaveBeenCalledWith(mockData);

        consoleSpy.mockRestore(); 
    });

    test('Deve lidar com erro ao ler o arquivo', () => {
        const mockError = new Error('Erro ao ler o arquivo');

        fs.readFile.mockImplementation((path, encoding, callback) => {
            callback(mockError, null);
        });

        const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

        lerArquivo();

        expect(consoleErrorSpy).toHaveBeenCalledWith('Erro ao ler o arquivo', mockError);

        consoleErrorSpy.mockRestore(); 
    });
    
});