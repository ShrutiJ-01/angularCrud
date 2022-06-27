import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private dbPath = '/tasks';
  tasksRef: AngularFirestoreCollection<Task>;
  constructor(private db: AngularFirestore) {
    this.tasksRef = db.collection(this.dbPath);
  }
  getAll(): AngularFirestoreCollection<Task> {
    return this.tasksRef;
  }
  create(tutorial: Task): any {
    return this.tasksRef.add({ ...tutorial });
  }
  update(id: string, data: any): Promise<void> {
    return this.tasksRef.doc(id).update(data);
  }
  delete(id: string): Promise<void> {
    return this.tasksRef.doc(id).delete();
  }
}