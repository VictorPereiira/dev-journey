let allAges

function checkData() {
    const array = Object.values(arguments)

    array.forEach((value) => {
        let jsonValue = JSON.parse(value)

        if (!(typeof value === "string")) return
        if (jsonValue) {
            console.log(value)
            if (jsonValue.age) allAges += jsonValue.age
        }
    })
}

checkData(15, '{"name": "Jhon"}', "", '{"age": "30"}', '{"age": "45"}')