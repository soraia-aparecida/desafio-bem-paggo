const sum = require('./sum');
const sumArray = require('./sum.array');

describe('Testando função que soma dois números', () => {

    test('Resultado esperado = 12', () => {
        expect(sum(5, 7)).toBe(12);
    })

    test('Resultado esperado não é 12', () => {
        expect(sum(5, 25)).not.toBe(12);
    })
})

describe('Testando função que soma um array números', () => {

    test('Resultado esperado = 50', () => {
        expect(sumArray([10, 5, 10, 2, 5, 8, 3, 3, 4])).toBe(50);
    })
})