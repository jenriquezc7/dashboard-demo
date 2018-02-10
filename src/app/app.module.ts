import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TasksModule } from './components/tasks/tasks.module';

import { AppComponent } from './app.component';

import { TaskService } from './services/task.service';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-fs'),
    TasksModule
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
