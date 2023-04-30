const salesValide = [
  {
    "productId": 1,
    "quantity": 1
  },
  {
    "productId": 2,
    "quantity": 5
  }
]

const salesSuccess = {
  id: 55,
  itemsSold: [
    {
      "productId": 1,
      "quantity": 1
    },
    {
      "productId": 2,
      "quantity": 5
    }
  ]
}

const mockResultSalesServicers = {
  type: 201,
  message: {
    id: 55,
    itemsSold: [
      {
        "productId": 1,
        "quantity": 1
      },
      {
        "productId": 2,
        "quantity": 5
      }
    ]
  }
}

const allSales = [
  {
    "saleId": 1,
    "date": "2021-09-09T04:54:29.000Z",
    "productId": 30,
    "quantity": 50
  },
  {
    "saleId": 3,
    "date": "2021-09-09T04:54:54.000Z",
    "productId": 1,
    "quantity": 200
  },
  {
    "saleId": 4,
    "date": "2021-09-09T04:54:54.000Z",
    "productId": 55,
    "quantity": 100
  }
]

const mockGetSaleId = [
  {
    "saleId": 88,
    "date": "2021-09-09T04:54:29.000Z",
    "productId": 10,
    "quantity": 55
  },
]

const idInvalid = 0;

module.exports = {
  salesValide,
  salesSuccess,
  allSales,
  mockGetSaleId,
  idInvalid,
  mockResultSalesServicers,
}