import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-todo-add',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template:
    `
        <div>
            <mat-form-field>
                <input matInput [(ngModel)]="title" />
            </mat-form-field>
            <button mat-button (click)="addToDo()">Add</button>
        </div>
    `
})
export class ToDoAddComponent {
    title;

    @Output() add: EventEmitter<string> = new EventEmitter();

    addToDo() {
        if (this.title) {
            this.add.emit(this.title);
            this.title = '';
        }
    }
}
