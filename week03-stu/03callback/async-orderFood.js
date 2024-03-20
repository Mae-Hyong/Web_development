orderFood = (callback) => {
    setTimeout(() => {
        const food = "갈비탕"
        callback(food)
    }, 3000);
}

cooldownFood = (food,callback) => {
    setTimeout(() => {
      const cooldownedFood = `식은 ${food}`
      callback(cooldownedFood)
    }, 2000);
}

freezeFood = (food, callback) => {
    setTimeout(() => {
       const freezedFood = `냉동 ${food}`
       callback(freezedFood)
    }, 5000);
}

orderFood((food) => {
    console.log(food)
    cooldownFood(food, (cooldownedFood) => {
        console.log(cooldownedFood)
            freezeFood(food, (freezedFood) => {
                console.log(freezedFood)
            })
    })
})