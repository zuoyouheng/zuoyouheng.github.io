// initialization

var jsPsych = initJsPsych({
    on_finish: function () {
        jsPsych.data.get().filter({ section: 'trust_game' }).localSave('csv', `exp_${subject_id}.csv`)
        // on_finish: function () {
        //     jsPsych.data.displayData();
    }
})

const subject_id = jsPsych.randomization.randomID(8)
const url = "https://gitee.com/zyyh2020/zuoyouheng.github.io/raw/main/Experiments/materials"

timeline = []

//preload

var preload = {
    type: jsPsychPreload,
    images: [
        `${url}/random_dots_plots/41-1.jpg`,
        `${url}/random_dots_plots/42-1.jpg`,
        `${url}/random_dots_plots/43-1.jpg`,
        `${url}/random_dots_plots/44-1.jpg`,
        `${url}/random_dots_plots/45-1.jpg`,
        `${url}/random_dots_plots/46-1.jpg`,
        `${url}/random_dots_plots/47-1.jpg`,
        `${url}/random_dots_plots/48-1.jpg`,
        `${url}/random_dots_plots/49-1.jpg`,
        `${url}/random_dots_plots/50-1.jpg`,
        `${url}/random_dots_plots/51-1.jpg`,
        `${url}/random_dots_plots/52-1.jpg`,
        `${url}/random_dots_plots/53-1.jpg`,
        `${url}/random_dots_plots/54-1.jpg`,
        `${url}/random_dots_plots/55-1.jpg`,
        `${url}/random_dots_plots/56-1.jpg`,
        `${url}/random_dots_plots/57-1.jpg`,
        `${url}/random_dots_plots/58-1.jpg`,
        `${url}/random_dots_plots/59-1.jpg`,
        `${url}/random_dots_plots/60-1.jpg`,
        `${url}/random_dots_plots/41-2.jpg`,
        `${url}/random_dots_plots/42-2.jpg`,
        `${url}/random_dots_plots/43-2.jpg`,
        `${url}/random_dots_plots/44-2.jpg`,
        `${url}/random_dots_plots/45-2.jpg`,
        `${url}/random_dots_plots/46-2.jpg`,
        `${url}/random_dots_plots/47-2.jpg`,
        `${url}/random_dots_plots/48-2.jpg`,
        `${url}/random_dots_plots/49-2.jpg`,
        `${url}/random_dots_plots/50-2.jpg`,
        `${url}/random_dots_plots/51-2.jpg`,
        `${url}/random_dots_plots/52-2.jpg`,
        `${url}/random_dots_plots/53-2.jpg`,
        `${url}/random_dots_plots/54-2.jpg`,
        `${url}/random_dots_plots/55-2.jpg`,
        `${url}/random_dots_plots/56-2.jpg`,
        `${url}/random_dots_plots/57-2.jpg`,
        `${url}/random_dots_plots/58-2.jpg`,
        `${url}/random_dots_plots/59-2.jpg`,
        `${url}/random_dots_plots/60-2.jpg`,
        `${url}/trust_game/full.jpg`,
        `${url}/trust_game/brief.jpg`,
    ]
}
timeline.push(preload)

// fullscreen

var starting_page = {
    type: jsPsychFullscreen,
    fullscreen_mode: true,
    message: `
    <p style="font: 18pt ????????????; text-align: left; line-height: 150%">
        <strong>
            ??????????????????????????????????????????????????????????????????????????????<br>
            ???1????????????????????????????????????????????????????????????<br>
            &emsp;&emsp;???Chrome???Edge???Firefox???Safari???????????????IE???<br>
            ???2?????????????????????????????????????????????????????????<br>
            ???3??????????????????????????????????????????????????????????????????<br>
            ???4???????????????????????????????????????<br>
            ???5?????????????????????????????????????????????<br>
        </strong>
        ??????????????????????????????????????????????????????????????????
    </p>
    `,
    button_label: '????????????????????????',
    delay_after: 100
}
timeline.push(starting_page)

//

var greetings = {
    type: jsPsychInstructions,
    pages: [
        `
        <p style="font-size:36px;text-align:center;line-height:200%">
            ????????????????????????<br>
            ???????????????????????????<br>
            ??????????????????<br>
        <p style="font-size:30px;text-align:center;line-height:150%">
            ?????????????????????2022</p>
        `
    ],
    show_clickable_nav: false,
    key_forward: ' '
}
timeline.push(greetings)

