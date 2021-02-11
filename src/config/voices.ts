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
    {
        messages: {
            zh: 'ccll的大家都是我的恋人',
            en: 'days',
            ja: 'days',
        },
        path: 'ccll的大家都是我的恋人.mp3',
        tag: 'witticisms',
    },
    {
        messages: {
            zh: '不能惯坏你们这些可爱的小猪',
        },
        path: '不能惯坏你们这些可爱的小猪.mp3',
        tag: 'witticisms',
    },

    // -------hdame------public/voices/hdame---------------
    {
        messages: {
            zh: '镇站片段',
            en: '',
            ja: '',
        },
        path: '/hdame/镇站片段.mp3',
        tag: 'hdame',
    },
    {
        messages: {
            zh: '别的社死都是假的，这个是真的',
            en: '',
            ja: '',
        },
        path: '/hdame/别的社死都是假的，这个是真的.mp3',
        tag: 'hdame',
    },
    {
        messages: {
            zh: '欧湃欧湃nobra',
            en: '',
            ja: '',
        },
        path: '/hdame/欧湃欧湃nobra-ytb1周年_01.mp3',
        tag: 'hdame',
    },
    {
        messages: {
            zh: '涩气投喂',
            en: '',
            ja: '',
        },
        path: '/hdame/涩气投喂.mp3',
        tag: 'hdame',
    },
    {
        messages: {
            zh: '涩涩的深呼吸',
            en: '',
            ja: '',
        },
        path: '/hdame/涩涩的深呼吸.mp3',
        tag: 'hdame',
    },
    {
        messages: {
            zh: '伸懒腰的团长1',
            en: '',
            ja: '',
        },
        path: '/hdame/伸懒腰的团长1（45W纪念回 28.40).mp3',
        tag: 'hdame',
    },
    {
        messages: {
            zh: '伸懒腰的团长2',
            en: '',
            ja: '',
        },
        path: '/hdame/伸懒腰的团长2（45W纪念回 1.09.00).mp3',
        tag: 'hdame',
    },
    {
        messages: {
            zh: '昂',
            en: '',
            ja: '',
        },
        path: '/hdame/昂（媚）-ytb1周年_01.mp3',
        tag: 'hdame',
    },
    {
        messages: {
            zh: '大小姐没穿胖次',
            en: '',
            ja: '',
        },
        path: '/hdame/erio便太发言：大小姐没穿胖次.mp3',
        tag: 'hdame',
    },
]
export default voices