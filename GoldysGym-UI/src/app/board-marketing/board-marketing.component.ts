import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-marketing',
  templateUrl: './board-marketing.component.html',
  styleUrls: ['./board-marketing.component.css']
})

// This component is used to view all the quries raised by users,
// marketing team after solving the query, writes remarks and closes the query 
export class BoardMarketingComponent implements OnInit {
  content: any;
  cseRemarks = '';
  constructor(private userService: UserService) { }
  
  ngOnInit() {
    //fetch all the enquiries details 
    this.userService.getMarketingBoard().subscribe(
      data => {
        this.content = data;
        console.log('data',data);
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

  //Implement getContent method to return all enquiries which are active
  getContent(){
    if(this.content){
    return this.content.filter((item) => item.status == "active");
    }
  }

  //Implement closeQuery method to add cseRemarks, then update the status to inactive and close it 
  // closeQuery(value)
  // {
  //   value.status= "inactive";
  //   this.userService.closeQuery(value).subscribe();
  // }
}

