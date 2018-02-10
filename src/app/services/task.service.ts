import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Task } from "../models/task";

@Injectable()
export class TaskService {

  tasksCollection: AngularFirestoreCollection<Task>;
  tasks: Observable<Task[]>;

  constructor(private afs:AngularFirestore) {
    this.tasks = this.afs.collection<Task>('tasks').valueChanges();
  }

  getTasks() {
    return this.tasks;
  }

}
