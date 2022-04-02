import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-executiveticket',
  templateUrl: './executiveticket.component.html',
  styleUrls: ['./executiveticket.component.css']
})
export class ExecutiveticketComponent implements OnInit {
  content: any;
  cseRemarks = '';
  constructor(private userService: UserService,private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    //fetch all the enquiries details 
    this.userService.getAllTickets().subscribe(
      data => {
        this.content = data;
        console.log('data',data);
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

  closeTicket(value)
  {
      const user = this.tokenStorageService.getUser();
      value.executiveEmail = user.email;
      console.log('updated ticked', value);
      this.userService.closeTicket(value).subscribe();
  }
}
