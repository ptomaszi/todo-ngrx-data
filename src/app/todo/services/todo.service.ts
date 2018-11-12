import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from 'ngrx-data';
import { ToDo } from '../models/todo';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ToDoService extends EntityCollectionServiceBase<ToDo> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('ToDo', serviceElementsFactory);
  }

  getCompletedTasksCount() {
    return this.entities$.pipe(
      map(x => x.filter(y => y.done === true)),
      map(r => r.length));
  }
}

@Injectable({ providedIn: 'root' })
export class CompletedToDoService extends EntityCollectionServiceBase<ToDo> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('CompletedToDo', serviceElementsFactory);
  }
}
