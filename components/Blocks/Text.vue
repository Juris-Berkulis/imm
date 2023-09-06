<script setup lang="ts">
import { TextBlock } from '~/types';
import quotes from '~/assets/icons/quotes.svg';

interface Props {
    payload: TextBlock,
};

defineProps<Props>();

const quotesUrl: ComputedRef<string> = computed(() => {
    return `url(${quotes})`
});
</script>

<template>
<section>
    <div class="serverHtml" v-html="payload.data"></div>
</section>
</template>

<style lang="scss">
.serverHtml {
    width: 100%;
    max-width: 884px;
    margin: 0 auto;
}

.serverHtml > h2 {
    margin-bottom: 50px;
    color: #1b1b1b;
    font-family: Montserrat;
    font-size: 34px;
    font-style: normal;
    font-weight: 800;
    line-height: 46px;
}

.serverHtml > p {
    margin-bottom: 20px;
    color: #1b1b1b;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;

    &:last-of-type {
        margin-bottom: 40px;
    }
}

.serverHtml > blockquote {
    position: relative;
    padding-left: 116px;
    color: #1b1b1b;
    font-family: Montserrat;
    font-size: 18px;
    font-style: italic;
    font-weight: 300;
    line-height: 26px;

    &::before {
        content: v-bind(quotesUrl);
        position: absolute;
        top: 0;
        left: 0;
    }
}

.serverHtml > blockquote > p {
    margin-bottom: 15px;
    color: #1b1b1b;
    font-family: Montserrat;
    font-size: 18px;
    font-style: italic;
    font-weight: 300;
    line-height: 26px;
}

.serverHtml > blockquote > footer {
    color: #8d959c;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
}
</style>
