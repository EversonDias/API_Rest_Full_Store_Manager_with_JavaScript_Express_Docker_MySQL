const { expect } = require('chai');
const sinon = require('sinon');
const { salesModels } = require('../../../src/models');
const connection = require('../../../src/models/connection');
const { salesValide, allSales, mockGetSaleId } = require('../mocks/sales.mock');

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

  it('liste todas as vendas sales', async () => {
    sinon.stub(connection, 'execute').resolves([allSales]);
    const result = await salesModels.getAllSales();
    expect(result).to.be.length(3);
    expect(result[0]).to.have.been.property('saleId');
    expect(result[0]).to.have.been.property('date');
    expect(result[0]).to.have.been.property('productId');
    expect(result[0]).to.have.been.property('quantity');
  })

  it('liste uma venda especifica pela rota sales/id', async () => {
    sinon.stub(connection, 'execute').resolves([mockGetSaleId]);
    const result = await salesModels.getSaleId(88);
    expect(result[0]).to.have.been.property('date');
    expect(result[0]).to.have.been.property('productId');
    expect(result[0]).to.have.been.property('quantity');
  })
});
