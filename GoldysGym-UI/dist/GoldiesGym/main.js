(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- header starts -->\n\n<div id=\"header\">\n    <ul class=\"topnav\" routerLinkActive=\"active\">\n      <li>\n      <a href=\"/home\" >Goldies Gym</a>\n    </li> \n      <li  *ngIf=\"showAdminBoard\">\n        <a href=\"/admin\"  routerLink=\"admin\">Add Program</a>\n      </li>\n      <li  *ngIf=\"showAdminBoard\">\n        <a href=\"/manageprograms\"  routerLink=\"manageprograms\">Manage Programs</a>\n      </li>\n      <li  *ngIf=\"showAdminBoard\">\n        <a href=\"/manageusers\"  routerLink=\"manageusers\">Manage Users</a>\n      </li>\n      <li  *ngIf=\"showMarketingBoard\">\n        <a href=\"/mart\"  routerLink=\"mart\">All Queries</a>\n      </li>\n      <li  *ngIf=\"showMarketingBoard\">\n        <a href=\"/tickets\"  routerLink=\"tickets\">Tickets</a>\n      </li>\n      <li *ngIf=\"showUserBoard\">\n        <a href=\"/user\" routerLink=\"user\">All Programs</a>\n      </li>\n      <li *ngIf=\"showUserBoard\">\n        <a href=\"/query\" routerLink=\"query\">Raise Query</a>\n      </li>\n      <li *ngIf=\"!isLoggedIn\" class=\"right\">\n        <a href=\"/register\"  routerLink=\"register\">Sign Up</a>\n      </li>\n      <li *ngIf=\"!isLoggedIn\" class=\"right\">\n        <a href=\"/login\"  routerLink=\"login\">Login</a>\n      </li>\n      <li  class=\"right\" *ngIf=\"isLoggedIn\">\n        <a href   (click)=\"logout()\">LogOut</a>\n      </li>\n    </ul>\n  </div>\n  <!-- header ends -->\n\n<!-- Added router outlet to enable routing of all components -->\n  <router-outlet></router-outlet>\n\n<!-- Added footer compoent so that it is available across all the views -->\n  <app-footer></app-footer>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/board-admin/board-admin.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/board-admin/board-admin.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div id = \"admin\">\n  <div class=\"container\">\n      <form \n      [formGroup]=\"form\" (ngSubmit)=\"form.valid && onSubmit(form.value)\" \n      >\n      <div class=\"row\">\n        <div class=\"col-25\">\n          <label for=\"fname\">Fitness Program Code</label>\n        </div>\n        <div class=\"col-75\">\n          <input formControlName=\"programCode\" type=\"text\"  name=\"code\" placeholder=\"Enter Program Code\">\n        </div>\n      </div>\n  \n      <div class=\"row\">\n        <div class=\"col-25\">\n          <label for=\"fname\">Fitness Program Name</label>\n        </div>\n        <div class=\"col-75\">\n          <input formControlName=\"programName\" type=\"text\" placeholder=\"Enter Program Name\">\n        </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-25\">\n            <label for=\"durationInMonths\">Duration In Months</label>\n          </div>\n          <div class=\"col-75\">\n            <input type=\"number\" min=\"0\" formControlName=\"durationInMonths\"   placeholder=\"Enter duration in months\">\n          </div>\n        </div>\n      <div class=\"row\">\n        <div class=\"col-25\">\n          <label for=\"price\">Price</label>\n        </div>\n        <div class=\"col-75\">\n          <input type=\"number\" min=\"0\" formControlName=\"price\"  placeholder=\"Enter program price\">\n        </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-25\">\n            <label for=\"price\">Discount Rate</label>\n          </div>\n          <div class=\"col-75\">\n            <input type=\"number\" min=\"0\" id=\"discountrate\" formControlName=\"discountRate\"  placeholder=\"Enter discount rate\">\n          </div>\n        </div>\n      <div class=\"row\">\n        <div class=\"col-25\">\n          <label for=\"activeStatus\">Status</label>\n        </div>\n        <div class=\"col-75\">\n          <select formControlName=\"isActive\" name=\"status\">\n            <option value=\"true\">Active</option>\n            <option value=\"false\">Inactive</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-25\">\n          <label for=\"subject\">Description</label>\n        </div>\n        <div class=\"col-75\">\n          <textarea formControlName=\"description\" id=\"subject\" name=\"subject\" placeholder=\"Enter Program Description\" style=\"height:140px\"></textarea>\n        </div>\n      </div>\n      <div class=\"row\">\n        <input type=\"submit\" value=\"Add Program\">\n      </div>\n  \n      <div class=\"alert alert-warning\" *ngIf=\"programAdded\">\n        {{message}}\n      </div>\n      </form>\n  \n  \n  </div>\n  </div>\n  \n  \n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/board-marketing/board-marketing.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/board-marketing/board-marketing.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id = \"marketing\">\n<div class=\"container\">  \n    <div class=\"row\" *ngFor=\"let query of content\"  style=\"display: inline-flex;\">\n      <div class=\"column\">\n        <div class=\"card\">\n          <img class=\"card-img-top\" src=\"../../assets/img/gallery-many.jpeg\" alt=\"program-img\">\n          <div class=\"card-block\">\n              <h4 class=\"card-title\"> Name : {{query.name | uppercase }}</h4>\n              <div class=\"card-text\">\n                    {{query.query}}          \n              </div>\n              <span> mail : {{query.email }}</span>\n          </div>\n          <div class=\"card-footer\">\n                <span class=\"float-right\"></span>\n              <span> mobile: {{query.mobile}} </span>\n          </div>\n          <!-- <input  [(ngModel)]=\"query.cseRemarks\" type = \"text\" required>\n          <button (click) = closeQuery(query)> close query</button> -->\n      </div>\n      </div>\n    \n    </div>\n\n    </div>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/board-user/board-user.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/board-user/board-user.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div id =\"user\">\n<div class=\"container\">  \n<div class=\"row\" *ngFor=\"let list_programs of content\" style=\"display: inline-flex;\">\n  <div class=\"column\">\n    <div class=\"card\">\n      <img class=\"card-img-top\" src=\"../../assets/img/gallery-many.jpeg\" alt=\"program-img\">\n      <div class=\"card-block\">\n          <h4 class=\"card-title\">{{list_programs.programName |  uppercase}}</h4>\n          <div class=\"card-text\">\n                {{list_programs.description}}          \n          </div>\n          <span> only Rs {{list_programs.currentPrice}}</span>\n      </div>\n      <div class=\"card-footer\">\n            <span class=\"float-right\">{{list_programs.discountRate}}% Off on </span>\n          <span><em class=\"\"></em>Rs {{list_programs.price}}</span>\n      </div>\n  </div>\n  </div>\n</div>\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/executiveticket/executiveticket.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/executiveticket/executiveticket.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id = \"marketing\">\n    <div class=\"container\">  \n        <div class=\"row\" *ngFor=\"let ticket of content\"  style=\"display: inline-flex;\">\n          <div class=\"column\">\n            <div class=\"card\">\n              <img class=\"card-img-top\" src=\"../../assets/img/gallery-many.jpeg\" alt=\"program-img\">\n              <div class=\"card-block\">\n                  <h4 class=\"card-title\"> Enquiry Code : {{ticket.enquiryCode }}</h4>\n                  <!-- <div class=\"card-text\">\n                        {{ticket.ticket}}          \n                  </div> -->\n                  <span> Executive mail : {{ ticket.executiveEmail}}</span>\n              </div>\n              <div class=\"card-footer\">\n                    <span class=\"float-right\"></span>\n                  <span> Ticket Id: {{ticket.ticketId}} </span>\n              </div>\n              <input  [(ngModel)]=\"ticket.remarks\" type = \"text\" required>\n              <button (click) = closeTicket(ticket)> close ticket</button>\n          </div>\n          </div>\n        \n        </div>\n    \n        </div>\n      </div>\n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <!-- footer starts -->\n  <div class=\"footer\" >\n    \n    <p style=\"float: left;\"> All Rights Reserved.</p>\n     <p style=\"float: right;\"><em style=\"font-size:24px\" class=\"fa\">&#xf003;</em>goldies@gmail.com&nbsp;</p>\n    <p style=\"float: right; \"> <em style=\"font-size:24px\" class=\"fa\">&#xf10b;</em>9876543210&nbsp;&nbsp;</p>\n  \n</div>\n<!-- footer ends -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- hero image starts -->\n<img id=\"hero-img\" src=\"../../assets/img/hero-image1.jpg\" width=\"460\" alt=\"Goldies Gym\" height=\"325\">\n<!-- hero image ends -->\n\n<div class=\"about-section\"  style=\"margin-top:-5px;\">\n  <h1>Goldies Gym</h1>\n  <p> Join Us today!!!</p>\n  <p>Exercise not only changes your body, it changes your mind, your attitude and your mood</p>\n</div>\n<!-- centered text starts-->\n<div class=\"center\" >\n    <h4>EXPLORE OUR WIDE RANGE OF PROGRAMS</h4>\n  </div>\n<!-- centered text ends -->\n\n<!-- image gallery starts -->\n<div id=\"gallery-id\">\n  <div class=\"gallery\" >\n    <div class=\"desc\"> YOGA</div>\n    <a target=\"_blank\" href=\"../../assets/img/gallery-img-yoga.jpeg\">\n      <img src=\"../../assets/img/gallery-img-yoga.jpeg\" alt=\"YOGA\" width=\"600\" height=\"400\">\n    </a>\n  </div>\n  \n  <div class=\"gallery\">\n    <div class=\"desc\">CIRCUIT TRAINING</div>\n    <a target=\"_blank\" href=\"../../assets/img/gallery-circuit.jpeg\">\n      <img src=\"../../assets/img/gallery-circuit.jpeg\" alt=\"CIRCUIT TRAINING\" width=\"600\" height=\"400\">\n    </a>\n  </div>\n  \n  <div class=\"gallery\">\n    <div class=\"desc\">CYCLING</div>\n    <a target=\"_blank\" href=\"../../assets/img/gallery-cycling.jpeg\">\n      <img src=\"../../assets/img/gallery-cycling.jpeg\" alt=\"CYCLING\" width=\"600\" height=\"400\">\n    </a>\n  </div>\n\n  <div class=\"gallery\">\n    <div class=\"desc\">AEROBICS</div>\n    <a target=\"_blank\" href=\"../../assets/img/gallery-aerobics.jpeg\">\n      <img src=\"../../assets/img/gallery-aerobics.jpeg\" alt=\"AEROBICS\" width=\"600\" height=\"400\">\n    </a>\n  </div>\n</div>\n<!-- image gallery ends -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- login component starts -->\n\n<div id=\"login\">\n  <div class=\"card card-container\" *ngIf=\"!isLoggedIn\">\n    <img\n      id=\"profile-img\"\n      src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\"\n      class=\"profile-img-card\"\n      alt=\"login-img\"\n    />\n    <form\n      *ngIf=\"!isLoggedIn\"\n      name=\"form\"\n      (ngSubmit)=\"f.form.valid && onSubmit()\"\n      #f=\"ngForm\"\n      novalidate >\n      <div class=\"container\">\n        <label for=\"email\"><b>Email</b></label>\n        <input\n          type=\"email\"\n          name=\"email\"\n          [(ngModel)]=\"form.email\"\n          required\n          placeholder=\"Enter Email\"\n          email\n          #email=\"ngModel\"\n        />\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && email.invalid\">\n          <div *ngIf=\"email.errors.required\">Email is required</div>\n          <div *ngIf=\"email.errors.email\">\n            Email must be a valid email address\n          </div>\n        </div>\n        <label for=\"password\"> <b>Password</b></label>\n        <input\n          type=\"password\"\n          placeholder=\"Enter Password\"\n          name=\"password\"\n          [(ngModel)]=\"form.password\"\n          required\n          minlength=\"6\"\n          #password=\"ngModel\"\n        />\n        <div\n          class=\"alert-danger\"  *ngIf=\"f.submitted && password.invalid\">\n          <div *ngIf=\"password.errors.required\">Password is required</div>\n          <div *ngIf=\"password.errors.minlength\">\n            Password must be at least 6 characters\n          </div>\n        </div>\n        <button class=\"btn btn-primary btn-block\">\n          Login\n        </button>\n        <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"f.submitted && isLoginFailed\">\n          Login failed : {{ errorMessage }}\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n<!-- login component ends -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/manageprograms/manageprograms.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manageprograms/manageprograms.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id =\"user\">\n    <div class=\"container\">  \n    <div class=\"row\" *ngFor=\"let list_programs of content\" style=\"display: inline-flex;\">\n      <div class=\"column\">\n        <div class=\"card\">\n          <img class=\"card-img-top\" src=\"../../assets/img/gallery-many.jpeg\" alt=\"program-img\">\n          <div class=\"card-block\">\n              <h4 class=\"card-title\">{{list_programs.programName |  uppercase}}</h4>\n              <div class=\"card-text\">\n                    {{list_programs.description}}          \n              </div>\n              <span> only Rs {{list_programs.currentPrice}}</span>\n          </div>\n          <div class=\"card-footer\">\n                <span class=\"float-right\"> {{list_programs.discountRate}}% Off on </span>\n              <span>Rs {{list_programs.price}}</span>\n          </div>\n          <button (click) = deleteProgram(list_programs)>delete program</button>\n      </div>\n      </div>\n    </div>\n    </div>\n    </div>\n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/manageuser/manageuser.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manageuser/manageuser.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"left\">\n      <table>\n          <caption>Manage Users</caption>\n        <tr>\n          <th id=\"th-id\">Email</th>\n          <th id=\"th-id\"> Role</th>\n          <th id=\"th-id\"> </th>\n        </tr>\n  \n        <tr *ngFor=\"let user of content \">\n          <td>{{user.email}}</td>\n          <!-- <td>{{person.mobile}}</td> -->\n          <td>\n          <select  name=\"role\" [(ngModel)]=\"user.role\">\n            <option value=\"user\">User</option>\n            <option value=\"executive\">Executive</option>\n            <option value=\"admin\">Admin</option>\n          </select>\n        </td>\n        <td> <button (click) = updateUser(user) >update</button> </td>\n        </tr>\n      </table>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--  register component html -->\n\n<div id=\"signup\">\n  <div class=\"card card-container\" *ngIf=\"!isSuccessful\">\n    <img\n      id=\"profile-img\"\n      src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\"\n      class=\"profile-img-card\"\n      alt=\"register-img\"\n    />\n    <form\n      *ngIf=\"!isSuccessful\"\n      name=\"form\"\n      (ngSubmit)=\"f.form.valid && onSubmit()\"\n      #f=\"ngForm\"\n      novalidate\n    >\n      <div class=\"container\">\n        <label for=\"email\"><b>Email</b></label>\n        <input\n          type=\"email\"\n          name=\"email\"\n          [(ngModel)]=\"form.email\"\n          required\n          placeholder=\"Enter Email\"\n          email\n          #email=\"ngModel\"\n        />\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && email.invalid\">\n          <div *ngIf=\"email.errors.required\">Email is required</div>\n          <div *ngIf=\"email.errors.email\">\n            Email must be a valid email address\n          </div>\n        </div>\n     \n        <label for=\"password\"><b>Password</b></label>\n        <input\n          type=\"password\"\n          name=\"password\"\n          [(ngModel)]=\"form.password\"\n          required\n          minlength=\"6\"\n          placeholder=\"Enter Password\"\n          #password=\"ngModel\"\n        />\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && password.invalid\">\n          <div *ngIf=\"password.errors.required\">Password is required</div>\n          <div *ngIf=\"password.errors.minlength\">\n            Password must be at least 6 characters\n          </div>\n        </div>\n        <label for=\"repeatpsw\"><b>Reenter Password</b></label>\n        <input\n          type=\"password\"\n          name=\"repeatpsw\"\n          [(ngModel)]=\"form.repeatpsw\"\n          required\n          minlength=\"6\"\n          #repeatpsw=\"ngModel\"\n          placeholder=\"Reenter Password\"\n        />\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && repeatpsw.invalid\">\n          <div *ngIf=\"repeatpsw.errors.required\">Password is required</div>\n          <div *ngIf=\"repeatpsw.errors.minlength\">\n            Password must be at least 6 characters\n          </div>\n        </div>\n        <button class=\"signupbtn\">Sign Up</button>\n      </div>\n\n      <div class=\"alert alert-warning\" *ngIf=\"f.submitted && isSignUpFailed\">\n        Signup failed!<br/>{{ errorMessage }}\n      </div>\n\n    </form>\n  </div>\n</div>\n<div  *ngIf=\"!hideSuccessMessage\" [ngStyle]=\"{float: center}\" >\n  <div class=\"alert alert-success\" [ngClass] =\"FadeOutSuccessMsg()\" *ngIf=\"isSuccessful\">\n    Your registration is successful! Please login\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/userquery/userquery.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userquery/userquery.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- form to add user query starts -->\n<div id=\"userquery\">\n<div class=\"container\">\n    <form \n    [formGroup]=\"form\" (ngSubmit)=\" form.valid && onSubmit(form.value) \" \n    >\n    <div class=\"row\">\n      <div class=\"col-25\">\n        <label for=\"name\">Enter your name</label>\n      </div>\n      <div class=\"col-75\">\n        <input formControlName=\"name\" type=\"text\" id=\"name\" name=\"name\" placeholder=\"Enter your Name\">\n      </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-25\">\n          <label for=\"mobile\">Mobile Number</label>\n        </div>\n        <div class=\"col-75\">\n          <input type=\"number\" formControlName=\"mobile\" id=\"mobile\" name=\"mobile\" placeholder=\"Enter your mobile number\">\n        </div>\n      </div>\n\n    <div class=\"row\">\n      <div class=\"col-25\">\n        <label for=\"subject\">Query</label>\n      </div>\n      <div class=\"col-75\">\n        <textarea formControlName=\"query\" id=\"subject\" name=\"query\" placeholder=\"Enter your query\" style=\"height:140px\"></textarea>\n      </div>\n    </div>\n    <div class=\"row\">\n      <input type=\"submit\" value=\"Submit Query\">\n    </div>\n    </form>\n      <!-- message showing query is raised -->\n    <div id=\"id01\"  *ngIf=\"queryRaised\">\n        <div >\n          <div >\n            <span onclick=\"document.getElementById('id01').style.display='none'\" class=\"w3-button w3-display-topright\">&times;</span>\n            <p>Query Raised Successfully</p>\n          </div>\n        </div>\n      </div>    \n  </div>\n</div>\n<!-- form to add a query ends -->\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_interceptor/auth.interceptor.ts":
/*!**************************************************!*\
  !*** ./src/app/_interceptor/auth.interceptor.ts ***!
  \**************************************************/
/*! exports provided: AuthInterceptor, authInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInterceptorProviders", function() { return authInterceptorProviders; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");




var TOKEN_HEADER_KEY = 'Authorization'; // for Spring Boot back-end
// This has to be implemented when integrating with backend 
// As of now not required to write logic
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(token) {
        this.token = token;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authReq = req;
        var token = this.token.getToken();
        if (token != null) {
            // for sending requests to back-end
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
        }
        return next.handle(authReq);
    };
    AuthInterceptor.ctorParameters = function () { return [
        { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] }
    ]; };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());

var authInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: AuthInterceptor, multi: true }
];


/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    //Implement register method using HttpClient to register a user 
    AuthService.prototype.register = function (user) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].AUTH_API, {
            email: user.email,
            password: user.password,
            role: user.role
        }, httpOptions);
    };
    //Implement login method using HttpClient for a user to login
    AuthService.prototype.login = function (credentials) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].AUTH_LOGIN_API, {
            email: credentials.email,
            password: credentials.password
        }, httpOptions);
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        // This service is responsible for the login and regisration of user
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/_services/authguard.service.ts":
/*!************************************************!*\
  !*** ./src/app/_services/authguard.service.ts ***!
  \************************************************/
/*! exports provided: AuthguardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthguardService", function() { return AuthguardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token-storage.service */ "./src/app/_services/token-storage.service.ts");




