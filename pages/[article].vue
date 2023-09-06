<script setup lang="ts">
import { Block, FetchResponse } from '~/types';

const route = useRoute();

const {data: response} = await useFetch(`http://devtwit8.ru/api/v1/page/?path=${route.fullPath}`, {
    transform: (data: FetchResponse<'article'>) => data,
});

const blocksList: ComputedRef<Array<Block>> = computed(() => {
    return response.value?.body || []
});

console.log(response.value)
</script>

<template>
<article>
    <template v-for="block of blocksList" :key="block.id">
        <BlocksArticleIntro v-if="block.type === 'article_intro_block'" :payload="block" />
        <BlocksArticleList v-else-if="block.type === 'article_list_block'" :payload="block" />
        <BlocksCtaForm v-else-if="block.type === 'cta_form_block'" :payload="block" />
        <BlocksImage v-else-if="block.type === 'image_block'" :payload="block" />
        <BlocksSubscribeForm v-else-if="block.type === 'subscribe_form_block'" :payload="block" />
        <BlocksText v-else-if="block.type === 'text_block'" :payload="block" />
        <BlocksSlider v-else-if="block.type === 'slider_block'" :payload="block" />
    </template>
</article>
</template>

<style scoped lang="scss">
</style>
