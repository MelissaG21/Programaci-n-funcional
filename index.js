const DAO = require('./DAO.js');

let DAOInstance = new DAO('data.json');

console.log("Número de productos con existencia mayor a 20.");
console.log(DAOInstance.findUpper(20));
console.log("Número de productos con existencia menos a 15.");
console.log(DAOInstance.findLower(15));
console.log("Lista de productos con la misma clasificación y precio mayor 15.50");
console.log(DAOInstance.findEqualClassificationAndUpperCost('Dulces',15.5));
console.log("Lista de productos con precio mayor a 20.30 y menor a 45.00");
console.log(DAOInstance.findBetween(20.30, 45));
console.log("Número de productos agrupados por su clasificacion");
console.log(DAOInstance.OrderByClassification('Dulces'));