// minimal group

var over = jsPsych.randomization.sampleWithoutReplacement([true, false], 1)

var instru_mg = {
    type: jsPsychInstructions,
    pages: [
        `
        <div style="width:80%;margin:auto;">
            <p style="font-size:36px;text-align:left;line-height:150%">
                ?????????????????????,????????????????????????????????????????????????????????????????????????
                ???????????????<strong><font color="red">???????????????</font></strong>???  
                ??????????????????????????????<strong><font color="red">???????????????</font></strong>???
                ?????????????????????????????????????????????50%?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br><br>
            </p>
            <p style="font-size:36px;text-align:center;line-height:150%">
                <strong>??????????????????????????????????????????</strong>
            </p>
        </div>
        `,
        `
        <div style="width:80%;margin:auto;">
            <p style="font-size:36px;text-align:left;line-height:150%">
                ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                ???????????????????????????<strong><font color="red">F???</font></strong>???
                ???????????????????????????<strong><font color="red">J???</font></strong>???
                ???????????????????????????????????????????????????????????????
                ?????????????????????????????????<strong><font color="red">F???</font></strong>
                ???<strong><font color="red">J???</font></strong>??????
            </p>
            <p style="font-size:36px;text-align:center;line-height:150%">
                <strong>??????????????????????????????????????????</strong>
            </p>
        </div>
        `
    ],
    show_clickable_nav: true,
    button_label_previous: '??????',
    button_label_next: '??????',
    key_forward: ' '
}
timeline.push(instru_mg)

var timeline_mg = jsPsych.randomization.sampleWithoutReplacement([
    { n: "45", pl: `${url}/random_dots_plots/45-1.jpg`, pr: `${url}/random_dots_plots/45-2.jpg` },
    { n: "46", pl: `${url}/random_dots_plots/46-1.jpg`, pr: `${url}/random_dots_plots/46-2.jpg` },
    { n: `47`, pl: `${url}/random_dots_plots/47-1.jpg`, pr: `${url}/random_dots_plots/47-2.jpg` },
    { n: `49`, pl: `${url}/random_dots_plots/49-1.jpg`, pr: `${url}/random_dots_plots/49-2.jpg` },
    { n: `50`, pl: `${url}/random_dots_plots/50-1.jpg`, pr: `${url}/random_dots_plots/50-2.jpg` },
    { n: `51`, pl: `${url}/random_dots_plots/51-1.jpg`, pr: `${url}/random_dots_plots/51-2.jpg` },
    { n: `52`, pl: `${url}/random_dots_plots/52-1.jpg`, pr: `${url}/random_dots_plots/52-2.jpg` },
    { n: `54`, pl: `${url}/random_dots_plots/54-1.jpg`, pr: `${url}/random_dots_plots/54-2.jpg` },
    { n: `55`, pl: `${url}/random_dots_plots/55-1.jpg`, pr: `${url}/random_dots_plots/55-2.jpg` },
    { n: `56`, pl: `${url}/random_dots_plots/56-1.jpg`, pr: `${url}/random_dots_plots/56-2.jpg` },
    { n: `57`, pl: `${url}/random_dots_plots/57-1.jpg`, pr: `${url}/random_dots_plots/57-2.jpg` },
    { n: `58`, pl: `${url}/random_dots_plots/58-1.jpg`, pr: `${url}/random_dots_plots/58-2.jpg` },
    { n: `59`, pl: `${url}/random_dots_plots/59-1.jpg`, pr: `${url}/random_dots_plots/59-2.jpg` },
    { n: `60`, pl: `${url}/random_dots_plots/60-1.jpg`, pr: `${url}/random_dots_plots/60-2.jpg` }
], 8)
var mg_prac = timeline_mg.slice(0, 3)
var mg_test = timeline_mg.slice(3,)

var number = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
        return `<div style="font-size:60px;"><strong>${jsPsych.timelineVariable('n')}</strong></div>`
    },
    choices: 'NO_KEYS',
    trial_duration: 800
}

var trial_mg = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
        return `
        <div style='width:1000px;'>
            <div style='float: left;'><img src=${jsPsych.timelineVariable('pl')}></img>
            <p class='small' style="font-size:45px;" ><strong>F</strong></p></div>
            <div style='float: right;'><img src=${jsPsych.timelineVariable('pr')}></img>
            <p class='small' style="font-size:45px;"><strong>J</strong></p></div>
        </div>
        `
    },
    choices: ['f', 'j'],
    trial_duration: 2000
}

