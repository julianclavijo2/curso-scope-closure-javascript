// Blosck Scope
//NOTA: un bloque o  block esta definido por { }
function fruits() {
    if (true) {
        var fruit1 = 'apple'; // function scope
        let fruit2 = 'kiwi'; // block scope
        const fruit3 = 'banana'; // block scope
        console.log(fruit2);
        console.log(fruit3);
    }

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();