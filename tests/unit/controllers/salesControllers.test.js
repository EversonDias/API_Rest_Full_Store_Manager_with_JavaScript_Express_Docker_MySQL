const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { salesServices } = require('../../../src/services');
const { salesControllers } = require('../../../src/controllers');
const {
  salesValide,
  mockResultSalesServicers,
  salesSuccess,
  allSales,
  mockGetSaleId,
} = require('../mocks/sales.mock');
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
    sinon.stub(salesServices, 'newSales').resolves(mockResultSalesServicers);
    await salesControllers.newSales(req, res);
    expect(res.status).to.have.been.calledWith(status.created);
    expect(res.json).to.have.been.calledWith(salesSuccess)
  })

  it('liste todas as vendas sales', async () => {
    const res = {};
    const req = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(salesServices, 'getAllSales').resolves(allSales);
    await salesControllers.getAllSales(req, res);
    expect(res.status).to.have.been.calledWith(status.ok);
    expect(res.json).to.have.been.calledWith(allSales);
  })

  // it('liste uma venda especifica pela rota sales/id', async () => {
  //   const res = {};
  //   const req = {
  //     params: { id: 88 },
  //   };
  //   res.status = sinon.stub().returns(res);
  //   res.json = sinon.stub().returns();
  //   sinon.stub(salesServices, 'getSaleId').resolves(mockGetSaleId);
  //   await salesControllers.getSaleId(req, res);
  //   expect(res.status).to.have.been.calledWith(status.ok);
  //   // expect(res.json).to.have.been.calledWith(mockGetSaleId);
  // })
})