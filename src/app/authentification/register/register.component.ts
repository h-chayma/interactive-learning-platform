import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  onSubmit() {
    // Handle sign-up logic here (e.g., call an authentication service)
    console.log('Registered:', this.username, this.email, this.password);
  }
}
