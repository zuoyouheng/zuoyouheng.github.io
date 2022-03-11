// initialization

var jsPsych = initJsPsych({
    on_finish: function () {
        jsPsych.data.get().filter({ section: 'trust_game' }).localSave('csv', `exp_${subject_id}.csv`)
        // on_finish: function () {
        //     jsPsych.data.displayData();
    }
})

const subject_id = jsPsych.randomization.randomID(8)
const url = "https://gitee.com/zyyh2020/thesis/raw/master"

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
        `${url}/trust_game/%E4%BF%A1%E4%BB%BB%E5%8D%9A%E5%BC%88%E6%B5%81%E7%A8%8B%E5%9B%BE.jpg`,
        `${url}/trust_game/%E7%AE%80%E6%98%93%E6%B5%81%E7%A8%8B%E5%9B%BE.jpg`,
    ]
}
timeline.push(preload)

// fullscreen

var starting_page = {
    type: jsPsychFullscreen,
    fullscreen_mode: true,
    message: `
    <p style="font: 18pt 微软雅黑; text-align: left; line-height: 150%">
        <strong>
            本次实验将在「全屏页面」中进行，为保证最佳效果，请您<br>
            （1）在电脑中进行，使用主流浏览器打开本页面<br>
            &emsp;&emsp;（Chrome、Edge、Firefox、Safari等，不要用IE）<br>
            （2）关闭其他正在运行的程序，或将其最小化<br>
            （3）将手机调至静音，尽可能减少其他环境噪音干扰<br>
            （4）在实验进行中不要退出全屏<br>
            （5）保持注意力集中，认真完成实验<br>
        </strong>
        如果你已经了解并同意参与此次实验，点击开始：
    </p>
    `,
    button_label: '点击此处全屏开始',
    delay_after: 100
}
timeline.push(starting_page)

//

var greetings = {
    type: jsPsychInstructions,
    pages: [
        `
        <p style="font-size:36px;text-align:center;line-height:200%">
            欢迎参加本次实验<br>
            实验中请勿退出全屏<br>
            按空格键继续<br>
        <p style="font-size:30px;text-align:center;line-height:150%">
            天津师范大学，2022</p>
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
                心理学研究发现,在估计物体的数量时，有一些人的估计值高于实际值，
                我们称其为<strong><font color="red">“高估者”</font></strong>；  
                另一些人则相反，称为<strong><font color="red">“低估者”</font></strong>。
                总人群中高估者和低估者大约各占50%，二者没有优劣之分。接下来我们将通过测试来确定您属于“高估者”或是“低估者”。<br><br>
            </p>
            <p style="font-size:36px;text-align:center;line-height:150%">
                <strong>请点击下方按钮或按空格键继续</strong>
            </p>
        </div>
        `,
        `
        <div style="width:80%;margin:auto;">
            <p style="font-size:36px;text-align:left;line-height:150%">
                接下来您将首先看到一个数字，随后是两张图片。请估计哪一张图片中的圆点数量与先前的数字更接近。
                选择左边的图片请按<strong><font color="red">F键</font></strong>，
                选择右边的图片请按<strong><font color="red">J键</font></strong>。
                请根据您的直觉尽快做出判断。接下来是练习。
                请做好准备，将手指放在<strong><font color="red">F键</font></strong>
                和<strong><font color="red">J键</font></strong>上。
            </p>
            <p style="font-size:36px;text-align:center;line-height:150%">
                <strong>请点击下方按钮或按空格键继续</strong>
            </p>
        </div>
        `
    ],
    show_clickable_nav: true,
    button_label_previous: '返回',
    button_label_next: '继续',
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
        stimulus: '<div style="color:#FF0000;font-size:50px;">超时！请在2秒内做出选择</div>',
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
                练习结束，接下来是正式测试<br><br>
            </p>
            <p style="font-size:36px;text-align:center;line-height:150%">
                <strong>请点击下方按钮或按空格键继续</strong>
            </p>
        </div>
        `
    ],
    show_clickable_nav: true,
    button_label_previous: '返回',
    button_label_next: '继续',
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
    var estimate = "高于"
    var ingroup = "高估者"
    var outgroup = "低估者"
} else {
    var estimate = "低于"
    var ingroup = "低估者"
    var outgroup = "高估者"
}

var instru_mg3 = {
    type: jsPsychInstructions,
    pages: [`
    <div style="width:80%;margin:auto">
        <p style="font-size:36px;line-height:150%;text-align:left">
            您的测试结果显示，在估计物体数量时，您的估计值更倾向于${estimate}实际数量，
            所以您属于<strong>${ingroup}</strong>。
            心理学研究结果表明，<strong>高估者</strong>和<strong>低估者</strong>在人格、道德和智力等方面并没有显著差异。<br><br>
        </p>
        <p style="font-size:36px;text-align:center;line-height:150%">
            <strong>请点击下方按钮或按空格键继续</strong>
        </p>
    </div>
    `],
    show_clickable_nav: true,
    button_label_previous: '返回',
    button_label_next: '继续',
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
                接下来我们会随机分配之前参加过本研究的被试与您一起完成投资游戏。
                投资游戏将进行多次，且每一轮的对手都不同，双方相互都是匿名的。
                您在投资游戏中获得的收益越多，实验报酬中的奖金部分也越多。接下来将为您介绍投资游戏的规则。
            </p>
            <p style="font-size:36px;text-align:center;line-height:150%">
                <strong>请点击下方按钮或按空格键继续</strong>
            </p>
        </div>
        `,
        `
        <div style="width:80%;margin:auto;">
            <p style="text-align:left;line-height:150%;font-size: 30px;">
                投资游戏由2人共同完成。一名玩家扮演投资者，另一名玩家扮演接受者。<br>
                每一轮游戏开始时，投资者和接受者都得到10元的资金。接下来由投资者决定，是否将自己的10元投资给接受者
                <ul style="text-align:left;line-height:150%;font-size: 30px;">
                    <li>如果投资者决定不投资，那么本轮游戏结束，双方的收益都是10元；</li>
                    <li>如果投资者选择投资，那么投资者给出10元，接受者得到30元（投资增值）。随后 接受者需要决定是否将20元回报给投资者：
                        <ul>
                            <li>如果接受者选择回报，本轮游戏结束，双方的收益都是20元；</li>
                            <li>如果接受者选择独吞，本轮游戏结束，投资者收益0元，接受者收益40元。</li>
                        </ul>
                    </li>
                </ul>
            </p>
            <p style="font-size:36px;text-align:center;line-height:150%">
                <strong>请点击下方按钮或按空格键继续</strong>
            </p>
        </div>
        `,
        `
        <div>
            <p style="font-size:28px;text-align:center">
                信任博弈流程图
            </p>
            <img src= "${url}/trust_game/%E4%BF%A1%E4%BB%BB%E5%8D%9A%E5%BC%88%E6%B5%81%E7%A8%8B%E5%9B%BE.jpg">
            <p style="font-size:36px;text-align:center">
                <strong>请点击下方按钮或按空格键继续</strong>
            </p>
        </div>
        `
    ],
    show_clickable_nav: true,
    button_label_previous: '返回',
    button_label_next: '继续',
    key_forward: ' '
}
timeline.push(instru_tg)

