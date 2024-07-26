<script setup lang="ts">
import { cn } from '@/utils/utiles'

const props = defineProps<{ class?: string }>()
</script>

<template>
  <caption :class="cn('mt-4 text-sm text-muted-foreground', props.class)">
    <slot />
  </caption>
</template>
