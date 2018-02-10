import { Component, Input } from '@angular/core';
import { Task } from '../../../../models/task';

@Component({
    selector: 'task-list-item',
    templateUrl: './task-list-item.component.html',
    styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent {

    @Input()
    task: any;

    constructor() { }
}