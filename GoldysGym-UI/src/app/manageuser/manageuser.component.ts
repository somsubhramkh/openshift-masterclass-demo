import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.css']
})
export class ManageuserComponent implements OnInit {
  content;
  constructor(private userService: UserService) { }

  ngOnInit() {
     // fetching programs data from service
     this.userService.getUsers().subscribe(
      data => {
        this.content = data;
        console.log("data" , data);
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

  updateUser(user){
    // console.log('user',user);
    this.userService.updateUser(user).subscribe();
  }

}
