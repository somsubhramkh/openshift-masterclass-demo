import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Program } from '../models/Program';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})

// This component is used to view all the existing programs by user
export class BoardUserComponent implements OnInit {
  content:Program;

  constructor(private userService: UserService) { }

  ngOnInit() {
    // fetch all the programs and assign to content
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
}