var AuthguardService = /** @class */ (function () {
    function AuthguardService(tokenStorageService, router) {
        this.tokenStorageService = tokenStorageService;
        this.router = router;
    }
    AuthguardService.prototype.canActivate = function () {
        if (!!!this.tokenStorageService.getToken()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    AuthguardService.ctorParameters = function () { return [
        { type: _token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthguardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        // This the implementation of routes guards
        // Write logic to implement canActivate interface
        // write code to check if user is logged or not and allow to see the routes
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthguardService);
    return AuthguardService;
}());



/***/ }),

/***/ "./src/app/_services/token-storage.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_services/token-storage.service.ts ***!
  \****************************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// const TOKEN_KEY = 'goldysSecret';
var TOKEN_KEY = 'token';
var USER_KEY = 'goldysSecret';
var TokenStorageService = /** @class */ (function () {
    function TokenStorageService() {
    }
    // Implement saveToken method to save access Token while user is login 
    TokenStorageService.prototype.saveToken = function (token) {
        // console.log('token',token);
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    };
    // Implement getToken method to return the token stored in session storage
    TokenStorageService.prototype.getToken = function () {
        return sessionStorage.getItem(TOKEN_KEY);
    };
    //Implement saveUser method to save the logged in user details in session storage
    TokenStorageService.prototype.saveUser = function (user) {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    };
    // Implement getUser method to return the saved user deatils from session storage
    TokenStorageService.prototype.getUser = function () {
        return JSON.parse(sessionStorage.getItem(USER_KEY));
    };
    // Implement signOut method to clear the session
    TokenStorageService.prototype.signOut = function () {
        window.sessionStorage.clear();
    };
    TokenStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        //This service is to save logged in users deatils and tokens in session 
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TokenStorageService);
    return TokenStorageService;
}());



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*' })
};
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.USER_BOARD_API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].USER_BOARD_API_URL;
        this.ADMIN_API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ADMIN_API_URL;
    }
    //Impelement getUserDashBoard method to get all programs which are viewed by users
    UserService.prototype.getUserBoard = function () {
        return this.http.get(this.USER_BOARD_API_URL);
    };
    UserService.prototype.getUsers = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].AUTH_API);
    };
    UserService.prototype.updateUser = function (user) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].AUTH_API, {
            email: user.email,
            role: user.role,
            password: user.password
        }, httpOptions);
    };
    // Implement getModeratorBoard method to get all queries raised by users
    UserService.prototype.getMarketingBoard = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].USER_QUERY_API_URL + '/admin/');
    };
    //Implement addQuery method  to save a query raised by user 
    UserService.prototype.addQuery = function (query) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].USER_QUERY_API_URL, {
            name: query.name,
            email: query.email,
            mobile: query.mobile,
            query: query.query
        }, httpOptions);
    };
    UserService.prototype.getAllTickets = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].USER_TICKET_API);
    };
    //Implement closeTicket method to close the ticket 
    UserService.prototype.closeTicket = function (ticket) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].USER_TICKET_API, {
            enquiryCode: ticket.enquiryCode,
            executiveEmail: ticket.executiveEmail,
            open: ticket.open,
            remarks: ticket.remarks,
            ticketId: ticket.ticketId
        }, httpOptions);
    };
    //Implement addProgram method to add a program  
    UserService.prototype.addProgram = function (program) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ADMIN_API_URL, {
            programCode: program.programCode,
            programName: program.programName,
            description: program.description,
            durationInMonths: program.durationInMonths,
            price: program.price,
            discountRate: program.discountRate,
            currentPrice: program.currentPrice,
            isActive: program.isActive
        }, httpOptions);
    };
    //Implement deleteProgram method to delete a program
    UserService.prototype.deleteProgram = function (program) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ADMIN_API_URL + '/' + program.programCode + '/');
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        // This service is responsible for performing all the operations for different users
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./board-user/board-user.component */ "./src/app/board-user/board-user.component.ts");
/* harmony import */ var _board_marketing_board_marketing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./board-marketing/board-marketing.component */ "./src/app/board-marketing/board-marketing.component.ts");
/* harmony import */ var _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./board-admin/board-admin.component */ "./src/app/board-admin/board-admin.component.ts");
/* harmony import */ var _userquery_userquery_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./userquery/userquery.component */ "./src/app/userquery/userquery.component.ts");
/* harmony import */ var _manageprograms_manageprograms_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./manageprograms/manageprograms.component */ "./src/app/manageprograms/manageprograms.component.ts");
/* harmony import */ var _services_authguard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_services/authguard.service */ "./src/app/_services/authguard.service.ts");
/* harmony import */ var _manageuser_manageuser_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./manageuser/manageuser.component */ "./src/app/manageuser/manageuser.component.ts");
/* harmony import */ var _executiveticket_executiveticket_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./executiveticket/executiveticket.component */ "./src/app/executiveticket/executiveticket.component.ts");














