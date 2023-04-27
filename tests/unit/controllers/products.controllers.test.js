const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { productsServices } = require('../../../src/services');
const { productsControllers } = require('../../../src/controllers');
const { mockAllProducts, mockProductId, newProduct } = require('../mocks/products.mock');
const { status } = require('../../../src/utils');
const { expect } = chai;
chai.use(sinonChai);

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

  it('retorne status 201 e salve um novo produto', async () => {
    const res = {};
    const req = {
      body: newProduct,
    };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsServices, 'saveProducts').resolves(20);
    await productsControllers.saveProducts(req, res);
    expect(res.status).to.have.been.calledWith(status.created)
    expect(res.json).to.have.been.calledWith({ id: 20, name: newProduct.name });
  })
})