<script setup lang="ts">
import { ArticleIntroBlock } from '~/types';

interface Props {
    payload: ArticleIntroBlock,
};

defineProps<Props>();
</script>

<template>
<section>
    <img :src="payload.data.image" :alt="payload.data.title">
    <div>
        <h1>{{ payload.data.title }}</h1>
        <div>
            <p>{{ payload.data.reading_time }} мин время чтения</p>
        </div>
        <div>
            <p>{{ payload.data.views_count }} прочитали статью</p>
        </div>
        <p>{{ payload.data.short_description }}</p>
    </div>
</section>
</template>

<style scoped lang="scss">
</style>
