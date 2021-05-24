const n1 = document.querySelector(".nbr1")
const n2 = document.querySelector(".nbr2")
const n3 = document.querySelector(".nbr3")
const n4 = document.querySelector(".nbr4")

const send = document.querySelector(".send")
const res = document.querySelector(".res")

function sum() {
    let na = Number(n1.value)
    let nb = Number(n2.value)
    let nc = Number(n3.value)
    let nd = Number(n4.value)

    const resSum = (na + nb) + (nc + nd)
    res.textContent = resSum
}

send.addEventListener('click', sum)
