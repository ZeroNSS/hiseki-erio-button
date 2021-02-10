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
]
export default voices