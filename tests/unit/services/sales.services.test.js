const { expect } = require('chai');
const sinon = require('sinon');
const { salesModels } = require('../../../src/models');
const {salesServices} = require('../../../src/services');
const { salesValide, salesSuccess } = require('../mocks/sales.mock');

describe('testes de unidades do Services da rota sales', () => {
  afterEach(() => {
    sinon.restore();
  })

  it('Cadastre uma venda com sucesso', async () => {
    sinon.stub(salesModels, 'newSales').resolves(salesSuccess);
    const result = await salesServices.newSales(salesValide);
    expect(result.id).to.be.equal(55);
    expect(result.itemsSold).to.be.length(2);
  })
});