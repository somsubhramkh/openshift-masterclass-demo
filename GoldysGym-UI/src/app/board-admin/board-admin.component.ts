import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})

// This component is used to add a new program by admin
export class BoardAdminComponent implements OnInit {
  content = '';
  form;
  programAdded = false;
  message = '';
  // Form is created in html file and write code to make it functional using FormBuilder
  constructor(private userService: UserService,private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      programCode:['',Validators.required],
      programName: ['',Validators.required],
      description: ['',Validators.required],
      durationInMonths:['',Validators.required],
      price:['',Validators.required],
      discountRate : '',
      currentPrice : '',
      isActive : ['',Validators.required]
    });
   }
  
  ngOnInit() {
  }

  //  Implement onSubmit method to save a program,
  //  before saving calculate the currentPrice based on price and discount rate
  //  Use the appropriate service and its method to save the program 
  onSubmit(value){
    console.log("value",value);
   
    value.currentPrice = value.price - (value.price *( value.discountRate/100)) ;
    console.log("final value",value);
    if(value.programName.length>0 && value.price>0){
      this.userService.addProgram(value).subscribe(
        data => {
          this.programAdded =true;
          this.message = 'program added';
        },
        err=>{
          this.programAdded =true;
            this.message = err.error.message;            
        }
      );
      
    }

    // this.reload();
  }
  reload()
  {
    window.location.reload();
  }
}
