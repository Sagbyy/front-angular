import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {

  constructor(private authService: AuthService) { }

  submitForm(loginData: any) {
    this.authService.loginUser(loginData).subscribe(response => {

      console.log(response);
    });
  }
}
