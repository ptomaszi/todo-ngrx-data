import { EntityMetadata } from 'ngrx-data';

export class ToDo {
    id: string;
    title: string;
    done: boolean;
}

export const ToDoEntity: EntityMetadata<ToDo> = {
    entityName: 'ToDo'
};

export const CompletedToDoEntity: EntityMetadata<ToDo> = {
    entityName: 'CompletedToDo'
};
