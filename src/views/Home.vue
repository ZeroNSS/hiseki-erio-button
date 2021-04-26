<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12">
                <ErioCard>
                    <v-row algin="start" justify="start">
                        <v-col
                            cols="12"
                            sm="4"
                            md="3"
                            lg="2"
                        >
                            <v-img
                                class="rounded-lg"
                                :src="erio"
                                :lazy-src="erioMin"
                                width="220px"
                                contain
                            />
                        </v-col>
                        <v-col
                            cols="12"
                            sm="8"
                            md="9"
                            lg="10"
                            class="subtitle-1"
                        >
                            欢迎来到 “艾莉欧音声站 (๑>؂&lt;๑）” 项目，这是一个从
                            <a target="_blank" href="https://vtbbtn.org/">https://vtbbtn.org/</a>
                            获得灵感的项目。<br>
                            私日本語本当下手，全靠机翻；诚邀剪辑man，一个人实在剪辑不过来。<br>
                            <b>新增音声</b>：如果会编程的可以直接上
                            <a target="_blank" href="https://github.com/ZeroNSS/hiseki-erio-button">GitHub</a>
                            fork，修改完后提 pull request ，不会编程的可以提个 issue<br>
                            <b>使用指南</b>：点击按钮即可播放对应音声；多次点击可以造成相当鬼畜的效果；开启洗脑循环将会一直播放一个音频；
                            同时开启循环播放和洗脑循环将会出现 地 狱 绘 卷。<br>
                            <b>声明</b>：本项目仅为 DD 作品，和 绯赤艾莉欧Official 官方没有关联<br>
                            <b>特别感谢</b>：“ <a target="_blank" href="https://github.com/CaoMeiYouRen/shirakami-haruka-button"> 豹按钮(:3っ)∋</a> ”
                            项目，初版源码基本来自于此项目，将于2月开始进行实质的功能性更新<br>
                            <b>其他</b>：团长头发模型<a target="_blank" href="http://5.252.166.74/hiseki_erio_hair.7z">下载</a>，由<a target="_blank" href="https://space.bilibili.com/476835027/">小甍境</a>提供<br>
                            更多内容请参考 <a href="https://github.com/ZeroNSS/hiseki-erio-button#readme" target="_blank">README</a>
                        </v-col>
                    </v-row>
                </ErioCard>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <ErioCard :raw-title="$t('dynamic.LatestDynamic')">
                    <v-row v-if="loading">
                        <v-col
                            v-for="i in 3"
                            :key="i"
                            cols="4"
                        >
                            <v-skeleton-loader
                                type="card"
                            />
                        </v-col>
                    </v-row>
                    <v-row v-if="!loading">
                        <template v-if="dynamic.length">
                            <v-col
                                v-for="item in dynamic"
                                :key="item.guid"
                                cols="12"
                                sm="12"
                                md="6"
                                lg="4"
                            >
                                <v-card
                                    flat
                                    rounded="xl"
                                    class="erio-card"
                                >
                                    <v-card-text class="subtitle-1">
                                        {{ item.contentSnippet }}
                                        <br>
                                        <span>{{ $t('dynamic.DynamicLink') }}：<a target="_blank" :href="item.link">{{ item.link }}</a> </span><br>
                                        {{ $t('dynamic.PublishTime') }}：{{ item.isoDate }}
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </template>
                        <template v-if="!dynamic.length">
                            <v-col
                                cols="12"
                                sm="12"
                                md="6"
                                lg="4"
                            >
                                <v-card
                                    flat
                                    rounded="xl"
                                    class="erio-card"
                                >
                                    <v-card-text class="subtitle-1">
                                        当前暂无最新动态
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </template>
                    </v-row>
                </ErioCard>
            </v-col>
        </v-row>
        <v-row
            algin="start"
            justify="start"
            :class="{'fixed': fixed}"
        >
            <v-col
                cols="12"
            >
                <ErioCard
                    class="control"
                    :raw-title="$t('play.PlaybackControl')"
                >
                    <v-tooltip top>
                        <template #activator="{on,attrs}">
                            <v-icon
                                v-bind="attrs"
                                class="pin"
                                v-on="on"
                                @click="fixed = !fixed"
                            >
                                {{ fixed ? 'mdi-pin' : 'mdi-pin-off' }}
                            </v-icon>
                        </template>
                        <span>{{ $t('play.FixedControlPanel') }}</span>
                    </v-tooltip>
                    <span class="erio-button">
                        <v-btn
                            color="primary"
                            rounded
                            @click="startLoop"
                        >
                            <v-icon>play_arrow</v-icon>{{ $t('play.LoopPlayback') }}
                        </v-btn>
                    </span>
                    <span class="erio-button">
                        <v-btn
                            color="primary"
                            rounded
                            @click="startRandomPlay"
                        >
                            <v-icon>iconfont icon-suijibofang</v-icon>{{ $t('play.RandomPlay') }}
                        </v-btn>
                    </span>
                    <span class="erio-button">
                        <v-btn
                            color="primary"
                            rounded
                            @click="stopLoop"
                        >
                            <v-icon>stop</v-icon>{{ $t('play.StopPlay') }}
                        </v-btn>
                    </span>
                    <span class="erio-button">
                        <v-btn
                            :color="isLoop ? 'primary' : '#fff'"
                            rounded
                            @click="isLoop = !isLoop"
                        >
                            <v-icon>mdi-restore</v-icon>{{ isLoop ? $t('play.LoopOn') : $t('play.LoopOff') }}
                        </v-btn>
                    </span>
                </ErioCard>
            </v-col>
        </v-row>
        <v-row algin="start" justify="start">
            <v-col
                v-for="(item,tag) in voicesGroup"
                :key="tag"
                cols="12"
            >
                <ErioCard
                    :tag="tag"
                >
                    <ErioButton
                        v-for="(e,j) in item"
                        :key="j"
                        v-model="e.isPlay"
                        :path="e.path"
                        :messages="e.messages"
                        :is-loop="isLoop"
                        :stop-all="stopAll"
                    />
                </ErioCard>
            </v-col>
        </v-row>
        <v-row algin="start" justify="start">
            <v-col
                cols="12"
            >
                <ErioCard :raw-title="$t('FriendlyLink')">
                    <v-btn
                        v-for="item in friendshipLinks"
                        :key="item.url"
                        class="friendship-link white--text"
                        :href="item.url"
                        :color="item.color"
                        target="_blank"
                        rounded
                    >
                        {{ item.msg }}
                    </v-btn>
                </ErioCard>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch, nextTick, onUnmounted, Ref, unref, onMounted, WatchStopHandle } from '@vue/composition-api'
