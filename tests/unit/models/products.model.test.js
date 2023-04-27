const { expect } = require('chai');
const sinon = require('sinon');
const { productsModels } = require('../../../src/models');
const connection = require('../../../src/models/connection');
const { mockAllProducts, mockProductId} = require('../mocks/products.mock');

describe('testes de unidades do model da rota products', () => {
  afterEach(() => {
    sinon.restore();
  })
  it('list todos os produtos', async () => {
    sinon.stub(connection, 'execute').resolves([mockAllProducts]);
    const result = await productsModels.getAll();
    expect(result).to.be.deep(mockAllProducts);
  })

  it('selecione o produto pelo id', async () => {
    sinon.stub(connection, 'execute').resolves([mockProductId]);
    const result = await productsModels.getProductId(1);
    expect(result).to.be.equal(mockProductId[0]);
  })

})