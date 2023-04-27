const { expect } = require('chai');
const sinon = require('sinon');
const { productsModels } = require('../../../src/models');
const connection = require('../../../src/models/connection');
const { mockAllProducts, mockProductId, newProduct} = require('../mocks/products.mock');

describe('testes de unidades do model da rota products', () => {
  afterEach(() => {
    sinon.restore();
  })
  it('list todos os produtos', async () => {
    sinon.stub(connection, 'execute').resolves([mockAllProducts]);
    const result = await productsModels.getAll();
    expect(result).to.be.equal(mockAllProducts);
  })

  it('selecione o produto pelo id', async () => {
    sinon.stub(connection, 'execute').resolves([mockProductId]);
    const result = await productsModels.getProductId(1);
    expect(result[0]).to.be.equal(mockProductId[0]);
  })

  it('salve um novo produto', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId: 01 }]);
    const result = await productsModels.saveProducts(newProduct);
    expect(result).to.be.equal(01);
  })

})