const { assert } = require('chai');
const Conversor = require('../src/Conversor');

describe('TDD de conversão de Moedas', () => {
  describe('Euro - Real', () => {
    it('Converter 10 Euros em Reais', () => {
      assert.equal(Conversor.euroToReal(10), 65.2);
    });
    it('Converter 0 Euros em Reais', () => {
      assert.equal(Conversor.euroToReal(0), 0);
    });
    it('Converter 60 Reais em Euros', () => {
      assert.equal(Conversor.realToEuro(60), 9.2);
    });
    it('Converter 0 Reais em Euros', () => {
      assert.equal(Conversor.realToEuro(0), 'Erro: Impossível dividir por 0');
    });
  });

  describe('Dolar - Real', () => {
    it('Converter 100 Dólares em Reais', () => {
      assert.equal(Conversor.dolarToReal(100), 537);
    });
    it('Converter 0 Dólares em Reais', () => {
      assert.equal(Conversor.dolarToReal(0), 0);
    });
    it('Converter 151 Reais em Dólares', () => {
      assert.equal(Conversor.realToDolar(151), 28.12);
    });
    it('Converter 0 Reais em Dólares', () => {
      assert.equal(Conversor.realToDolar(0), 'Erro: Impossível dividir por 0');
    });
  });

  describe('Libra - Real', () => {
    it('Converter 50 Libras em Reais', () => {
      assert.equal(Conversor.libraToReal(50), 374);
    });
    it('Converter 0 Libras em Reais', () => {
      assert.equal(Conversor.libraToReal(0), 0);
    });
    it('Converter 1480 Reais em Libras', () => {
      assert.equal(Conversor.realToLibra(1480), 197.86);
    });
    it('Converter 0 Reais em Libras', () => {
      assert.equal(Conversor.realToLibra(0), 'Erro: Impossivel dividir por 0');
    });
  });
});
