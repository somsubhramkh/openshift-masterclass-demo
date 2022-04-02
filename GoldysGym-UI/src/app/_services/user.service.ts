import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { environment} from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
  'Access-Control-Allow-Origin':'*' },
  )
};
@Injectable({
  providedIn: 'root'
})

// This service is responsible for performing all the operations for different users
export class UserService {
  USER_BOARD_API_URL =  environment.USER_BOARD_API_URL;
  ADMIN_API_URL = environment.ADMIN_API_URL;


  constructor(private http: HttpClient) { }

  //Impelement getUserDashBoard method to get all programs which are viewed by users
  getUserBoard(): Observable<any> {
    return this.http.get(this.USER_BOARD_API_URL);
  }

  getUsers(): Observable<any> {
    return this.http.get(environment.AUTH_API);
  }

  updateUser(user): Observable<any> {
    return this.http.put(environment.AUTH_API,
      {
        email: user.email,
        role: user.role,
        password:user.password
      },httpOptions);
  }

  // Implement getModeratorBoard method to get all queries raised by users
  getMarketingBoard(): Observable<any> {
    return this.http.get(environment.USER_QUERY_API_URL + '/admin/');
  }


  //Implement addQuery method  to save a query raised by user 
  addQuery(query:any): Observable<any> {
    
    return this.http.post(environment.USER_QUERY_API_URL, {
      name : query.name,
      email: query.email,
      mobile: query.mobile,
      query: query.query
    },httpOptions);
  }

  getAllTickets(): Observable<any>{
      return this.http.get(environment.USER_TICKET_API );
  }
  //Implement closeTicket method to close the ticket 
  closeTicket(ticket:any):Observable<any>{
    return this.http.put(environment.USER_TICKET_API,
    {
      enquiryCode: ticket.enquiryCode,
      executiveEmail: ticket.executiveEmail,
      open: ticket.open,
      remarks: ticket.remarks,
      ticketId: ticket.ticketId
        
    },httpOptions);
  }
  //Implement addProgram method to add a program  
  addProgram(program:any): Observable<any> {
    
    return this.http.post(environment.ADMIN_API_URL, {
    programCode:program.programCode,
    programName:program.programName,
    description: program.description,
    durationInMonths:program.durationInMonths,
    price:program.price,
    discountRate:program.discountRate,
    currentPrice:program.currentPrice,
    isActive:program.isActive
    },httpOptions);
  }

  //Implement deleteProgram method to delete a program
  deleteProgram(program:any):Observable<any>{
    return this.http.delete(environment.ADMIN_API_URL +'/'+program.programCode+'/');
  
  }
}
