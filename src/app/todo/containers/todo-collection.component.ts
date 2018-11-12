import { Observable } from 'rxjs';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ToDo } from '../models/todo';
import { ToDoService, CompletedToDoService } from '../services/todo.service';
import { GuidGenerator } from 'src/app/shared/services/guid-generator.service';

@Component({
    selector: 'app-todos',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './todo-collection.component.html'
})
export class ToDoCollectionComponent implements OnInit {
    todos$: Observable<ToDo[]>;
    completedToDos$: Observable<ToDo[]>;
    count$: Observable<number>;
    completed$: Observable<number>;

    constructor(
        private todoService: ToDoService,
        private completedToDoService: CompletedToDoService,
        private guidGenerator: GuidGenerator
        ) {
    }

    ngOnInit() {
        this.todos$ = this.todoService.entities$;
        this.completedToDos$ = this.completedToDoService.entities$;
        this.count$ = this.todoService.count$;
        this.completed$ = this.completedToDoService.count$;

        this.todoService.getAll();
    }

    completeToDo(todo: ToDo) {
        this.todoService.removeOneFromCache(todo);
        this.completedToDoService.addOneToCache(todo);
    }

    removeToDo(todo: ToDo) {
        if (todo.done) {
            this.completedToDoService.removeOneFromCache(todo);
        } else {
            this.todoService.removeOneFromCache(todo);
        }
    }

    addToDo(title: string) {
        const todo = new ToDo();
        todo.id = this.guidGenerator.guid();
        todo.title = title;
        todo.done = false;
        this.todoService.addOneToCache(todo);
    }

    refresh() {
        this.todoService.getAll();
    }
}
