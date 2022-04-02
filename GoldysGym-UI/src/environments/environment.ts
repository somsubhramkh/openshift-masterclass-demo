// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  
  // various APIs through API Gateway

  // AUTH_API : 'apigateway/userservice/api/v1/userservice',
  //   AUTH_LOGIN_API : 'apigateway/userservice/api/v1/userservice/login',
  // ADMIN_API_URL:'apigateway/gymservice/api/v1/gymservice',
  // USER_BOARD_API_URL:'apigateway/gymservice/api/v1/gymservice',
  // USER_QUERY_API_URL:'apigateway/enquiryservice/api/v1/enquiryservice',
  // USER_TICKET_API: 'apigateway/ticketservice/api/v1/ticketservice',

AUTH_API : 'user-service/api/v1/userservice',
AUTH_LOGIN_API : 'user-service/api/v1/userservice/login',
ADMIN_API_URL:'gymservice/api/v1/gymservice',
USER_BOARD_API_URL:'gymservice/api/v1/gymservice',
USER_QUERY_API_URL:'enquiryservice/api/v1/enquiryservice',
USER_TICKET_API: 'ticketservice/api/v1/ticketservice',
};



