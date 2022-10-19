 function moneyBox(coins) {
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`moneyBox : $${saveCoins}`);
}

moneyBox(5);
moneyBox(5); 

function moneyPocket() {
    let saveCoins = 0;
    function countCoins(lucas) {
        saveCoins += lucas;
        console.log(`moneyPocket : ${saveCoins}`);
    }

    return countCoins;
}

const pocket = moneyPocket();
pocket(5);
pocket(5);
pocket(15);

const pocketAna = moneyPocket();
pocket(10);
pocket(20);
pocket(30);


