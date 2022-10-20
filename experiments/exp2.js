var timeline = []
var jsPsych = initJsPsych({
    // on_finish: function() {
    //     jsPsych.data.displayData()
    // }
    on_finish: data_save,
})

// constants: survey material

const btn_consent = `
    <button class="jspsych-btn" id="btn-consent" disabled=true>%choice%</button>
`

const btn_html_timer = `
    <style onload="tid=setInterval(timer, 1000)"></style>
    <button onclick="submit(tid)" class="jspsych-btn" disabled=true>%choice%</button>
`

const btn_tutorial = `
    <button class="jspsych-btn" id="btn-tutorial" disabled=true>%choice%</button>
`

const info_html = `
    <p>subjec&nbspID <input id="ID" type="number"></input></p>
    <p>subject&nbspName <input id="name" type="text"></input></p><br>
    <button onclick="save_info()" class="jspsych-btn">save</button>
    <p style="visibility:hidden" id="feedback"></p><br>
`

const consent_html = `
    <div class="consent">
        <p>欢迎您参与本次实验！</p>
        <p>
            您即将参与的是一项由中国天津师范大学心理学部进行的研究，所得结果将为人格和社会心理学研究提供资料。我们保证，整个实验不会对您的身心造成任何的伤害。实验过程中，您只需按照指导语填写问卷和按键即可。实验时长约15~20分钟。参与本实验是完全自愿的，您可以在任何时候退出而不受惩罚。
        </p>
        <p>
            我们保证本次实验记录和采集的所有数据资料，不会在未经您的允许之下被出售或赠与他人及机构。您参与此项实验后，我们将为您提供一定的报酬。
        </p>
        <p>如果您同意参与此次实验，请勾选下方的勾选框然后点击“继续”按钮。</p>
        <p>
            You’re going to participate in a study conducted by TJNU's school of psychology, and it will contribute to social psychology research. We promise that it will do no harm to your physical and psychological health. Your task is to complete some questionnaires and make decisions by click. It takes 15 to 20 minutes. Participation in the study if totally voluntary, so you can exit at any time without any penalty.
        </p>
        <p>
            We promise that the data collected in this study mustn’t be sold or given to any other person or organization without your permission. You will receive some rewards afterwards.
        </p>
        <p>If you agree with the terms, please click the checkbox below, then click the 'Continue' button.</p>
    </div>
    <input type="checkbox" id="consent" name="consent" onclick="consent_check(this)">
    <label for="consent" class="consent">我同意参与此次实验。 I agree to take part in the study.</label>
    <br>
    <br>
`

const instru_IGTS = `
    <p class="survey-intro">下列条目描述的是人际交往过程中，您对自己和他人的一些看法。<br>您在多大程度上赞同这些描述？请选择恰当的数字（从数字1到数字7，赞同程度依次提高）。
    </p>
`

