import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { FormBuilder,Validator, Validators} from '@angular/forms';
import {TokenStorageService} from '../../app/_services/token-storage.service';

@Component({
  selector: 'app-userquery',
  templateUrl: './userquery.component.html',
  styleUrls: ['./userquery.component.css']
})
//UserqueryComponent is reposnsible for the users to write their quries on any program
export class UserqueryComponent implements OnInit {
  content = '';
  form;
  queryRaised = false;
    // Form is created in html file and write code to make it functional using FormBuilder
  constructor(private userService: UserService,private formBuilder: FormBuilder,
    private tokenStorageService:TokenStorageService) { 
      
    this.form = this.formBuilder.group({
       name : ['',Validators.required],
      email:'',
      mobile:['',Validators.required],
      query:['',Validators.required],
     status:'',
    cseRemarks:''
    });
  }

  ngOnInit() {
  }

  //Implement onSubmit method to save all the queries of different users
  onSubmit(value){
    console.log("value",value);
    const user = this.tokenStorageService.getUser();
    value.email = user.email;
    // value.status= 'active';
    if(value.name.length>0&& value.email.length>0){

      // call userservice and using a method addQuery which adds query 
      this.userService.addQuery(value).subscribe(
        data => {
          this.queryRaised =true;
        }
      );
    }
    // this.reload();
  }
  
  // reload()
  // {
  //   window.location.reload();

  // }
}
