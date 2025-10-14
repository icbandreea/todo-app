import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUserCredentials } from 'src/app/user.model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials: IUserCredentials = {email: '', password: '' };
  signInError: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService

  ) {}

  signIn() {
    this.signInError = false;
    this.userService.signIn(this.credentials).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: () => (this.signInError = true)
    });
  }

}
