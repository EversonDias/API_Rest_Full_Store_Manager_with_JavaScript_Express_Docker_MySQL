const { expect } = require('chai');
const sinon = require('sinon');
const { productsServices } = require('../../../src/services');
const { productsModels } = require('../../../src/models');
const {
  mockAllProducts,
  mockProductId,
  newProduct,
  mockUpdateSuccess,
} = require('../mocks/products.mock');

describe('testes de unidades do Services da rota products', () => {
  afterEach(() => {
    sinon.restore();
  })
  it('list todos os produtos', async () => {
    sinon.stub(productsModels, 'getAll').resolves(mockAllProducts);
    const result = await productsServices.getAll();
    expect(result).to.be.equal(mockAllProducts);
  })

  it('selecione o produto pelo id', async () => {
    sinon.stub(productsModels, 'getProductId').resolves(mockProductId);
    const result = await productsServices.getProductId(1);
    expect(result[0]).to.be.equal(mockProductId[0]);
  })

  it('salve um novo produto', async () => {
    sinon.stub(productsModels, 'saveProducts').resolves(1);
    const result = await productsServices.saveProducts(newProduct);
    expect(result).to.be.equal(1);
  })

  it('atualize um produto pelo id', async () => {
    sinon.stub(productsModels, 'updateProduct').resolves(mockUpdateSuccess);
    const result = await productsServices.updateProduct(newProduct, 1);
    expect(result[0]).to.be.equal(mockUpdateSuccess[0]);
  })
})
