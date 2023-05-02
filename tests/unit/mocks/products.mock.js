const mockAllProducts = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  },
  {
    "id": 2,
    "name": "Traje de encolhimento"
  },
  {
    "id": 3,
    "name": "Escudo do Capitão América"
  }
]

const mockProductId = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  }
]

const newProduct = {
  name: 'suco de uva',
}

const mockUpdateSuccess = [
  {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 0,
    info: 'Rows matched: 1  Changed: 1  Warnings: 0',
    serverStatus: 2,
    warningStatus: 0,
    changedRows: 1
  },
  undefined
]

const mockResponseUpdate = {
  id: 1,
  name: 'suco de uva',
}


module.exports = {
  mockAllProducts,
  mockProductId,
  newProduct,
  mockUpdateSuccess,
  mockResponseUpdate,
}