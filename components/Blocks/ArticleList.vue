<script setup lang="ts">
import { Article, ArticleListBlock } from '~/types';

interface Props {
    payload: ArticleListBlock,
};

const props = defineProps<Props>();

const articlesList: ComputedRef<Array<Article>> = computed(() => {
    return props.payload.data.articles
});
</script>

<template>
<section>
    <h2>{{ payload.data.title }}</h2>
    <ArticlesList :articlesList="articlesList" />
</section>
</template>

<style scoped lang="scss">
</style>
