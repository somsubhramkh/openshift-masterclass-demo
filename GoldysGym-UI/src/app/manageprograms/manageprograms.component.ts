import { Component, OnInit } from '@angular/core';
import {Program} from '../models/Program';
import { UserService } from '../_services/user.service';
@Component({
  selector: 'app-manageprograms',
  templateUrl: './manageprograms.component.html',
  styleUrls: ['./manageprograms.component.css']
})

// ManageprogramsComponent is responsible to manage the programs by the admin
export class ManageprogramsComponent implements OnInit {
  content:Program;
  constructor(private userService: UserService) { }
  // On initialization get all the existing programs
  ngOnInit() {
     // fetching programs data from service
     this.userService.getUserBoard().subscribe(
      data => {
        this.content = data;
        // console.log("data" , data);
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

   //Implement deleteProgram method to delete the program
   deleteProgram(value)
   {
          // console.log("delete program",value);
     this.userService.deleteProgram(value).subscribe(
      data => {
        this.userService.getUserBoard().subscribe(
          data=>{
            this.content=data;
          }
        )
      }
     );
   }

}
