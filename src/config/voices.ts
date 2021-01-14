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
            zh: 'days',
            en: 'days',
            ja: 'days',
        },
        path: 'days.mp3',
        tag: 'Songs',
    },
    {
        messages: {
            zh: '单相思转圈台修复版',
        },
        path: '单相思修复版.mp3',
        tag: 'Songs',
    },
    {
        messages: {
            zh: '好可怕，哥哥是个被骂还开心的变态',
        },
        path: '好可怕，哥哥是个被骂还开心的变态.mp3',
        tag: 'Other',
    },
    {
        messages: {
            zh: '你在看哪里呀~baka baka baka',
        },
        path: '你在看哪里呀~baka baka baka.mp3',
        tag: 'Other',
    },
    {
        messages: {
            zh: '素敌',
        },
        path: '素敌.mp3',
        tag: 'Songs',
    },
    {
        messages: {
            zh: '文乃的文乃的幸福理论',
        },
        path: '文乃的幸福理论.mp3',
        tag: 'Test',
    },
    {
        messages: {
            zh: '钻石裂痕',
        },
        path: '钻石裂痕.mp3',
        tag: 'Test',
    },
]
export default voices