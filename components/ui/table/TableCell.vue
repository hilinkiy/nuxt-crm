<script setup lang="ts">
import { cn } from '@/utils/utiles'

const props = defineProps<{ class?: string }>()
</script>

<template>
	<td
		:class="
			cn(
				'p-4 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
				props.class
			)
		"
	>
		<slot />
	</td>
</template>
