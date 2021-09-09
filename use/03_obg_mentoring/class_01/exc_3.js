let myArray = [
    30, 5, 5, 18, 43, 16, 21,
    16, 24, 4, 38, 3, 18, 19,
    18, 42, 6, 35, 38, 43
],
    evenToOdd = myArray.slice(),
    lessToMajor = myArray.slice()

evenToOdd = evenToOdd.sort(x => x % 2 ? 1 : -1)
lessToMajor = myArray.sort((x, y) => {
    return x === y ? 0 : (x < y ? -1 : 1)
})

console.log(evenToOdd, lessToMajor)

