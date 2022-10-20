// helpers to save data
function data_save() {
    let csv = ''
    let data_all = jsPsych.data.get().filter(
        [{ name: 'info' }, { name: 'survey1' }, { name: 'survey2' },
        { name: 'trust_game' }, { name: 'survey3' }, { name: 'priming' },]
    ).values()

    let json = JSON.stringify(data_all)

    let data_info = data_all[0]
    let ID = data_info.subjectID
    let subject_name = data_info.subject_name
    csv += ID + ',' + subject_name + ',' + data_info.ms + ','

    let data_survey1 = data_all[1].response
    for (key in data_survey1) {
        if (key != 'instru') {
            csv += data_survey1[key] + ','
        }
    }

    let data_survey2 = data_all[3].response
    for (key in data_survey2) {
        if (key == 'panas') {
            var panas = data_survey2[key]
            for (item in panas) {
                csv += `${panas[item] + 1}` + ','
            }
        } else if (key != 'instru') {
            csv += data_survey2[key] + ','
        }
    }

    let data_tg = data_all.slice(4, 14)
    let group_tag = ''
    let values = ''
    for (let i = 0; i < data_tg.length; i++) {
        trial = data_tg[i]
        group_tag += trial.group + ','
        values += trial.response.trust + ','
    }
    csv += group_tag + values

    let data_survey3 = data_all[14].response
    for (key in data_survey3) {
        if (key != 'instru') {
            csv += data_survey3[key] + ','
        }
    }

    document.getElementById('jspsych-content').innerHTML = `<p>本次实验完成，再次感谢您的参与</p>`
    saveTextToFile(csv, `${data_info.subjectID}_${subject_name}.csv`)
    saveTextToFile(json, `${ID}_${subject_name}.json`)
}

function saveTextToFile(textstr, filename) {
    const blobToSave = new Blob([textstr], {
        type: "text/plain",
    });
    let blobURL = "";
    if (typeof window.webkitURL !== "undefined") {
        blobURL = window.webkitURL.createObjectURL(blobToSave);
    }
    else {
        blobURL = window.URL.createObjectURL(blobToSave);
    }
    const link = document.createElement("a");
    link.id = "jspsych-download-as-text-link";
    link.style.display = "none";
    link.download = filename;
    link.href = blobURL;
    link.click();
}

// helpers to record subject info

function save_info() {
    let ID = document.getElementById("ID").value
    let subject_name = document.getElementById("name").value
    jsPsych.data.get().push({ name: 'info', subjectID: ID, subject_name: subject_name, ms: ID % 2 })
    condition = (ID % 2) == 1
    document.getElementById("feedback").innerHTML = `id=${ID}&nbspname=${subject_name}`
    document.getElementById("feedback").style.visibility = 'visible'
}

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

function make_likert(page = [], scale_name = '', items = [], min = 1, max = 7, labels = ['非常不赞同', '非常赞同']) {
    for (let i = 0; i < items.length; i++) {
        page.push({
            type: 'likert',
            prompt: items[i],
            likert_scale_max: max,
            likert_scale_min: min,
            likert_scale_max_label: labels[0],
            likert_scale_min_label: labels[1],
            required: true,
            name: function () {
                if (items.length > 1) {
                    return scale_name + (i+1)
                } else {
                    return scale_name
                }
            }
        })
    }
}

function make_instru(instru = '') {
    return {
        type: 'html',
        prompt: instru,
        name: 'instru'
    }
}

function ms_control(questions = [], time = "10:00") {
    let html = `
    <br>
    <p class="survey-intro">
        请您回答以下两个问题。这两个问题没有正确答案，回答也没有对错好坏之分，请按照真实的想法作答。您有10分钟的时间来回答这些问题。我们希望得到您深入思考之后的结果，所以答题的最短时间被设为5分钟。
    </p>
    <br>
    <p>${questions[0]}</p>
    <br>
    <textarea id="q1" class="ms" cols="60" rows="10"></textarea>
    <p>${questions[1]}</p>
    <br>
    <textarea id="q2" class="ms" cols="60" rows="10"></textarea>
    <br>
    <div><span id="timer">${time}</span></div>
`
    return html
}

// helpers for consent

function consent_check(checkbox) {
    let button = document.getElementById("btn-consent")
    button.disabled = !checkbox.checked
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

// helpers for trust game tutorial

function tg_check(index = 0) {
    let answers = [18, 28, 9]
    let question = document.getElementsByClassName("rule")
    let hook = document.getElementsByClassName("right")
    if (question[index].value == answers[index]) {
        hook[index].style.visibility = "visible"
    } else {
        hook[index].style.visibility = "hidden"
    }

    let checks = [
        hook[0].style.visibility == "visible",
        hook[1].style.visibility == "visible",
        hook[2].style.visibility == "visible",
    ]

    let button = document.getElementById("btn-tutorial")
    button.disabled = !(checks[0] && checks[1] && checks[2])
}

function display_tutorial() {
    let tutorial = document.getElementById("tutorial")
    tutorial.style.display = "inline"
}