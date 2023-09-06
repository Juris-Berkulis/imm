<script setup lang="ts">
import { SliderBlock } from '~/types';

interface Props {
    payload: SliderBlock,
};

defineProps<Props>();
</script>

<template>
<section>
    <button>Лево</button>
    <button>Право</button>
    <figure>
        <img v-for="src of payload.data" :key="src" :src="src" :alt="src">
    </figure>
</section>
</template>

<style scoped lang="scss">
</style>
