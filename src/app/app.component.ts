import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ TaskService ]
})
export class AppComponent implements OnInit {
  
  tasks: Array<any>;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }
}
