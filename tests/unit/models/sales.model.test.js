const { expect } = require('chai');
const sinon = require('sinon');
const { salesModels } = require('../../../src/models');
const connection = require('../../../src/models/connection');
const { salesValide } = require('../mocks/sales.mock');

describe('testes de unidades do model da rota sales', () => {
  afterEach(() => {
    sinon.restore();
  })

  it('Cadastre uma venda com sucesso', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId: 55 }]);
    const result = await salesModels.newSales(salesValide);
    expect(result.id).to.be.equal(55);
    expect(result.itemsSold).to.be.equal(salesValide);
  })
});
