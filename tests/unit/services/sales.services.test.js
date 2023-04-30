const { expect } = require('chai');
const sinon = require('sinon');
const { salesModels } = require('../../../src/models');
const {salesServices} = require('../../../src/services');
const {
  salesValide,
  salesSuccess,
  allSales,
  mockGetSaleId,
  idInvalid,
} = require('../mocks/sales.mock');
const utils = require('../../../src/utils');

describe('testes de unidades do Services da rota sales', () => {
  afterEach(() => {
    sinon.restore();
  })

  it('Cadastre uma venda com sucesso', async () => {
    sinon.stub(utils, 'getAll').resolves(salesValide);
    sinon.stub(salesModels, 'newSales').resolves(salesSuccess);
    const result = await salesServices.newSales(salesValide);
    expect(result.type).to.be.equal(utils.HTTP.status.created);
  })

  it('liste todas as vendas sales', async () => {
    sinon.stub(salesModels, 'getAllSales').resolves(allSales);
    const result = await salesServices.getAllSales();
    expect(result).to.be.length(3);
    expect(result[0]).to.have.been.property('saleId');
    expect(result[0]).to.have.been.property('date');
    expect(result[0]).to.have.been.property('productId');
    expect(result[0]).to.have.been.property('quantity');
  })

  it('liste uma venda especifica pela rota sales/id', async () => {
    sinon.stub(salesModels, 'getSaleId').resolves(mockGetSaleId);
    const result = await salesServices.getSaleId(88);
    expect(result.message[0]).to.have.been.property('date');
    expect(result.message[0]).to.have.been.property('productId');
    expect(result.message[0]).to.have.been.property('quantity');
  })

  it('se a venda não existir exibir uma mensagem de erro', async () => {
    sinon.stub(salesModels, 'getSaleId').resolves([]);
    const result = await salesServices.getSaleId(idInvalid);
    expect(result.type).to.be.equal(utils.HTTP.status.notFound);
    expect(result.message).to.been.contain({ "message": "Sale not found" })
  })
});