import { useAxios } from '@vue-composable/axios'
import { usePromise } from 'vue-composable'
import Parser from 'rss-parser'
import _ from 'lodash'
import axios from 'axios'
import erio from '@/assets/erio.jpg'
import erioMin from '@/assets/erio.min.jpg'
import voices from '@/config/voices'
import { friendshipLinks } from '@/config/links'
import { rssParserString } from '@/utils/rssParser'
import { timeFormat } from '@/utils/time'

function useBiliDynamic(uid: number) {
    const { data, loading, cancel } = useAxios(`/bilibili/user/dynamic/${uid}`, {
        baseURL: process.env.VUE_APP_RSS_URL,
    })
    const { exec, result: rss } = usePromise(() => rssParserString(data.value), { lazy: true })
    watch(data, () => {
        exec()
    })
    const dynamic = computed(() => {
        const rssItems = rss?.value?.items || []
        return rssItems.slice(0, 3).map((e) => {
            e.contentSnippet = e.contentSnippet?.replace(/(\n[\s|\t]*\r*\n)/g, '\n') // 去除多余换行符
            e.isoDate = timeFormat(e.isoDate, 'YYYY-MM-DD HH:mm:ss')
            return e
        })
    })

    onUnmounted(() => {
        if (loading.value){ // 组件卸载时如果还在加载则取消请求
            cancel()
        }
    })

    return {
        dynamic,
        loading,
    }
}

function useLoopAndRandomPlay() {
    const _voices = ref(voices.map((e) => {
        e.isPlay = false
        return e
    }))
    /**
         * 是否洗脑循环
        */
    const isLoop = ref(false)
    /**
         * 是否全部停止
        */
    const stopAll = ref(false)
    /**
         * 是否固定播放面板
         */
    const fixed = ref(false)
    /**
         * 随机播放列表
        */
    const randomList = ref(_voices.value.map((e, i) => i))
    const voicesGroup = computed(() => _.groupBy(_voices.value, 'tag'))
    const currentVoiceIndex = ref(0)
    const currentVoice = computed(() => _voices.value[currentVoiceIndex.value])
    let stop: WatchStopHandle | null = null
    /**
         * 开始循环播放
         */
    async function startLoop() {
        stopLoop()
        await nextTick()
        currentVoice.value.isPlay = true
        currentVoiceIndex.value = 0
        if (!stop){
            stop = watch(currentVoice, (val, newVal, onInvalidate) => {
                if (!val.isPlay){
                    currentVoiceIndex.value += 1
                    currentVoiceIndex.value %= _voices.value.length
                    currentVoice.value.isPlay = true
                }
            }, {
                deep: true,
            })
        }
    }
    function randomPlay() {
        if (randomList.value.length <= 0){
            randomList.value = _voices.value.map((e, i) => i)
        }
        const i = Math.floor(Math.random() * randomList.value.length)
        currentVoiceIndex.value = randomList.value[i]
        randomList.value.splice(i, 1) // 将当前播放的音频移除随机播放列表
        currentVoice.value.isPlay = true
    }
    /**
         * 开始随机播放
        */
    function startRandomPlay() {
        stopLoop()
        randomPlay()
        if (!stop){
            stop = watch(currentVoice, (val, newVal, onInvalidate) => {
                if (!val.isPlay){
                    randomPlay()
                }
            }, {
                deep: true,
            })
        }
    }

    async function stopLoop() {
        if (stop){
            stop()
            stop = null
        }
        currentVoice.value.isPlay = false
        currentVoiceIndex.value = 0
        stopAll.value = true
        await nextTick()
        stopAll.value = false
    }
    return {
        isLoop,
        voicesGroup,
        startLoop,
        startRandomPlay,
        stopLoop,
        fixed,
        stopAll,
    }
}

export default defineComponent({
    name: 'Home',
    props: {},
    setup(props, ctx){
        const play = useLoopAndRandomPlay()
        const { dynamic, loading } = useBiliDynamic(407106379)
        return {
            ...play,
            erio,
            erioMin,
            friendshipLinks,
            dynamic,
            loading,
        }
    },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.control {
    position: relative;

    .pin {
        position: absolute;
        top: 20px;
        right: 16px;
    }
}

.fixed {
    position: sticky;
    top: 50px;
    z-index: 1;
}

.erio-button {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    margin-right: 15px;
    margin-bottom: 15px;

    .v-btn {
        text-transform: none;

        &.primary {
            box-shadow: 0px 0px 7px $erio-primary !important;
        }
    }
}

.friendship-link {
    margin-right: 15px;
    margin-bottom: 15px;
    text-transform: none;
}
</style>