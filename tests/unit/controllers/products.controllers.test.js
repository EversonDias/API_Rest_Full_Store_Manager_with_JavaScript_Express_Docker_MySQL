const { expect } = require('chai');
const sinon = require('sinon');
const { productsServices } = require('../../../src/services');
const { productsControllers } = require('../../../src/controllers');
const { mockAllProducts, mockProductId } = require('../mocks/products.mock');
const { status } = require('../../../src/utils');

describe('testes de unidades do controllers da rota products', () => {
  afterEach(() => {
    sinon.restore();
  })
  it('retorna o status 200 e todos os produtos', async () => {
    const res = {};
    const req = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsServices, 'getAll').resolves(mockAllProducts);
    await productsControllers.getAll(req, res);
    expect(res.status).to.have.been.calledWith(status.ok);
    expect(res.json).to.have.been.calledWith(mockAllProducts);
  })

  it('retorna status 200 o produto selecionado pelo id', async () => {
    const req = {
      params: { id: 1},
    };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsServices, 'getProductId').resolves(mockProductId);
    await productsControllers.getProductId(req, res);
    expect(res.status).to.have.been.calledWith(status.ok);
    expect(res.json).to.have.been.calledWith(mockProductId[0])
  })

  it('retorna status 404 quando o id passado não existe', async () => {
    const res = {};
    const req = {
      params: {id: 10}
    }
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsServices, 'getProductId').resolves([]);
    await productsControllers.getProductId(req, res);
    expect(res.status).to.have.been.calledWith(status.notFound);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' })
  })

})