const igts_items = [
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

const ms_questions = [
    `1. 请想象您被确诊了一种无法治愈的致命疾病，您的生命只剩下一个月的时间。当您想到您的生命即将结束，您此刻产生了哪些情绪感受？`,
    `2. 您认为，在您死去时和死亡之后身体会发生哪些变化？`
]

const control_questions = [
    `1. 请想象您因为牙痛就医，诊断后需要进行一次牙科手术。当您想到您即将要进行一次牙科手术，您此刻产生了怎样哪些情绪感受？`,
    `2. 您认为，在您做牙科手术时和手术完成后身体会发生哪些变化？`,
]

const instru_PANAS = `
    <p class="survey-intro">请通过以下词语来评定您此时此刻的情绪或情感状态。
    </p>
    <p class="survey-intro">每个词语有5种程度。1表示非常轻微或根本没有，2表示轻微，3表示中等程度，4表示强烈，5表示非常强烈。
    </p>
`

const panas_items = [
    "1. 活跃的", "2. 愧疚的", "3. 充满热情的", "4. 难过的", "5. 快乐的", "6. 害怕的",
    "7. 兴高采烈的", "8. 紧张的", "9. 惊恐的", "10. 兴奋的", "11. 内疚的", "12. 自豪的",
    "13. 易怒的", "14. 欣喜的", "15. 战战兢兢的", "16. 精神充沛的", "17. 愤怒的", "18. 感激的",
]

const instru_FSCS = `
    <p class="survey-intro">
        下面这些图片中有两个圆分别代表“现在的您”和“未来的您”，两者重合的部分越多，代表他们之间的联系越紧密、延续性越强。请想象一下“现在的您”和“未来的您”，以下那一幅图片最准确地反映了他们之间的关系？
    </p>
    <img src="fscs.png" alt="HTML5">
`
const instru_NFC = `
    <p class="survey-intro">请根据您<b>当前的</b>真实感受和想法，评定您对以下陈述的赞同程度，1=非常不赞同，7=非常赞同。
    </p>
`

const nfc_items = [
    "1.此时此刻，我讨厌不确定的情境。",
    "2.此时此刻，我讨厌那些可以有许多不同答案的问题。",
    "3.此时此刻，我讨厌进入我无法预测的情境之中。",
    "4.此时此刻，如果我面临一个问题，我渴望马上找到解决它的方法。",
    "5.此时此刻，我喜欢有条不紊的生活方式。",
]

const items_mc = [
    '在过去的30分钟内，您是否想到了死亡？1代表“完全没有”，7代表“一定有”，程度依次增加。',
    '在过去的30分钟内，你的关于死亡的想法有多强烈？1代表“非常轻微或没有”，7代表“非常强烈”，程度依次增加。',
]

const tutorial_html = `
    <div class="instruction">
        <br>
        <p class="instruction">
            现在，您需要完成若干次<b>“投资游戏”</b>，我们将根据游戏结果来决定您获得的实验报酬中的浮动金额。接下来将为您介绍“投资游戏”的规则。
        </p>
        <p class="instruction">
            投资游戏由两名参与者共同完成，一人的角色为“投资者”，另一人的角色为“接受者”。一次游戏的流程如下：
        </p>
        <ol start="1">
            <li>游戏开始，投资者和接受者都持有10元的资金。</li>
            <li>投资者决定将自己持有的一部分资金x元交给接受者，0&nbsp≤&nbspx&nbsp≤10（x是整数），即投资者也可以选择不投资。</li>
            <li>如果x&nbsp=&nbsp0，那么本次游戏完成，结算双方的收益：投资者得到10元，接受者得到10元。</li>
            <li>如果x&nbsp>&nbsp0，那么投资金额将增值为3倍，接受者得到3x金额的资金，此时投资者持有的资金为10-x元，而接受者持有的资金为10+3x元。</li>
            <li>接受者决定将自己持有的一部分资金y元回报给投资者，0&nbsp≤&nbspy&nbsp≤&nbsp10+3x（y是整数），即接受者可以选择不回报投资者。此时投资者持有的资金为10-x+y元，而接受者持有的资金为10+3x-y元。</li>
            <li>结算双方收益：投资者得到10-x+y元，而接受者得到10+3x-y元。</li>
        </ol>
    
        <ol class="example" start="1">
            <b>例1</b>
            <li>游戏开始，投资者持有10元，接受者持有10元。</li>
            <li>投资者的投资金额为0元。</li>
            <li>游戏结束，结算收益：投资者得到10元，接受者得到10元。</li>
        </ol>
        <ol class="example" start="1">
            <b>例2</b>
            <li>游戏开始，投资者持有10元，接受者持有10元。</li>
            <li>投资者的投资金额为5元。</li>
            <li>接受者得到15元，接受者持有25元。</li>
            <li>接受者回报给投资者8元，投资者持有13元，接受者持有17元。</li>
            <li>游戏结束，结算收益：投资者得到13元，接受者得到17元。</li>
        </ol>
    </div>
`
const tutorial_check = `
    <div class="html-form">
    <ol start="1">
        <p>规则介绍完毕，为了确认您理解了规则，请回答以下问题：</p>
        <p>当您输入正确答案之后在输入框右侧会出现<span style="color:green">✔</span>，全部问题都回答正确之后才能继续</p>
        <p>如果投资者选择投资6元，那么</p>
        <p>
            1. 接受者将获得多少金额的投资（不包括原本持有的10元）？
            <input class="rule" type="number" oninput="tg_check(0)">
            <span class="right">✔</span>
        </p>
        <p>
            2. 接受者最多能够返还给投资者多少金额？
            <input class="rule" type="number" oninput="tg_check(1)">
            <span class="right">✔</span>
        </p>
        <p>
            3. 如果接受者返还给投资者5元，那么投资者在本次游戏中的总收益是多少？
            <input class="rule" type="number" oninput="tg_check(2)">
            <span class="right">✔</span>
        </p>
    </ol>
    </div>
`

const pre_game_html = `
    <div class="instruction">
        <p class="instruction">
            投资游戏总共将进行10次，您始终作为投资者进行游戏。每一次游戏中的“接受者”都是不同的参与者。在游戏全部结束之后，我们将会随机抽取其中一次游戏的结果，将您在此次游戏中得到的收益按一定比例加入到您的实验报酬中。您在游戏中获得的额外收益为0~10元。
        </p>
        <p class="instruction">
            本次实验的参与者来自两个群体——中国大学生和外国留学生。在每一次游戏开始前您会知道此次游戏的接受者属于哪一个群体。游戏是异步进行的：我们事先采集和存储了一些参与者作为“接受者”进行游戏时的行为数据，当您作为“投资者”进行游戏时，我们将抽取一名“参与者”与您共同完成游戏。每一次游戏完成后，您暂时不会知道此次游戏的结果。当本次实验完成后我们将告知您获得了多少奖励金额。
        </p>
        <p class="instruction">
            如果您对投资游戏的规则仍有疑问，可以点击下方“返回”按钮再次查看规则。
        </p>
        <button class="jspsych-btn" onclick="display_tutorial()">查看规则</button>
    </div>
    <div id="tutorial" style="display:none">${tutorial_html}</div>
    <br>
`

const trust_items = [
    '一般而言，您认为他们之中的多数人都值得信任还是与他们相处时必须小心？',
    '您认为多数情况下他们是乐于助人还是只关心自己？',
    '您认为如果有机会的话，他们会占您的便宜还是公正地对待您？',
]

const trust_options = [
    ['多数人都值得信任', '与他们相处时必须要小心'],
    ['乐于助人', '只关心自己'],
    ['占便宜', '公正对待'],
]

// init

var preload = {
    type: jsPsychPreload,
    images: ['fscs.png']
}

var condition


var start = {
    type: jsPsychFullscreen,
    message: info_html,
    on_start: function () {
        document.body.onselectstart = function () { return false } // 禁止选中文字 <body oncontextmenu="return false">
        document.body.oncontextmenu = function () { return false } // 禁用鼠标右键 <body onselectstart="return false">
        window.onkeydown = (event) => {
            const key = event.key
            if (key == 'F5' || key == 'F12' || key == 'esc') {
                event.preventDefault()
                return false
            }
        }
    },
}

// consent

var consent = {
    type: jsPsychHtmlButtonResponse,
    stimulus: consent_html,
    choices: ['继续 Continue'],
    button_html: btn_consent
}

// 人口学信息和IGTS
var page_demography = [
    make_instru('<p class="survey-intro">请根据您的情况回答以下问题<br>Please answer these questions.</p>'),
    // 性别
    {
        type: 'multi-choice',
        prompt: '您的性别 Your gender',
        options: ['男 male', '女 female'],
        required: true,
        columns: 2,
        name: 'gender',
    },
    // 年龄
    {
        type: 'text',
        prompt: '您的年龄 Your age',
        placeholder: '18——99',
        required: true,
        name: 'age',
    },
    // 专业
    {
        type: 'text',
        prompt: '您的大学主修专业 Your major in university',
        required: true,
        name: 'major',
    },
    // 群体
    {
        type: 'multi-choice',
        prompt: '您属于中国大学生还是外国留学生 Are you a Chinese student or a foreigner student?',
        options: ['中国大学生 Chinese student', '外国留学生 foreigner student'],
        required: true,
        columns: 2,
        name: 'instru',
    }
]

var page_IGTS = [make_instru(instru_IGTS)]
make_likert(page = page_IGTS, scale_name = 'igts', items = igts_items)

var survey_1 = make_survey(survey_pages = [page_demography, page_IGTS], survey_name = 'survey1')

// 死亡凸显

var ms = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function () {
        if (condition) {
            return ms_control(ms_questions, "10:00")
        } else {
            return ms_control(control_questions, "10:00")
        }
    },
    choices: ['提交'],
    button_html: btn_html_timer,
    trial_duration: 1000 * (10 + 60 * 10)
}

