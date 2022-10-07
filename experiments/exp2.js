var timeline = []
var jsPsych = initJsPsych({})

// greeting

var greeting = {
    type: jsPsychFullscreen,
    fullscreen_mode: true,
    message: `
    <div style="text-align:left">
        <p>感谢您参与本次实验，请在实验过程中保持清醒和注意集中。<br>
        本次实验的报酬有固定部分和奖励部分。其中奖励部分的金额将由您在之后完成的一个游戏的结果决定。<br>
        如果您准备好了，请点击下方按钮开始。</p>
    </div>
    `,
    button_label: '开始'
}

// 人口学信息和IGTS
page_demography = [
    {
        type: 'html',
        prompt: '请根据您的情况回答以下问题'
    },
    // 性别
    {
        type: 'multi-choice',
        prompt: '您的性别',
        options: ['男', '女'],
        required: true,
        columns: 2,

    },
    // 年龄
    {
        type: 'text',
        prompt: '您的年龄',
        placeholder: '18——99',
        required: true,

    },
    // 专业
    {
        type: 'text',
        prompt: '您的大学主修专业',
        required: true,
    },
    // 群体
    {
        type: 'multi-choice',
        prompt: '您属于中国大学生还是外国留学生',
        options: ['中国大学生', '外国留学生'],
        required: true,
        columns: 2,
    }
]

var igts_items = [
    "1. 大多数人基本上是诚实的。",
    "2. 大多数人都具有善良的本性和好心。",
    "3. 大多数人都信任别人。",
    "4. 总的来说我信任别人。",
    "5. 大多数人都值得信任。",
    "6. 尽管有时候我会因为信任他人而受到伤害，我仍然愿意信任他人。",
    "7. 如果与人合作只给我一个人带来损失，即使这种可能性很小，那么我也不愿意与人合作。",
    "8. 我特别讨厌因为依靠别人而受损。",
    "9. 有时我可能会被别人利用，但是我并不介意。",
]

var page_IGTS = [{
    type: 'html',
    prompt: `
    <div style="text-align:left">
        <p>
            下列条目描述的是人际交往过程中，您对自己和他人的一些看法。<br>
            您在多大程度上赞同这些描述？请选择恰当的数字（从数字1到数字7，赞同程度依次提高）。
        </p>
    </div>
    `,
}]
for (var i = 0; i < igts_items.length; i++) {
    page_IGTS.push({
        type: 'likert',
        prompt: igts_items[i],
        likert_scale_max: 7,
        likert_scale_min_label: '非常不赞同',
        likert_scale_max_label: '非常赞同',
        required: true,
        name: `IGTS ${i}`,
    })
}

var survey_1 = {
    type: jsPsychSurvey,
    pages: [page_demography, page_IGTS,],
    button_label_back: '上一页',
    button_label_next: '继续',
    button_label_finish: '提交',
    required_error_text: '此问题为必填项',
}

// 延迟任务、中介
var panas_items = [
    "1. 活跃的", "2. 愧疚的", "3. 充满热情的", "4. 难过的", "5. 快乐的", "6. 害怕的",
    "7. 兴高采烈的", "8. 紧张的", "9. 惊恐的", "10. 兴奋的", "11. 内疚的", "12. 自豪的",
    "13. 易怒的", "14. 欣喜的", "15. 战战兢兢的", "16. 精神充沛的", "17. 愤怒的", "18. 感激的",
]
var panas_table = []
for (var i = 0; i < panas_items.length; i++) {
    panas_table.push({
        prompt: panas_items[i],
        name: `PANAS ${i}`,
    })
}
var page_PANAS = [
    {
        type: 'html',
        prompt: `
        <p>
            请通过以下词语来评定您此时此刻的情绪或情感状态。<br>
            每个词语有5种程度。1表示非常轻微或根本没有，2表示轻微，3表示中等程度，4表示强烈，5表示非常强烈。
        </p>`
    },
    {
        type: 'likert-table',
        prompt: ` `,
        statements: panas_table,
        options: ['1 非常轻微或没有', '2', '3', '4', '5 非常强烈'],
        required: false,
    }
]

var page_fscs = [
    {
        type: 'html',
        prompt: `
        <div>
            <p>
            下面这些图片中有两个圆分别代表“现在的您”和“未来的您”，两者重合的部分越多，代表他们之间的联系越紧密、延续性越强。请想象一下“现在的您”和“未来的您”，以下那一幅图片最准确地反映了他们之间的关系？
            </p>
            <img src="fscs.png">
        </div>`
    },
    {
        type: 'multi-choice',
        prompt: ` `,
        options: ['1', '2', '3', '4', '5', '6', '7',],
        columns: 0,
        required: true,
    }
]

var nfc_items = [
    "1.此时此刻，我讨厌不确定的情境。",
    "2.此时此刻，我讨厌那些可以有许多不同答案的问题。",
    "3.此时此刻，我讨厌进入我无法预测的情境之中。",
    "4.此时此刻，如果我面临一个问题，我渴望马上找到解决它的方法。",
    "5.此时此刻，我喜欢有条不紊的生活方式。",
]
var page_nfc = [
    {
        type: 'html',
        prompt: `
        <p>
            请根据您<b>当前的</b>真实感受和想法，评定您对以下陈述的赞同程度，1=非常不赞同，7=非常赞同。
        </p>
        `
    },
]
for (var i = 0; i < nfc_items.length; i++) {
    page_nfc.push({
        type: 'likert',
        prompt: nfc_items[i],
        likert_scale_max: 7,
        likert_scale_min_label: '非常不赞同',
        likert_scale_max_label: '非常赞同',
        required: true,
        name: `NFC ${i}`,
    })
}

var page_ntb = [
    {
        type: 'html',
        prompt: `
        <p>
        以下条目描述的是人际交往过程中，一些被他人接纳或被他人拒绝时的感受。<br>
        请评价这些陈述与您的日常生活（当前实际想法）的相符程度。1=完全不符合，7=非常符合。
        </p>
        `
    },
    {
        type: 'likert',
        prompt: '我现在有一种强烈的归属于某个群体的愿望。',
        likert_scale_max: 7,
        likert_scale_min_label: '非常不符合',
        likert_scale_max_label: '非常符合',
        required: true,
        name: `NTB`,
    },
]

var survey_2 = {
    type: jsPsychSurvey,
    pages: [page_PANAS, page_fscs, page_nfc, page_ntb],
    button_label_back: '上一页',
    button_label_next: '继续',
    button_label_finish: '提交',
    required_error_text: '此问题为必填项',
}

// 信任博弈


var tutorial = {
    type: jsPsychExternalHtml,
    url: 'materials/trust_game_tutorial.html',
    cont_btn: 'continue',
}
// timeline.push(greeting)
// timeline.push(survey_1)
// timeline.push(survey_2)
timeline.push(tutorial)

jsPsych.run(timeline)

