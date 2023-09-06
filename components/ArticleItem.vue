<script setup lang="ts">
import { Article } from '~/types';

interface Props {
    article: Article,
};

const props = defineProps<Props>();

const articleImageSrc: ComputedRef<string> = computed(() => {
    return `url(${props.article.image}), lightgray 50% / cover no-repeat`
});
</script>

<template>
<div class="article">
    <div class="article__img"></div>
    <h2 class="article__title">{{ article.title }}</h2>
    <NuxtLink class="article__openedBtn" :to="article.link">Читать</NuxtLink>
</div>
</template>

<style scoped lang="scss">
.article {
    width: 32%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    @media (max-width: 900px) {
        & {
            width: 48%;
        }
    }

    @media (max-width: 460px) {
        & {
            width: 100%;
        }
    }
}

.article__img {
    width: 100%;
    aspect-ratio: calc(427 / 320);
    margin-bottom: 20px;
    background: v-bind(articleImageSrc);
}

.article__title {
    margin-bottom: 30px;
    color: #1B1B1B;
    text-overflow: ellipsis;
    font-family: Montserrat;
    font-size: 22px;
    font-style: normal;
    font-weight: 800;
    line-height: 30px;
}

.article__openedBtn {
    display: inline-block;
    margin-top: auto;
    padding: 10px 50px;
    border-radius: 2px;
    background-color: #1b1b1b;
    color: #ffffff;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
}
</style>