// 延迟任务、中介

var panas_table = []
for (let i = 0; i < panas_items.length; i++) {
    panas_table.push({
        prompt: panas_items[i],
        name: `PANAS ${i + 1}`,
    })
}

var page_PANAS = [
    make_instru(instru_PANAS),
    {
        type: 'likert-table',
        prompt: ` `,
        statements: panas_table,
        options: ['1 非常轻微或没有', '2', '3', '4', '5 非常强烈'],
        required: true,
        name: 'panas'
    }
]

var page_fscs = [
    make_instru(instru_FSCS),
    {
        type: 'multi-choice',
        prompt: ` `,
        options: ['1', '2', '3', '4', '5', '6', '7',],
        columns: 0,
        required: true,
        name: `fscs`,
    }
]

var page_nfc = [
    make_instru(instru_NFC),
]
make_likert(page = page_nfc, scale_name = 'nfc', items = nfc_items)
make_likert(page = page_nfc, scale_name = 'ntb', items = ["6.此时此刻，我有一种强烈的归属于某个群体的愿望。"])


var survey_2 = make_survey(
    survey_pages = [page_PANAS, page_fscs, page_nfc],
    survey_name = 'survey2'
)

// tutorial

var tutorial = {
    timeline: [
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: tutorial_html + tutorial_check,
            choices: ['继续'],
            button_html: btn_tutorial,
        },
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: `<p>在开始投资游戏之前，请您回答一些问题</p>`,
            choices: ['继续'],
        }
    ]
}

