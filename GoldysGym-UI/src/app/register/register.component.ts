import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { FormBuilder } from '@angular/forms';
import { from } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

// RegisterComponent is to registration of a user
export class RegisterComponent implements OnInit {
  form: any = {
    email:'',
    password:'',
    repeatpsw:'',
    role:''
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  hideSuccessMessage = false;  
  constructor(private authService: AuthService) {}

  ngOnInit() {
  }
  
  // Implement onSubmit  to save the user details
  onSubmit() {
    // console.log("initial value",this.form);
    if(this.form.password == this.form.repeatpsw ){
     this.form.role = "user";
    //  console.log("final value",this.form);
      this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );  
   }
  }
  FadeOutSuccessMsg() {
    setTimeout( () => {
        this.hideSuccessMessage = true;
     }, 2000);
}

}

