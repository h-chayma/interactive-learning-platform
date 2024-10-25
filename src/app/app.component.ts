import { Component } from '@angular/core';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'interactive-learning-platform';

  submissions: any[] = [];

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.firebaseService.getSubmissions().subscribe(data => {
      this.submissions = data;
    });
  }

  submitSolution(solution: string): void {
    const submission = { solution, userId: 'USER_ID', challengeId: 'CHALLENGE_ID' };
    this.firebaseService.addSubmission(submission);
  }
}
