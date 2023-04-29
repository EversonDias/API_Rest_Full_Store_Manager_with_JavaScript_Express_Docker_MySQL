const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { salesServices } = require('../../../src/services');
const { salesControllers } = require('../../../src/controllers');
const { salesValide, salesSuccess } = require('../mocks/sales.mock');
const { HTTP: { status } } = require('../../../src/utils');
const { expect } = chai;
chai.use(sinonChai);

describe('testes de unidades do Controllers da rota sales', () => {
  afterEach(() => {
    sinon.restore();
  })

  it('Cadastre uma venda com sucesso', async () => {
    const res = {};
    const req = {
      body: salesValide,
    }
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(salesServices, 'newSales').resolves(salesSuccess);
    await salesControllers.newSales(req, res);
    expect(res.status).to.have.been.calledWith(status.created);
    expect(res.json).to.have.been.calledWith(salesSuccess)
  })
});