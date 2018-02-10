import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskListItemComponent } from './task-list/task-list-item/task-list-item.component';

@NgModule({
  declarations: [
      TaskFormComponent,
      TaskListComponent,
      TaskListItemComponent
    ],
  exports: [
      TaskFormComponent,
      TaskListComponent
    ],
  imports: [
      CommonModule,
      ReactiveFormsModule
    ]
})
export class TasksModule {}
