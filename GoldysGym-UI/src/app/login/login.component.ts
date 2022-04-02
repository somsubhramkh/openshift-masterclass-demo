import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

// LoginComponent is used to make all types of users login to this application
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  role;
  errorMessage = '';

  constructor(private authService: AuthService,
     private tokenStorage: TokenStorageService) {}

  // On the initialization of the component write login to make user login works
  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.role = this.tokenStorage.getUser().roles;
    }
  }

  // Implement the onSubmit method once user clicks on login button
  // Write logic so that on successful login, store the user details in session
  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {
        // console.log('token',data.token);
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(this.form);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.role = this.tokenStorage.getUser().role;
        this.reloadPage();
      },
      err => {
        this.isLoginFailed = true;
        this.errorMessage = err.error.message;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }

}