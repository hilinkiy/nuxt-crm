<template>
    <div class="border-border bg-black/20 rounded p-3">
        <div class="uppercase bold text-xl mb-4">O сделке</div>
        <KanbanSlideoverLabel label-text="Наименование">
            <h2>
                {{store.card?.name}}
            </h2>
        </KanbanSlideoverLabel>
        <KanbanSlideoverLabel label-text="Сумма">
            {{convertCurrency(store.card?.price || 0)}}
        </KanbanSlideoverLabel>
        <KanbanSlideoverLabel label-text="Статус">
            <UiBadge variant="outline">
                {{ store.card?.status }}
            </UiBadge>
        </KanbanSlideoverLabel>
        <KanbanSlideoverLabel label-text="Клиент">
            {{store.card?.companyName}}
        </KanbanSlideoverLabel>
        <KanbanSlideoverLabel label-text="Клиент">
            {{dayjs(store.card?.$createdAt).format('DD MM YYYY')}}
        </KanbanSlideoverLabel>
    </div>
</template>

<script lang="ts" setup>
import dayjs from "dayjs";
import { useDealSlideStore } from "~/store/deal-slide.store";

const store = useDealSlideStore()
</script>

<style>

</style>