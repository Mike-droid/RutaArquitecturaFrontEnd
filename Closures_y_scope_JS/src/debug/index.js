var a = "hello"

function hello() {
    let b = 'hello world'
    const c = 'Hello world!'
    if (true) {
        let d = 'hello world!!'
        debugger
    }
}

hello()
//---------------------------------------------------------
const moneyBox = () =>{
    var saveCoins = 0
    const countCoins = (coins) =>{
        saveCoins += coins
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins
}

let myMoneyBox = moneyBox()

myMoneyBox(4)
myMoneyBox(10)