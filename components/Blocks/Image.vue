<script setup lang="ts">
import { ImageBlock } from '~/types';

interface Props {
    payload: ImageBlock,
};

defineProps<Props>();
</script>

<template>
<section>
    <figure>
        <img :src="payload.data.src" :alt="payload.data.caption">
        <figcaption v-if="payload.data.caption">{{ payload.data.caption }}</figcaption>
    </figure>
</section>
</template>

<style scoped lang="scss">
</style>
