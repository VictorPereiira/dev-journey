const note1 = document.querySelector(".note1")
const note2 = document.querySelector(".note2")
const note3 = document.querySelector(".note3")

const submit = document.querySelector(".submit")
const view = document.querySelector(".view")

function average() {
    let notea = Number(note1.value)
    let noteb = Number(note2.value)
    let notec = Number(note3.value)

    var resAverage = (notea + noteb + notec) / 3
    view.textContent = resAverage
}

submit.addEventListener('click', average)
