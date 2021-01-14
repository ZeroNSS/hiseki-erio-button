import CopyrightFooter from './components/CopyrightFooter.vue'
import ErioButton from './components/ErioButton.vue'
import ErioCard from './components/ErioCard.vue'

declare global {
    interface __VLS_GlobalComponents {
        CopyrightFooter: typeof CopyrightFooter
        ErioButton: typeof ErioButton
        ErioCard: typeof ErioCard
    }
}