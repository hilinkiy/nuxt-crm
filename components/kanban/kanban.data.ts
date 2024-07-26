import { EnumStatus } from "~/types/deals.types";
import type { IColumn } from "./kanban.types";

export const KANBAN_DATA: IColumn[] = [
    {
        id: EnumStatus.todo,
        items: [],
        name: 'Входящие'
    },
    {
        id: EnumStatus['to-be-agreed'],
        items: [],
        name: 'На согласовании'
    },
    {
        id: EnumStatus['in-progress'],
        items: [],
        name: 'В процессе'
    },
    {
        id: EnumStatus.produced,
        items: [],
        name: 'Произведено'
    },
    {
        id: EnumStatus.done,
        items: [],
        name: 'Выполнено'
    },
]