//Implement the routes for all components and add canActivate to required paths
var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'user', component: _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_6__["BoardUserComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_11__["AuthguardService"]] },
    { path: 'mart', component: _board_marketing_board_marketing_component__WEBPACK_IMPORTED_MODULE_7__["BoardMarketingComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_11__["AuthguardService"]] },
    { path: 'admin', component: _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_8__["BoardAdminComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_11__["AuthguardService"]] },
    { path: 'query', component: _userquery_userquery_component__WEBPACK_IMPORTED_MODULE_9__["UserqueryComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_11__["AuthguardService"]] },
    { path: 'manageprograms', component: _manageprograms_manageprograms_component__WEBPACK_IMPORTED_MODULE_10__["ManageprogramsComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_11__["AuthguardService"]] },
    { path: 'manageusers', component: _manageuser_manageuser_component__WEBPACK_IMPORTED_MODULE_12__["ManageuserComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_11__["AuthguardService"]] },
    { path: 'tickets', component: _executiveticket_executiveticket_component__WEBPACK_IMPORTED_MODULE_13__["ExecutiveticketComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_11__["AuthguardService"]] },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    // AppRoutingModule is responsible for routing to all the components
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
        // AppRoutingModule is responsible for routing to all the components
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/* css for header div to make it fixed */\n#header{\n  margin: 0;\n  width: 100%;\n  position: fixed;\n  overflow: hidden; \n}\n/* css for all header items */\nul.topnav {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    position: fixed;\n    overflow: hidden;\n    background-color: #333;\n  }\nul.topnav li {float: left;}\nul.topnav li a {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n  }\nul.topnav li a:hover:not(.active) {background-color: #111;}\n/* ul.topnav li a.active {background-color: #4CAF50;} */\nul.topnav li.right {float: right;}\n@media screen and (max-width: 600px) {\n    ul.topnav li.right, \n    ul.topnav li {float: none;\n    \n    }\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdDQUF3QztBQUN4QztFQUNFLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUVBLDZCQUE2QjtBQUM3QjtJQUNJLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtFQUN4QjtBQUVBLGNBQWMsV0FBVyxDQUFDO0FBRTFCO0lBQ0UsY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2QjtBQUVBLG1DQUFtQyxzQkFBc0IsQ0FBQztBQUUxRCx1REFBdUQ7QUFFdkQsb0JBQW9CLFlBQVksQ0FBQztBQUVqQztJQUNFO2tCQUNjLFdBQVc7O0lBRXpCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogY3NzIGZvciBoZWFkZXIgZGl2IHRvIG1ha2UgaXQgZml4ZWQgKi9cbiNoZWFkZXJ7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgXG59XG5cbi8qIGNzcyBmb3IgYWxsIGhlYWRlciBpdGVtcyAqL1xudWwudG9wbmF2IHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgfVxuICBcbiAgdWwudG9wbmF2IGxpIHtmbG9hdDogbGVmdDt9XG4gIFxuICB1bC50b3BuYXYgbGkgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIFxuICB1bC50b3BuYXYgbGkgYTpob3Zlcjpub3QoLmFjdGl2ZSkge2JhY2tncm91bmQtY29sb3I6ICMxMTE7fVxuICBcbiAgLyogdWwudG9wbmF2IGxpIGEuYWN0aXZlIHtiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO30gKi9cbiAgXG4gIHVsLnRvcG5hdiBsaS5yaWdodCB7ZmxvYXQ6IHJpZ2h0O31cbiAgXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgdWwudG9wbmF2IGxpLnJpZ2h0LCBcbiAgICB1bC50b3BuYXYgbGkge2Zsb2F0OiBub25lO1xuICAgIFxuICAgIH1cbiAgfVxuICAiXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(tokenStorageService) {
        this.tokenStorageService = tokenStorageService;
    }
    // On initialization check the deatils of the user from session storage
    // Perform validations based on role and credentials implement the navigation
    // GO through the app.component.html file and uderstand and implement the logic
    AppComponent.prototype.ngOnInit = function () {
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
            var jwt = this.token;
            var jwtData = jwt.split('.')[1];
            var decodedJwtJsonData = window.atob(jwtData);
            // console.log('decodedJwtJsonData: ' + decodedJwtJsonData);
            var data = JSON.parse(decodedJwtJsonData);
            var role = Object.values(data)[1];
            // console.log('role ' + role);
            if (role === 'admin') {
                this.showAdminBoard = true;
            }
            else if (role === 'user') {
                this.showUserBoard = true;
            }
            else {
                this.showMarketingBoard = true;
            }
        }
    };
    //Implement logout method when user clicks logout and clear the session storage
    AppComponent.prototype.logout = function () {
        this.tokenStorageService.signOut();
        window.location.reload();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
        // AppComponent is to implement navigation across all the components
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./board-admin/board-admin.component */ "./src/app/board-admin/board-admin.component.ts");
/* harmony import */ var _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./board-user/board-user.component */ "./src/app/board-user/board-user.component.ts");
/* harmony import */ var _board_marketing_board_marketing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./board-marketing/board-marketing.component */ "./src/app/board-marketing/board-marketing.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _userquery_userquery_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./userquery/userquery.component */ "./src/app/userquery/userquery.component.ts");
/* harmony import */ var _manageprograms_manageprograms_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./manageprograms/manageprograms.component */ "./src/app/manageprograms/manageprograms.component.ts");
/* harmony import */ var _interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_interceptor/auth.interceptor */ "./src/app/_interceptor/auth.interceptor.ts");
/* harmony import */ var _manageuser_manageuser_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./manageuser/manageuser.component */ "./src/app/manageuser/manageuser.component.ts");
/* harmony import */ var _executiveticket_executiveticket_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./executiveticket/executiveticket.component */ "./src/app/executiveticket/executiveticket.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_10__["BoardAdminComponent"],
                _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_11__["BoardUserComponent"],
                _board_marketing_board_marketing_component__WEBPACK_IMPORTED_MODULE_12__["BoardMarketingComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _userquery_userquery_component__WEBPACK_IMPORTED_MODULE_14__["UserqueryComponent"],
                _manageprograms_manageprograms_component__WEBPACK_IMPORTED_MODULE_15__["ManageprogramsComponent"],
                _manageuser_manageuser_component__WEBPACK_IMPORTED_MODULE_17__["ManageuserComponent"],
                _executiveticket_executiveticket_component__WEBPACK_IMPORTED_MODULE_18__["ExecutiveticketComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"],
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [_interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__["authInterceptorProviders"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/board-admin/board-admin.component.css":
/*!*******************************************************!*\
  !*** ./src/app/board-admin/board-admin.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* css to make form apper below header */\n#admin{\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\n/* css for the form to add a program  starts */\n* {\n    box-sizing: border-box;\n  }\ninput[type=text],input[type=number], select, textarea {\n    width: 100%;\n    padding: 12px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    resize: vertical;\n  }\nlabel {\n    padding: 12px 12px 12px 0;\n    display: inline-block;\n  }\ninput[type=submit] {\n    background-color: #4CAF50;\n    color: white;\n    padding: 12px 20px;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    float: right;\n  }\ninput[type=submit]:hover {\n    background-color: #45a049;\n  }\n.container {\n    margin: auto;  \n    border-radius: 5px;\n    background-color: #f2f2f2;\n    padding: 20px;\n    left: 1rem;\n    width: 95%;\n\n    border-radius: 5px;\n    background-color: #f2f2f2;\n    padding: 20px;\n  }\n.col-25 {\n    float: left;\n    width: 25%;\n    margin-top: 6px;\n  }\n.col-75 {\n    float: left;\n    width: 75%;\n    margin-top: 6px;\n  }\n/* Clear floats after the columns */\n.row:after {\n    content: \"\";\n    display: table;\n    clear: both;\n  }\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n    .col-25, .col-75, input[type=submit] {\n      width: 100%;\n      margin-top: 0;\n    }\n    #admin{\n      padding-top: 11rem;\n      padding-bottom: 6rem;\n    }\n  }\n/* css for the form to add a program  end */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9hcmQtYWRtaW4vYm9hcmQtYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBd0M7QUFDeEM7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBRUEsOENBQThDO0FBQzlDO0lBQ0ksc0JBQXNCO0VBQ3hCO0FBRUE7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0FBRUE7SUFDRSx5QkFBeUI7SUFDekIscUJBQXFCO0VBQ3ZCO0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0VBQ2Q7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUVBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLFVBQVU7SUFDVixVQUFVOztJQUVWLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsYUFBYTtFQUNmO0FBRUE7SUFDRSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGVBQWU7RUFDakI7QUFFQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZUFBZTtFQUNqQjtBQUVBLG1DQUFtQztBQUNuQztJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztFQUNiO0FBRUEsK0lBQStJO0FBQy9JO0lBQ0U7TUFDRSxXQUFXO01BQ1gsYUFBYTtJQUNmO0lBQ0E7TUFDRSxrQkFBa0I7TUFDbEIsb0JBQW9CO0lBQ3RCO0VBQ0Y7QUFDQSwyQ0FBMkMiLCJmaWxlIjoic3JjL2FwcC9ib2FyZC1hZG1pbi9ib2FyZC1hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY3NzIHRvIG1ha2UgZm9ybSBhcHBlciBiZWxvdyBoZWFkZXIgKi9cbiNhZG1pbntcbiAgcGFkZGluZy10b3A6IDRyZW07XG4gIHBhZGRpbmctYm90dG9tOiA0cmVtO1xufVxuXG4vKiBjc3MgZm9yIHRoZSBmb3JtIHRvIGFkZCBhIHByb2dyYW0gIHN0YXJ0cyAqL1xuKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICBcbiAgaW5wdXRbdHlwZT10ZXh0XSxpbnB1dFt0eXBlPW51bWJlcl0sIHNlbGVjdCwgdGV4dGFyZWEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgfVxuICBcbiAgbGFiZWwge1xuICAgIHBhZGRpbmc6IDEycHggMTJweCAxMnB4IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIFxuICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbiAgXG4gIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcbiAgfVxuICBcbiAgLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiBhdXRvOyAgXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBsZWZ0OiAxcmVtO1xuICAgIHdpZHRoOiA5NSU7XG5cbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIFxuICAuY29sLTI1IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMjUlO1xuICAgIG1hcmdpbi10b3A6IDZweDtcbiAgfVxuICBcbiAgLmNvbC03NSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG4gIH1cbiAgXG4gIC8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xuICAucm93OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG4gIFxuICAvKiBSZXNwb25zaXZlIGxheW91dCAtIHdoZW4gdGhlIHNjcmVlbiBpcyBsZXNzIHRoYW4gNjAwcHggd2lkZSwgbWFrZSB0aGUgdHdvIGNvbHVtbnMgc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgaW5zdGVhZCBvZiBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuY29sLTI1LCAuY29sLTc1LCBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cbiAgICAjYWRtaW57XG4gICAgICBwYWRkaW5nLXRvcDogMTFyZW07XG4gICAgICBwYWRkaW5nLWJvdHRvbTogNnJlbTtcbiAgICB9XG4gIH1cbiAgLyogY3NzIGZvciB0aGUgZm9ybSB0byBhZGQgYSBwcm9ncmFtICBlbmQgKi8iXX0= */");

/***/ }),

/***/ "./src/app/board-admin/board-admin.component.ts":
/*!******************************************************!*\
  !*** ./src/app/board-admin/board-admin.component.ts ***!
  \******************************************************/
/*! exports provided: BoardAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardAdminComponent", function() { return BoardAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var BoardAdminComponent = /** @class */ (function () {
    // Form is created in html file and write code to make it functional using FormBuilder
    function BoardAdminComponent(userService, formBuilder) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.content = '';
        this.programAdded = false;
        this.message = '';
        this.form = this.formBuilder.group({
            programCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            programName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            durationInMonths: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            discountRate: '',
            currentPrice: '',
            isActive: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    BoardAdminComponent.prototype.ngOnInit = function () {
    };
    //  Implement onSubmit method to save a program,
    //  before saving calculate the currentPrice based on price and discount rate
    //  Use the appropriate service and its method to save the program 
    BoardAdminComponent.prototype.onSubmit = function (value) {
        var _this = this;
        console.log("value", value);
        value.currentPrice = value.price - (value.price * (value.discountRate / 100));
        console.log("final value", value);
        if (value.programName.length > 0 && value.price > 0) {
            this.userService.addProgram(value).subscribe(function (data) {
                _this.programAdded = true;
                _this.message = 'program added';
            }, function (err) {
                _this.programAdded = true;
                _this.message = err.error.message;
            });
        }
        // this.reload();
    };
    BoardAdminComponent.prototype.reload = function () {
        window.location.reload();
    };
    BoardAdminComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    BoardAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-board-admin',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./board-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/board-admin/board-admin.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./board-admin.component.css */ "./src/app/board-admin/board-admin.component.css")).default]
        })
        // This component is used to add a new program by admin
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], BoardAdminComponent);
    return BoardAdminComponent;
}());



/***/ }),

/***/ "./src/app/board-marketing/board-marketing.component.css":
/*!***************************************************************!*\
  !*** ./src/app/board-marketing/board-marketing.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* css for viewing queries by user below header */\n#marketing{\n    padding-top: 4rem;\n    padding-bottom: 4rem;\n}\n/* css for displaying queries in cards starts */\n.container{\n    margin: auto;\n}\n* {\n box-sizing: border-box;\n}\nbody {\n font-family: Arial, Helvetica, sans-serif;\n}\n/* Float four columns side by side */\n.column {\n float: left;\n padding: 0 10px;\n}\n/* Remove extra left and right margins, due to padding */\n.row {margin: 0 -5px;}\n/* Clear floats after the columns */\n.row:after {\n content: \"\";\n display: table;\n clear: both;\n}\n/* Responsive columns */\n@media screen and (max-width: 600px) {\n .column {\n   width: 100%;\n   display: block;\n   margin-bottom: 20px;\n }\n #marketing{\n     padding-top: 9rem;\n     padding-bottom: 5rem;\n }\n}\n/* Style the counter cards */\n.card {\n box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n padding: 16px;\n text-align: center;\n background-color: #f1f1f1;\n}\n/* css for displaying queries in cards ends */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9hcmQtbWFya2V0aW5nL2JvYXJkLW1hcmtldGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEQUFpRDtBQUNqRDtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7QUFFQSwrQ0FBK0M7QUFDNUM7SUFDQyxZQUFZO0FBQ2hCO0FBRUE7Q0FDQyxzQkFBc0I7QUFDdkI7QUFFQTtDQUNDLHlDQUF5QztBQUMxQztBQUVBLG9DQUFvQztBQUNwQztDQUNDLFdBQVc7Q0FDWCxlQUFlO0FBQ2hCO0FBRUEsd0RBQXdEO0FBQ3hELE1BQU0sY0FBYyxDQUFDO0FBRXJCLG1DQUFtQztBQUNuQztDQUNDLFdBQVc7Q0FDWCxjQUFjO0NBQ2QsV0FBVztBQUNaO0FBRUEsdUJBQXVCO0FBQ3ZCO0NBQ0M7R0FDRSxXQUFXO0dBQ1gsY0FBYztHQUNkLG1CQUFtQjtDQUNyQjtDQUNBO0tBQ0ksaUJBQWlCO0tBQ2pCLG9CQUFvQjtDQUN4QjtBQUNEO0FBRUEsNEJBQTRCO0FBQzVCO0NBQ0MsMENBQTBDO0NBQzFDLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIseUJBQXlCO0FBQzFCO0FBR0EsNkNBQTZDIiwiZmlsZSI6InNyYy9hcHAvYm9hcmQtbWFya2V0aW5nL2JvYXJkLW1hcmtldGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY3NzIGZvciB2aWV3aW5nIHF1ZXJpZXMgYnkgdXNlciBiZWxvdyBoZWFkZXIgKi9cbiNtYXJrZXRpbmd7XG4gICAgcGFkZGluZy10b3A6IDRyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDRyZW07XG59XG5cbi8qIGNzcyBmb3IgZGlzcGxheWluZyBxdWVyaWVzIGluIGNhcmRzIHN0YXJ0cyAqL1xuICAgLmNvbnRhaW5lcntcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbioge1xuIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4vKiBGbG9hdCBmb3VyIGNvbHVtbnMgc2lkZSBieSBzaWRlICovXG4uY29sdW1uIHtcbiBmbG9hdDogbGVmdDtcbiBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi8qIFJlbW92ZSBleHRyYSBsZWZ0IGFuZCByaWdodCBtYXJnaW5zLCBkdWUgdG8gcGFkZGluZyAqL1xuLnJvdyB7bWFyZ2luOiAwIC01cHg7fVxuXG4vKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cbi5yb3c6YWZ0ZXIge1xuIGNvbnRlbnQ6IFwiXCI7XG4gZGlzcGxheTogdGFibGU7XG4gY2xlYXI6IGJvdGg7XG59XG5cbi8qIFJlc3BvbnNpdmUgY29sdW1ucyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAuY29sdW1uIHtcbiAgIHdpZHRoOiAxMDAlO1xuICAgZGlzcGxheTogYmxvY2s7XG4gICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuIH1cbiAjbWFya2V0aW5ne1xuICAgICBwYWRkaW5nLXRvcDogOXJlbTtcbiAgICAgcGFkZGluZy1ib3R0b206IDVyZW07XG4gfVxufVxuXG4vKiBTdHlsZSB0aGUgY291bnRlciBjYXJkcyAqL1xuLmNhcmQge1xuIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiBwYWRkaW5nOiAxNnB4O1xuIHRleHQtYWxpZ246IGNlbnRlcjtcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xufVxuXG5cbi8qIGNzcyBmb3IgZGlzcGxheWluZyBxdWVyaWVzIGluIGNhcmRzIGVuZHMgKi8iXX0= */");

/***/ }),

/***/ "./src/app/board-marketing/board-marketing.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/board-marketing/board-marketing.component.ts ***!
  \**************************************************************/
/*! exports provided: BoardMarketingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardMarketingComponent", function() { return BoardMarketingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");



var BoardMarketingComponent = /** @class */ (function () {
    function BoardMarketingComponent(userService) {
        this.userService = userService;
        this.cseRemarks = '';
    }
    BoardMarketingComponent.prototype.ngOnInit = function () {
        var _this = this;
        //fetch all the enquiries details 
        this.userService.getMarketingBoard().subscribe(function (data) {
            _this.content = data;
            console.log('data', data);
        }, function (err) {
            _this.content = JSON.parse(err.error).message;
        });
    };
    //Implement getContent method to return all enquiries which are active
    BoardMarketingComponent.prototype.getContent = function () {
        if (this.content) {
            return this.content.filter(function (item) { return item.status == "active"; });
        }
    };
    BoardMarketingComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    BoardMarketingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-board-marketing',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./board-marketing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/board-marketing/board-marketing.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./board-marketing.component.css */ "./src/app/board-marketing/board-marketing.component.css")).default]
        })
        // This component is used to view all the quries raised by users,
        // marketing team after solving the query, writes remarks and closes the query 
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], BoardMarketingComponent);
    return BoardMarketingComponent;
}());



