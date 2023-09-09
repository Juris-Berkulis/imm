<script setup lang="ts">
import { type Block } from '~/types';

interface Props {
    block: Block,
};

defineProps<Props>();
</script>

<template>
<BlocksArticleIntro class="section" v-if="block.type === 'article_intro_block'" :payload="block" />
<BlocksArticleList class="section" v-else-if="block.type === 'article_list_block'" :payload="block" />
<BlocksCtaForm class="section" v-else-if="block.type === 'cta_form_block'" :payload="block" />
<BlocksImage class="section" v-else-if="block.type === 'image_block'" :payload="block" />
<BlocksSubscribeForm class="section" v-else-if="block.type === 'subscribe_form_block'" :payload="block" />
<BlocksText class="section" v-else-if="block.type === 'text_block'" :payload="block" />
<BlocksSlider class="section" v-else-if="block.type === 'slider_block'" :payload="block" />
</template>

<style scoped lang="scss">
.section {
    padding: 50px 0;

    @media (max-width: 600px) {
        & {
            padding: 30px 0;
        }
    }

    &:first-of-type {
        padding-top: 0;
    }

    &:last-of-type {
        padding-bottom: 0;
    }
}
</style>
