//Function Scope

function greeting() {
    let userName = 'ana';
    console.log(userName);

    if (userName === 'ana') {
        console.log(`hello ${userName}!`);
    }
}

greeting();
console.log(userName);