/***/ }),

/***/ "./src/app/board-user/board-user.component.css":
/*!*****************************************************!*\
  !*** ./src/app/board-user/board-user.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* css to view all programs by user below header */\n#user{\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\n/* css for entire programs to display as cards starts*/\n.container{\n   margin: auto;\n}\n* {\nbox-sizing: border-box;\n}\nbody {\nfont-family: Arial, Helvetica, sans-serif;\n}\n/* Float four columns side by side */\n.column {\nfloat: left;\n/* width: 50%; */\npadding: 0 10px;\n}\n/* Remove extra left and right margins, due to padding */\n.row {margin: 0 -5px;}\n/* Clear floats after the columns */\n.row:after {\ncontent: \"\";\ndisplay: table;\nclear: both;\n}\n/* Responsive columns */\n@media screen and (max-width: 600px) {\n.column {\n  width: 100%;\n  display: block;\n  margin-bottom: 20px;\n}\n\n#user{\n  padding-top: 12.5rem;\n  padding-bottom: 5.2rem;\n}\n}\n/* Style the counter cards */\n.card {\nbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\npadding: 16px;\ntext-align: center;\nbackground-color: #f1f1f1;\n}\n/* css for entire programs to display as cards ends*/\n.alert-danger{\n  color: #721c24;\n   background-color: #f8d7da;\n   border-color: #f5c6cb;\n   font-size: 1rem;\n   /* font-weight: 400; */\n   line-height: 1.5;\n   color: #212529;\n   text-align: left;\n}\n.alert-warning {\n color: #856404;\n background-color: #fff3cd;\n border-color: #ffeeba;\n}\n.alert {\n position: relative;\n padding: .75rem 1.25rem;\n margin-bottom: 1rem;\n border: 1px solid transparent;\n border-radius: .25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9hcmQtdXNlci9ib2FyZC11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0RBQWtEO0FBQ2xEO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QjtBQUVBLHNEQUFzRDtBQUN0RDtHQUNHLFlBQVk7QUFDZjtBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBRUE7QUFDQSx5Q0FBeUM7QUFDekM7QUFFQSxvQ0FBb0M7QUFDcEM7QUFDQSxXQUFXO0FBQ1gsZ0JBQWdCO0FBQ2hCLGVBQWU7QUFDZjtBQUVBLHdEQUF3RDtBQUN4RCxNQUFNLGNBQWMsQ0FBQztBQUVyQixtQ0FBbUM7QUFDbkM7QUFDQSxXQUFXO0FBQ1gsY0FBYztBQUNkLFdBQVc7QUFDWDtBQUVBLHVCQUF1QjtBQUN2QjtBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsc0JBQXNCO0FBQ3hCO0FBQ0E7QUFFQSw0QkFBNEI7QUFDNUI7QUFDQSwwQ0FBMEM7QUFDMUMsYUFBYTtBQUNiLGtCQUFrQjtBQUNsQix5QkFBeUI7QUFDekI7QUFFQSxvREFBb0Q7QUFFcEQ7RUFDRSxjQUFjO0dBQ2IseUJBQXlCO0dBQ3pCLHFCQUFxQjtHQUNyQixlQUFlO0dBQ2Ysc0JBQXNCO0dBQ3RCLGdCQUFnQjtHQUNoQixjQUFjO0dBQ2QsZ0JBQWdCO0FBQ25CO0FBRUE7Q0FDQyxjQUFjO0NBQ2QseUJBQXlCO0NBQ3pCLHFCQUFxQjtBQUN0QjtBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsNkJBQTZCO0NBQzdCLHFCQUFxQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkLXVzZXIvYm9hcmQtdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY3NzIHRvIHZpZXcgYWxsIHByb2dyYW1zIGJ5IHVzZXIgYmVsb3cgaGVhZGVyICovXG4jdXNlcntcbiAgcGFkZGluZy10b3A6IDRyZW07XG4gIHBhZGRpbmctYm90dG9tOiA0cmVtO1xufVxuXG4vKiBjc3MgZm9yIGVudGlyZSBwcm9ncmFtcyB0byBkaXNwbGF5IGFzIGNhcmRzIHN0YXJ0cyovXG4uY29udGFpbmVye1xuICAgbWFyZ2luOiBhdXRvO1xufVxuXG4qIHtcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi8qIEZsb2F0IGZvdXIgY29sdW1ucyBzaWRlIGJ5IHNpZGUgKi9cbi5jb2x1bW4ge1xuZmxvYXQ6IGxlZnQ7XG4vKiB3aWR0aDogNTAlOyAqL1xucGFkZGluZzogMCAxMHB4O1xufVxuXG4vKiBSZW1vdmUgZXh0cmEgbGVmdCBhbmQgcmlnaHQgbWFyZ2lucywgZHVlIHRvIHBhZGRpbmcgKi9cbi5yb3cge21hcmdpbjogMCAtNXB4O31cblxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXG4ucm93OmFmdGVyIHtcbmNvbnRlbnQ6IFwiXCI7XG5kaXNwbGF5OiB0YWJsZTtcbmNsZWFyOiBib3RoO1xufVxuXG4vKiBSZXNwb25zaXZlIGNvbHVtbnMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4uY29sdW1uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4jdXNlcntcbiAgcGFkZGluZy10b3A6IDEyLjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiA1LjJyZW07XG59XG59XG5cbi8qIFN0eWxlIHRoZSBjb3VudGVyIGNhcmRzICovXG4uY2FyZCB7XG5ib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG5wYWRkaW5nOiAxNnB4O1xudGV4dC1hbGlnbjogY2VudGVyO1xuYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbn1cblxuLyogY3NzIGZvciBlbnRpcmUgcHJvZ3JhbXMgdG8gZGlzcGxheSBhcyBjYXJkcyBlbmRzKi9cblxuLmFsZXJ0LWRhbmdlcntcbiAgY29sb3I6ICM3MjFjMjQ7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkN2RhO1xuICAgYm9yZGVyLWNvbG9yOiAjZjVjNmNiO1xuICAgZm9udC1zaXplOiAxcmVtO1xuICAgLyogZm9udC13ZWlnaHQ6IDQwMDsgKi9cbiAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICBjb2xvcjogIzIxMjUyOTtcbiAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5hbGVydC13YXJuaW5nIHtcbiBjb2xvcjogIzg1NjQwNDtcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmM2NkO1xuIGJvcmRlci1jb2xvcjogI2ZmZWViYTtcbn1cbi5hbGVydCB7XG4gcG9zaXRpb246IHJlbGF0aXZlO1xuIHBhZGRpbmc6IC43NXJlbSAxLjI1cmVtO1xuIG1hcmdpbi1ib3R0b206IDFyZW07XG4gYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gYm9yZGVyLXJhZGl1czogLjI1cmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/board-user/board-user.component.ts":