// 检验被试是否理解规则

var wrong = true

var questions = [
    { q: '如果您选择投资，对方回报了您的投资，那么您在本轮游戏中的收益是多少？', a: 2 },
    { q: '如果您选择不投资，那么您在本轮游戏中的收益是多少？', a: 1 },
    { q: '如果您选择投资，对方独吞了您的投资，那么您在本轮游戏中的收益是多少？', a: 0 }
]

var question = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function () {
        return `
        <p style="font-size:36px;text-align:left;line-height:150%">
            为了确保您已经理解了游戏规则，请回答以下问题<br><br>
            ${jsPsych.timelineVariable('q')}
        </p>
        `
    },
    choices: ['0元', '10元', '20元'],
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
        stimulus: `回答错误，重新回答`,
        choices: ['继续']
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
        接下来正式开始，游戏共有10轮。
        请注意，每一轮游戏结束时您不会知道本轮游戏中对方的选择。
        选择投资请按F键，选择不投资请按J键。
        游戏结束后将随机抽取其中1轮的收益的一半金额作为实验报酬的奖金。
        </p>
        <p style="font-size:36px;text-align:center;line-height:150%">
            <strong>请点击下方按钮或按空格键继续</strong>
        </p>
    </div>
    `],
    show_clickable_nav: true,
    button_label_previous: '返回',
    button_label_next: '继续',
    key_forward: ' '
}

var trial_i = 1

var over = jsPsych.randomization.sampleWithoutReplacement([true, false], 1)
if (over) {
    var estimate = "高于"
    var ingroup = "高估者"
    var outgroup = "低估者"
} else {
    var estimate = "低于"
    var ingroup = "低估者"
    var outgroup = "高估者"
}

var timeline_tg = [
    { i: '和你一样', g: ingroup, group: 0 },
    { i: '和你不同', g: outgroup, group: 1 }
]

var begin = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
        return `<p style="font-size:36px;line-height:150%"><strong>第${trial_i}轮游戏开始</strong><br>您获得10元</p>`
    },
    choices: 'NO_KEYS',
    trial_duration: 1000
}

var simple = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<img src= "${url}/trust_game/%E7%AE%80%E6%98%93%E6%B5%81%E7%A8%8B%E5%9B%BE.jpg">`,
    choices: "NO_KEYS",
    trial_duration: 2500,
}

var trial_tg = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function () {
        return `
            <div style="margin:auto;">
                <p style="font-size:36px;text-align:left;line-height:150%">
                    对方${jsPsych.timelineVariable('i')}，属于${jsPsych.timelineVariable('g')}。
                </p>
                <div style="float: left;">
                    <p style="font-size: 45px;">投资（F）</p>
                </div>
                <div style="float: right;">
                    <p style="font-size: 45px;">不投资（J）</p>
                </div>
            </div>
        `
    },
    choices: ['不投资', '投资'],
    data: { membership: jsPsych.timelineVariable('group'), section: 'trust_game', trial_id: function () { return trial_i } },
}

var end_tg = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
        var choice = jsPsych.data.get().last(1).values()[0]
        if (choice.response == 0) {
            return '<p style="font-size:40px;text-align:center;">您选择投资，对方已完成选择，本轮游戏结束。</p>'
        } else {
            return '<p style="font-size:40px;text-align:center;">您选择不投资，本轮游戏结束.</p>'
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