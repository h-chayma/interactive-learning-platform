import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private db: AngularFireDatabase) {}

  // Example: Add a submission
  addSubmission(submission: any): void {
    this.db.list('submissions').push(submission);
  }

  // Example: Get all submissions
  getSubmissions(): Observable<any[]> {
    return this.db.list('submissions').valueChanges();
  }
}
