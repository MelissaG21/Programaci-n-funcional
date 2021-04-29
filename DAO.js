//<>
let fs = require('fs');
const data = {

};

class DAO{
    constructor(fileName){
        this.fileName = fileName;
        let contents = fs.readFileSync(fileName, 'utf8');
        this.data = JSON.parse(contents);
    }

    //El método filter() crea un nuevo array con todos los elementos 
    //que cumplan la condición implementada por la función dada.
    findUpper(num){
        let arrayP = this.data.filter(producto => producto.cantidad > num);
        return arrayP.length;
    }

    findLower(num){
        let arrayP = this.data.filter(producto => producto.cantidad < num);
        return arrayP.length;
    }

    findEqualClassificationAndUpperCost(classification, cost){
        return this.data.filter(producto => producto.clasificacion == classification && producto.precio > cost);
    }

    findBetween(min, max){
        return this.data.filter(producto => producto.precio < max  && producto.precio > min);
    }

    OrderByClassification(classification){
        let arrayP= this.data.filter(producto => producto.clasificacion == classification);
        return arrayP.length;
    }
}

module.exports = DAO;