/*!****************************************************!*\
  !*** ./src/app/board-user/board-user.component.ts ***!
  \****************************************************/
/*! exports provided: BoardUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardUserComponent", function() { return BoardUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");



var BoardUserComponent = /** @class */ (function () {
    function BoardUserComponent(userService) {
        this.userService = userService;
    }
    BoardUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        // fetch all the programs and assign to content
        this.userService.getUserBoard().subscribe(function (data) {
            _this.content = data;
            // console.log("data" , data);
        }, function (err) {
            _this.content = JSON.parse(err.error).message;
        });
    };
    BoardUserComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    BoardUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-board-user',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./board-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/board-user/board-user.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./board-user.component.css */ "./src/app/board-user/board-user.component.css")).default]
        })
        // This component is used to view all the existing programs by user
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], BoardUserComponent);
    return BoardUserComponent;
}());



/***/ }),

/***/ "./src/app/executiveticket/executiveticket.component.css":
/*!***************************************************************!*\
  !*** ./src/app/executiveticket/executiveticket.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* css for viewing queries by user below header */\n#marketing{\n    padding-top: 4rem;\n    padding-bottom: 4rem;\n}\n/* css for displaying queries in cards starts */\n.container{\n    margin: auto;\n}\n* {\n box-sizing: border-box;\n}\nbody {\n font-family: Arial, Helvetica, sans-serif;\n}\n/* Float four columns side by side */\n.column {\n float: left;\n padding: 0 10px;\n}\n/* Remove extra left and right margins, due to padding */\n.row {margin: 0 -5px;}\n/* Clear floats after the columns */\n.row:after {\n content: \"\";\n display: table;\n clear: both;\n}\n/* Responsive columns */\n@media screen and (max-width: 600px) {\n .column {\n   width: 100%;\n   display: block;\n   margin-bottom: 20px;\n }\n #marketing{\n     padding-top: 9rem;\n     padding-bottom: 5rem;\n }\n}\n/* Style the counter cards */\n.card {\n box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n padding: 16px;\n text-align: center;\n background-color: #f1f1f1;\n}\n/* css for displaying queries in cards ends */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhlY3V0aXZldGlja2V0L2V4ZWN1dGl2ZXRpY2tldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEQUFpRDtBQUNqRDtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7QUFFQSwrQ0FBK0M7QUFDNUM7SUFDQyxZQUFZO0FBQ2hCO0FBRUE7Q0FDQyxzQkFBc0I7QUFDdkI7QUFFQTtDQUNDLHlDQUF5QztBQUMxQztBQUVBLG9DQUFvQztBQUNwQztDQUNDLFdBQVc7Q0FDWCxlQUFlO0FBQ2hCO0FBRUEsd0RBQXdEO0FBQ3hELE1BQU0sY0FBYyxDQUFDO0FBRXJCLG1DQUFtQztBQUNuQztDQUNDLFdBQVc7Q0FDWCxjQUFjO0NBQ2QsV0FBVztBQUNaO0FBRUEsdUJBQXVCO0FBQ3ZCO0NBQ0M7R0FDRSxXQUFXO0dBQ1gsY0FBYztHQUNkLG1CQUFtQjtDQUNyQjtDQUNBO0tBQ0ksaUJBQWlCO0tBQ2pCLG9CQUFvQjtDQUN4QjtBQUNEO0FBRUEsNEJBQTRCO0FBQzVCO0NBQ0MsMENBQTBDO0NBQzFDLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIseUJBQXlCO0FBQzFCO0FBR0EsNkNBQTZDIiwiZmlsZSI6InNyYy9hcHAvZXhlY3V0aXZldGlja2V0L2V4ZWN1dGl2ZXRpY2tldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY3NzIGZvciB2aWV3aW5nIHF1ZXJpZXMgYnkgdXNlciBiZWxvdyBoZWFkZXIgKi9cbiNtYXJrZXRpbmd7XG4gICAgcGFkZGluZy10b3A6IDRyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDRyZW07XG59XG5cbi8qIGNzcyBmb3IgZGlzcGxheWluZyBxdWVyaWVzIGluIGNhcmRzIHN0YXJ0cyAqL1xuICAgLmNvbnRhaW5lcntcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbioge1xuIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4vKiBGbG9hdCBmb3VyIGNvbHVtbnMgc2lkZSBieSBzaWRlICovXG4uY29sdW1uIHtcbiBmbG9hdDogbGVmdDtcbiBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi8qIFJlbW92ZSBleHRyYSBsZWZ0IGFuZCByaWdodCBtYXJnaW5zLCBkdWUgdG8gcGFkZGluZyAqL1xuLnJvdyB7bWFyZ2luOiAwIC01cHg7fVxuXG4vKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cbi5yb3c6YWZ0ZXIge1xuIGNvbnRlbnQ6IFwiXCI7XG4gZGlzcGxheTogdGFibGU7XG4gY2xlYXI6IGJvdGg7XG59XG5cbi8qIFJlc3BvbnNpdmUgY29sdW1ucyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAuY29sdW1uIHtcbiAgIHdpZHRoOiAxMDAlO1xuICAgZGlzcGxheTogYmxvY2s7XG4gICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuIH1cbiAjbWFya2V0aW5ne1xuICAgICBwYWRkaW5nLXRvcDogOXJlbTtcbiAgICAgcGFkZGluZy1ib3R0b206IDVyZW07XG4gfVxufVxuXG4vKiBTdHlsZSB0aGUgY291bnRlciBjYXJkcyAqL1xuLmNhcmQge1xuIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiBwYWRkaW5nOiAxNnB4O1xuIHRleHQtYWxpZ246IGNlbnRlcjtcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xufVxuXG5cbi8qIGNzcyBmb3IgZGlzcGxheWluZyBxdWVyaWVzIGluIGNhcmRzIGVuZHMgKi8iXX0= */");

/***/ }),

/***/ "./src/app/executiveticket/executiveticket.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/executiveticket/executiveticket.component.ts ***!
  \**************************************************************/
