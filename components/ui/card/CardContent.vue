<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils/utiles'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('p-6 pt-0', props.class)">
    <slot />
  </div>
</template>
