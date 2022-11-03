// heplers to create survey
function make_survey(
    survey_pages = [], survey_name = '', next = '继续', back = '上一页', finish = '提交',
) {
    return {
        type: jsPsychSurvey,
        pages: survey_pages,
        button_label_back: back,
        button_label_next: next,
        button_label_finish: finish,
        required_error_text: '此问题为必填项',
        data: { name: survey_name },
    }
}

function make_instru(instru = '') {
    return {
        type: 'html',
        prompt: instru,
        name: 'instru'
    }
}

// helpers for timing button
function timer() {
    var second = document.getElementById('timer')
    var button = document.getElementsByClassName('jspsych-btn')[0]
    if (second != null) {
        second.innerHTML = decrease(second.innerHTML)
        if (second.innerHTML == "5:00") {
            second.style.color = "green"
            button.disabled = false
        } else if (second.innerHTML == "0:00") {
            submit(tid)
        }
    }
}

function decrease(time = "0:00") {
    let m = parseInt(time.slice(0, time.length - 3))
    let s = parseInt(time.slice(2))
    if (s > 0) {
        if (s <= 10) {
            return `${m}:0${s - 1}`
        } else {
            return `${m}:${s - 1}`
        }
    } else {
        return `${m - 1}:59`
    }
}

function submit(tid) {
    clearInterval(tid)
    let q1 = document.getElementById("q1").value
    let q2 = document.getElementById("q2").value
    jsPsych.data.get().push({ name: "priming", ms: condition, q1: q1, q2: q2 })
}


function img(i=0) {
    return `<img src="quiz${i}.jpg">`
}

function timer() {
    var second = document.getElementById(`timer`)
    second.innerHTML--
    if (second.innerHTML == 5) {
        second.style.color = "red"
    }
    if (second.innerHTML == 0) {
        clearInterval(tid)
    } 
}

function check() {
    document.getElementById("timer-btn").disabled = false
}