/*! exports provided: ExecutiveticketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecutiveticketComponent", function() { return ExecutiveticketComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");




var ExecutiveticketComponent = /** @class */ (function () {
    function ExecutiveticketComponent(userService, tokenStorageService) {
        this.userService = userService;
        this.tokenStorageService = tokenStorageService;
        this.cseRemarks = '';
    }
    ExecutiveticketComponent.prototype.ngOnInit = function () {
        var _this = this;
        //fetch all the enquiries details 
        this.userService.getAllTickets().subscribe(function (data) {
            _this.content = data;
            console.log('data', data);
        }, function (err) {
            _this.content = JSON.parse(err.error).message;
        });
    };
    ExecutiveticketComponent.prototype.closeTicket = function (value) {
        var user = this.tokenStorageService.getUser();
        value.executiveEmail = user.email;
        console.log('updated ticked', value);
        this.userService.closeTicket(value).subscribe();
    };
    ExecutiveticketComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] }
    ]; };
    ExecutiveticketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-executiveticket',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./executiveticket.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/executiveticket/executiveticket.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./executiveticket.component.css */ "./src/app/executiveticket/executiveticket.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]])
    ], ExecutiveticketComponent);
    return ExecutiveticketComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  /* css of footer start */\n  .footer {\n    margin: auto;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: #111;\n  color: white;\n  text-align: center;\n}\n  @media screen and (max-width: 600px) {\n  .footer{\n    height: 65px;\n  }\n  i{\n    font-size: 8px;\n  }\n\n}\n  /* css of footer ends */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFLHdCQUF3QjtFQUN4QjtJQUNFLFlBQVk7RUFDZCxlQUFlO0VBQ2YsT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7RUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCOztBQUVGO0VBQ0EsdUJBQXVCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAvKiBjc3Mgb2YgZm9vdGVyIHN0YXJ0ICovXG4gIC5mb290ZXIge1xuICAgIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmZvb3RlcntcbiAgICBoZWlnaHQ6IDY1cHg7XG4gIH1cbiAgaXtcbiAgICBmb250LXNpemU6IDhweDtcbiAgfVxuXG59XG4vKiBjc3Mgb2YgZm9vdGVyIGVuZHMgKi9cblxuIl19 */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
        })
        // This the fixed footer user across all views
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* css of image starts */\nimg {\n    width: 100%;\n    height: auto;\n}\n@media screen and (max-width: 600px){\n  #hero-img{\n    margin-top: 8rem;\n  }\n}\n/* css of image ends */\n/*css of center section starts  */\n.about-section {\n  padding: 50px;\n  margin:0;\n  text-align: center;\n  background-color: #474e5d;\n  color: white;\n}\n/*css of center section ends  */\n/*  center text css*/\n.center { \n  margin: auto;\n    height: 75px;\n    border: 3px solid #111; \n  }\n.center h4 {\n    top: 50%;\n    left: 50%;\n  }\nh4{\n    text-align: center;\n  }\n/* center text css */\n/* css of gallery starts */\n.gallery{\n      padding-bottom: 2rem;\n\n  }\ndiv.gallery {\n    margin: 25px;\n    border: 1px solid #ccc;\n    float: left;\n    width: 250px;\n  }\ndiv.gallery:hover {\n    border: 3px solid #777;\n  }\ndiv.gallery img {\n    width: 100%;\n    height: auto;\n  }\ndiv.desc {\n    padding: 15px;\n    text-align: center;\n  }\n#gallery-id{\n    margin-left: 15px;\n    \n\n  }\n@media (min-width:450px) and (max-width: 768px){\n    #gallery-id{\n      margin-left: 5px;\n    }\n    div.gallery {\n      margin: 25px;\n      width: 200px;\n  }\n}\n/* css of gallery ends */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0JBQXdCO0FBQ3hCO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7QUFDQSxzQkFBc0I7QUFFdEIsaUNBQWlDO0FBRWpDO0VBQ0UsYUFBYTtFQUNiLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDtBQUNBLCtCQUErQjtBQUUvQixvQkFBb0I7QUFDcEI7RUFDRSxZQUFZO0lBQ1YsWUFBWTtJQUNaLHNCQUFzQjtFQUN4QjtBQUVBO0lBQ0UsUUFBUTtJQUNSLFNBQVM7RUFDWDtBQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Ysb0JBQW9CO0FBRWxCLDBCQUEwQjtBQUMxQjtNQUNJLG9CQUFvQjs7RUFFeEI7QUFDQTtJQUNFLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7RUFDZDtBQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBRUE7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCO0FBRUE7SUFDRSxpQkFBaUI7OztFQUduQjtBQUNBO0lBQ0U7TUFDRSxnQkFBZ0I7SUFDbEI7SUFDQTtNQUNFLFlBQVk7TUFDWixZQUFZO0VBQ2hCO0FBQ0Y7QUFDRSx3QkFBd0IiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNzcyBvZiBpbWFnZSBzdGFydHMgKi9cbmltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xuICAjaGVyby1pbWd7XG4gICAgbWFyZ2luLXRvcDogOHJlbTtcbiAgfVxufVxuLyogY3NzIG9mIGltYWdlIGVuZHMgKi9cblxuLypjc3Mgb2YgY2VudGVyIHNlY3Rpb24gc3RhcnRzICAqL1xuXG4uYWJvdXQtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIG1hcmdpbjowO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzRlNWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi8qY3NzIG9mIGNlbnRlciBzZWN0aW9uIGVuZHMgICovXG5cbi8qICBjZW50ZXIgdGV4dCBjc3MqL1xuLmNlbnRlciB7IFxuICBtYXJnaW46IGF1dG87XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICMxMTE7IFxuICB9XG4gIFxuICAuY2VudGVyIGg0IHtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gIH1cbiAgaDR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4vKiBjZW50ZXIgdGV4dCBjc3MgKi9cblxuICAvKiBjc3Mgb2YgZ2FsbGVyeSBzdGFydHMgKi9cbiAgLmdhbGxlcnl7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcblxuICB9XG4gIGRpdi5nYWxsZXJ5IHtcbiAgICBtYXJnaW46IDI1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMjUwcHg7XG4gIH1cbiAgXG4gIGRpdi5nYWxsZXJ5OmhvdmVyIHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjNzc3O1xuICB9XG4gIFxuICBkaXYuZ2FsbGVyeSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICBcbiAgZGl2LmRlc2Mge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgI2dhbGxlcnktaWR7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgXG5cbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDo0NTBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcbiAgICAjZ2FsbGVyeS1pZHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgfVxuICAgIGRpdi5nYWxsZXJ5IHtcbiAgICAgIG1hcmdpbjogMjVweDtcbiAgICAgIHdpZHRoOiAyMDBweDtcbiAgfVxufVxuICAvKiBjc3Mgb2YgZ2FsbGVyeSBlbmRzICovXG4iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
        })
        // This is the implementation of landing page view of the application
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* css to apper login component below header */\n#login{\n  padding-top: 6rem;\n}\n/* css for entire login component */\n* {box-sizing: border-box}\ninput[type=email], input[type=password] {\n    width: 100%;\n    padding: 15px;\n    margin: 5px 0 12px 0;\n    display: inline-block;\n    border: none;\n    background: #f1f1f1;\n  }\ninput[type=email]:focus, input[type=password]:focus {\n    background-color: #ddd;\n    outline: none;\n  }\nhr {\n    border: 1px solid #f1f1f1;\n    margin-bottom: 25px;\n  }\n/* Set a style for all buttons */\nbutton {\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n    opacity: 0.9;\n  }\nbutton:hover {\n    opacity:1;\n  }\n/* Float login buttons and add an equal width */\n.loginbtn {\n    width: 100%;\n  }\n/* Add padding to container elements */\n.container {\n    padding: 16px;\n  }\n/* Clear floats */\n.clearfix::after {\n    content: \"\";\n    clear: both;\n    display: table;\n  }\n/* Change styles for cancel button and signup button on extra small screens */\n@media screen and (max-width: 300px) {\n     .signupbtn {\n       width: 100%;\n    }\n  }\n@media screen and (max-width: 606px) {\n    #login{\n      padding-bottom: 5.5rem;\n      padding-top: 10rem;\n    }\n  }\nlabel {\n    display: block;\n    margin-top: 5px;\n  }\n.card-container.card {\n      margin: auto;\n      /* position: relative; */\n    top: 4.5rem;\n    max-width: 400px !important;\n    \n  }\n.card {\n    background-color: #f7f7f7;\n    padding: 20px 25px 25px;\n    /* margin: 0 auto 25px; */\n    margin-top: 25px;\n    border-radius: 2px;\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  }\n.profile-img-card {\n    width: 66px;\n    height: 66px;\n    margin: 0 auto 10px;\n    display: block;\n    border-radius: 50%;\n  }\n.alert-danger{\n    color: #721c24;\n     background-color: #f8d7da;\n     border-color: #f5c6cb;\n     font-size: 1rem;\n     /* font-weight: 400; */\n     line-height: 1.5;\n     color: #212529;\n     text-align: left;\n }\n.alert-warning {\n   color: #856404;\n   background-color: #fff3cd;\n   border-color: #ffeeba;\n }\n.alert {\n   position: relative;\n   padding: .75rem 1.25rem;\n   margin-bottom: 1rem;\n   border: 1px solid transparent;\n   border-radius: .25rem;\n }\n \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4Q0FBOEM7QUFDOUM7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQSxtQ0FBbUM7QUFDbkMsR0FBRyxzQkFBc0I7QUFDekI7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjtBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGFBQWE7RUFDZjtBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLG1CQUFtQjtFQUNyQjtBQUVBLGdDQUFnQztBQUNoQztJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7QUFFQTtJQUNFLFNBQVM7RUFDWDtBQUdBLCtDQUErQztBQUM5QztJQUNDLFdBQVc7RUFDYjtBQUVBLHNDQUFzQztBQUN0QztJQUNFLGFBQWE7RUFDZjtBQUVBLGlCQUFpQjtBQUNqQjtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsY0FBYztFQUNoQjtBQUVBLDZFQUE2RTtBQUM3RTtLQUNHO09BQ0UsV0FBVztJQUNkO0VBQ0Y7QUFDQTtJQUNFO01BQ0Usc0JBQXNCO01BQ3RCLGtCQUFrQjtJQUNwQjtFQUNGO0FBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtFQUNqQjtBQUVBO01BQ0ksWUFBWTtNQUNaLHdCQUF3QjtJQUMxQixXQUFXO0lBQ1gsMkJBQTJCOztFQUU3QjtBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwwQ0FBMEM7RUFDNUM7QUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLGNBQWM7S0FDYix5QkFBeUI7S0FDekIscUJBQXFCO0tBQ3JCLGVBQWU7S0FDZixzQkFBc0I7S0FDdEIsZ0JBQWdCO0tBQ2hCLGNBQWM7S0FDZCxnQkFBZ0I7Q0FDcEI7QUFFQTtHQUNFLGNBQWM7R0FDZCx5QkFBeUI7R0FDekIscUJBQXFCO0NBQ3ZCO0FBQ0E7R0FDRSxrQkFBa0I7R0FDbEIsdUJBQXVCO0dBQ3ZCLG1CQUFtQjtHQUNuQiw2QkFBNkI7R0FDN0IscUJBQXFCO0NBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNzcyB0byBhcHBlciBsb2dpbiBjb21wb25lbnQgYmVsb3cgaGVhZGVyICovXG4jbG9naW57XG4gIHBhZGRpbmctdG9wOiA2cmVtO1xufVxuXG4vKiBjc3MgZm9yIGVudGlyZSBsb2dpbiBjb21wb25lbnQgKi9cbioge2JveC1zaXppbmc6IGJvcmRlci1ib3h9XG5pbnB1dFt0eXBlPWVtYWlsXSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgbWFyZ2luOiA1cHggMCAxMnB4IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICB9XG4gIFxuICBpbnB1dFt0eXBlPWVtYWlsXTpmb2N1cywgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICBcbiAgaHIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgfVxuICBcbiAgLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXG4gIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTRweCAyMHB4O1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvcGFjaXR5OiAwLjk7XG4gIH1cbiAgXG4gIGJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eToxO1xuICB9XG4gIFxuICBcbiAgLyogRmxvYXQgbG9naW4gYnV0dG9ucyBhbmQgYWRkIGFuIGVxdWFsIHdpZHRoICovXG4gICAubG9naW5idG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAvKiBBZGQgcGFkZGluZyB0byBjb250YWluZXIgZWxlbWVudHMgKi9cbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuICBcbiAgLyogQ2xlYXIgZmxvYXRzICovXG4gIC5jbGVhcmZpeDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgZGlzcGxheTogdGFibGU7XG4gIH1cbiAgXG4gIC8qIENoYW5nZSBzdHlsZXMgZm9yIGNhbmNlbCBidXR0b24gYW5kIHNpZ251cCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xuICAgICAuc2lnbnVwYnRuIHtcbiAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjA2cHgpIHtcbiAgICAjbG9naW57XG4gICAgICBwYWRkaW5nLWJvdHRvbTogNS41cmVtO1xuICAgICAgcGFkZGluZy10b3A6IDEwcmVtO1xuICAgIH1cbiAgfVxuXG4gIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gIH1cbiAgXG4gIC5jYXJkLWNvbnRhaW5lci5jYXJkIHtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cbiAgICB0b3A6IDQuNXJlbTtcbiAgICBtYXgtd2lkdGg6IDQwMHB4ICFpbXBvcnRhbnQ7XG4gICAgXG4gIH1cblxuICAuY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgICBwYWRkaW5nOiAyMHB4IDI1cHggMjVweDtcbiAgICAvKiBtYXJnaW46IDAgYXV0byAyNXB4OyAqL1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgfVxuICBcbiAgLnByb2ZpbGUtaW1nLWNhcmQge1xuICAgIHdpZHRoOiA2NnB4O1xuICAgIGhlaWdodDogNjZweDtcbiAgICBtYXJnaW46IDAgYXV0byAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuICAuYWxlcnQtZGFuZ2Vye1xuICAgIGNvbG9yOiAjNzIxYzI0O1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkN2RhO1xuICAgICBib3JkZXItY29sb3I6ICNmNWM2Y2I7XG4gICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgLyogZm9udC13ZWlnaHQ6IDQwMDsgKi9cbiAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gfVxuIFxuIC5hbGVydC13YXJuaW5nIHtcbiAgIGNvbG9yOiAjODU2NDA0O1xuICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjNjZDtcbiAgIGJvcmRlci1jb2xvcjogI2ZmZWViYTtcbiB9XG4gLmFsZXJ0IHtcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgIHBhZGRpbmc6IC43NXJlbSAxLjI1cmVtO1xuICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuIH1cbiAiXX0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, tokenStorage) {
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
    }
    // On the initialization of the component write login to make user login works
    LoginComponent.prototype.ngOnInit = function () {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.role = this.tokenStorage.getUser().roles;
        }
    };
    // Implement the onSubmit method once user clicks on login button
    // Write logic so that on successful login, store the user details in session
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.login(this.form).subscribe(function (data) {
            // console.log('token',data.token);
            _this.tokenStorage.saveToken(data.token);
            _this.tokenStorage.saveUser(_this.form);
            _this.isLoginFailed = false;
            _this.isLoggedIn = true;
            _this.role = _this.tokenStorage.getUser().role;
            _this.reloadPage();
        }, function (err) {
            _this.isLoginFailed = true;
            _this.errorMessage = err.error.message;
        });
    };
    LoginComponent.prototype.reloadPage = function () {
        window.location.reload();
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
        })
        // LoginComponent is used to make all types of users login to this application
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/manageprograms/manageprograms.component.css":
/*!*************************************************************!*\
  !*** ./src/app/manageprograms/manageprograms.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* css to view all programs by user below header */\n#user{\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\n/* css for entire programs to display as cards starts*/\n.container{\n   margin: auto;\n}\n* {\nbox-sizing: border-box;\n}\nbody {\nfont-family: Arial, Helvetica, sans-serif;\n}\n/* Float four columns side by side */\n.column {\nfloat: left;\n/* width: 50%; */\npadding: 0 10px;\n}\n/* Remove extra left and right margins, due to padding */\n.row {margin: 0 -5px;}\n/* Clear floats after the columns */\n.row:after {\ncontent: \"\";\ndisplay: table;\nclear: both;\n}\n/* Responsive columns */\n@media screen and (max-width: 600px) {\n.column {\n  width: 100%;\n  display: block;\n  margin-bottom: 20px;\n}\n\n#user{\n  padding-top: 12.5rem;\n  padding-bottom: 6rem;\n}\n}\n/* Style the counter cards */\n.card {\nbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\npadding: 16px;\ntext-align: center;\nbackground-color: #f1f1f1;\n}\n/* css for entire programs to display as cards ends*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlcHJvZ3JhbXMvbWFuYWdlcHJvZ3JhbXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrREFBa0Q7QUFDbEQ7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBRUEsc0RBQXNEO0FBQ3REO0dBQ0csWUFBWTtBQUNmO0FBRUE7QUFDQSxzQkFBc0I7QUFDdEI7QUFFQTtBQUNBLHlDQUF5QztBQUN6QztBQUVBLG9DQUFvQztBQUNwQztBQUNBLFdBQVc7QUFDWCxnQkFBZ0I7QUFDaEIsZUFBZTtBQUNmO0FBRUEsd0RBQXdEO0FBQ3hELE1BQU0sY0FBYyxDQUFDO0FBRXJCLG1DQUFtQztBQUNuQztBQUNBLFdBQVc7QUFDWCxjQUFjO0FBQ2QsV0FBVztBQUNYO0FBRUEsdUJBQXVCO0FBQ3ZCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixvQkFBb0I7QUFDdEI7QUFDQTtBQUVBLDRCQUE0QjtBQUM1QjtBQUNBLDBDQUEwQztBQUMxQyxhQUFhO0FBQ2Isa0JBQWtCO0FBQ2xCLHlCQUF5QjtBQUN6QjtBQUVBLG9EQUFvRCIsImZpbGUiOiJzcmMvYXBwL21hbmFnZXByb2dyYW1zL21hbmFnZXByb2dyYW1zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBjc3MgdG8gdmlldyBhbGwgcHJvZ3JhbXMgYnkgdXNlciBiZWxvdyBoZWFkZXIgKi9cbiN1c2Vye1xuICBwYWRkaW5nLXRvcDogNHJlbTtcbiAgcGFkZGluZy1ib3R0b206IDRyZW07XG59XG5cbi8qIGNzcyBmb3IgZW50aXJlIHByb2dyYW1zIHRvIGRpc3BsYXkgYXMgY2FyZHMgc3RhcnRzKi9cbi5jb250YWluZXJ7XG4gICBtYXJnaW46IGF1dG87XG59XG5cbioge1xuYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG5mb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLyogRmxvYXQgZm91ciBjb2x1bW5zIHNpZGUgYnkgc2lkZSAqL1xuLmNvbHVtbiB7XG5mbG9hdDogbGVmdDtcbi8qIHdpZHRoOiA1MCU7ICovXG5wYWRkaW5nOiAwIDEwcHg7XG59XG5cbi8qIFJlbW92ZSBleHRyYSBsZWZ0IGFuZCByaWdodCBtYXJnaW5zLCBkdWUgdG8gcGFkZGluZyAqL1xuLnJvdyB7bWFyZ2luOiAwIC01cHg7fVxuXG4vKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cbi5yb3c6YWZ0ZXIge1xuY29udGVudDogXCJcIjtcbmRpc3BsYXk6IHRhYmxlO1xuY2xlYXI6IGJvdGg7XG59XG5cbi8qIFJlc3BvbnNpdmUgY29sdW1ucyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbi5jb2x1bW4ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbiN1c2Vye1xuICBwYWRkaW5nLXRvcDogMTIuNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDZyZW07XG59XG59XG5cbi8qIFN0eWxlIHRoZSBjb3VudGVyIGNhcmRzICovXG4uY2FyZCB7XG5ib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG5wYWRkaW5nOiAxNnB4O1xudGV4dC1hbGlnbjogY2VudGVyO1xuYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbn1cblxuLyogY3NzIGZvciBlbnRpcmUgcHJvZ3JhbXMgdG8gZGlzcGxheSBhcyBjYXJkcyBlbmRzKi8iXX0= */");

