import { EntityMetadataMap } from 'ngrx-data';
import { ToDoEntity, CompletedToDoEntity } from '../todo/models/todo';

export const entityMetadata: EntityMetadataMap = {
  ToDo: ToDoEntity,
  CompletedToDo: CompletedToDoEntity
};

export const entityConfig = {
    entityMetadata,
};
