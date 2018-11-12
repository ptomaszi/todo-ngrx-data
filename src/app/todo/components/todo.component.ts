import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { ToDo } from '../models/todo';

@Component({
    selector: 'app-todo',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class ToDoComponent {
    @Input() todo: ToDo;
    @Output() complete: EventEmitter<ToDo> = new EventEmitter();
    @Output() remove: EventEmitter<ToDo> = new EventEmitter();

    change() {
        this.complete.emit({...this.todo, done: true});
    }

    delete() {
        this.remove.emit(this.todo);
    }
}
