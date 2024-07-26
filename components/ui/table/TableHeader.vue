<script setup lang="ts">
import { cn } from '@/utils/utiles'

const props = defineProps<{ class?: string }>()
</script>

<template>
  <thead :class="cn('[&_tr]:border-b', props.class)">
    <slot />
  </thead>
</template>