var pre_game = {
    type: jsPsychHtmlButtonResponse,
    stimulus: pre_game_html,
    choices: ['开始游戏']
}

// 信任博弈-游戏

var timeline = []

var trust_game_timeline = []

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        trust_game_timeline.push({
            group: 0,
            group_name: '中国大学生'
        })
    } else {
        trust_game_timeline.push({
            group: 1,
            group_name: '外国留学生'
        })
    }
}

var trust_game_i = 1

var trust_game_page = [
    {
        type: 'html',
        prompt: function () {
            return `<p class="survey-intro">本次游戏的接受者属于${jsPsych.timelineVariable('group_name')}。</p>`
        }
    },
    {
        type: 'multi-choice',
        prompt: `现在您和“接受者”都持有10元资金，请选择您要投资给“接受者”的金额`,
        options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',],
        required: true,
        name: 'trust',
    }
]

var trust_game = {
    timeline: [
        {
            timeline: [
                {
                    type: jsPsychHtmlKeyboardResponse,
                    stimulus: function () {
                        return `<p>第${trust_game_i}次游戏开始</p>`
                    },
                    choices: 'NO_KEYS',
                    trial_duration: 800,
                },
                {
                    type: jsPsychSurvey,
                    pages: [trust_game_page],
                    button_label_finish: '确定',
                    data: {
                        name: 'trust_game',
                        group: function () { return jsPsych.timelineVariable('group') }
                    }
                },
                {
                    type: jsPsychHtmlKeyboardResponse,
                    stimulus: function () {
                        let invest = jsPsych.data.getLastTrialData().values()[0].response.trust
                        if (invest != 0) {
                            return '<p>“接受者”已做出选择，本次游戏完成。</p>'
                        } else {
                            return '<p>您选择不投资，本次游戏完成。</p>'
                        }

                    },
                    choices: 'NO_KEYS',
                    trial_duration: 800,
                    on_finish: function () {
                        trust_game_i++
                    }
                }
            ],
            timeline_variables: trust_game_timeline,
            randomize_order: true,
        },
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: '<p>投资游戏完成，请您回答一些问题</p>',
            choices: ['继续']
        }
    ]
}

// tip mc

page_ingroup = [make_instru(`<p class="survey-intro">请通过以下问题来评价您对中国大学生的看法：</p>`)]
page_outgroup = [make_instru(`<p class="survey-intro">请通过以下问题来评价您对外国留学生的看法：</p>`)]

for (let j = 0; j < 3; j++) {
    make_likert(
        page = page_ingroup, scale_name = 'tip_ingroup' + (j + 1), items = [trust_items[j]],
        min = 0, max = 1, labels = trust_options[j]
    )
    make_likert(
        page = page_outgroup, scale_name = 'tip_outgroup' + (j + 1), items = [trust_items[j]],
        min = 0, max = 1, labels = trust_options[j]
    )
}

page_mc = [make_instru('<p class="survey-intro">请您根据自己此刻的真实感受回答下面两个问题：</p>')]
make_likert(
    page = page_mc, scale_name = 'mc1', items = [items_mc[0]],
    min = 1, max = 7, labels = ['一定有', '完全没有']
)
make_likert(
    page = page_mc, scale_name = 'mc2', items = [items_mc[1]],
    min = 1, max = 7, labels = ['一定有', '完全没有']
)

var survey_3 = make_survey(survey_pages = [page_ingroup, page_outgroup, page_mc], survey_name = 'survey3')

timeline.push(preload)
timeline.push(start)
timeline.push(consent)
timeline.push(survey_1)
timeline.push(ms)
timeline.push(tutorial)
timeline.push(survey_2)
timeline.push(pre_game)
timeline.push(trust_game)
timeline.push(survey_3)

jsPsych.run(timeline)