/***/ }),

/***/ "./src/app/manageprograms/manageprograms.component.ts":
/*!************************************************************!*\
  !*** ./src/app/manageprograms/manageprograms.component.ts ***!
  \************************************************************/
/*! exports provided: ManageprogramsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageprogramsComponent", function() { return ManageprogramsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");



var ManageprogramsComponent = /** @class */ (function () {
    function ManageprogramsComponent(userService) {
        this.userService = userService;
    }
    // On initialization get all the existing programs
    ManageprogramsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // fetching programs data from service
        this.userService.getUserBoard().subscribe(function (data) {
            _this.content = data;
            // console.log("data" , data);
        }, function (err) {
            _this.content = JSON.parse(err.error).message;
        });
    };
    //Implement deleteProgram method to delete the program
    ManageprogramsComponent.prototype.deleteProgram = function (value) {
        var _this = this;
        // console.log("delete program",value);
        this.userService.deleteProgram(value).subscribe(function (data) {
            _this.userService.getUserBoard().subscribe(function (data) {
                _this.content = data;
            });
        });
    };
    ManageprogramsComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    ManageprogramsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manageprograms',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manageprograms.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/manageprograms/manageprograms.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manageprograms.component.css */ "./src/app/manageprograms/manageprograms.component.css")).default]
        })
        // ManageprogramsComponent is responsible to manage the programs by the admin
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ManageprogramsComponent);
    return ManageprogramsComponent;
}());



/***/ }),

/***/ "./src/app/manageuser/manageuser.component.css":
/*!*****************************************************!*\
  !*** ./src/app/manageuser/manageuser.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".left {\n    width : 40%;\n    float : left;\n    /* height: 450px; */\n    overflow-y: overlay;\n    padding-top: 4rem;\n    padding-left: 15rem;\n    padding-bottom: 5rem;\n  }\n\n  table {\n      border-collapse: collapse;\n      width: 100%;\n    }\n\n  th, td {\n    text-align: left;\n    padding: 8px;\n  }\n\n  tr:nth-child(even){background-color: #f2f2f2}\n\n  th {\n    background-color: orange;\n    color: black;\n  }\n\n  .container {\n    /* padding: 1px 10px;\n    margin-top: 1%;\n    margin-bottom: 1%; */\n    margin: 0;\n  }\n\n  @media only screen and (max-width: 600px) {\n    #searchContainer , #searchText-id{\n      width: 100%;\n      margin-top: 3%;\n    }\n    .left {\n      width: 100%;\n    }\n    .right{\n      width: 100%;\n      margin-left: 0%;\n      margin-top: 8%;\n    }\n  }\n\n  #person{\n      padding-top: 1rem;\n    }\n\n  hr {\n      border: 1px solid #f1f1f1;\n      margin-bottom: 25px;\n    }\n\n  @media screen and (max-width: 606px) {\n    #person{\n        padding-top: 1rem;\n      }\n      .left {\n        width : 100%;\n        float : left;\n        /* height: 450px; */\n        /* overflow-y: overlay; */\n        margin-top: 10rem;\n        margin-left: 1rem;\n        padding-top: 10rem;\n        padding-left: 0.1rem;\n        padding-bottom: 5rem;\n      }\n    }\n  \n\n   \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdldXNlci9tYW5hZ2V1c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixvQkFBb0I7RUFDdEI7O0VBRUE7TUFDSSx5QkFBeUI7TUFDekIsV0FBVztJQUNiOztFQUVGO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDs7RUFFQSxtQkFBbUIseUJBQXlCOztFQUU1QztJQUNFLHdCQUF3QjtJQUN4QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRTs7d0JBRW9CO0lBQ3BCLFNBQVM7RUFDWDs7RUFDQTtJQUNFO01BQ0UsV0FBVztNQUNYLGNBQWM7SUFDaEI7SUFDQTtNQUNFLFdBQVc7SUFDYjtJQUNBO01BQ0UsV0FBVztNQUNYLGVBQWU7TUFDZixjQUFjO0lBQ2hCO0VBQ0Y7O0VBRUE7TUFDSSxpQkFBaUI7SUFDbkI7O0VBRUE7TUFDRSx5QkFBeUI7TUFDekIsbUJBQW1CO0lBQ3JCOztFQUVBO0lBQ0E7UUFDSSxpQkFBaUI7TUFDbkI7TUFDQTtRQUNFLFlBQVk7UUFDWixZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLHlCQUF5QjtRQUN6QixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixvQkFBb0I7UUFDcEIsb0JBQW9CO01BQ3RCO0lBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYW5hZ2V1c2VyL21hbmFnZXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZWZ0IHtcbiAgICB3aWR0aCA6IDQwJTtcbiAgICBmbG9hdCA6IGxlZnQ7XG4gICAgLyogaGVpZ2h0OiA0NTBweDsgKi9cbiAgICBvdmVyZmxvdy15OiBvdmVybGF5O1xuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xuICAgIHBhZGRpbmctbGVmdDogMTVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDVyZW07XG4gIH1cblxuICB0YWJsZSB7XG4gICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIFxuICB0aCwgdGQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG4gIFxuICB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMn1cbiAgXG4gIHRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgLyogcGFkZGluZzogMXB4IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMSU7ICovXG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAjc2VhcmNoQ29udGFpbmVyICwgI3NlYXJjaFRleHQtaWR7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi10b3A6IDMlO1xuICAgIH1cbiAgICAubGVmdCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLnJpZ2h0e1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tbGVmdDogMCU7XG4gICAgICBtYXJnaW4tdG9wOiA4JTtcbiAgICB9XG4gIH1cbiAgXG4gICNwZXJzb257XG4gICAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICB9XG4gICAgXG4gICAgaHIge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgfVxuICAgIFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwNnB4KSB7XG4gICAgI3BlcnNvbntcbiAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgICB9XG4gICAgICAubGVmdCB7XG4gICAgICAgIHdpZHRoIDogMTAwJTtcbiAgICAgICAgZmxvYXQgOiBsZWZ0O1xuICAgICAgICAvKiBoZWlnaHQ6IDQ1MHB4OyAqL1xuICAgICAgICAvKiBvdmVyZmxvdy15OiBvdmVybGF5OyAqL1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHJlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHJlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjFyZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cmVtO1xuICAgICAgfVxuICAgIH1cbiAgXG5cbiAgICJdfQ== */");

/***/ }),

/***/ "./src/app/manageuser/manageuser.component.ts":
/*!****************************************************!*\
  !*** ./src/app/manageuser/manageuser.component.ts ***!
  \****************************************************/
