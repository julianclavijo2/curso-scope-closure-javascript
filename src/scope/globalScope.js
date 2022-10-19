var a; //declarando
var b = 'b'; // declaramos / asignamos
b = 'bb'; // reasignacion
var a = 'aa'; // redeclaracion

// Global Scope
var fruit = "apple";
function besFruit() {
    console.log(fruit);
}
besFruit();

// si no declaramos la variable , está se declara automaticamente como variable global
function countries() {
    country = 'Colombia';
    console.log(country);
}

countries();
console.log(country);
