import { Component, ElementRef, ViewChild } from '@angular/core';
import { IUser } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  credentials: IUser & { confirmPassword?: string } = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  registerError: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService

  ) {}

  register(): void {
    this.registerError = false;

    if (this.credentials.password !== this.credentials.confirmPassword) {
      return; 
    }

    this.userService.register(this.credentials).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: (err) => {
        console.log(err);
        if (err.status === 409) {
          this.registerError = true;
        } else {
          console.error('Registration failed', err);
        }
      }
    });
  }
}
