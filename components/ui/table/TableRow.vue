<script setup lang="ts">
import { cn } from '@/utils/utiles'

const props = defineProps<{ class?: string }>()
</script>

<template>
  <tr :class="cn('border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted', props.class)">
    <slot />
  </tr>
</template>
