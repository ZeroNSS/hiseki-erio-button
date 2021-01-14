<template>
    <v-footer
        padless
        app
        inset
        absolute
        class="app-footer"
    >
        <v-card
            class="card flex text-center"
            flat
            tile
        >
            <v-card-text>
                <p title="About">
                    <a @click.prevent="$router.push('/about')">
                        Copyright &copy;2020 - {{ new Date().getFullYear() }}
                        <strong>ZeroNSS</strong> All Rights Rese.
                    </a>
                </p>
                
                <p>
                    <a target="_blank" href="https://github.com/ZeroNSS/hiseki-erio-button">
                        <v-icon color="primary">iconfont icon-github2</v-icon>
                        {{ $t('ProjectAddress') }}
                    </a>
                </p>
                <p class="github-info">
                    <a target="_blank" href="https://github.com/ZeroNSS/hiseki-erio-button">
                        <img
                            v-for="e in githubs"
                            :key="e.src"
                            :alt="e.alt"
                            :src="e.src"
                        >
                    </a>
                </p>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
    name: 'CopyrightFooter',
    props: {},
    setup(props, ctx){
        return {
            POLICE: process.env.VUE_APP_POLICE,
            ICP: process.env.VUE_APP_ICP,
            githubs: [
                {
                    alt: 'GitHub package.json version',
                    src: 'https://img.shields.io/github/package-json/v/ZeroNSS/hiseki-erio-button?color=00a1d6',
                },
                {
                    alt: 'GitHub watchers',
                    src: 'https://img.shields.io/github/watchers/ZeroNSS/hiseki-erio-button?style=social',
                },
                {
                    alt: 'GitHub Repo stars',
                    src: 'https://img.shields.io/github/stars/ZeroNSS/hiseki-erio-button?style=social',
                },
                {
                    alt: 'GitHub forks',
                    src: 'https://img.shields.io/github/forks/ZeroNSS/hiseki-erio-button?style=social',
                },
            ],
        }
    },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.app-footer {
    a,
    p {
        color: $erio-primary !important;
        font-family: '微软雅黑';
        text-decoration: none;
    }

    a:hover {
        color: #039be5 !important;
    }

    .card {
        background-color: #424242 !important;
    }

    .github-info {
        margin: 0;

        a {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
            margin: 0px auto;

            img {
                display: block;
                margin: 7px;
            }
        }
    }
}
</style>