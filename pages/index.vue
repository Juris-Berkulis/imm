<script setup lang="ts">
import { FetchResponse, Article } from '~/types';

const route = useRoute();

const { data: response } = await useFetch(`http://devtwit8.ru/api/v1/page/?path=${route.fullPath}`, {
    transform: (data: FetchResponse<'home'>) => data,
});

const articlesList: ComputedRef<Article[]> = computed(() => {
    return response.value?.body[0].data.articles || []
});
</script>

<template>
    <div class="homePage">
        <ArticlesList :articlesList="articlesList" />
    </div>
</template>
