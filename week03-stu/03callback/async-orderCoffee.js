const orderCoffee = (coffee, time) => {
    setTimeout( () => { // 비동기 구조 표현시 많이 사용
        console.log(`${coffee} 제조완료`);
    }, time);
}

// function orderCoffee(coffee, time) {
//     setTimeout( () => {
//         console.log(`${coffee} 제조완료`);
//     }, time);
// }

orderCoffee('아메리카노', 4000);
orderCoffee('레몬티', 2000);
orderCoffee('아이스커피', 3000);