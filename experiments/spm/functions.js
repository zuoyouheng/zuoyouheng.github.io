function img(i=0) {
    return `<img src="quiz${i}.jpg">`
}

function timer() {
    var second = document.getElementById(`timer`)
    if (second.innerHTML == 0) {
        clearInterval(tid)
        return
    }
    if (second.innerHTML == 5) {
        second.style.color = "red"
    }
    second.innerHTML--
}
    



function check() {
    document.getElementById("timer-btn").disabled = false
}
