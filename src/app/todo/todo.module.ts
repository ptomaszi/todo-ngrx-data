import { ToDoAddComponent } from './components/todo-add.component';
import { ToDoService, CompletedToDoService } from './services/todo.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToDoComponent } from './components/todo.component';
import { ToDoCollectionComponent } from './containers/todo-collection.component';
import { GuidGenerator } from '../shared/services/guid-generator.service';
import { ToDoHeaderComponent } from './components/todo-header.component';

import { MatInputModule, MatCardModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  declarations: [
      ToDoComponent,
      ToDoCollectionComponent,
      ToDoHeaderComponent,
      ToDoAddComponent
  ],
  exports: [
    ToDoComponent,
    ToDoCollectionComponent
  ],
  providers: [ToDoService, CompletedToDoService, GuidGenerator]
})
export class ToDosModule {}
