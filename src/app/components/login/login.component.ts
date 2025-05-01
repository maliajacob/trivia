import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [IonicModule],
})
export class LoginComponent {
  error: string = '';

  constructor(
    private loginService: LoginService,
    private router: Router

  ) {}

  onGoogleLogin(): void {
    this.loginService.loginWithGoogle()
      .then(userCredential => {
        console.log('Login success:', userCredential.user);
        this.router.navigate(['/setup']); // Navigate to the home page after successful login
      })
      .catch(error => {
        console.error('Login failed:', error);
        this.error = 'Google login failed. Please try again.';
      });
  }
}