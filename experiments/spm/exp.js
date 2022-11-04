var timeline = []
var jsPsych = initJsPsych({
    on_finish: function () {
        document.getElementById("jspsych-content").innerHTML = result_html
    },
}
)

const instru_html = `
    <h1>
        简版瑞文推理测验SPM 10题
    </h1>
    <div class="instru">
        <p>
            瑞文标准推理测验(SPM)是一种非文字类型的智力测验，又称为无国界的智力智商测试。
        </p>

        <p>
            每道题目的题干都是一张缺少了一部分的图片，选项则是一组与缺失部分大小相同的小图片。您需要题目图片内部图案的变化规律选择最适合填入缺失处的选项。
        </p>

        <p class="img">
            <strong>题目示例</strong><br>
            <img src="spm/wx1.jpg" alt="loading failed" class="demo">
        </p>

        <p>
            瑞文推理测验的原始分数并无意义，而是将其转化为标准分数与常模进行比较，后可得出受测者的智力在总人群的相对位置。
        </p>

        <p>
            本次测验采用简化版的瑞文推理测验，共10个题目，您回答每个问题的时间为20秒。
        </p>
    </div>
`

const result_html = `
    <h1>
        <span class="result">非常遗憾。</span>经计算，你的分数<span class="result">高于25%的人。</span>
    </h1>
`

const btn_timer = `<button onclick="clearInterval(tid)" class="jspsych-btn" disabled=true id="timer-btn">%choice%</button>`

var preload = {
    type: jsPsychPreload,
    images: [
        "spm/quiz1.jpg",
        "spm/quiz2.jpg",
        "spm/quiz3.jpg",
        "spm/quiz4.jpg",
        "spm/quiz5.jpg",
        "spm/quiz6.jpg",
        "spm/quiz7.jpg",
        "spm/quiz8.jpg",
        "spm/quiz9.jpg",
        "spm/quiz10.jpg",
        "spm/wx1.jpg",
    ]
}
timeline.push(preload)

var intro = {
    type: jsPsychHtmlButtonResponse,
    stimulus: instru_html,
    choices: ['开始测验']
}
timeline.push(intro)

for (i = 1; i < 13; i++) {
    timeline.push({
        type: jsPsychHtmlButtonResponse,
        stimulus: make_quiz(i),
        choices: ['确定'],
        trial_duration: 21 * 1000,
        button_html: btn_timer
    })
}

var processing = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<p>计算中</p>`,
    choices: 'NO_KEYS',
    trial_duration: 600,
}
timeline.push(processing)

jsPsych.run(timeline)

function make_quiz(i) {
    let quiz = `
    <div>
        <img src="spm/quiz${i}.jpg" onload="tid=setInterval(timer, 1000)" class="quiz">
        <p class="timer" id="timer">20</p>
    </div>
    <div>
        <p class="quiz">请选择最适合填入空缺处的图片</p>
    </div>
    `
    let six = `
        <div class="options">
            <span><input type="radio" name="option" id="option-1" onclick="check()"><label for="option-1">1</label></span>
            <span><input type="radio" name="option" id="option-2" onclick="check()"><label for="option-2">2</label></span>
            <span><input type="radio" name="option" id="option-3" onclick="check()"><label for="option-3">3</label></span>
        </div>
        <div class="options">
            <span><input type="radio" name="option" id="option-4" onclick="check()"><label for="option-4">4</label></span>
            <span><input type="radio" name="option" id="option-5" onclick="check()"><label for="option-5">5</label></span>
            <span><input type="radio" name="option" id="option-6" onclick="check()"><label for="option-6">6</label></span>
        </div>
        <br>
    `

    let eight = `
    <div class="options">
        <span><input type="radio" name="option" id="option-1" onclick="check()"><label for="option-1">1</label></span>
        <span><input type="radio" name="option" id="option-2" onclick="check()"><label for="option-2">2</label></span>
        <span><input type="radio" name="option" id="option-3" onclick="check()"><label for="option-3">3</label></span>
        <span><input type="radio" name="option" id="option-4" onclick="check()"><label for="option-4">4</label></span>
    </div>
    <div class="options">
        <span><input type="radio" name="option" id="option-5" onclick="check()"><label for="option-5">5</label></span>
        <span><input type="radio" name="option" id="option-6" onclick="check()"><label for="option-6">6</label></span>
        <span><input type="radio" name="option" id="option-7" onclick="check()"><label for="option-6">7</label></span>
        <span><input type="radio" name="option" id="option-8" onclick="check()"><label for="option-6">8</label></span>
    </div>
    <br>
    `
    if (i < 3) {
        return quiz + six
    }

    return quiz+eight
}
