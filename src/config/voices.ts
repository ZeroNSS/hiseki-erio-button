export interface VoiceInfo {
    /**
     * 标题翻译
     */
    messages: {
        zh: string
        en?: string
        ja?: string
    }
    /**
     * 音声路径。相对于 public/voices 的路径
     */
    path: string
    /**
     * 分类标签，i18n 路径。
     * 会根据这个 tag 进行分类。
     * tag 的翻译在 locales 文件夹下 zh/en/ja 文件中的 tags 字段中设置
     */
    tag: string
    /**
     * 是否播放
     *
     * @type {boolean}
     */
    isPlay?: boolean
}
const voices: VoiceInfo[] = [
    
 //-------witticisms-----------public/voices/erio名台词-------------   
   
 {
        messages: {
            zh: 'ccll的大家都是我的恋人',
            en: 'days',
            ja: 'days',
        },
        path: '/erio名台词/ccll的大家都是我的恋人.mp3',
        tag: 'witticisms',
    },
    {
        messages: {
            zh: '你的判次啥颜色',
            en: '',
            ja: '',
        },
        path: '/erio名台词/你的判次啥颜色.mp3',
        tag: 'witticisms',
    },
    {
        messages: {
            zh: '不能惯坏你们这些可爱的小猪',
            en: '',
            ja: '',
        },
        path: '/erio名台词/不能惯坏你们这些可爱的小猪.mp3',
        tag: 'witticisms',
    },
    {
        messages: {
            zh: '你们啊，不要停下来啊1',
            en: '',
            ja: '',
        },
        path: '/erio名台词/你们啊，不要停下来啊 （团长的教诲1）.mp3',
        tag: 'witticisms',
    },
    {
        messages: {
            zh: '你们啊，不要停下来啊2',
            en: '',
            ja: '',
        },
        path: '/erio名台词/所以，你们啊，不要停下来啊！（二）.mp3',
        tag: 'witticisms',
    },
    {
        messages: {
            zh: '不要说乳团 h',
            en: '',
            ja: '',
        },
        path: '/erio名台词/不要说乳团 h.mp3',
        tag: 'witticisms',
    },
    {
        messages: {
            zh: '对面的女粉看过来',
            en: '',
            ja: '',
        },
        path: '/erio名台词/对面的女粉看过来.mp3',
        tag: 'witticisms',
    },
    {
        messages: {
            zh: '虚拟世界不存在重婚罪',
            en: '',
            ja: '',
        },
        path: '/erio名台词/虚拟世界不存在重婚罪.mp3',
        tag: 'witticisms',
    },
    {
        messages: {
            zh: '这个点不会还有人在工作吧？不会吧不会吧',
            en: '',
            ja: '',
        },
        path: '/erio名台词/这个点不会还有人在工作吧？不会吧不会吧.mp3',
        tag: 'witticisms',
    },
    {
        messages: {
            zh: '不要叫我渣男~我也没办法',
            en: '',
            ja: '',
        },
        path: '/erio名台词/不要叫我渣男~我也没办法（20210116 185.3）.mp3',
        tag: 'witticisms',
    },

//-------dialogue-----------public/voices/erio台词回-------------   

{
    messages: {
        zh: '暗黑桃太郎故事',
        en: '',
        ja: '',
    },
    path: '/erio台词回/暗黑桃太郎故事.mp3',
    tag: 'dialogue',
},
{
    messages: {
        zh: '先来吃我还是先吃我呢？',
        en: '',
        ja: '',
    },
    path: '/erio台词回/先来吃我还是先吃我呢？.mp3',
    tag: 'dialogue',
},
{
    messages: {
        zh: 'erio上司的训斥',
        en: '',
        ja: '',
    },
    path: '/erio台词回/erio上司的训斥.mp3',
    tag: 'dialogue',
},
{
    messages: {
        zh: '2020情人节傲娇台词',
        en: '',
        ja: '',
    },
    path: '/erio台词回/2020情人节傲娇台词.mp3',
    tag: 'dialogue',
},
{
    messages: {
        zh: '傲娇erio （20210120台词回）',
        en: '',
        ja: '',
    },
    path: '/erio台词回/傲娇erio （20210120台词回）.mp3',
    tag: 'dialogue',
},
{
    messages: {
        zh: '病娇可爱妹妹（20210119台词回）',
        en: '',
        ja: '',
    },
    path: '/erio台词回/病娇可爱妹妹（20210119台词回）.mp3',
    tag: 'dialogue',
},
{
    messages: {
        zh: '大老婆咬耳朵（20210119台词回）',
        en: '',
        ja: '',
    },
    path: '/erio台词回/大老婆咬耳朵（20210119台词回）.mp3',
    tag: 'dialogue',
},
{
    messages: {
        zh: '老婆帮忙（20210119台词回）',
        en: '',
        ja: '',
    },
    path: '/erio台词回/老婆帮忙（20210119台词回）.mp3',
    tag: 'dialogue',
},
{
    messages: {
        zh: '老婆探病（20210119台词回）',
        en: '',
        ja: '',
    },
    path: '/erio台词回/老婆探病（20210119台词回）.mp3',
    tag: 'dialogue',
},
{
    messages: {
        zh: '老婆我回来了（20210119台词回）',
        en: '',
        ja: '',
    },
    path: '/erio台词回/老婆我回来了（20210119台词回）.mp3',
    tag: 'dialogue',
},
{
    messages: {
        zh: '男女朋友（20210119台词回）',
        en: '',
        ja: '',
    },
    path: '/erio台词回/男女朋友（20210119台词回）.mp3',
    tag: 'dialogue',
},
{
    messages: {
        zh: '巧克力1（20210119台词回）',
        en: '',
        ja: '',
    },
    path: '/erio台词回/巧克力1（20210119台词回）.mp3',
    tag: 'dialogue',
},
{
    messages: {
        zh: '巧克力2（20210119台词回）',
        en: '',
        ja: '',
    },
    path: '/erio台词回/巧克力2（20210119台词回）.mp3',
    tag: 'dialogue',
},
{
    messages: {
        zh: '青梅竹马（20210119台词回）',
        en: '',
        ja: '',
    },
    path: '/erio台词回/青梅竹马（20210119台词回）.mp3',
    tag: 'dialogue',
},
{
    messages: {
        zh: '软软撒娇老婆（20210119台词回）',
        en: '',
        ja: '',
    },
    path: '/erio台词回/软软撒娇老婆（20210119台词回）.mp3',
    tag: 'dialogue',
},
{
    messages: {
        zh: '我要保护你一辈子（20210116 186分）',
        en: '',
        ja: '',
    },
    path: '/erio台词回/我要保护你一辈子（20210116 186分）.mp3',
    tag: 'dialogue',
},
{
    messages: {
        zh: '小老婆要闹了（20210119台词回）',
        en: '',
        ja: '',
    },
    path: '/erio台词回/小老婆要闹了（20210119台词回）.mp3',
    tag: 'dialogue',
},
{
    messages: {
        zh: '新婚台词1 欢迎回来~（20210119 台词回 28.21）',
        en: '',
        ja: '',
    },
    path: '/erio台词回/新婚台词1 欢迎回来~（20210119 台词回 28.21）.mp3',
    tag: 'dialogue',
},
{
    messages: {
        zh: '中二erio （20210120台词回）',
        en: '',
        ja: '',
    },
    path: '/erio台词回/中二erio （20210120台词回）.mp3',
    tag: 'dialogue',
},


    // -------hdame------public/voices/不许涩团长---------------
    
    {
        messages: {
            zh: '镇站片段',
            en: '',
            ja: '',
        },
        path: '/不许涩团长/镇站片段.mp3',
        tag: 'hdame',
    },
    {
        messages: {
            zh: '别的社死都是假的，这个是真的',
            en: '',
            ja: '',
        },
        path: '/不许涩团长/别的社死都是假的，这个是真的.mp3',
        tag: 'hdame',
    },
    {
        messages: {
            zh: '欧湃欧湃nobra',
            en: '',
            ja: '',
        },
        path: '/不许涩团长/欧湃欧湃nobra-ytb1周年_01.mp3',
        tag: 'hdame',
    },
    {
        messages: {
            zh: '涩气投喂',
            en: '',
            ja: '',
        },
        path: '/不许涩团长/涩气投喂.mp3',
        tag: 'hdame',
    },
    {
        messages: {
            zh: '涩涩的深呼吸',
            en: '',
            ja: '',
        },
        path: '/不许涩团长/涩涩的深呼吸.mp3',
        tag: 'hdame',
    },
    {
        messages: {
            zh: '伸懒腰的团长1',
            en: '',
            ja: '',
        },
        path: '/不许涩团长/伸懒腰的团长1（45W纪念回 28.40).mp3',
        tag: 'hdame',
    },
    {
        messages: {
            zh: '伸懒腰的团长2',
            en: '',
            ja: '',
        },
        path: '/不许涩团长/伸懒腰的团长2（45W纪念回 1.09.00).mp3',
        tag: 'hdame',
    },
    {
        messages: {
            zh: '昂',
            en: '',
            ja: '',
        },
        path: '/不许涩团长/昂（媚）-ytb1周年_01.mp3',
        tag: 'hdame',
    },
    {
        messages: {
            zh: '大小姐没穿胖次',
            en: '',
            ja: '',
        },
        path: '/不许涩团长/erio便太发言：大小姐没穿胖次.mp3',
        tag: 'hdame',
    },
]
export default voices