/*! exports provided: ManageuserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageuserComponent", function() { return ManageuserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");



var ManageuserComponent = /** @class */ (function () {
    function ManageuserComponent(userService) {
        this.userService = userService;
    }
    ManageuserComponent.prototype.ngOnInit = function () {
        var _this = this;
        // fetching programs data from service
        this.userService.getUsers().subscribe(function (data) {
            _this.content = data;
            console.log("data", data);
        }, function (err) {
            _this.content = JSON.parse(err.error).message;
        });
    };
    ManageuserComponent.prototype.updateUser = function (user) {
        // console.log('user',user);
        this.userService.updateUser(user).subscribe();
    };
    ManageuserComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    ManageuserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manageuser',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manageuser.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/manageuser/manageuser.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manageuser.component.css */ "./src/app/manageuser/manageuser.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ManageuserComponent);
    return ManageuserComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* css for making entire register component appear below header */\n#signup{\n  padding-top: 4.5rem;\n}\n/* css for the entire register component */\n* {box-sizing: border-box}\ninput[type=email] ,input[type=password] {\n    width: 100%;\n    padding: 12px;\n    margin: 5px 0 10px 0;\n    display: inline-block;\n    border: none;\n    background: #f1f1f1;\n  }\ninput[type=email]:focus,input[type=password]:focus {\n    background-color: #ddd;\n    outline: none;\n  }\nhr {\n    border: 1px solid #f1f1f1;\n    margin-bottom: 10px;\n  }\n/* Set a style for all buttons */\nbutton {\n    background-color: #4CAF50;\n    color: white;\n    padding: 12px 26px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n    opacity: 0.9;\n  }\nbutton:hover {\n    opacity:1;\n  }\n/* Float  signup buttons and add an equal width */\n.signupbtn {\n\n    width: 100%;\n  }\n/* Add padding to container elements */\n.container {\n    padding: 14px;\n  }\n/* Clear floats */\n.clearfix::after {\n    content: \"\";\n    clear: both;\n    display: table;\n  }\n/* Change styles for c signup button on extra small screens */\n@media screen and (max-width: 300px) {\n     .signupbtn {\n       width: 100%;\n    }\n  }\n@media screen and (max-width: 606px) {\n    #signup{\n      padding-top: 11.5rem;\n      padding-bottom: 5.5rem;\n    }\n }\nlabel {\n    display: block;\n    margin-top: 5px;\n  }\n.card-container.card {     \n    max-width: 400px !important;\n    padding: 28px 36px;\n    margin: auto;\n  }\n.card {\n    background-color: #f7f7f7;\n    padding: 20px 25px 30px;\n    margin: 0 auto 15px;\n    margin-top: 5px;\n    border-radius: 2px;\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  }\n.profile-img-card {\n    width: 66px;\n    height: 66px;\n    margin: 0 auto 10px;\n    display: block;\n    border-radius: 50%;\n  }\n.alert-danger{\n   color: #721c24;\n    background-color: #f8d7da;\n    border-color: #f5c6cb;\n    font-size: 1rem;\n    /* font-weight: 400; */\n    line-height: 1.5;\n    color: #212529;\n    text-align: left;\n}\n.alert-warning {\n  color: #856404;\n  background-color: #fff3cd;\n  border-color: #ffeeba;\n}\n.alert {\n  position: relative;\n  padding: .75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: .25rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpRUFBaUU7QUFDakU7RUFDRSxtQkFBbUI7QUFDckI7QUFFQSwwQ0FBMEM7QUFDMUMsR0FBRyxzQkFBc0I7QUFDeEI7SUFDRyxXQUFXO0lBQ1gsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjtBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGFBQWE7RUFDZjtBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLG1CQUFtQjtFQUNyQjtBQUVBLGdDQUFnQztBQUNoQztJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7QUFFQTtJQUNFLFNBQVM7RUFDWDtBQUdBLGlEQUFpRDtBQUNoRDs7SUFFQyxXQUFXO0VBQ2I7QUFFQSxzQ0FBc0M7QUFDdEM7SUFDRSxhQUFhO0VBQ2Y7QUFFQSxpQkFBaUI7QUFDakI7SUFDRSxXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7RUFDaEI7QUFFQSw2REFBNkQ7QUFDN0Q7S0FDRztPQUNFLFdBQVc7SUFDZDtFQUNGO0FBQ0E7SUFDRTtNQUNFLG9CQUFvQjtNQUNwQixzQkFBc0I7SUFDeEI7Q0FDSDtBQUVDO0lBQ0UsY0FBYztJQUNkLGVBQWU7RUFDakI7QUFFQTtJQUNFLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsWUFBWTtFQUNkO0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDBDQUEwQztFQUM1QztBQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjtBQUVGO0dBQ0csY0FBYztJQUNiLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY3NzIGZvciBtYWtpbmcgZW50aXJlIHJlZ2lzdGVyIGNvbXBvbmVudCBhcHBlYXIgYmVsb3cgaGVhZGVyICovXG4jc2lnbnVwe1xuICBwYWRkaW5nLXRvcDogNC41cmVtO1xufVxuXG4vKiBjc3MgZm9yIHRoZSBlbnRpcmUgcmVnaXN0ZXIgY29tcG9uZW50ICovXG4qIHtib3gtc2l6aW5nOiBib3JkZXItYm94fVxuIGlucHV0W3R5cGU9ZW1haWxdICxpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBtYXJnaW46IDVweCAwIDEwcHggMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gIH1cbiAgXG4gIGlucHV0W3R5cGU9ZW1haWxdOmZvY3VzLGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgXG4gIGhyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgXG4gIC8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xuICBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEycHggMjZweDtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3BhY2l0eTogMC45O1xuICB9XG4gIFxuICBidXR0b246aG92ZXIge1xuICAgIG9wYWNpdHk6MTtcbiAgfVxuICBcbiAgXG4gIC8qIEZsb2F0ICBzaWdudXAgYnV0dG9ucyBhbmQgYWRkIGFuIGVxdWFsIHdpZHRoICovXG4gICAuc2lnbnVwYnRuIHtcblxuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAvKiBBZGQgcGFkZGluZyB0byBjb250YWluZXIgZWxlbWVudHMgKi9cbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTRweDtcbiAgfVxuICBcbiAgLyogQ2xlYXIgZmxvYXRzICovXG4gIC5jbGVhcmZpeDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgZGlzcGxheTogdGFibGU7XG4gIH1cbiAgXG4gIC8qIENoYW5nZSBzdHlsZXMgZm9yIGMgc2lnbnVwIGJ1dHRvbiBvbiBleHRyYSBzbWFsbCBzY3JlZW5zICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XG4gICAgIC5zaWdudXBidG4ge1xuICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDZweCkge1xuICAgICNzaWdudXB7XG4gICAgICBwYWRkaW5nLXRvcDogMTEuNXJlbTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1LjVyZW07XG4gICAgfVxuIH1cblxuICBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG4gIFxuICAuY2FyZC1jb250YWluZXIuY2FyZCB7ICAgICBcbiAgICBtYXgtd2lkdGg6IDQwMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMjhweCAzNnB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuXG4gIC5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICAgIHBhZGRpbmc6IDIwcHggMjVweCAzMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvIDE1cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIH1cbiAgXG4gIC5wcm9maWxlLWltZy1jYXJkIHtcbiAgICB3aWR0aDogNjZweDtcbiAgICBoZWlnaHQ6IDY2cHg7XG4gICAgbWFyZ2luOiAwIGF1dG8gMTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cblxuLmFsZXJ0LWRhbmdlcntcbiAgIGNvbG9yOiAjNzIxYzI0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGQ3ZGE7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjVjNmNiO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAvKiBmb250LXdlaWdodDogNDAwOyAqL1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmFsZXJ0LXdhcm5pbmcge1xuICBjb2xvcjogIzg1NjQwNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjNjZDtcbiAgYm9yZGVyLWNvbG9yOiAjZmZlZWJhO1xufVxuLmFsZXJ0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAuNzVyZW0gMS4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService) {
        this.authService = authService;
        this.form = {
            email: '',
            password: '',
            repeatpsw: '',
            role: ''
        };
        this.isSuccessful = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
        this.hideSuccessMessage = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    // Implement onSubmit  to save the user details
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        // console.log("initial value",this.form);
        if (this.form.password == this.form.repeatpsw) {
            this.form.role = "user";
            //  console.log("final value",this.form);
            this.authService.register(this.form).subscribe(function (data) {
                console.log(data);
                _this.isSuccessful = true;
                _this.isSignUpFailed = false;
            }, function (err) {
                _this.errorMessage = err.error.message;
                _this.isSignUpFailed = true;
            });
        }
    };
    RegisterComponent.prototype.FadeOutSuccessMsg = function () {
        var _this = this;
        setTimeout(function () {
            _this.hideSuccessMessage = true;
        }, 2000);
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default]
        })
        // RegisterComponent is to registration of a user
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/userquery/userquery.component.css":
/*!***************************************************!*\
  !*** ./src/app/userquery/userquery.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* css to make all cards appear below header */\n#userquery{\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\n/* css for alignment of cards */\n* {\n    box-sizing: border-box;\n  }\ninput[type=text],input[type=number], select, textarea {\n    width: 100%;\n    padding: 12px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    resize: vertical;\n  }\nlabel {\n    padding: 12px 12px 12px 0;\n    display: inline-block;\n  }\ninput[type=submit] {\n    background-color: #4CAF50;\n    color: white;\n    padding: 12px 20px;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    float: right;\n  }\ninput[type=submit]:hover {\n    background-color: #45a049;\n  }\n.container {\n\n    border-radius: 5px;\n    background-color: #f2f2f2;\n    padding: 20px;\n    left: 1rem;\n    width: 95%;\n    margin: auto;\n    border-radius: 5px;\n    background-color: #f2f2f2;\n    padding: 20px;\n  }\n.col-25 {\n    float: left;\n    width: 25%;\n    margin-top: 6px;\n  }\n.col-75 {\n    float: left;\n    width: 75%;\n    margin-top: 6px;\n  }\n/* Clear floats after the columns */\n.row:after {\n    content: \"\";\n    display: table;\n    clear: both;\n  }\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n    .col-25, .col-75, input[type=submit] {\n      width: 100%;\n      margin-top: 0;\n    }\n    #userquery{\n      padding-top: 12.5rem;\n      padding-bottom: 6rem;\n    }\n    \n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnF1ZXJ5L3VzZXJxdWVyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhDQUE4QztBQUM5QztFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFFQSwrQkFBK0I7QUFDL0I7SUFDSSxzQkFBc0I7RUFDeEI7QUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7RUFDdkI7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7RUFDZDtBQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0FBRUE7O0lBRUUsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsVUFBVTtJQUNWLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixhQUFhO0VBQ2Y7QUFFQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZUFBZTtFQUNqQjtBQUVBO0lBQ0UsV0FBVztJQUNYLFVBQVU7SUFDVixlQUFlO0VBQ2pCO0FBRUEsbUNBQW1DO0FBQ25DO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0VBQ2I7QUFFQSwrSUFBK0k7QUFDL0k7SUFDRTtNQUNFLFdBQVc7TUFDWCxhQUFhO0lBQ2Y7SUFDQTtNQUNFLG9CQUFvQjtNQUNwQixvQkFBb0I7SUFDdEI7O0VBRUYiLCJmaWxlIjoic3JjL2FwcC91c2VycXVlcnkvdXNlcnF1ZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBjc3MgdG8gbWFrZSBhbGwgY2FyZHMgYXBwZWFyIGJlbG93IGhlYWRlciAqL1xuI3VzZXJxdWVyeXtcbiAgcGFkZGluZy10b3A6IDRyZW07XG4gIHBhZGRpbmctYm90dG9tOiA0cmVtO1xufVxuXG4vKiBjc3MgZm9yIGFsaWdubWVudCBvZiBjYXJkcyAqL1xuKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICBcbiAgaW5wdXRbdHlwZT10ZXh0XSxpbnB1dFt0eXBlPW51bWJlcl0sIHNlbGVjdCwgdGV4dGFyZWEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgfVxuICBcbiAgbGFiZWwge1xuICAgIHBhZGRpbmc6IDEycHggMTJweCAxMnB4IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIFxuICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbiAgXG4gIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcbiAgfVxuICBcbiAgLmNvbnRhaW5lciB7XG5cbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGxlZnQ6IDFyZW07XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICBcbiAgLmNvbC0yNSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG4gIH1cbiAgXG4gIC5jb2wtNzUge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICB9XG4gIFxuICAvKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cbiAgLnJvdzphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBjbGVhcjogYm90aDtcbiAgfVxuICBcbiAgLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSB3aGVuIHRoZSBzY3JlZW4gaXMgbGVzcyB0aGFuIDYwMHB4IHdpZGUsIG1ha2UgdGhlIHR3byBjb2x1bW5zIHN0YWNrIG9uIHRvcCBvZiBlYWNoIG90aGVyIGluc3RlYWQgb2YgbmV4dCB0byBlYWNoIG90aGVyICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLmNvbC0yNSwgLmNvbC03NSwgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG4gICAgI3VzZXJxdWVyeXtcbiAgICAgIHBhZGRpbmctdG9wOiAxMi41cmVtO1xuICAgICAgcGFkZGluZy1ib3R0b206IDZyZW07XG4gICAgfVxuICAgIFxuICB9XG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/userquery/userquery.component.ts":
/*!**************************************************!*\
  !*** ./src/app/userquery/userquery.component.ts ***!
  \**************************************************/
/*! exports provided: UserqueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserqueryComponent", function() { return UserqueryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");





var UserqueryComponent = /** @class */ (function () {
    // Form is created in html file and write code to make it functional using FormBuilder
    function UserqueryComponent(userService, formBuilder, tokenStorageService) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.tokenStorageService = tokenStorageService;
        this.content = '';
        this.queryRaised = false;
        this.form = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: '',
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            query: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: '',
            cseRemarks: ''
        });
    }
    UserqueryComponent.prototype.ngOnInit = function () {
    };
    //Implement onSubmit method to save all the queries of different users
    UserqueryComponent.prototype.onSubmit = function (value) {
        var _this = this;
        console.log("value", value);
        var user = this.tokenStorageService.getUser();
        value.email = user.email;
        // value.status= 'active';
        if (value.name.length > 0 && value.email.length > 0) {
            // call userservice and using a method addQuery which adds query 
            this.userService.addQuery(value).subscribe(function (data) {
                _this.queryRaised = true;
            });
        }
        // this.reload();
    };
    UserqueryComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"] }
    ]; };
    UserqueryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userquery',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./userquery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/userquery/userquery.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./userquery.component.css */ "./src/app/userquery/userquery.component.css")).default]
        })
        //UserqueryComponent is reposnsible for the users to write their quries on any program
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"]])
    ], UserqueryComponent);
    return UserqueryComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false,
    // // various APIs through API Gateway
    // AUTH_API: 'apigateway/userservice/api/v1/userservice',
    // AUTH_LOGIN_API: 'apigateway/userservice/api/v1/userservice/login',
    // ADMIN_API_URL: 'apigateway/gymservice/api/v1/gymservice',
    // USER_BOARD_API_URL: 'apigateway/gymservice/api/v1/gymservice',
    // USER_QUERY_API_URL: 'apigateway/enquiryservice/api/v1/enquiryservice',
    // USER_TICKET_API: 'apigateway/ticketservice/api/v1/ticketservice',

        // various APIs without API gateway
        AUTH_API: 'http://user-service-goldys-gym.apps-crc.testing/api/v1/userservice',
        AUTH_LOGIN_API: 'http://user-service-goldys-gym.apps-crc.testing/api/v1/userservice/login',
        ADMIN_API_URL: 'apigateway/gymservice/api/v1/gymservice',
        USER_BOARD_API_URL: 'apigateway/gymservice/api/v1/gymservice',
        USER_QUERY_API_URL: 'apigateway/enquiryservice/api/v1/enquiryservice',
        USER_TICKET_API: 'apigateway/ticketservice/api/v1/ticketservice',
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/somsubhramukherjee/somsubhra/StackRoute/CTS Micro-Credential - Spring - Assignment/Goldys Gym - Final/MC5/solution/part-2/jr_fse_deploying_containerized_app_part2_solution/GoldysGym-UI/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map