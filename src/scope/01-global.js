//Declarar una variable
var a;

//Declarar y asignar
var b = 'b';

//Reasignación
b ='bb';

//Global Scope = se puede acceder desde cualquier lado
var fruit='Apple';

function bestfruit(){
    console.log(fruit);
}

bestfruit();

function countries(){
    country = 'Colombia'; //Esta declaración hace que sea global scope
    console.log(country);
}

countries();
console.log(country);