var timeout = {
    timeline: [{
        type: jsPsychHtmlKeyboardResponse,
        stimulus: '<div style="color:#FF0000;font-size:50px;">???????????????2??????????????????</div>',
        choices: 'NO_KEYS',
        trial_duration: 500
    }],
    conditional_function: function () {
        var data = jsPsych.data.get().last(1).values()[0]
        if (data.response == null) {
            return true
        } else {
            return false
        }
    }
}

var practice = {
    timeline: [
        number,
        trial_mg,
        timeout
    ],
    timeline_variables: mg_prac
}
timeline.push(practice)

var instru_mg2 = {
    type: jsPsychInstructions,
    pages: [
        `
        <div>
            <p style="font-size:36px;text-align:center;line-height:150%">
                ???????????????????????????????????????<br><br>
            </p>
            <p style="font-size:36px;text-align:center;line-height:150%">
                <strong>??????????????????????????????????????????</strong>
            </p>
        </div>
        `
    ],
    show_clickable_nav: true,
    button_label_previous: '??????',
    button_label_next: '??????',
    key_forward: ' '
}
timeline.push(instru_mg2)

var test = {
    timeline: [
        number,
        trial_mg,
        timeout
    ],
    timeline_variables: mg_test
}
timeline.push(test)

if (over[0]) {
    var estimate = "??????"
    var ingroup = "?????????"
    var outgroup = "?????????"
} else {
    var estimate = "??????"
    var ingroup = "?????????"
    var outgroup = "?????????"
}

var instru_mg3 = {
    type: jsPsychInstructions,
    pages: [`
    <div style="width:80%;margin:auto">
        <p style="font-size:36px;line-height:150%;text-align:left">
            ?????????????????????????????????????????????????????????????????????????????????${estimate}???????????????
            ???????????????<strong>${ingroup}</strong>???
            ??????????????????????????????<strong>?????????</strong>???<strong>?????????</strong>????????????????????????????????????????????????????????????<br><br>
        </p>
        <p style="font-size:36px;text-align:center;line-height:150%">
            <strong>??????????????????????????????????????????</strong>
        </p>
    </div>
    `],
    show_clickable_nav: true,
    button_label_previous: '??????',
    button_label_next: '??????',
    key_forward: ' '
}
timeline.push(instru_mg3)

// trust game

var instru_tg = {
    type: jsPsychInstructions,
    pages: [
        `
        <div style="width:80%;margin:auto;">
            <p style="font-size:36px;text-align:left;line-height:150%">
                ????????????????????????????????????????????????????????????????????????????????????????????????
                ?????????????????????????????????????????????????????????????????????????????????????????????
                ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
            </p>
            <p style="font-size:36px;text-align:center;line-height:150%">
                <strong>??????????????????????????????????????????</strong>
            </p>
        </div>
        `,
        `
        <div style="width:80%;margin:auto;">
            <p style="text-align:left;line-height:150%;font-size: 30px;">
                ???????????????2?????????????????????????????????????????????????????????????????????????????????<br>
                ?????????????????????????????????????????????????????????10???????????????????????????????????????????????????????????????10?????????????????????
                <ul style="text-align:left;line-height:150%;font-size: 30px;">
                    <li>?????????????????????????????????????????????????????????????????????????????????10??????</li>
                    <li>???????????????????????????????????????????????????10?????????????????????30?????????????????????????????? ??????????????????????????????20????????????????????????
                        <ul>
                            <li>????????????????????????????????????????????????????????????????????????20??????</li>
                            <li>??????????????????????????????????????????????????????????????????0?????????????????????40??????</li>
                        </ul>
                    </li>
                </ul>
            </p>
            <p style="font-size:36px;text-align:center;line-height:150%">
                <strong>??????????????????????????????????????????</strong>
            </p>
        </div>
        `,
        `
        <div>
            <p style="font-size:28px;text-align:center">
                ?????????????????????
            </p>
            <img src= "${url}/trust_game/full.jpg">
            <p style="font-size:36px;text-align:center">
                <strong>??????????????????????????????????????????</strong>
            </p>
        </div>
        `
    ],
    show_clickable_nav: true,
    button_label_previous: '??????',
    button_label_next: '??????',
    key_forward: ' '
}
timeline.push(instru_tg)

