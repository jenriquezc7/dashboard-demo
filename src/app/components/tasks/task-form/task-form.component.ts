import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Task } from '../../../models/task';

@Component({
  selector: 'task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
    
    taskForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.taskForm = this.fb.group({
            title: ['', Validators.required],
            description: ['']
        })
    }
}
