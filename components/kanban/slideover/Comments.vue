<template>
  <UiInput placeholder="Оставьте комментарий" v-model="comment" @keyup.enter="writeComm" />
  <div v-for="comment in card?.comments" :key="comment.$id" class="flex items-start mt-5">
    <Icon name="radix-icons:chat-bubble" class="mr-3 mt1" size="20" />
    <div class="border-border bg-black/20 rounded p-3 w-full">
      <div class="mb-2 text-sm">
        Комментарий: {{ dayjs(comment.$createdAt).format('HH:mm') }}
      </div>
      <p>{{comment.text}}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs'
import type { IDeal } from '~/types/deals.types'
import { useComments } from "./useComments";
import { useCreateComment } from './useCreateComment';

const { data, refetch } = useComments()
const { commentRef, writeComment } = useCreateComment({ refetch })

const card = data as unknown as IDeal
const comment = ref(commentRef.value)

const writeComm = () => {
  writeComment()
  console.log(card);
}

watch(writeComm, () => {
  console.log(comment.value)
})
</script>

<style>

</style>