// ??????????????????????????????

var wrong = true

var questions = [
    { q: '??????????????????????????????????????????????????????????????????????????????????????????????????????', a: 2 },
    { q: '???????????????????????????????????????????????????????????????????????????', a: 1 },
    { q: '??????????????????????????????????????????????????????????????????????????????????????????????????????', a: 0 }
]

var question = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function () {
        return `
        <p style="font-size:36px;text-align:left;line-height:150%">
            ??????????????????????????????????????????????????????????????????<br><br>
            ${jsPsych.timelineVariable('q')}
        </p>
        `
    },
    choices: ['0???', '10???', '20???'],
    on_start: function () {
        wrong = true
    },
    on_finish: function () {
        var answer = jsPsych.data.get().last().values()[0]
        if (answer.response == jsPsych.timelineVariable('a')) {
            wrong = false
        }
    }
}

var check = {
    timeline: [{
        type: jsPsychHtmlButtonResponse,
        stimulus: `???????????????????????????`,
        choices: ['??????']
    }],
    conditional_function: function () {
        return wrong
    }
}

var test = {
    timeline: [question, check],
    loop_function: function () {
        return wrong
    }
}

var tests = {
    timeline: [test],
    timeline_variables: questions
}
timeline.push(tests)

var instru_tg2 = {
    type: jsPsychInstructions,
    pages: [`
    <div style="width:80%">
        <p style="font-size:30px;text-align:left">
        ????????????????????????????????????10??????
        ????????????????????????????????????????????????????????????????????????????????????
        ??????????????????F???????????????????????????J??????
        ????????????????????????????????????1?????????????????????????????????????????????????????????
        </p>
        <p style="font-size:36px;text-align:center;line-height:150%">
            <strong>??????????????????????????????????????????</strong>
        </p>
    </div>
    `],
    show_clickable_nav: true,
    button_label_previous: '??????',
    button_label_next: '??????',
    key_forward: ' '
}

var trial_i = 1

var over = jsPsych.randomization.sampleWithoutReplacement([true, false], 1)
if (over) {
    var estimate = "??????"
    var ingroup = "?????????"
    var outgroup = "?????????"
} else {
    var estimate = "??????"
    var ingroup = "?????????"
    var outgroup = "?????????"
}

var timeline_tg = [
    { i: '????????????', g: ingroup, group: 0 },
    { i: '????????????', g: outgroup, group: 1 }
]

var begin = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
        return `<p style="font-size:36px;line-height:150%"><strong>???${trial_i}???????????????</strong><br>?????????10???</p>`
    },
    choices: 'NO_KEYS',
    trial_duration: 1000
}

var simple = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<img src= "${url}/trust_game/brief.jpg">`,
    choices: "NO_KEYS",
    trial_duration: 2500,
}

var trial_tg = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function () {
        return `
            <div style="margin:auto;">
                <p style="font-size:36px;text-align:left;line-height:150%">
                    ??????${jsPsych.timelineVariable('i')}?????????${jsPsych.timelineVariable('g')}???
                </p>
                <div style="float: left;">
                    <p style="font-size: 45px;">?????????F???</p>
                </div>
                <div style="float: right;">
                    <p style="font-size: 45px;">????????????J???</p>
                </div>
            </div>
        `
    },
    choices: ['?????????', '??????'],
    data: { membership: jsPsych.timelineVariable('group'), section: 'trust_game', trial_id: function () { return trial_i } },
}

var end_tg = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
        var choice = jsPsych.data.get().last(1).values()[0]
        if (choice.response == 0) {
            return '<p style="font-size:40px;text-align:center;">???????????????????????????????????????????????????????????????</p>'
        } else {
            return '<p style="font-size:40px;text-align:center;">???????????????????????????????????????.</p>'
        }
    },
    choice: 'NO_KEYS',
    trial_duration: 1500,
    on_finish: function () {
        trial_i = trial_i + 1
    }
}

var trust_game = {
    timeline: [
        begin,
        simple,
        trial_tg,
        end_tg
    ],
    timeline_variables: timeline_tg,
    randomize_order: true,
    repetitions: 5
}
timeline.push(trust_game)

jsPsych.run(timeline)