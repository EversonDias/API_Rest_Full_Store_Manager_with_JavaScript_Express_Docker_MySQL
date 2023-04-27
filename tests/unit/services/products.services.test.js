const { expect } = require('chai');
const sinon = require('sinon');
const { productsServices } = require('../../../src/services');
const { productsModels } = require('../../../src/models');
const { mockAllProducts, mockProductId } = require('../mocks/products.mock');

describe('testes de unidades do Services da rota products', () => {
  afterEach(() => {
    sinon.restore();
  })
  it('list todos os produtos', async () => {
    sinon.stub(productsModels, 'getAll').resolves(mockAllProducts);
    const result = await productsServices.getAll();
    expect(result).to.be.deep(mockAllProducts);
  })

  it('selecione o produto pelo id', async () => {
    sinon.stub(productsModels, 'getProductId').resolves(mockProductId);
    const result = await productsServices.getProductId(1);
    expect(result).to.be.equal(mockProductId[0]);
  })

})
