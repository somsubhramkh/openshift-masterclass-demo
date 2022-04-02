import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// AppComponent is to implement navigation across all the components
export class AppComponent implements OnInit {
  token;
  isLoggedIn ;
  showAdminBoard ;
  showMarketingBoard;
  showUserBoard;

  constructor(private tokenStorageService: TokenStorageService) { }

  // On initialization check the deatils of the user from session storage
  // Perform validations based on role and credentials implement the navigation
  // GO through the app.component.html file and uderstand and implement the logic
  ngOnInit() {

    //  check token is available or not
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    


    //If user token is available Write logic to check user is admin, email is admin@gmail.com and password is admin123,
    // write logic to check user is marketing team, email is marketing@gmail.com and password is marketing123, 
    // otherwise user is logged in
    if (this.isLoggedIn) {
      // const user = this.tokenStorageService.getUser();
      // console.log("user", user);

      this.token = this.tokenStorageService.getToken();
      console.log('token', this.token);
      let jwt = this.token;  
      let jwtData = jwt.split('.')[1]
      let decodedJwtJsonData = window.atob(jwtData)
      // console.log('decodedJwtJsonData: ' + decodedJwtJsonData);
      const data = JSON.parse(decodedJwtJsonData);
      const role = Object.values(data)[1];
      // console.log('role ' + role);
      if(role === 'admin'){
            this.showAdminBoard = true;
      }
      else if( role === 'user'){
        this.showUserBoard = true;
    }
    else{
      this.showMarketingBoard = true;
    }
    }
  }

  //Implement logout method when user clicks logout and clear the session storage
  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
