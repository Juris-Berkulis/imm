<script setup lang="ts">
import { TextBlock } from '~/types';

interface Props {
    payload: TextBlock,
};

defineProps<Props>();
</script>

<template>
<section>
    {{ payload.data }}
</section>
</template>

<style scoped lang="scss">
</style>
