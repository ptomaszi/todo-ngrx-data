import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-todo-header',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template:
    `
        <div>
            Tasks: {{count}}
            Completed: {{completed}}
        </div>
    `
})
export class ToDoHeaderComponent {
    @Input() count: number;
    @Input() completed: number;
}
