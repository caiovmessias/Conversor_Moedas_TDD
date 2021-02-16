const {euro, dolar, libra} = require('./Valores');

function euroToReal(valor) {
  return (valor * euro).toFixed(2);
}

function realToEuro(valor) {
  if (valor > 0) {
    return (valor / euro).toFixed(2);
  } else {
    return 'Erro: Impossível dividir por 0'
  }
}

function dolarToReal(valor) {
  return (valor * dolar).toFixed(2);
}

function realToDolar(valor) {
  if (valor > 0) {
    return (valor / dolar).toFixed(2);
  } else {
    return 'Erro: Impossível dividir por 0';
  }
}

function libraToReal(valor) {
  return (valor * libra).toFixed(2);
}

function realToLibra(valor) {
  if (valor > 0) {
    return (valor / libra).toFixed(2);
  } else {
    return 'Erro: Impossivel dividir por 0';
  }
}

module.exports = {
  euroToReal, realToEuro, dolarToReal, realToDolar, libraToReal, realToLibra
};