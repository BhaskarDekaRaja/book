(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/about-us/about-us.component.css":
/*!*************************************************!*\
  !*** ./src/app/about-us/about-us.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head{\r\n    text-align: center;\r\n    color: whitesmoke;\r\n    font-size: 30px;\r\n    font-weight: 500;\r\n    text-shadow: 2px 2px 10px black;\r\n    background-color: rgba(137, 43, 226, 0.308);\r\n}\r\n.down{\r\n    background-color: rgba(0,0,0,0.4);\r\n    border-radius: 15px;\r\n    width: 100%;\r\n}\r\n.down p{\r\n    text-align: center;\r\n    font-size: 25px;\r\n    color: white;\r\n    text-shadow: 2px 2px 10px black;\r\n}"

/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head\">\n        About Us\n        <hr>\n</div>\n<div class=\"down\">\n   <p>\n        This website provides an e-commerce platfrom for Online Book Library and Book Sale.\n        <br/>\n        It provides the user with a catalog of different books available for Online Reading as \n        a Library Service and also purchase the hard-copy of the book from the store.In order \n        to facilitate online purchase a shopping cart is provided to the user.\n        <br/>\n        In order to provide Library Service we are providing various membership categories \n        (like Trial, Monthly, Quarterly,  Half-Yearly and Yearly).\n        <br/>\n        Membership Type will decide the nominal Subscription Fees.\n        <br/>\n        A single member will be able to subscribe 4 books for a week.\n   </p>\n</div>"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _categories_books_books_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./categories/books/books.component */ "./src/app/categories/books/books.component.ts");
/* harmony import */ var _user_account_user_account_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-account/user-account.component */ "./src/app/user-account/user-account.component.ts");
/* harmony import */ var _user_account_address_address_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-account/address/address.component */ "./src/app/user-account/address/address.component.ts");
/* harmony import */ var _user_account_details_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-account/details/details.component */ "./src/app/user-account/details/details.component.ts");
/* harmony import */ var _user_account_orders_orders_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-account/orders/orders.component */ "./src/app/user-account/orders/orders.component.ts");
/* harmony import */ var _categories_fiction_fiction_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./categories/fiction/fiction.component */ "./src/app/categories/fiction/fiction.component.ts");
/* harmony import */ var _categories_non_fiction_non_fiction_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./categories/non-fiction/non-fiction.component */ "./src/app/categories/non-fiction/non-fiction.component.ts");
/* harmony import */ var _categories_love_stories_love_stories_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./categories/love-stories/love-stories.component */ "./src/app/categories/love-stories/love-stories.component.ts");
/* harmony import */ var _categories_health_beauty_health_beauty_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./categories/health-beauty/health-beauty.component */ "./src/app/categories/health-beauty/health-beauty.component.ts");
/* harmony import */ var _categories_horror_horror_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./categories/horror/horror.component */ "./src/app/categories/horror/horror.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'about-us',
        component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__["AboutUsComponent"]
    },
    {
        path: 'contact-us',
        component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__["ContactUsComponent"]
    },
    {
        path: 'categories',
        component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesComponent"],
        children: [
            {
                path: 'fiction',
                component: _categories_fiction_fiction_component__WEBPACK_IMPORTED_MODULE_13__["FictionComponent"]
            },
            {
                path: 'nonFiction',
                component: _categories_non_fiction_non_fiction_component__WEBPACK_IMPORTED_MODULE_14__["NonFictionComponent"]
            },
            {
                path: 'loveStories',
                component: _categories_love_stories_love_stories_component__WEBPACK_IMPORTED_MODULE_15__["LoveStoriesComponent"]
            },
            {
                path: 'healthBeauty',
                component: _categories_health_beauty_health_beauty_component__WEBPACK_IMPORTED_MODULE_16__["HealthBeautyComponent"]
            },
            {
                path: 'horror',
                component: _categories_horror_horror_component__WEBPACK_IMPORTED_MODULE_17__["HorrorComponent"]
            }
        ],
    },
    {
        path: 'books',
        component: _categories_books_books_component__WEBPACK_IMPORTED_MODULE_8__["BooksComponent"]
    },
    {
        path: 'sign-in',
        component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__["SignInComponent"]
    },
    {
        path: 'sign-up',
        component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["SignUpComponent"]
    },
    {
        path: 'user-account',
        component: _user_account_user_account_component__WEBPACK_IMPORTED_MODULE_9__["UserAccountComponent"],
        children: [
            {
                path: 'address-details',
                component: _user_account_address_address_component__WEBPACK_IMPORTED_MODULE_10__["AddressComponent"]
            },
            {
                path: 'account-details',
                component: _user_account_details_details_component__WEBPACK_IMPORTED_MODULE_11__["DetailsComponent"]
            },
            {
                path: 'order-details',
                component: _user_account_orders_orders_component__WEBPACK_IMPORTED_MODULE_12__["OrdersComponent"]
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\ndiv\r\n{\r\n    border: 1px solid whitesmoke;\r\n}\r\n*/\r\n* \r\n{\r\n    box-sizing: border-box;\r\n}\r\nbody\r\n{\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    margin: 0;\r\n}\r\n#app-header\r\n{\r\n    padding: 5px;\r\n    height: 180px;\r\n    width: 100%;\r\n    background-image: url('bookHeader.jpg');\r\n    margin: 0px;\r\n    text-shadow: 2px 2px 10px gray;\t\r\n}\r\n/* Increase the font size of the p element */\r\n#app-header p {\r\n    font-size: 30px;\r\n    margin-left: 15%;\r\n    margin-top: 5%;\r\n    align-self: baseline;\r\n    color: rgba(250, 10, 25, 0.918);\r\n\r\n}\r\n.navBar{\r\n    padding:5px;\r\n    background-color: rgba(0,0,0,0.7);\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    color:white;\r\n    margin: 0px;\r\n}\r\n.navBar ul{\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n.navBar ul li{\r\n    float: left;\r\n    color:white;\r\n}\r\n.navBar ul li a{\r\n    text-decoration: none;\r\n    color:white;\r\n    padding: 10px 25px;\r\n    display: inline-block;\r\n    font-size: 18px;\r\n}\r\n.navBar a.optNavRight{\r\n    float: right;\r\n    text-decoration: none;\r\n    color:white;\r\n    padding: 10px 25px;\r\n    font-size: 18px;\r\n}\r\n.dropdown_list{\r\n    background-color:rgba(255,255,255,0.2);\r\n    position: absolute;\r\n    display: none;\r\n    border-radius: 20px;\r\n}\r\n.dropdown_list a{\r\n    display: block;\r\n}\r\n.navBar ul li a:hover{\r\n    color: green;\r\n    background-color: blanchedalmond;\r\n    border-radius: 20px;\r\n}\r\n.navBar a.optNavRight:hover{\r\n    color: green;\r\n    background-color: blanchedalmond;\r\n    border-radius: 20px;\r\n}\r\n.dropdown:hover .dropdown_list{\r\n    display:block;\r\n    width: 10%;\r\n}\r\n.footer{\r\n    background-color: rgb(253, 198, 143);\r\n    opacity: 0.8;\r\n    font-weight: 500;\r\n    width: 100%;\r\n    display:inline-block;\r\n}\r\n.right,.left,.cats,.center{\r\n    float:left;\r\n    width: 25%;\r\n    text-align: center;\r\n}\r\n.foot{\r\nbackground-color: rgb(253, 70, 70);\r\ncolor:white;\r\ntext-align: center;\r\n}\r\n.imgs{\r\n    height:8px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"jumbotron\" id=\"app-header\">\n    <div class=\"applogo\" style=\"float:left; height: 150px; width: 200px;\">\n        <img src=\"../assets/bookhubImg.png\" style=\"height: 100%; width: 100%\">\n    </div>\n      <p><i>An Ultimate Companinon...</i></p>\n</div>\n  \n<div class=\"navBar\">\n    <ul>\n      <li>\n        <a routerLink=''>Home</a> |\n      </li>\n      <li class=\"dropdown\">\n        <a routerLink='categories'>Categories</a>|\n          <div class=\"dropdown_list\">\n            <a routerLink=\"books\">&nbsp;&nbsp;Books</a>\n            <a routerLink=\"articles\">Articles</a>\n            <a routerLink=\"e-book\">E-Book</a>\n          </div>\n      </li>\n      <li>\n          <a routerLink=\"user-account\">User Account</a>|\n      </li>\n      <li>\n          <a routerLink='about-us'>About Us</a>|\n      </li>\n      <li>\n        <a routerLink='contact-us'>Contact Us</a>\n      </li>\n    </ul>\n  \n        <a class=\"optNavRight\" routerLink='sign-up'>Sign Up </a>\n        <a class=\"optNavRight\" routerLink='sign-in'>Sign In </a> \n</div>\n\n <router-outlet></router-outlet>\n\n<div id=\"footer\" class=\"jumbotron\">\n    <div class=\"imgs\">\n        <i><b>Our Customer care support is available 24/7 : +9185555555</b></i>\n        <a href=\"https://www.facebook.com/\">\n              <img src=\"./assets/fb.png\" style=\"border-radius:10px; width:30px; height:30px; float:right;\"/>\n        </a>\n        <a href=\"https://www.twitter.com/\">\n              <img src=\"./assets/tw.png\" style=\"border-radius:10px; width:30px; height:30px; float:right;\"/>\n        </a>\n        <a href=\"https://www.gmail.com/\">\n              <img src=\"./assets/gmail.png\" style=\"border-radius:10px; width:30px; height:30px; float:right;\"/>\n        </a>\n    </div>\n\n    <hr>\n\n    <div class=\"left\">\n        <img src=\"../assets/bookhubImg.png\"  height=\"40px\" width=\"100px\">\n        <p>\n            This website deals with an e-commerce platform for Online Book Library and Book Sale.\n            It provides the user with a catalog of different books available for Online Reading as \n            a Library Service and also purchase the hard-copy of the book from the store.\n        </p>\n    </div>\n\n    <div class=\"right\">\n      <h4>Address Line</h4>\n      <address>\n          #8,2ndFloor, <br>\n          BTM Layout, <br>\n          2nd Stage, <br>\n          Udupi garden bus stop, <br>\n          Bangalore-560 076 <br>\n          Ph: +9185555555 <br>\n          Email:contact@bookhub.in\n      </address>\n    </div>\n\n    <div class=\"cats\">\n      <h4>Categories</h4>\n      <p>\n          Fiction<br>\n          Non-Fiction<br>\n          Love Stories<br>\n          Health & Beauty<br>\n          Horror<br>\n          Biography\n      </p>\n    </div>\n\n    <div class =\"center\">\n      <h4>Get to know Us</h4>\n      <p>\n        About<br>\n        Contact us<br>\n        Career<br>\n        Help Center\n      </p>\n    </div>\n</div>\n  <div class=\"foot\">&copy; Copyright reserved by Bookhub.in</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'bookhub';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _categories_books_books_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./categories/books/books.component */ "./src/app/categories/books/books.component.ts");
/* harmony import */ var _categories_articles_articles_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./categories/articles/articles.component */ "./src/app/categories/articles/articles.component.ts");
/* harmony import */ var _categories_e_books_e_books_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./categories/e-books/e-books.component */ "./src/app/categories/e-books/e-books.component.ts");
/* harmony import */ var _user_account_user_account_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-account/user-account.component */ "./src/app/user-account/user-account.component.ts");
/* harmony import */ var _user_account_details_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-account/details/details.component */ "./src/app/user-account/details/details.component.ts");
/* harmony import */ var _user_account_address_address_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-account/address/address.component */ "./src/app/user-account/address/address.component.ts");
/* harmony import */ var _user_account_orders_orders_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user-account/orders/orders.component */ "./src/app/user-account/orders/orders.component.ts");
/* harmony import */ var _categories_fiction_fiction_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./categories/fiction/fiction.component */ "./src/app/categories/fiction/fiction.component.ts");
/* harmony import */ var _categories_non_fiction_non_fiction_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./categories/non-fiction/non-fiction.component */ "./src/app/categories/non-fiction/non-fiction.component.ts");
/* harmony import */ var _categories_love_stories_love_stories_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./categories/love-stories/love-stories.component */ "./src/app/categories/love-stories/love-stories.component.ts");
/* harmony import */ var _categories_health_beauty_health_beauty_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./categories/health-beauty/health-beauty.component */ "./src/app/categories/health-beauty/health-beauty.component.ts");
/* harmony import */ var _categories_horror_horror_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./categories/horror/horror.component */ "./src/app/categories/horror/horror.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__["AboutUsComponent"],
                _categories_categories_component__WEBPACK_IMPORTED_MODULE_6__["CategoriesComponent"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__["ContactUsComponent"],
                _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__["SignUpComponent"],
                _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__["SignInComponent"],
                _categories_books_books_component__WEBPACK_IMPORTED_MODULE_10__["BooksComponent"],
                _categories_articles_articles_component__WEBPACK_IMPORTED_MODULE_11__["ArticlesComponent"],
                _categories_e_books_e_books_component__WEBPACK_IMPORTED_MODULE_12__["EBooksComponent"],
                _user_account_user_account_component__WEBPACK_IMPORTED_MODULE_13__["UserAccountComponent"],
                _user_account_details_details_component__WEBPACK_IMPORTED_MODULE_14__["DetailsComponent"],
                _user_account_address_address_component__WEBPACK_IMPORTED_MODULE_15__["AddressComponent"],
                _user_account_orders_orders_component__WEBPACK_IMPORTED_MODULE_16__["OrdersComponent"],
                _categories_fiction_fiction_component__WEBPACK_IMPORTED_MODULE_17__["FictionComponent"],
                _categories_non_fiction_non_fiction_component__WEBPACK_IMPORTED_MODULE_18__["NonFictionComponent"],
                _categories_love_stories_love_stories_component__WEBPACK_IMPORTED_MODULE_19__["LoveStoriesComponent"],
                _categories_health_beauty_health_beauty_component__WEBPACK_IMPORTED_MODULE_20__["HealthBeautyComponent"],
                _categories_horror_horror_component__WEBPACK_IMPORTED_MODULE_21__["HorrorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/categories/articles/articles.component.css":
/*!************************************************************!*\
  !*** ./src/app/categories/articles/articles.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/categories/articles/articles.component.html":
/*!*************************************************************!*\
  !*** ./src/app/categories/articles/articles.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  articles works!\n</p>\n"

/***/ }),

/***/ "./src/app/categories/articles/articles.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/categories/articles/articles.component.ts ***!
  \***********************************************************/
/*! exports provided: ArticlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesComponent", function() { return ArticlesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticlesComponent = /** @class */ (function () {
    function ArticlesComponent() {
    }
    ArticlesComponent.prototype.ngOnInit = function () {
    };
    ArticlesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-articles',
            template: __webpack_require__(/*! ./articles.component.html */ "./src/app/categories/articles/articles.component.html"),
            styles: [__webpack_require__(/*! ./articles.component.css */ "./src/app/categories/articles/articles.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArticlesComponent);
    return ArticlesComponent;
}());



/***/ }),

/***/ "./src/app/categories/books/books.component.css":
/*!******************************************************!*\
  !*** ./src/app/categories/books/books.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/categories/books/books.component.html":
/*!*******************************************************!*\
  !*** ./src/app/categories/books/books.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>BOOKS</h1>"

/***/ }),

/***/ "./src/app/categories/books/books.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/categories/books/books.component.ts ***!
  \*****************************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BooksComponent = /** @class */ (function () {
    function BooksComponent() {
    }
    BooksComponent.prototype.ngOnInit = function () {
    };
    BooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-books',
            template: __webpack_require__(/*! ./books.component.html */ "./src/app/categories/books/books.component.html"),
            styles: [__webpack_require__(/*! ./books.component.css */ "./src/app/categories/books/books.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BooksComponent);
    return BooksComponent;
}());



/***/ }),

/***/ "./src/app/categories/categories.component.css":
/*!*****************************************************!*\
  !*** ./src/app/categories/categories.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div\r\n{\r\n    border: 1px solid gray;\r\n}\r\n\r\n* \r\n{\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody\r\n{\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    margin: 0;\r\n}\r\n\r\n#userContent\r\n{\r\n    width: 100%;\r\n}\r\n\r\n#userHead\r\n{\r\n    height: 10%;\r\n    width: 100%;\r\n    color: whitesmoke;\r\n    background-color: rgba(137, 43, 226, 0.349);\r\n    text-shadow: 2px 2px 5px black;\r\n}\r\n\r\n#heading\r\n{\r\n    font-size: 30px;\r\n}\r\n\r\n#userDashboard\r\n{\r\n    height: 90%;\r\n    width: 100%;\r\n}\r\n\r\n.userAcountNavg\r\n{\r\n    overflow: hidden;\r\n    background-color: rgba(245, 84, 84, 0.486);\r\n    border-radius: 5px;\r\n    text-shadow: 2px 2px 10px black;\t\r\n}\r\n\r\n.userAcountNavg ul\r\n{\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.userAcountNavg ul li\r\n{\r\n    float: left;\r\n}\r\n\r\n.userAcountNavg ul li a {\r\n    float: left;\r\n    display: block;\r\n    text-align: center;\r\n    color: whitesmoke;\r\n    font-size: 20px;\r\n    padding: 14px 20px;\r\n    text-decoration: none;\r\n}\r\n\r\n.userAcountNavg ul li a:hover{\r\n    background-color:rgba(240,255,200,0.5);\r\n    color: red;\r\n    border-radius: 5px;\r\n}\r\n\r\n#divUserFarme\r\n{\r\n    height: 75%;\r\n    width: 100%;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/categories/categories.component.html":
/*!******************************************************!*\
  !*** ./src/app/categories/categories.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"userContent\">\n    <div id=\"userHead\" style=\"text-align:center;\">\n        <!--This is userHead<br> -->\n        <strong id=\"heading\">Book Categories</strong>\n    </div>\n  \n    <div id=\"userDashboard\">\n     <!-- This is userDashboard<br> -->\n  \n          <div class=\"userAcountNavg\">\n              <ul>\n                  <li><a routerLink=\"fiction\">Fiction</a></li>\n                  <li><a routerLink=\"nonFiction\">Non-Fiction</a></li>\n                  <li><a routerLink=\"loveStories\">Love-Stories</a></li>\n                  <li><a routerLink=\"healthBeauty\">Health & Beauty</a></li>\n                  <li><a routerLink=\"horror\">Horror</a></li>\n              </ul>\n          </div>\n  \n          <div id=\"divUserFarme\">\n                  <hr>\n                  <router-outlet></router-outlet>\n                  <hr>\n          </div>\n  \n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent() {
    }
    CategoriesComponent.prototype.ngOnInit = function () {
    };
    CategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/categories/categories.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/categories/e-books/e-books.component.css":
/*!**********************************************************!*\
  !*** ./src/app/categories/e-books/e-books.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/categories/e-books/e-books.component.html":
/*!***********************************************************!*\
  !*** ./src/app/categories/e-books/e-books.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  e-books works!\n</p>\n"

/***/ }),

/***/ "./src/app/categories/e-books/e-books.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/categories/e-books/e-books.component.ts ***!
  \*********************************************************/
/*! exports provided: EBooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EBooksComponent", function() { return EBooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EBooksComponent = /** @class */ (function () {
    function EBooksComponent() {
    }
    EBooksComponent.prototype.ngOnInit = function () {
    };
    EBooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-e-books',
            template: __webpack_require__(/*! ./e-books.component.html */ "./src/app/categories/e-books/e-books.component.html"),
            styles: [__webpack_require__(/*! ./e-books.component.css */ "./src/app/categories/e-books/e-books.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EBooksComponent);
    return EBooksComponent;
}());



/***/ }),

/***/ "./src/app/categories/fiction/fiction.component.css":
/*!**********************************************************!*\
  !*** ./src/app/categories/fiction/fiction.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\ndiv\r\n{\r\n    border: 1px solid whitesmoke;\r\n}\r\n*/\r\n#container{\r\n    width: 100%;\r\n    height: 300px;\r\n    overflow: hidden;\r\n    margin-top: 6%;\r\n}\r\n.row\r\n{\r\n    width: 100%;\r\n}\r\n.col-ss{\r\n    margin:5px;\r\n}\r\n#img1{\r\n    height:275px;\r\n}\r\nh2{\r\n    color: whitesmoke;\r\n    font-family:'Times New Roman';\r\n    font-size:30px;\r\n    text-transform: uppercase;\r\n   \r\n}\r\nh4{\r\n    font-size:15px;\r\n    color:maroon;\r\n    text-shadow: 2px 2px 5px #888888;\r\n   \r\n}\r\n/*\r\n.card{\r\n    \r\n}\r\n*/\r\n.card-text{\r\n    text-shadow: 2px 2px 5px #888888;\r\n    padding:1px;\r\n    \r\n}\r\nh2{\r\n    text-shadow: 2px 2px 5px #888888;;\r\n}\r\n.card-body{\r\n    padding:3px;\r\n}\r\n.modal-header{\r\n    height: 60px;\r\n}\r\n.modal-body{\r\n    height: 1000px;\r\n}\r\n.modal-body img{\r\n    height: 300px;\r\n    width: 200px;\r\n    margin-left: 0;\r\n}\r\n.modal-body a img{\r\n    height: 50px;\r\n    width: 50px;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n.side{\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 250px;\r\n}\r\n.submit{\r\n    height: 40px;\r\n    width: 100px;\r\n}\r\n.checked {\r\n    color: orange;\r\n}\r\n.modal-content{\r\n    width: 700px;\r\n}\r\ninput{\r\n    background: none;\r\n    border: none;\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/categories/fiction/fiction.component.html":
/*!***********************************************************!*\
  !*** ./src/app/categories/fiction/fiction.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-ss\">\n      <div class=\"container\">\n          <h2>Fiction</h2>\n          <div class=\"container\">\n          <br><br>\n          <div class=\"card\" style=\"width:200px\">\n              <div class=\"container\">\n                    <!-- Trigger the modal with a button -->\n                    <img  data-toggle=\"modal\" data-target=\"#myModal\" class=\"card-img-top\"  src=\"../assets/bookDisp.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n        \n                    <!-- Modal -->\n                    <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n                        <div class=\"modal-dialog\">\n            \n                        <!-- Modal content-->\n                            <div class=\"modal-content\">\n                              <div class=\"modal-header\">\n                                  <h2>Fiction</h2>\n                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                              </div>\n                              <div class=\"modal-body\">\n                                      <img src=\"assets\\bookDisp.jpg\">\n                                  <div class=\"side\">\n                                        <h3>The Hunger Games</h3>\n                                        <h6>By : Suzanne Collins</h6><br>\n                                        <input type=\"text\" value=\"&#x20b9;200.00\" disabled #price>\n                                \n                                        <h5>Ratings </h5>\n                                        <span class=\"fa fa-star checked\"></span>\n                                        <span class=\"fa fa-star checked\"></span>\n                                        <span class=\"fa fa-star checked\"></span>\n                                        <span class=\"fa fa-star checked\"></span>\n                                        <span class=\"fa fa-star\"></span><br><br>\n                                \n                                        <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                  \n                                      <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                                      <h5>Description :</h5> <p>After winning the brutal Hunger Games, Katniss and Peeta return to their district, hoping for a peaceful future. But their victory has caused rebellion to break out ... and the Capitol has decided that someone must pay. As Katniss and Peeta are forced to visit the districts on the Capitol's Victory Tour, the stakes are higher than ever. Unless they can convince the world that they are still lost in their love for each other, the consequences will be horrifying. Then comes the cruellest twist: the contestants for the next Hunger Games are announced, and Katniss and Peeta are forced into the arena once more.</p><br><br>\n                                \n                                      <hr>\n                                \n                                      <h5>Reviews : </h5><br>\n                                      <h6>Vikram</h6>\n                                      <span class=\"fa fa-star checked\"></span>\n                                      <span class=\"fa fa-star checked\"></span>\n                                      <span class=\"fa fa-star checked\"></span>\n                                      <span class=\"fa fa-star checked\"></span>\n                                      <span class=\"fa fa-star checked\"></span><br>\n                                      <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                      </div>\n                      </div>\n        \n                </div>\n              </div>\n              \n            </div>\n          </div>\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">The Hunger Games</h4>\n          <p class=\"card-text\">Suzanne Collins<br>\n          Price:&#x20b9; 200.00</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>\n  \n  \n    <div class=\"col-ss\">\n        <div class=\"container\"><br><br>\n          <div class=\"container\"><br><br>\n            <div class=\"card\" style=\"width:200px\">\n  \n              <div class=\"container\">\n                <!-- Trigger the modal with a button -->\n                <img data-toggle=\"modal\" data-target=\"#myModal1\" class=\"card-img-top\"  src=\"../assets/twilight.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n              \n                <!-- Modal -->\n                <div class=\"modal fade\" id=\"myModal1\" role=\"dialog\">\n                  <div class=\"modal-dialog\">\n                  \n                    <!-- Modal content-->\n                    <div class=\"modal-content\">\n                      <div class=\"modal-header\">\n                          <h2>Fiction</h2>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                      </div>\n              \n              \n                      <div class=\"modal-body\">\n                        \n                          <img src=\"assets\\twilight.jpg\">\n                          <div class=\"side\">\n                              <h3>The Twilight</h3>\n                              <h6>By : Stephenie Meyer</h6><br>\n                              <input type=\"text\" value=\"&#x20b9;250.00\" disabled #price>\n                      \n                              <h5>Ratings </h5>\n                              <span class=\"fa fa-star checked\"></span>\n                              <span class=\"fa fa-star checked\"></span>\n                              <span class=\"fa fa-star checked\"></span>\n                              <span class=\"fa fa-star \"></span>\n                              <span class=\"fa fa-star\"></span><br><br>\n                      \n                              <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                              \n                             <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                             <h5>Description :</h5> <p>Twilight (Twilight Saga) is written by Stephenie Meyer. The author of the book has released 4 novels annually from 2005 to 2008. The story is based on a teenage girl named Bella Swan who moves to Forks, Washington and falls in love with Edward Cullen, who is a 104 year old vampire. The book has gained popularity, since the release of its first novel in 2005. The love story of a girl and a vampire was popular amongst all age groups. All the four books have won various awards and most notably the 2008 British Book Award for \"Children's Book of the Year\" for Breaking Dawn, whereas the entire series had won the 2009 Kids' Choice Award for Favourite Book. Globally, 120 million copies of the series have sold out in more than 38 languages.</p><br><br>\n                      \n                             <hr>\n                      \n                             <h5>Reviews : </h5><br>\n                             <h6>Irfan</h6>\n                             <span class=\"fa fa-star checked\"></span>\n                             <span class=\"fa fa-star checked\"></span>\n                             <span class=\"fa fa-star\"></span>\n                             <span class=\"fa fa-star\"></span>\n                             <span class=\"fa fa-star\"></span><br>\n                             <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                            </div>\n                            </div>\n              \n                      </div>\n                    </div>\n                    </div>\n                    </div>\n  \n              <div class=\"card-body\">\n                <h4 class=\"card-title\">Twilight</h4>\n                <p class=\"card-text\">Stephenie Meyer<br> \n                Price:&#x20b9;250.00</p>\n              </div>\n            </div>\n          </div>\n            </div>  \n          </div>\n  \n  \n  \n  \n          <div class=\"col-ss\">\n              <div class=\"container\"><br><br>\n                <div class=\"container\"><br><br>\n                  <div class=\"card\" style=\"width:200px\">\n                   <!-- <img class=\"card-img-top\" src=\"../assets/img4.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\"> -->\n  \n                    <div class=\"container\">\n                      <!-- Trigger the modal with a button -->\n                      <img data-toggle=\"modal\" data-target=\"#myModal2\" class=\"card-img-top\"  src=\"../assets/img4.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n                    \n                      <!-- Modal -->\n                      <div class=\"modal fade\" id=\"myModal2\" role=\"dialog\">\n                        <div class=\"modal-dialog\">\n                        \n                          <!-- Modal content-->\n                          <div class=\"modal-content\">\n                            <div class=\"modal-header\">\n                                <h2>Fiction</h2>\n                              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                            </div>\n                    \n                    \n                            <div class=\"modal-body\">\n                              \n                                <img src=\"assets\\img4.jpg\">\n                                <div class=\"side\">\n                                    <h3>The lords of rings</h3>\n                                    <h6>By : J R R Tolkein</h6><br>\n                                    <input type=\"text\" value=\"&#x20b9;300.00\" disabled #price>\n                            \n                                    <h5>Ratings </h5>\n                                    <span class=\"fa fa-star checked\"></span>\n                                    <span class=\"fa fa-star checked\"></span>\n                                    <span class=\"fa fa-star checked\"></span>\n                                    <span class=\"fa fa-star checked\"></span>\n                                    <span class=\"fa fa-star checked\"></span><br><br>\n                            \n                                    <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                                    \n                                   <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                                   <h5>Description :</h5> <p>All three parts of epic masterpiece ‘The Lord of the Rings’ in one paperback. Features brand new packaging, the definitive edition of the text, fold-out flaps with the original two-colour maps, and a revised and expanded index. Sauron, the Dark Lord, has gathered to him all the Rings of Power – the means by which he intends to rule Middle-earth. All he lacks in his plans for dominion is the One Ring – the ring that rules them all – which has fallen into the hands of the hobbit, Bilbo Baggins.</p><br><br>\n                            \n                                   <hr>\n                            \n                                   <h5>Reviews : </h5><br>\n                                   <h6>Baskar</h6>\n                                   <span class=\"fa fa-star checked\"></span>\n                                   <span class=\"fa fa-star checked\"></span>\n                                   <span class=\"fa fa-star checked\"></span>\n                                   <span class=\"fa fa-star checked\"></span>\n                                   <span class=\"fa fa-star checked\"></span><br>\n                                   <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                                  </div>\n                                  </div>\n                    \n                            </div>\n                          </div>\n                          </div>\n                          </div>\n  \n  \n                    <div class=\"card-body\">\n                      <h4 class=\"card-title\">The Lord of the Rings</h4>\n                      <p class=\"card-text\">J.R.R Tolkein<br>\n                      Price:&#x20b9;300.00</p>\n                     \n                    </div>\n                  </div>\n                </div>\n                  </div>\n           </div>\n           <div class=\"col-ss\">\n              <div class=\"container\"><br><br>\n             <div class=\"container\"><br><br>\n                    <div class=\"card\" style=\"width:200px\">\n              <!--  <img class=\"card-img-top\" src=\"../assets/Catwoman.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\"> -->\n  \n                <div class=\"container\">\n                  <!-- Trigger the modal with a button -->\n                  <img data-toggle=\"modal\" data-target=\"#myModal3\" class=\"card-img-top\"  src=\"../assets/Catwoman.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n                \n                  <!-- Modal -->\n                  <div class=\"modal fade\" id=\"myModal3\" role=\"dialog\">\n                    <div class=\"modal-dialog\">\n                    \n                      <!-- Modal content-->\n                      <div class=\"modal-content\">\n                        <div class=\"modal-header\">\n                            <h2>Fiction</h2>\n                          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                        </div>\n                \n                \n                        <div class=\"modal-body\">\n                          \n                            <img src=\"assets\\Catwoman.jpg\">\n                            <div class=\"side\">\n                                <h3>Catwoman</h3>\n                                <h6>By : soul Steala</h6><br>\n                                <input type=\"text\" value=\"&#x20b9;400.00\" disabled #price>\n                        \n                                <h5>Ratings </h5>\n                                <span class=\"fa fa-star checked\"></span>\n                                <span class=\"fa fa-star checked\"></span>\n                                <span class=\"fa fa-star checked\"></span>\n                                <span class=\"fa fa-star\"></span>\n                                <span class=\"fa fa-star\"></span><br><br>\n                        \n                                <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                                \n                               <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                               <h5>Description :</h5> <p>When the Bat's away, the Cat will play. It's time to see how many lives this cat really has. Two years after escaping Gotham City's slums, Selina Kyle returns as the mysterious and wealthy Holly Vanderhees. She quickly discovers that with Batman off on a vital mission, Batwing is left to hold back the tide of notorious criminals. Gotham City is ripe for the taking.</p><br><br>\n                        \n                               <hr>\n                        \n                               <h5>Reviews : </h5><br>\n                               <h6>Karthik Bhandary</h6>\n                               <span class=\"fa fa-star checked\"></span>\n                               <span class=\"fa fa-star checked\"></span>\n                               <span class=\"fa fa-star checked\"></span>\n                               <span class=\"fa fa-star checked\"></span>\n                               <span class=\"fa fa-star checked\"></span><br>\n                               <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                              </div>\n                              </div>\n                \n                        </div>\n                      </div>\n                      </div>\n                      </div>\n  \n  \n                    <div class=\"card-body\">\n                      <h4 class=\"card-title\">CatWoman </h4>\n                      <p class=\"card-text\">Soul Steala<br>\n                      Price:&#x20b9; 400.00</p>\n                     \n                    </div>\n                  </div>\n                </div>\n                  </div>\n               </div>\n  \n      </div>\n"

/***/ }),

/***/ "./src/app/categories/fiction/fiction.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/categories/fiction/fiction.component.ts ***!
  \*********************************************************/
/*! exports provided: FictionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FictionComponent", function() { return FictionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FictionComponent = /** @class */ (function () {
    function FictionComponent() {
    }
    FictionComponent.prototype.ngOnInit = function () {
    };
    FictionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fiction',
            template: __webpack_require__(/*! ./fiction.component.html */ "./src/app/categories/fiction/fiction.component.html"),
            styles: [__webpack_require__(/*! ./fiction.component.css */ "./src/app/categories/fiction/fiction.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FictionComponent);
    return FictionComponent;
}());



/***/ }),

/***/ "./src/app/categories/health-beauty/health-beauty.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/categories/health-beauty/health-beauty.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\ndiv\r\n{\r\n    border: 1px solid whitesmoke;\r\n}\r\n*/\r\n#container{\r\n    width: 100%;\r\n    height: 300px;\r\n    overflow: hidden;\r\n    margin-top: 6%;\r\n}\r\n.row\r\n{\r\n    width: 100%;\r\n}\r\n.col-ss{\r\n    margin:5px;\r\n}\r\n#img1{\r\n    height:275px;\r\n}\r\nh2{\r\n    color: whitesmoke;\r\n    font-family:'Times New Roman';\r\n    font-size:30px;\r\n    text-transform: uppercase;\r\n   \r\n}\r\nh4{\r\n    font-size:15px;\r\n    color:maroon;\r\n    text-shadow: 2px 2px 5px #888888;\r\n   \r\n}\r\n/*\r\n.card{\r\n    \r\n}\r\n*/\r\n.card-text{\r\n    text-shadow: 2px 2px 5px #888888;\r\n    padding:1px;\r\n    \r\n}\r\nh2{\r\n    text-shadow: 2px 2px 5px #888888;;\r\n}\r\n.card-body{\r\n    padding:3px;\r\n}\r\n.modal-header{\r\n    height: 60px;\r\n}\r\n.modal-body{\r\n    height: 1000px;\r\n}\r\n.modal-body img{\r\n    height: 300px;\r\n    width: 200px;\r\n    margin-left: 0;\r\n}\r\n.modal-body a img{\r\n    height: 50px;\r\n    width: 50px;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n.side{\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 250px;\r\n}\r\n.submit{\r\n    height: 40px;\r\n    width: 100px;\r\n}\r\n.checked {\r\n    color: orange;\r\n}\r\n.modal-content{\r\n    width: 700px;\r\n}\r\ninput{\r\n    background: none;\r\n    border: none;\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/categories/health-beauty/health-beauty.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/categories/health-beauty/health-beauty.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-ss\">\n  <div class=\"container\">\n    <h2>health &</h2>\n    <h2>beauty</h2>\n    <div class=\"container\"><br>\n      <div class=\"card\" style=\"width:200px\">\n       <!-- <img class=\"card-img-top\" src=\"../assets/eating.jpg\" alt=\"Card image\" style=\"width:100%\"id=\"img1\"> -->\n\n       <div class=\"container\">\n        <!-- Trigger the modal with a button -->\n        <img data-toggle=\"modal\" data-target=\"#myModal12\" class=\"card-img-top\"  src=\"../assets/eating.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n      \n        <!-- Modal -->\n        <div class=\"modal fade\" id=\"myModal12\" role=\"dialog\">\n          <div class=\"modal-dialog\">\n          \n            <!-- Modal content-->\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                  <h2>health & beauty</h2>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              </div>\n      \n      \n              <div class=\"modal-body\">\n                \n                  <img src=\"assets\\eating.jpg\">\n                  <div class=\"side\">\n                      <h3>Eating For Beauty</h3>\n                      <h6>By : David Wolfe</h6><br>\n                      <input type=\"text\" value=\"&#x20b9;300.00\" disabled #price>\n              \n                      <h5>Ratings </h5>\n                      <span class=\"fa fa-star checked\"></span>\n                      <span class=\"fa fa-star checked\"></span>\n                      <span class=\"fa fa-star checked\"></span>\n                      <span class=\"fa fa-star\"></span>\n                      <span class=\"fa fa-star\"></span><br><br>\n              \n                      <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                      \n                     <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                     <h5>Description :</h5> <p>The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!</p><br><br>\n              \n                     <hr>\n              \n                     <h5>Reviews : </h5><br>\n                     <h6>Karthik Bhandary</h6>\n                     <span class=\"fa fa-star checked\"></span>\n                     <span class=\"fa fa-star checked\"></span>\n                     <span class=\"fa fa-star checked\"></span>\n                     <span class=\"fa fa-star checked\"></span>\n                     <span class=\"fa fa-star checked\"></span><br>\n                     <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                    </div>\n                    </div>\n      \n              </div>\n            </div>\n            </div>\n            </div>\n\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Eating For Beauty </h4>\n          <p class=\"card-text\">David Wolfe<br>\n         Price:&#x20b9;300.00</p>\n         \n        </div>\n      </div>\n    </div>\n      </div>\n   </div>\n    <div class=\"col-ss\">\n        <div class=\"container\"><br><br>\n          <div class=\"container\"><br><br>\n            <div class=\"card\" style=\"width:200px\">\n             <!-- <img class=\"card-img-top\" src=\"../assets/diet.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\"> -->\n\n             <div class=\"container\">\n              <!-- Trigger the modal with a button -->\n              <img data-toggle=\"modal\" data-target=\"#myModal13\" class=\"card-img-top\"  src=\"../assets/diet.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n            \n              <!-- Modal -->\n              <div class=\"modal fade\" id=\"myModal13\" role=\"dialog\">\n                <div class=\"modal-dialog\">\n                \n                  <!-- Modal content-->\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h2>health & beauty</h2>\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    </div>\n            \n            \n                    <div class=\"modal-body\">\n                      \n                        <img src=\"assets\\diet.jpg\">\n                        <div class=\"side\">\n                            <h3>Perfect Health Diet</h3>\n                            <h6>By : Paul Jammet ph.d</h6><br>\n                            <input type=\"text\" value=\"&#x20b9;500.00\" disabled #price>\n                    \n                            <h5>Ratings </h5>\n                            <span class=\"fa fa-star checked\"></span>\n                            <span class=\"fa fa-star checked\"></span>\n                            <span class=\"fa fa-star checked\"></span>\n                            <span class=\"fa fa-star\"></span>\n                            <span class=\"fa fa-star\"></span><br><br>\n                    \n                            <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                            \n                           <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                           <h5>Description :</h5> <p>The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!</p><br><br>\n                    \n                           <hr>\n                    \n                           <h5>Reviews : </h5><br>\n                           <h6>Karthik Bhandary</h6>\n                           <span class=\"fa fa-star checked\"></span>\n                           <span class=\"fa fa-star checked\"></span>\n                           <span class=\"fa fa-star checked\"></span>\n                           <span class=\"fa fa-star checked\"></span>\n                           <span class=\"fa fa-star checked\"></span><br>\n                           <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                          </div>\n                          </div>\n            \n                    </div>\n                  </div>\n                  </div>\n                  </div>\n\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">Perfect Health Diet</h4>\n                <p class=\"card-text\">Paul Jammet ph.d<br>\n                Price:&#x20b9;500.00</p>\n              </div>\n            </div>\n          </div>\n            </div>  \n          </div>\n          <div class=\"col-ss\">\n              <div class=\"container\"><br><br>\n                <div class=\"container\"><br><br>\n                  <div class=\"card\" style=\"width:200px\">\n                  <!--  <img class=\"card-img-top\" src=\"../assets/plant.jpg\" alt=\"Card image\" style=\"width:100%\"id=\"img1\"> -->\n\n                  <div class=\"container\">\n                    <!-- Trigger the modal with a button -->\n                    <img data-toggle=\"modal\" data-target=\"#myModal14\" class=\"card-img-top\"  src=\"../assets/plant.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n                  \n                    <!-- Modal -->\n                    <div class=\"modal fade\" id=\"myModal14\" role=\"dialog\">\n                      <div class=\"modal-dialog\">\n                      \n                        <!-- Modal content-->\n                        <div class=\"modal-content\">\n                          <div class=\"modal-header\">\n                              <h2>health & beauty</h2>\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                          </div>\n                  \n                  \n                          <div class=\"modal-body\">\n                            \n                              <img src=\"assets\\plant.jpg\">\n                              <div class=\"side\">\n                                  <h3>Plant Powered</h3>\n                                  <h6>By : Vegan</h6><br>\n                                  <input type=\"text\" value=\"&#x20b9;400.00\" disabled #price>\n                          \n                                  <h5>Ratings </h5>\n                                  <span class=\"fa fa-star checked\"></span>\n                                  <span class=\"fa fa-star checked\"></span>\n                                  <span class=\"fa fa-star checked\"></span>\n                                  <span class=\"fa fa-star\"></span>\n                                  <span class=\"fa fa-star\"></span><br><br>\n                          \n                                  <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                                  \n                                 <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                                 <h5>Description :</h5> <p>The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!</p><br><br>\n                          \n                                 <hr>\n                          \n                                 <h5>Reviews : </h5><br>\n                                 <h6>Karthik Bhandary</h6>\n                                 <span class=\"fa fa-star checked\"></span>\n                                 <span class=\"fa fa-star checked\"></span>\n                                 <span class=\"fa fa-star checked\"></span>\n                                 <span class=\"fa fa-star checked\"></span>\n                                 <span class=\"fa fa-star checked\"></span><br>\n                                 <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                                </div>\n                                </div>\n                  \n                          </div>\n                        </div>\n                        </div>\n                        </div>\n\n                    <div class=\"card-body\">\n                      <h4 class=\"card-title\">Plant Powered</h4>\n                      <p class=\"card-text\">Vegan<br>\n                      Price:&#x20b9;400.00</p>\n                     \n                    </div>\n                  </div>\n                </div>\n                  </div>\n          </div>\n           <div class=\"col-ss\">\n              <div class=\"container\"><br><br>\n             <div class=\"container\"><br><br>\n                    <div class=\"card\" style=\"width:200px\">\n               <!-- <img class=\"card-img-top\" src=\"../assets/beauty.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\"> -->\n\n               <div class=\"container\">\n                <!-- Trigger the modal with a button -->\n                <img data-toggle=\"modal\" data-target=\"#myModal15\" class=\"card-img-top\"  src=\"../assets/beauty.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n              \n                <!-- Modal -->\n                <div class=\"modal fade\" id=\"myModal15\" role=\"dialog\">\n                  <div class=\"modal-dialog\">\n                  \n                    <!-- Modal content-->\n                    <div class=\"modal-content\">\n                      <div class=\"modal-header\">\n                          <h2>health & beauty</h2>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                      </div>\n              \n              \n                      <div class=\"modal-body\">\n                        \n                          <img src=\"assets\\beauty.jpg\">\n                          <div class=\"side\">\n                              <h3>Feel Great</h3>\n                              <h6>By : Paige T.simson</h6><br>\n                              <input type=\"text\" value=\"&#x20b9;450.00\" disabled #price>\n                      \n                              <h5>Ratings </h5>\n                              <span class=\"fa fa-star checked\"></span>\n                              <span class=\"fa fa-star checked\"></span>\n                              <span class=\"fa fa-star checked\"></span>\n                              <span class=\"fa fa-star\"></span>\n                              <span class=\"fa fa-star\"></span><br><br>\n                      \n                              <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                              \n                             <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                             <h5>Description :</h5> <p>The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!</p><br><br>\n                      \n                             <hr>\n                      \n                             <h5>Reviews : </h5><br>\n                             <h6>Karthik Bhandary</h6>\n                             <span class=\"fa fa-star checked\"></span>\n                             <span class=\"fa fa-star checked\"></span>\n                             <span class=\"fa fa-star checked\"></span>\n                             <span class=\"fa fa-star checked\"></span>\n                             <span class=\"fa fa-star checked\"></span><br>\n                             <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                            </div>\n                            </div>\n              \n                      </div>\n                    </div>\n                    </div>\n                    </div>\n\n                    <div class=\"card-body\">\n                      <h4 class=\"card-title\">Feel Great</h4>\n                      <p class=\"card-text\">Paige T.simson<br>\n                      Price:&#x20b9;450.00</p>\n                     \n                    </div>\n                  </div>\n                </div>\n                  </div>\n                </div>\n                </div>\n"

/***/ }),

/***/ "./src/app/categories/health-beauty/health-beauty.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/categories/health-beauty/health-beauty.component.ts ***!
  \*********************************************************************/
/*! exports provided: HealthBeautyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthBeautyComponent", function() { return HealthBeautyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HealthBeautyComponent = /** @class */ (function () {
    function HealthBeautyComponent() {
    }
    HealthBeautyComponent.prototype.ngOnInit = function () {
    };
    HealthBeautyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-health-beauty',
            template: __webpack_require__(/*! ./health-beauty.component.html */ "./src/app/categories/health-beauty/health-beauty.component.html"),
            styles: [__webpack_require__(/*! ./health-beauty.component.css */ "./src/app/categories/health-beauty/health-beauty.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HealthBeautyComponent);
    return HealthBeautyComponent;
}());



/***/ }),

/***/ "./src/app/categories/horror/horror.component.css":
/*!********************************************************!*\
  !*** ./src/app/categories/horror/horror.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\ndiv\r\n{\r\n    border: 1px solid whitesmoke;\r\n}\r\n*/\r\n#container{\r\n    width: 100%;\r\n    height: 300px;\r\n    overflow: hidden;\r\n    margin-top: 6%;\r\n}\r\n.row\r\n{\r\n    width: 100%;\r\n}\r\n.col-ss{\r\n    margin:5px;\r\n}\r\n#img1{\r\n    height:275px;\r\n}\r\nh2{\r\n    color: whitesmoke;\r\n    font-family:'Times New Roman';\r\n    font-size:30px;\r\n    text-transform: uppercase;\r\n   \r\n}\r\nh4{\r\n    font-size:15px;\r\n    color:maroon;\r\n    text-shadow: 2px 2px 5px #888888;\r\n   \r\n}\r\n/*\r\n.card{\r\n    \r\n}\r\n*/\r\n.card-text{\r\n    text-shadow: 2px 2px 5px #888888;\r\n    padding:1px;\r\n    \r\n}\r\nh2{\r\n    text-shadow: 2px 2px 5px #888888;;\r\n}\r\n.card-body{\r\n    padding:3px;\r\n}\r\n.modal-header{\r\n    height: 60px;\r\n}\r\n.modal-body{\r\n    height: 1000px;\r\n}\r\n.modal-body img{\r\n    height: 300px;\r\n    width: 200px;\r\n    margin-left: 0;\r\n}\r\n.modal-body a img{\r\n    height: 50px;\r\n    width: 50px;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n.side{\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 250px;\r\n}\r\n.submit{\r\n    height: 40px;\r\n    width: 100px;\r\n}\r\n.checked {\r\n    color: orange;\r\n}\r\n.modal-content{\r\n    width: 700px;\r\n}\r\ninput{\r\n    background: none;\r\n    border: none;\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/categories/horror/horror.component.html":
/*!*********************************************************!*\
  !*** ./src/app/categories/horror/horror.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-ss\">\n  <div class=\"container\">\n    <h2>Horror</h2>\n    <div class=\"container\"><br><br>\n      <div class=\"card\" style=\"width:200px\">\n    <!--    <img class=\"card-img-top\" src=\"../assets/it-original.jpeg\" alt=\"Card image\" style=\"width:100%\"id=\"img1\">-->\n\n    <div class=\"container\">\n      <!-- Trigger the modal with a button -->\n      <img data-toggle=\"modal\" data-target=\"#myModal16\" class=\"card-img-top\"  src=\"../assets/it-original.jpeg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n    \n      <!-- Modal -->\n      <div class=\"modal fade\" id=\"myModal16\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n        \n          <!-- Modal content-->\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h2>Horror</h2>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n    \n    \n            <div class=\"modal-body\">\n              \n                <img src=\"assets\\it-original.jpeg\">\n                <div class=\"side\">\n                    <h3>IT</h3>\n                    <h6>By : Stephen King</h6><br>\n                    <input type=\"text\" value=\"&#x20b9;350.00\" disabled #price>\n            \n                    <h5>Ratings </h5>\n                    <span class=\"fa fa-star checked\"></span>\n                    <span class=\"fa fa-star checked\"></span>\n                    <span class=\"fa fa-star checked\"></span>\n                    <span class=\"fa fa-star\"></span>\n                    <span class=\"fa fa-star\"></span><br><br>\n            \n                    <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                    \n                   <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                   <h5>Description :</h5> <p>The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!</p><br><br>\n            \n                   <hr>\n            \n                   <h5>Reviews : </h5><br>\n                   <h6>Karthik Bhandary</h6>\n                   <span class=\"fa fa-star checked\"></span>\n                   <span class=\"fa fa-star checked\"></span>\n                   <span class=\"fa fa-star checked\"></span>\n                   <span class=\"fa fa-star checked\"></span>\n                   <span class=\"fa fa-star checked\"></span><br>\n                   <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                  </div>\n                  </div>\n    \n            </div>\n          </div>\n          </div>\n          </div>\n\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">IT</h4>\n          <p class=\"card-text\">Stephen King<br>\n          Price:&#x20b9;350.00</p>\n         </div>\n      </div>\n    </div>\n      </div>\n   </div>\n    <div class=\"col-ss\">\n        <div class=\"container\"><br><br>\n          <div class=\"container\"><br><br>\n            <div class=\"card\" style=\"width:200px\">\n             <!-- <img class=\"card-img-top\" src=\"../assets/imgaa.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">-->\n\n             <div class=\"container\">\n              <!-- Trigger the modal with a button -->\n              <img data-toggle=\"modal\" data-target=\"#myModal17\" class=\"card-img-top\"  src=\"../assets/imgaa.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n            \n              <!-- Modal -->\n              <div class=\"modal fade\" id=\"myModal17\" role=\"dialog\">\n                <div class=\"modal-dialog\">\n                \n                  <!-- Modal content-->\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h2>Horror</h2>\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    </div>\n            \n            \n                    <div class=\"modal-body\">\n                      \n                        <img src=\"assets\\imgaa.jpg\">\n                        <div class=\"side\">\n                            <h3>Dracula</h3>\n                            <h6>By : Bram stoker</h6><br>\n                            <input type=\"text\" value=\"&#x20b9;300.00\" disabled #price>\n                    \n                            <h5>Ratings </h5>\n                            <span class=\"fa fa-star checked\"></span>\n                            <span class=\"fa fa-star checked\"></span>\n                            <span class=\"fa fa-star checked\"></span>\n                            <span class=\"fa fa-star\"></span>\n                            <span class=\"fa fa-star\"></span><br><br>\n                    \n                            <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                            \n                           <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                           <h5>Description :</h5> <p>The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!</p><br><br>\n                    \n                           <hr>\n                    \n                           <h5>Reviews : </h5><br>\n                           <h6>Karthik Bhandary</h6>\n                           <span class=\"fa fa-star checked\"></span>\n                           <span class=\"fa fa-star checked\"></span>\n                           <span class=\"fa fa-star checked\"></span>\n                           <span class=\"fa fa-star checked\"></span>\n                           <span class=\"fa fa-star checked\"></span><br>\n                           <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                          </div>\n                          </div>\n            \n                    </div>\n                  </div>\n                  </div>\n                  </div>\n\n                  \n              <div class=\"card-body\">\n                <h4 class=\"card-title\">Dracula</h4>\n                <p class=\"card-text\">Bram stoker<br>\n                Price:&#x20b9;300.00</p>\n              </div>\n            </div>\n          </div>\n            </div>  \n          </div>\n          <div class=\"col-ss\">\n              <div class=\"container\"><br><br>\n                <div class=\"container\"><br><br>\n                  <div class=\"card\" style=\"width:200px\">\n                    <!--<img class=\"card-img-top\" src=\"../assets/jumbies.jpg\" alt=\"Card image\" style=\"width:100%\"id=\"img1\">-->\n\n                    <div class=\"container\">\n                      <!-- Trigger the modal with a button -->\n                      <img data-toggle=\"modal\" data-target=\"#myModal18\" class=\"card-img-top\"  src=\"../assets/jumbies.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n                    \n                      <!-- Modal -->\n                      <div class=\"modal fade\" id=\"myModal18\" role=\"dialog\">\n                        <div class=\"modal-dialog\">\n                        \n                          <!-- Modal content-->\n                          <div class=\"modal-content\">\n                            <div class=\"modal-header\">\n                                <h2>Horror</h2>\n                              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                            </div>\n                    \n                    \n                            <div class=\"modal-body\">\n                              \n                                <img src=\"assets\\jumbies.jpg\">\n                                <div class=\"side\">\n                                    <h3>The Jumbies</h3>\n                                    <h6>By : Tracey Baptiste</h6><br>\n                                    <input type=\"text\" value=\"&#x20b9;350.00\" disabled #price>\n                            \n                                    <h5>Ratings </h5>\n                                    <span class=\"fa fa-star checked\"></span>\n                                    <span class=\"fa fa-star checked\"></span>\n                                    <span class=\"fa fa-star checked\"></span>\n                                    <span class=\"fa fa-star\"></span>\n                                    <span class=\"fa fa-star\"></span><br><br>\n                            \n                                    <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                                    \n                                   <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                                   <h5>Description :</h5> <p>The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!</p><br><br>\n                            \n                                   <hr>\n                            \n                                   <h5>Reviews : </h5><br>\n                                   <h6>Karthik Bhandary</h6>\n                                   <span class=\"fa fa-star checked\"></span>\n                                   <span class=\"fa fa-star checked\"></span>\n                                   <span class=\"fa fa-star checked\"></span>\n                                   <span class=\"fa fa-star checked\"></span>\n                                   <span class=\"fa fa-star checked\"></span><br>\n                                   <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                                  </div>\n                                  </div>\n                    \n                            </div>\n                          </div>\n                          </div>\n                          </div>\n\n                          \n                    <div class=\"card-body\">\n                      <h4 class=\"card-title\">The Jumbies</h4>\n                      <p class=\"card-text\">Tracey Baptiste<br>\n                      Price:&#x20b9;350.00</p>\n                     \n                    </div>\n                  </div>\n                </div>\n                  </div>\n           </div>\n           <div class=\"col-ss\">\n              <div class=\"container\"><br><br>\n             <div class=\"container\"><br><br>\n                    <div class=\"card\" style=\"width:200px\">\n               <!-- <img class=\"card-img-top\" src=\"../assets/house.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\"> -->\n\n               \n               <div class=\"container\">\n                <!-- Trigger the modal with a button -->\n                <img data-toggle=\"modal\" data-target=\"#myModal19\" class=\"card-img-top\"  src=\"../assets/house.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n              \n                <!-- Modal -->\n                <div class=\"modal fade\" id=\"myModal19\" role=\"dialog\">\n                  <div class=\"modal-dialog\">\n                  \n                    <!-- Modal content-->\n                    <div class=\"modal-content\">\n                      <div class=\"modal-header\">\n                          <h2>Horror</h2>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                      </div>\n              \n              \n                      <div class=\"modal-body\">\n                        \n                          <img src=\"assets\\house.jpg\">\n                          <div class=\"side\">\n                              <h3>House of Fear</h3>\n                              <h6>By : Jonathan Oliver</h6><br>\n                              <input type=\"text\" value=\"&#x20b9;450.00\" disabled #price>\n                      \n                              <h5>Ratings </h5>\n                              <span class=\"fa fa-star checked\"></span>\n                              <span class=\"fa fa-star checked\"></span>\n                              <span class=\"fa fa-star checked\"></span>\n                              <span class=\"fa fa-star\"></span>\n                              <span class=\"fa fa-star\"></span><br><br>\n                      \n                              <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"../assets/buy.JPG\" alt=\"buy now\"><br><br>\n                              \n                             <h5>E-Book </h5> &nbsp; <a href=\"../assets/PART 4 harry potter the goblet of fire .pdf\"><img src=\"../assets/pdf.png\"></a><br><br>\n                             <h5>Description :</h5> <p>The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!</p><br><br>\n                      \n                             <hr>\n                      \n                             <h5>Reviews : </h5><br>\n                             <h6>Karthik Bhandary</h6>\n                             <span class=\"fa fa-star checked\"></span>\n                             <span class=\"fa fa-star checked\"></span>\n                             <span class=\"fa fa-star checked\"></span>\n                             <span class=\"fa fa-star checked\"></span>\n                             <span class=\"fa fa-star checked\"></span><br>\n                             <p>Great Book!!!!!!!!!!!!!!!!</p>\n                            </div>\n                            </div>\n              \n                      </div>\n                    </div>\n                    </div>\n                    </div>\n\n                    <div class=\"card-body\">\n                      <h4 class=\"card-title\">House of Fear</h4>\n                      <p class=\"card-text\">Jonathan Oliver<br>\n                      Price:&#x20b9;450.00</p>\n                     \n                    </div>\n                  </div>\n                </div>\n                  </div>\n              \n                  \n                </div>\n"

/***/ }),

/***/ "./src/app/categories/horror/horror.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/categories/horror/horror.component.ts ***!
  \*******************************************************/
/*! exports provided: HorrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorrorComponent", function() { return HorrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HorrorComponent = /** @class */ (function () {
    function HorrorComponent() {
    }
    HorrorComponent.prototype.ngOnInit = function () {
    };
    HorrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-horror',
            template: __webpack_require__(/*! ./horror.component.html */ "./src/app/categories/horror/horror.component.html"),
            styles: [__webpack_require__(/*! ./horror.component.css */ "./src/app/categories/horror/horror.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HorrorComponent);
    return HorrorComponent;
}());



/***/ }),

/***/ "./src/app/categories/love-stories/love-stories.component.css":
/*!********************************************************************!*\
  !*** ./src/app/categories/love-stories/love-stories.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\ndiv\r\n{\r\n    border: 1px solid whitesmoke;\r\n}\r\n*/\r\n#container{\r\n    width: 100%;\r\n    height: 300px;\r\n    overflow: hidden;\r\n    margin-top: 6%;\r\n}\r\n.row\r\n{\r\n    width: 100%;\r\n}\r\n.col-ss{\r\n    margin:5px;\r\n}\r\n#img1{\r\n    height:275px;\r\n}\r\nh2{\r\n    color: whitesmoke;\r\n    font-family:'Times New Roman';\r\n    font-size:30px;\r\n    text-transform: uppercase;\r\n   \r\n}\r\nh4{\r\n    font-size:15px;\r\n    color:maroon;\r\n    text-shadow: 2px 2px 5px #888888;\r\n   \r\n}\r\n/*\r\n.card{\r\n    \r\n}\r\n*/\r\n.card-text{\r\n    text-shadow: 2px 2px 5px #888888;\r\n    padding:1px;\r\n    \r\n}\r\nh2{\r\n    text-shadow: 2px 2px 5px #888888;;\r\n}\r\n.card-body{\r\n    padding:3px;\r\n}\r\n.modal-header{\r\n    height: 60px;\r\n}\r\n.modal-body{\r\n    height: 1000px;\r\n}\r\n.modal-body img{\r\n    height: 300px;\r\n    width: 200px;\r\n    margin-left: 0;\r\n}\r\n.modal-body a img{\r\n    height: 50px;\r\n    width: 50px;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n.side{\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 250px;\r\n}\r\n.submit{\r\n    height: 40px;\r\n    width: 100px;\r\n}\r\n.checked {\r\n    color: orange;\r\n}\r\n.modal-content{\r\n    width: 700px;\r\n}\r\ninput{\r\n    background: none;\r\n    border: none;\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/categories/love-stories/love-stories.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/categories/love-stories/love-stories.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-ss\">\n  <div class=\"container\">\n    <h2>Love stories</h2>\n    <div class=\"container\"><br><br>\n      <div class=\"card\" style=\"width:200px\">\n        <!--<img class=\"card-img-top\" src=\"../assets/image.jpg\" alt=\"Card image\" style=\"width:100%\"id=\"img1\">-->\n\n        <div class=\"container\">\n          <!-- Trigger the modal with a button -->\n          <img data-toggle=\"modal\" data-target=\"#myModal8\" class=\"card-img-top\"  src=\"../assets/image.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n        \n          <!-- Modal -->\n          <div class=\"modal fade\" id=\"myModal8\" role=\"dialog\">\n            <div class=\"modal-dialog\">\n            \n              <!-- Modal content-->\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h2>Love stories</h2>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                </div>\n        \n        \n                <div class=\"modal-body\">\n                  \n                    <img src=\"assets\\image.jpg\">\n                    <div class=\"side\">\n                        <h3>Wuthering Heights</h3>\n                        <h6>By : Emily Bronte</h6><br>\n                        <input type=\"text\" value=\"&#x20b9;250.00\" disabled #price>\n                \n                        <h5>Ratings </h5>\n                        <span class=\"fa fa-star checked\"></span>\n                        <span class=\"fa fa-star checked\"></span>\n                        <span class=\"fa fa-star checked\"></span>\n                        <span class=\"fa fa-star\"></span>\n                        <span class=\"fa fa-star\"></span><br><br>\n                \n                        <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                        \n                       <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                       <h5>Description :</h5> <p>The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!</p><br><br>\n                \n                       <hr>\n                \n                       <h5>Reviews : </h5><br>\n                       <h6>Karthik Bhandary</h6>\n                       <span class=\"fa fa-star checked\"></span>\n                       <span class=\"fa fa-star checked\"></span>\n                       <span class=\"fa fa-star checked\"></span>\n                       <span class=\"fa fa-star checked\"></span>\n                       <span class=\"fa fa-star checked\"></span><br>\n                       <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                      </div>\n                      </div>\n        \n                </div>\n              </div>\n              </div>\n              </div>\n\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Wuthering Heights</h4>\n          <p class=\"card-text\">Emily Bronte<br>\n          Price:&#x20b9;250.00</p>\n         \n        </div>\n      </div>\n    </div>\n      </div>\n   </div>\n    <div class=\"col-ss\">\n        <div class=\"container\"><br><br>\n          <div class=\"container\"><br><br>\n            <div class=\"card\" style=\"width:200px\">\n             <!-- <img class=\"card-img-top\" src=\"../assets/love.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\"> -->\n\n             <div class=\"container\">\n              <!-- Trigger the modal with a button -->\n              <img data-toggle=\"modal\" data-target=\"#myModal9\" class=\"card-img-top\"  src=\"../assets/love.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n            \n              <!-- Modal -->\n              <div class=\"modal fade\" id=\"myModal9\" role=\"dialog\">\n                <div class=\"modal-dialog\">\n                \n                  <!-- Modal content-->\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h2>Love stories</h2>\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    </div>\n            \n            \n                    <div class=\"modal-body\">\n                      \n                        <img src=\"assets\\love.jpg\">\n                        <div class=\"side\">\n                            <h3>The Time Of My Life</h3>\n                            <h6>By : Ceclia Ahern</h6><br>\n                            <input type=\"text\" value=\"&#x20b9;450.00\" disabled #price>\n                    \n                            <h5>Ratings </h5>\n                            <span class=\"fa fa-star checked\"></span>\n                            <span class=\"fa fa-star checked\"></span>\n                            <span class=\"fa fa-star checked\"></span>\n                            <span class=\"fa fa-star\"></span>\n                            <span class=\"fa fa-star\"></span><br><br>\n                    \n                            <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                            \n                           <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                           <h5>Description :</h5> <p>The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!</p><br><br>\n                    \n                           <hr>\n                    \n                           <h5>Reviews : </h5><br>\n                           <h6>Karthik Bhandary</h6>\n                           <span class=\"fa fa-star checked\"></span>\n                           <span class=\"fa fa-star checked\"></span>\n                           <span class=\"fa fa-star checked\"></span>\n                           <span class=\"fa fa-star checked\"></span>\n                           <span class=\"fa fa-star checked\"></span><br>\n                           <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                          </div>\n                          </div>\n            \n                    </div>\n                  </div>\n                  </div>\n                  </div>\n\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">The Time Of My Life</h4>\n                <p class=\"card-text\">Ceclia Ahern<br>\n                   Price:&#x20b9;450.00</p>\n              </div>\n            </div>\n          </div>\n            </div>  \n          </div>\n          <div class=\"col-ss\">\n              <div class=\"container\"><br><br>\n                <div class=\"container\"><br><br>\n                  <div class=\"card\" style=\"width:200px\">\n                   <!-- <img class=\"card-img-top\" src=\"../assets/how.jpg\" alt=\"Card image\" style=\"width:100%\"id=\"img1\">-->\n\n                    <div class=\"container\">\n                      <!-- Trigger the modal with a button -->\n                      <img data-toggle=\"modal\" data-target=\"#myModal10\" class=\"card-img-top\"  src=\"../assets/how.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n                    \n                      <!-- Modal -->\n                      <div class=\"modal fade\" id=\"myModal10\" role=\"dialog\">\n                        <div class=\"modal-dialog\">\n                        \n                          <!-- Modal content-->\n                          <div class=\"modal-content\">\n                            <div class=\"modal-header\">\n                                <h2>Love stories</h2>\n                              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                            </div>\n                    \n                    \n                            <div class=\"modal-body\">\n                              \n                                <img src=\"assets\\how.jpg\">\n                                <div class=\"side\">\n                                    <h3>How To Stop Time</h3>\n                                    <h6>By : Matt Haig</h6><br>\n                                    <input type=\"text\" value=\"&#x20b9;250.00\" disabled #price>\n                            \n                                    <h5>Ratings </h5>\n                                    <span class=\"fa fa-star checked\"></span>\n                                    <span class=\"fa fa-star checked\"></span>\n                                    <span class=\"fa fa-star checked\"></span>\n                                    <span class=\"fa fa-star\"></span>\n                                    <span class=\"fa fa-star\"></span><br><br>\n                            \n                                    <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                                    \n                                   <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                                   <h5>Description :</h5> <p>The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!</p><br><br>\n                            \n                                   <hr>\n                            \n                                   <h5>Reviews : </h5><br>\n                                   <h6>Karthik Bhandary</h6>\n                                   <span class=\"fa fa-star checked\"></span>\n                                   <span class=\"fa fa-star checked\"></span>\n                                   <span class=\"fa fa-star checked\"></span>\n                                   <span class=\"fa fa-star checked\"></span>\n                                   <span class=\"fa fa-star checked\"></span><br>\n                                   <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                                  </div>\n                                  </div>\n                    \n                            </div>\n                          </div>\n                          </div>\n                          </div>\n\n                    <div class=\"card-body\">\n                      <h4 class=\"card-title\">How To Stop Time</h4>\n                      <p class=\"card-text\">Matt Haig<br>\n                     Price:&#x20b9;250.00</p>\n                     \n                    </div>\n                  </div>\n                </div>\n                  </div>\n           </div>\n           <div class=\"col-ss\">\n              <div class=\"container\"><br><br>\n             <div class=\"container\"><br><br>\n                    <div class=\"card\" style=\"width:200px\">\n               <!-- <img class=\"card-img-top\" src=\"../assets/untold.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">-->\n\n               <div class=\"container\">\n                <!-- Trigger the modal with a button -->\n                <img data-toggle=\"modal\" data-target=\"#myModal11\" class=\"card-img-top\"  src=\"../assets/untold.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n              \n                <!-- Modal -->\n                <div class=\"modal fade\" id=\"myModal11\" role=\"dialog\">\n                  <div class=\"modal-dialog\">\n                  \n                    <!-- Modal content-->\n                    <div class=\"modal-content\">\n                      <div class=\"modal-header\">\n                          <h2>Love stories</h2>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                      </div>\n              \n              \n                      <div class=\"modal-body\">\n                        \n                          <img src=\"assets\\untold.jpg\">\n                          <div class=\"side\">\n                              <h3>The Untold Love Stories</h3>\n                              <h6>By : Ajitabh Bose</h6><br>\n                              <input type=\"text\" value=\"&#x20b9;200.00\" disabled #price>\n                      \n                              <h5>Ratings </h5>\n                              <span class=\"fa fa-star checked\"></span>\n                              <span class=\"fa fa-star checked\"></span>\n                              <span class=\"fa fa-star checked\"></span>\n                              <span class=\"fa fa-star\"></span>\n                              <span class=\"fa fa-star\"></span><br><br>\n                      \n                              <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                              \n                             <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                             <h5>Description :</h5> <p>The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!</p><br><br>\n                      \n                             <hr>\n                      \n                             <h5>Reviews : </h5><br>\n                             <h6>Karthik Bhandary</h6>\n                             <span class=\"fa fa-star checked\"></span>\n                             <span class=\"fa fa-star checked\"></span>\n                             <span class=\"fa fa-star checked\"></span>\n                             <span class=\"fa fa-star checked\"></span>\n                             <span class=\"fa fa-star checked\"></span><br>\n                             <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                            </div>\n                            </div>\n              \n                      </div>\n                    </div>\n                    </div>\n                    </div>\n\n                    <div class=\"card-body\">\n                      <h4 class=\"card-title\">The Untold Love Stories</h4>\n                      <p class=\"card-text\">Ajitabh Bose<br>\n                     Price:&#x20b9;200.00</p>\n                     \n                    </div>\n                  </div>\n                </div>\n                  </div>\n                </div>\n                </div>\n\n"

/***/ }),

/***/ "./src/app/categories/love-stories/love-stories.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/categories/love-stories/love-stories.component.ts ***!
  \*******************************************************************/
/*! exports provided: LoveStoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoveStoriesComponent", function() { return LoveStoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoveStoriesComponent = /** @class */ (function () {
    function LoveStoriesComponent() {
    }
    LoveStoriesComponent.prototype.ngOnInit = function () {
    };
    LoveStoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-love-stories',
            template: __webpack_require__(/*! ./love-stories.component.html */ "./src/app/categories/love-stories/love-stories.component.html"),
            styles: [__webpack_require__(/*! ./love-stories.component.css */ "./src/app/categories/love-stories/love-stories.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoveStoriesComponent);
    return LoveStoriesComponent;
}());



/***/ }),

/***/ "./src/app/categories/non-fiction/non-fiction.component.css":
/*!******************************************************************!*\
  !*** ./src/app/categories/non-fiction/non-fiction.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\ndiv\r\n{\r\n    border: 1px solid whitesmoke;\r\n}\r\n*/\r\n#container{\r\n    width: 100%;\r\n    height: 300px;\r\n    overflow: hidden;\r\n    margin-top: 6%;\r\n}\r\n.row\r\n{\r\n    width: 100%;\r\n}\r\n.col-ss{\r\n    margin:5px;\r\n}\r\n#img1{\r\n    height:275px;\r\n}\r\nh2{\r\n    color: whitesmoke;\r\n    font-family:'Times New Roman';\r\n    font-size:30px;\r\n    text-transform: uppercase;\r\n   \r\n}\r\nh4{\r\n    font-size:15px;\r\n    color:maroon;\r\n    text-shadow: 2px 2px 5px #888888;\r\n   \r\n}\r\n/*\r\n.card{\r\n    \r\n}\r\n*/\r\n.card-text{\r\n    text-shadow: 2px 2px 5px #888888;\r\n    padding:1px;\r\n    \r\n}\r\nh2{\r\n    text-shadow: 2px 2px 5px #888888;;\r\n}\r\n.card-body{\r\n    padding:3px;\r\n}\r\n.modal-header{\r\n    height: 60px;\r\n}\r\n.modal-body{\r\n    height: 1000px;\r\n}\r\n.modal-body img{\r\n    height: 300px;\r\n    width: 200px;\r\n    margin-left: 0;\r\n}\r\n.modal-body a img{\r\n    height: 50px;\r\n    width: 50px;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n.side{\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 250px;\r\n}\r\n.submit{\r\n    height: 40px;\r\n    width: 100px;\r\n}\r\n.checked {\r\n    color: orange;\r\n}\r\n.modal-content{\r\n    width: 700px;\r\n}\r\ninput{\r\n    background: none;\r\n    border: none;\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/categories/non-fiction/non-fiction.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/categories/non-fiction/non-fiction.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-ss\">\n  <div class=\"container\">\n    <h2>Non-Fiction</h2>\n    <div class=\"container\">\n      <br><br>\n      <div class=\"card\" style=\"width:200px\">\n       <!-- <img class=\"card-img-top\" src=\"../assets/thecrown.jpg\" alt=\"Card image\" style=\"width:100%\"id=\"img1\"/> -->\n\n        <div class=\"container\">\n          <!-- Trigger the modal with a button -->\n          <img data-toggle=\"modal\" data-target=\"#myModal4\" class=\"card-img-top\"  src=\"../assets/thecrown.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n        \n          <!-- Modal -->\n          <div class=\"modal fade\" id=\"myModal4\" role=\"dialog\">\n            <div class=\"modal-dialog\">\n            \n              <!-- Modal content-->\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h2>Non-Fiction</h2>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                </div>\n        \n        \n                <div class=\"modal-body\">\n                  \n                    <img src=\"assets\\thecrown.jpg\">\n                    <div class=\"side\">\n                        <h3>The Crown</h3>\n                        <h6>By : Robert lace</h6><br>\n                        <input type=\"text\" value=\"&#x20b9;450.00\" disabled #price>\n                \n                        <h5>Ratings </h5>\n                        <span class=\"fa fa-star checked\"></span>\n                        <span class=\"fa fa-star checked\"></span>\n                        <span class=\"fa fa-star checked\"></span>\n                        <span class=\"fa fa-star\"></span>\n                        <span class=\"fa fa-star\"></span><br><br>\n                \n                        <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                        \n                       <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                       <h5>Description :</h5> <p>In The Heir, a new era dawned in the world of The Selection. Twenty years have passed since America Singer and Prince Maxon fell in love, and their daughter is the first princess to hold a Selection of her own.  Eadlyn didn’t think she would find a real partner among the Selection’s thirty-five suitors, let alone true love. But sometimes the heart has a way of surprising you… and now Eadlyn must make a choice that feels more difficult – and more important – than she ever expected.</p><br><br>\n                \n                       <hr>\n                \n                       <h5>Reviews : </h5><br>\n                       <h6>Karthik Bhandary</h6>\n                       <span class=\"fa fa-star checked\"></span>\n                       <span class=\"fa fa-star checked\"></span>\n                       <span class=\"fa fa-star checked\"></span>\n                       <span class=\"fa fa-star checked\"></span>\n                       <span class=\"fa fa-star checked\"></span><br>\n                       <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                      </div>\n                      </div>\n        \n                </div>\n              </div>\n              </div>\n              </div>\n\n\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">The Crown</h4>\n          <p class=\"card-text\">Robert Lace<br>\n         Price:&#x20b9;450.00</p>\n        </div>\n      </div>\n    </div>\n      </div>\n   </div>\n\n    <div class=\"col-ss\">\n        <div class=\"container\"><br><br>\n          <div class=\"container\"><br><br>\n            <div class=\"card\" style=\"width:200px\">\n             <!-- <img class=\"card-img-top\" src=\"../assets/screte.jpg\" alt=\"Card image\" style=\"width:100%\"id=\"img1\"/> -->\n\n             <div class=\"container\">\n              <!-- Trigger the modal with a button -->\n              <img data-toggle=\"modal\" data-target=\"#myModal5\" class=\"card-img-top\"  src=\"../assets/screte.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n            \n              <!-- Modal -->\n              <div class=\"modal fade\" id=\"myModal5\" role=\"dialog\">\n                <div class=\"modal-dialog\">\n                \n                  <!-- Modal content-->\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h2>Non-Fiction</h2>\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    </div>\n            \n            \n                    <div class=\"modal-body\">\n                      \n                        <img src=\"assets\\screte.jpg\">\n                        <div class=\"side\">\n                            <h3>Secret</h3>\n                            <h6>By : Rhonda Byrne</h6><br>\n                            <input type=\"text\" value=\"&#x20b9;250.00\" disabled #price>\n                    \n                            <h5>Ratings </h5>\n                            <span class=\"fa fa-star checked\"></span>\n                            <span class=\"fa fa-star checked\"></span>\n                            <span class=\"fa fa-star checked\"></span>\n                            <span class=\"fa fa-star\"></span>\n                            <span class=\"fa fa-star\"></span><br><br>\n                    \n                            <input (click)=\"submit(price.value)\"  class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                            \n                           <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                           <h5>Description :</h5> <p>The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!</p><br><br>\n                    \n                           <hr>\n                    \n                           <h5>Reviews : </h5><br>\n                           <h6>Karthik Bhandary</h6>\n                           <span class=\"fa fa-star checked\"></span>\n                           <span class=\"fa fa-star checked\"></span>\n                           <span class=\"fa fa-star checked\"></span>\n                           <span class=\"fa fa-star checked\"></span>\n                           <span class=\"fa fa-star checked\"></span><br>\n                           <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                          </div>\n                          </div>\n            \n                    </div>\n                  </div>\n                  </div>\n                  </div>\n\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">Secret</h4>\n                <p class=\"card-text\">Rhonda Byrne<br>\n                Price:&#x20b9;250.00</p>\n              </div>\n            </div>\n          </div>\n            </div>  \n          </div>\n\n          <div class=\"col-ss\">\n              <div class=\"container\"><br><br>\n                <div class=\"container\"><br><br>\n                  <div class=\"card\" style=\"width:200px\">\n                   <!-- <img class=\"card-img-top\" src=\"../assets/gone.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\"/>-->\n\n                   <div class=\"container\">\n                    <!-- Trigger the modal with a button -->\n                    <img data-toggle=\"modal\" data-target=\"#myModal6\" class=\"card-img-top\"  src=\"../assets/gone.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n                  \n                    <!-- Modal -->\n                    <div class=\"modal fade\" id=\"myModal6\" role=\"dialog\">\n                      <div class=\"modal-dialog\">\n                      \n                        <!-- Modal content-->\n                        <div class=\"modal-content\">\n                          <div class=\"modal-header\">\n                              <h2>Non-Fiction</h2>\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                          </div>\n                  \n                  \n                          <div class=\"modal-body\">\n                            \n                              <img src=\"assets\\gone.jpg\">\n                              <div class=\"side\">\n                                  <h3>I'll Be Gone In The Dark</h3>\n                                  <h6>By : Michelle Mcnamra</h6><br>\n                                  <input type=\"text\" value=\"&#x20b9;350.00\" disabled #price>\n                          \n                                  <h5>Ratings </h5>\n                                  <span class=\"fa fa-star checked\"></span>\n                                  <span class=\"fa fa-star checked\"></span>\n                                  <span class=\"fa fa-star checked\"></span>\n                                  <span class=\"fa fa-star\"></span>\n                                  <span class=\"fa fa-star\"></span><br><br>\n                          \n                                  <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                                  \n                                 <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                                 <h5>Description :</h5> <p>The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!</p><br><br>\n                          \n                                 <hr>\n                          \n                                 <h5>Reviews : </h5><br>\n                                 <h6>Karthik Bhandary</h6>\n                                 <span class=\"fa fa-star checked\"></span>\n                                 <span class=\"fa fa-star checked\"></span>\n                                 <span class=\"fa fa-star checked\"></span>\n                                 <span class=\"fa fa-star checked\"></span>\n                                 <span class=\"fa fa-star checked\"></span><br>\n                                 <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                                </div>\n                                </div>\n                  \n                          </div>\n                        </div>\n                        </div>\n                        </div>\n\n                    <div class=\"card-body\">\n                      <h4 class=\"card-title\">I'll Be Gone In The Dark</h4>\n                      <p class=\"card-text\">Michelle Mcnamra<br>\n                      Price:&#x20b9;350.00</p>\n                     \n                    </div>\n                  </div>\n                </div>\n                  </div>\n           </div>\n           <div class=\"col-ss\">\n              <div class=\"container\"><br><br>\n             <div class=\"container\"><br><br>\n                    <div class=\"card\" style=\"width:200px\">\n               <!-- <img class=\"card-img-top\" src=\"../assets/img.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\"/> -->\n\n               <div class=\"container\">\n                <!-- Trigger the modal with a button -->\n                <img data-toggle=\"modal\" data-target=\"#myModal7\" class=\"card-img-top\"  src=\"../assets/img.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n              \n                <!-- Modal -->\n                <div class=\"modal fade\" id=\"myModal7\" role=\"dialog\">\n                  <div class=\"modal-dialog\">\n                  \n                    <!-- Modal content-->\n                    <div class=\"modal-content\">\n                      <div class=\"modal-header\">\n                          <h2>Fantasy</h2>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                      </div>\n              \n              \n                      <div class=\"modal-body\">\n                        \n                          <img src=\"assets\\img.jpg\">\n                          <div class=\"side\">\n                              <h3>IIt's Okay To Laugh</h3>\n                              <h6>By : Nora Mclneray</h6><br>\n                              <input type=\"text\" value=\"&#x20b9;400.00\" disabled #price>\n                      \n                              <h5>Ratings </h5>\n                              <span class=\"fa fa-star checked\"></span>\n                              <span class=\"fa fa-star checked\"></span>\n                              <span class=\"fa fa-star checked\"></span>\n                              <span class=\"fa fa-star\"></span>\n                              <span class=\"fa fa-star\"></span><br><br>\n                      \n                              <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                              \n                             <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                             <h5>Description :</h5> <p>The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!</p><br><br>\n                      \n                             <hr>\n                      \n                             <h5>Reviews : </h5><br>\n                             <h6>Karthik Bhandary</h6>\n                             <span class=\"fa fa-star checked\"></span>\n                             <span class=\"fa fa-star checked\"></span>\n                             <span class=\"fa fa-star checked\"></span>\n                             <span class=\"fa fa-star checked\"></span>\n                             <span class=\"fa fa-star checked\"></span><br>\n                             <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                            </div>\n                            </div>\n              \n                      </div>\n                    </div>\n                    </div>\n                    </div>\n\n                    <div class=\"card-body\">\n                      <h4 class=\"card-title\">It's Okay To Laugh</h4>\n                      <p class=\"card-text\">Nora Mclneray <br>\n                     Price:&#x20b9;400.00</p>\n                     \n                    </div>\n                  </div>\n                </div>\n                  </div>\n              \n                  \n                </div>\n  \n      </div>\n"

/***/ }),

/***/ "./src/app/categories/non-fiction/non-fiction.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/categories/non-fiction/non-fiction.component.ts ***!
  \*****************************************************************/
/*! exports provided: NonFictionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonFictionComponent", function() { return NonFictionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NonFictionComponent = /** @class */ (function () {
    function NonFictionComponent() {
    }
    NonFictionComponent.prototype.ngOnInit = function () {
    };
    NonFictionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-non-fiction',
            template: __webpack_require__(/*! ./non-fiction.component.html */ "./src/app/categories/non-fiction/non-fiction.component.html"),
            styles: [__webpack_require__(/*! ./non-fiction.component.css */ "./src/app/categories/non-fiction/non-fiction.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NonFictionComponent);
    return NonFictionComponent;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css":
/*!*****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n  }\r\n  \r\n  * {\r\n      box-sizing: border-box;\r\n  }\r\n  \r\n  /* Style inputs */\r\n  \r\n  input[type=text], select, textarea {\r\n      width: 100%;\r\n      padding: 12px;\r\n      border: 1px solid #ccc;\r\n      margin-top: 6px;\r\n      margin-bottom: 16px;\r\n      resize: vertical;\r\n  }\r\n  \r\n  input[type=submit] {\r\n      background-color: #4CAF50;\r\n      color: white;\r\n      padding: 12px 20px;\r\n      border: none;\r\n      cursor: pointer;\r\n  }\r\n  \r\n  input[type=submit]:hover {\r\n      background-color: #45a049;\r\n  }\r\n  \r\n  /* Style the container/contact section */\r\n  \r\n  .container {\r\n      border-radius: 5px;\r\n      background-color: rgba(0, 0, 0, 0.329);\r\n      padding: 10px;\r\n  }\r\n  \r\n  #contactHead\r\n  {\r\n      color: wheat;\r\n      text-shadow: 2px 2px 10px black;\r\n  }\r\n  \r\n  .row\r\n  {\r\n      text-align: center;\r\n      width: 100%;\r\n  }\r\n  \r\n  /* Create two columns that float next to eachother */\r\n  \r\n  .column {\r\n      display: inline-block;\r\n      width: 50%;\r\n      margin-top: 6px;\r\n      padding: 20px;\r\n      color: wheat;\r\n      font-weight:500;\r\n      text-shadow: 2px 2px 10px black;\r\n  }\r\n  \r\n  /* Clear floats after the columns \r\n  .row:after {\r\n      content: \"\";\r\n      display: table;\r\n      clear: both;\r\n  }\r\n  */\r\n  \r\n  /* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\r\n  \r\n  @media screen and (max-width: 600px) {\r\n      .column, input[type=submit] {\r\n          width: 100%;\r\n          margin-top: 0;\r\n      }\r\n  }"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.html":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div id=\"contactHead\" style=\"text-align:center\">\n        <h2>Contact Us</h2>\n        <p style=\"font-weight:500;\">Swing by for a cup of coffee, or leave us a message:</p>\n    </div>\n\n    <div class=\"row\">\n      <!--\n        <div class=\"column\">\n          <div id=\"map\" style=\"width:100%;height:500px\"></div>\n        </div>\n      -->\n        <div class=\"column\">\n            <form action=\"\">\n                <label for=\"fname\">First Name</label>\n                    <input type=\"text\" id=\"fname\" name=\"firstname\" placeholder=\"Your name..\">\n\n                <label for=\"lname\">Last Name</label>\n                    <input type=\"text\" id=\"lname\" name=\"lastname\" placeholder=\"Your last name..\">\n\n                <label for=\"country\">Country</label>\n                    <select id=\"country\" name=\"country\">\n                        <option value=\"india\">India</option>\n                        <option value=\"australia\">Australia</option>\n                        <option value=\"canada\">Canada</option>\n                        <option value=\"usa\">USA</option>\n                    </select>\n\n                <label for=\"subject\">Few Words from You...</label>\n                    <textarea id=\"subject\" name=\"subject\" placeholder=\"Write something..\" style=\"height:170px\"></textarea>\n\n                <input type=\"submit\" value=\"Submit\">\n            </form>\n        </div>\n\n        <div class=\"column\" style=\"margin-top:15%;\">\n            <h4 style=\"font-size:40px\">Our Address</h4>\n            <hr/>\n            <address>\n                #8,2ndFloor, <br>\n                BTM Layout, <br>\n                2nd Stage, <br>\n                Udupi garden bus stop, <br>\n                Bangalore-560 076 <br>\n                Ph: +9185555555 <br>\n                Email:contact@bookhub.in\n            </address>\n          </div>\n      \n    </div>\n"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/contact-us/contact-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\ndiv\r\n{\r\n    border: 1px solid whitesmoke;\r\n}\r\n*/\r\n#container{\r\n    width: 100%;\r\n    height: 300px;\r\n    overflow: hidden;\r\n    margin-top: 6%;\r\n}\r\n#slider{\r\n    position: relative;\r\n    width: 2800px;\r\n    -webkit-animation-name: slider;\r\n            animation-name: slider;\r\n    -webkit-animation-duration: 15s;\r\n            animation-duration: 15s;\r\n    -webkit-animation-iteration-count:infinite;\r\n            animation-iteration-count:infinite;\r\n}\r\n@-webkit-keyframes slider{\r\n    0%{\r\n        left: 0px;\r\n    }\r\n    10%{\r\n        left: 0px;\r\n    }\r\n    15%{\r\n        left: -400px;\r\n    }\r\n    25%{\r\n        left: -400px;\r\n    }\r\n    30%{\r\n        left: -800px;\r\n    }\r\n    35%{\r\n        left: -800px;\r\n    }\r\n    45%{\r\n        left: -800px;\r\n    }\r\n    50%{\r\n        left: -1200px;\r\n    }\r\n    55%{\r\n        left: -1200px;\r\n    }\r\n    65%{\r\n        left: -1600px;\r\n    }\r\n    70%{\r\n        left: -1600;\r\n    }\r\n    80%{\r\n        left: -2000px;\r\n    }\r\n    85%{\r\n        left: -2000px;\r\n    }\r\n    90%{\r\n        left: -2400px;\r\n    }\r\n    100%{\r\n        left: -2400px;\r\n    }\r\n}\r\n@keyframes slider{\r\n    0%{\r\n        left: 0px;\r\n    }\r\n    10%{\r\n        left: 0px;\r\n    }\r\n    15%{\r\n        left: -400px;\r\n    }\r\n    25%{\r\n        left: -400px;\r\n    }\r\n    30%{\r\n        left: -800px;\r\n    }\r\n    35%{\r\n        left: -800px;\r\n    }\r\n    45%{\r\n        left: -800px;\r\n    }\r\n    50%{\r\n        left: -1200px;\r\n    }\r\n    55%{\r\n        left: -1200px;\r\n    }\r\n    65%{\r\n        left: -1600px;\r\n    }\r\n    70%{\r\n        left: -1600;\r\n    }\r\n    80%{\r\n        left: -2000px;\r\n    }\r\n    85%{\r\n        left: -2000px;\r\n    }\r\n    90%{\r\n        left: -2400px;\r\n    }\r\n    100%{\r\n        left: -2400px;\r\n    }\r\n}\r\n#slider img{\r\n    width: 200px;\r\n    height: 300px;\r\n    margin: 5px;\r\n    transition:0.5s;\r\n\r\n}\r\n#slider img:hover{\r\n    width: 250px;\r\n    height: 350px;\r\n}\r\n#pic-container{\r\n    margin-top: 2%;\r\n    margin-left: 20%;\r\n\r\n}\r\n.pic{\r\n    float: left;\r\n    overflow: hidden;\r\n    padding: 0;\r\n   \r\n}\r\n.carousel-inner{\r\n    margin: 25%;\r\n}\r\n.row\r\n{\r\n    width: 100%;\r\n}\r\n.col-ss{\r\n    margin:5px;\r\n}\r\n#img1{\r\n    height:275px;\r\n}\r\nh2{\r\n    color: whitesmoke;\r\n    font-family:'Times New Roman';\r\n    font-size:30px;\r\n    text-transform: uppercase;\r\n   \r\n}\r\nh4{\r\n    font-size:15px;\r\n    color:maroon;\r\n    text-shadow: 2px 2px 5px #888888;\r\n   \r\n}\r\n/*\r\n.card{\r\n    \r\n}\r\n*/\r\n.card-text{\r\n    text-shadow: 2px 2px 5px #888888;\r\n    padding:1px;\r\n    \r\n}\r\nh2{\r\n    text-shadow: 2px 2px 5px #888888;;\r\n}\r\n.card-body{\r\n    padding:3px;\r\n}\r\n.modal-header{\r\n    height: 60px;\r\n}\r\n.modal-body{\r\n    height: 1000px;\r\n}\r\n.modal-body img{\r\n    height: 300px;\r\n    width: 200px;\r\n    margin-left: 0;\r\n}\r\n.modal-body a img{\r\n    height: 50px;\r\n    width: 50px;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n.side{\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 250px;\r\n}\r\n.submit{\r\n    height: 40px;\r\n    width: 100px;\r\n}\r\n.checked {\r\n    color: orange;\r\n}\r\n.modal-content{\r\n    width: 700px;\r\n}\r\ninput{\r\n    background: none;\r\n    border: none;\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">   <!--=========================================================SLIDE-SHOW SECTION-->\n  <div id=\"slider\">\n    <a href=\"assets\\the-curlicue-contract.pdf\"><img src=\"assets\\img1.jpeg\"></a>\n    <img src=\"assets\\img2.jpg\">\n    <img src=\"assets\\img3.jpg\">\n    <img src=\"assets\\img4.jpg\">\n    <img src=\"assets\\img5.jpg\">\n    <img src=\"assets\\img6.jpg\">\n    <img src=\"assets\\img7.jpg\">\n    <img src=\"assets\\img8.jpg\">\n    <img src=\"assets\\img9.jpg\">\n    <img src=\"assets\\img10.jpg\">\n    <img src=\"assets\\img11.jpg\">\n    <img src=\"assets\\img12.jpg\">\n    <img src=\"assets\\img13.jpg\">\n    <img src=\"assets\\img14.jpg\">\n    <img src=\"assets\\img5.jpg\" >\n  </div>\n</div>\n\n\n<div class=\"row\">\n    <div class=\"col-ss\">\n      <div class=\"container\">\n          <h2>Fiction</h2>\n          <div class=\"container\">\n          <br><br>\n          <div class=\"card\" style=\"width:200px\">\n              <div class=\"container\">\n                    <!-- Trigger the modal with a button -->\n                    <img  data-toggle=\"modal\" data-target=\"#myModal\" class=\"card-img-top\"  src=\"../assets/bookDisp.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n        \n                    <!-- Modal -->\n                    <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n                        <div class=\"modal-dialog\">\n            \n                        <!-- Modal content-->\n                            <div class=\"modal-content\">\n                              <div class=\"modal-header\">\n                                  <h2>Fiction</h2>\n                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                              </div>\n                              <div class=\"modal-body\">\n                                      <img src=\"assets\\bookDisp.jpg\">\n                                  <div class=\"side\">\n                                        <h3>The Hunger Games</h3>\n                                        <h6>By : Suzanne Collins</h6><br>\n                                        <input type=\"text\" value=\"&#x20b9;200.00\" disabled #price>\n                                \n                                        <h5>Ratings </h5>\n                                        <span class=\"fa fa-star checked\"></span>\n                                        <span class=\"fa fa-star checked\"></span>\n                                        <span class=\"fa fa-star checked\"></span>\n                                        <span class=\"fa fa-star checked\"></span>\n                                        <span class=\"fa fa-star\"></span><br><br>\n                                \n                                        <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                  \n                                      <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                                      <h5>Description :</h5> <p>After winning the brutal Hunger Games, Katniss and Peeta return to their district, hoping for a peaceful future. But their victory has caused rebellion to break out ... and the Capitol has decided that someone must pay. As Katniss and Peeta are forced to visit the districts on the Capitol's Victory Tour, the stakes are higher than ever. Unless they can convince the world that they are still lost in their love for each other, the consequences will be horrifying. Then comes the cruellest twist: the contestants for the next Hunger Games are announced, and Katniss and Peeta are forced into the arena once more.</p><br><br>\n                                \n                                      <hr>\n                                \n                                      <h5>Reviews : </h5><br>\n                                      <h6>Vikram</h6>\n                                      <span class=\"fa fa-star checked\"></span>\n                                      <span class=\"fa fa-star checked\"></span>\n                                      <span class=\"fa fa-star checked\"></span>\n                                      <span class=\"fa fa-star checked\"></span>\n                                      <span class=\"fa fa-star checked\"></span><br>\n                                      <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                      </div>\n                      </div>\n        \n                </div>\n              </div>\n              \n            </div>\n          </div>\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">The Hunger Games</h4>\n          <p class=\"card-text\">Suzanne Collins<br>\n          Price:&#x20b9; 200.00</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>\n  \n  \n    <div class=\"col-ss\">\n        <div class=\"container\"><br><br>\n          <div class=\"container\"><br><br>\n            <div class=\"card\" style=\"width:200px\">\n  \n              <div class=\"container\">\n                <!-- Trigger the modal with a button -->\n                <img data-toggle=\"modal\" data-target=\"#myModal1\" class=\"card-img-top\"  src=\"../assets/twilight.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n              \n                <!-- Modal -->\n                <div class=\"modal fade\" id=\"myModal1\" role=\"dialog\">\n                  <div class=\"modal-dialog\">\n                  \n                    <!-- Modal content-->\n                    <div class=\"modal-content\">\n                      <div class=\"modal-header\">\n                          <h2>Fiction</h2>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                      </div>\n              \n              \n                      <div class=\"modal-body\">\n                        \n                          <img src=\"assets\\twilight.jpg\">\n                          <div class=\"side\">\n                              <h3>The Twilight</h3>\n                              <h6>By : Stephenie Meyer</h6><br>\n                              <input type=\"text\" value=\"&#x20b9;250.00\" disabled #price>\n                      \n                              <h5>Ratings </h5>\n                              <span class=\"fa fa-star checked\"></span>\n                              <span class=\"fa fa-star checked\"></span>\n                              <span class=\"fa fa-star checked\"></span>\n                              <span class=\"fa fa-star \"></span>\n                              <span class=\"fa fa-star\"></span><br><br>\n                      \n                              <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                              \n                             <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                             <h5>Description :</h5> <p>Twilight (Twilight Saga) is written by Stephenie Meyer. The author of the book has released 4 novels annually from 2005 to 2008. The story is based on a teenage girl named Bella Swan who moves to Forks, Washington and falls in love with Edward Cullen, who is a 104 year old vampire. The book has gained popularity, since the release of its first novel in 2005. The love story of a girl and a vampire was popular amongst all age groups. All the four books have won various awards and most notably the 2008 British Book Award for \"Children's Book of the Year\" for Breaking Dawn, whereas the entire series had won the 2009 Kids' Choice Award for Favourite Book. Globally, 120 million copies of the series have sold out in more than 38 languages.</p><br><br>\n                      \n                             <hr>\n                      \n                             <h5>Reviews : </h5><br>\n                             <h6>Irfan</h6>\n                             <span class=\"fa fa-star checked\"></span>\n                             <span class=\"fa fa-star checked\"></span>\n                             <span class=\"fa fa-star\"></span>\n                             <span class=\"fa fa-star\"></span>\n                             <span class=\"fa fa-star\"></span><br>\n                             <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                            </div>\n                            </div>\n              \n                      </div>\n                    </div>\n                    </div>\n                    </div>\n  \n              <div class=\"card-body\">\n                <h4 class=\"card-title\">Twilight</h4>\n                <p class=\"card-text\">Stephenie Meyer<br> \n                Price:&#x20b9;250.00</p>\n              </div>\n            </div>\n          </div>\n            </div>  \n          </div>\n  \n  \n  \n  \n          <div class=\"col-ss\">\n              <div class=\"container\"><br><br>\n                <div class=\"container\"><br><br>\n                  <div class=\"card\" style=\"width:200px\">\n                   <!-- <img class=\"card-img-top\" src=\"../assets/img4.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\"> -->\n  \n                    <div class=\"container\">\n                      <!-- Trigger the modal with a button -->\n                      <img data-toggle=\"modal\" data-target=\"#myModal2\" class=\"card-img-top\"  src=\"../assets/img4.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n                    \n                      <!-- Modal -->\n                      <div class=\"modal fade\" id=\"myModal2\" role=\"dialog\">\n                        <div class=\"modal-dialog\">\n                        \n                          <!-- Modal content-->\n                          <div class=\"modal-content\">\n                            <div class=\"modal-header\">\n                                <h2>Fiction</h2>\n                              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                            </div>\n                    \n                    \n                            <div class=\"modal-body\">\n                              \n                                <img src=\"assets\\img4.jpg\">\n                                <div class=\"side\">\n                                    <h3>The lords of rings</h3>\n                                    <h6>By : J R R Tolkein</h6><br>\n                                    <input type=\"text\" value=\"&#x20b9;300.00\" disabled #price>\n                            \n                                    <h5>Ratings </h5>\n                                    <span class=\"fa fa-star checked\"></span>\n                                    <span class=\"fa fa-star checked\"></span>\n                                    <span class=\"fa fa-star checked\"></span>\n                                    <span class=\"fa fa-star checked\"></span>\n                                    <span class=\"fa fa-star checked\"></span><br><br>\n                            \n                                    <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                                    \n                                   <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                                   <h5>Description :</h5> <p>All three parts of epic masterpiece ‘The Lord of the Rings’ in one paperback. Features brand new packaging, the definitive edition of the text, fold-out flaps with the original two-colour maps, and a revised and expanded index. Sauron, the Dark Lord, has gathered to him all the Rings of Power – the means by which he intends to rule Middle-earth. All he lacks in his plans for dominion is the One Ring – the ring that rules them all – which has fallen into the hands of the hobbit, Bilbo Baggins.</p><br><br>\n                            \n                                   <hr>\n                            \n                                   <h5>Reviews : </h5><br>\n                                   <h6>Baskar</h6>\n                                   <span class=\"fa fa-star checked\"></span>\n                                   <span class=\"fa fa-star checked\"></span>\n                                   <span class=\"fa fa-star checked\"></span>\n                                   <span class=\"fa fa-star checked\"></span>\n                                   <span class=\"fa fa-star checked\"></span><br>\n                                   <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                                  </div>\n                                  </div>\n                    \n                            </div>\n                          </div>\n                          </div>\n                          </div>\n  \n  \n                    <div class=\"card-body\">\n                      <h4 class=\"card-title\">The Lord of the Rings</h4>\n                      <p class=\"card-text\">J.R.R Tolkein<br>\n                      Price:&#x20b9;300.00</p>\n                     \n                    </div>\n                  </div>\n                </div>\n                  </div>\n           </div>\n           <div class=\"col-ss\">\n              <div class=\"container\"><br><br>\n             <div class=\"container\"><br><br>\n                    <div class=\"card\" style=\"width:200px\">\n              <!--  <img class=\"card-img-top\" src=\"../assets/Catwoman.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\"> -->\n  \n                <div class=\"container\">\n                  <!-- Trigger the modal with a button -->\n                  <img data-toggle=\"modal\" data-target=\"#myModal3\" class=\"card-img-top\"  src=\"../assets/Catwoman.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n                \n                  <!-- Modal -->\n                  <div class=\"modal fade\" id=\"myModal3\" role=\"dialog\">\n                    <div class=\"modal-dialog\">\n                    \n                      <!-- Modal content-->\n                      <div class=\"modal-content\">\n                        <div class=\"modal-header\">\n                            <h2>Fiction</h2>\n                          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                        </div>\n                \n                \n                        <div class=\"modal-body\">\n                          \n                            <img src=\"assets\\Catwoman.jpg\">\n                            <div class=\"side\">\n                                <h3>Catwoman</h3>\n                                <h6>By : soul Steala</h6><br>\n                                <input type=\"text\" value=\"&#x20b9;400.00\" disabled #price>\n                        \n                                <h5>Ratings </h5>\n                                <span class=\"fa fa-star checked\"></span>\n                                <span class=\"fa fa-star checked\"></span>\n                                <span class=\"fa fa-star checked\"></span>\n                                <span class=\"fa fa-star\"></span>\n                                <span class=\"fa fa-star\"></span><br><br>\n                        \n                                <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                                \n                               <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                               <h5>Description :</h5> <p>When the Bat's away, the Cat will play. It's time to see how many lives this cat really has. Two years after escaping Gotham City's slums, Selina Kyle returns as the mysterious and wealthy Holly Vanderhees. She quickly discovers that with Batman off on a vital mission, Batwing is left to hold back the tide of notorious criminals. Gotham City is ripe for the taking.</p><br><br>\n                        \n                               <hr>\n                        \n                               <h5>Reviews : </h5><br>\n                               <h6>Karthik Bhandary</h6>\n                               <span class=\"fa fa-star checked\"></span>\n                               <span class=\"fa fa-star checked\"></span>\n                               <span class=\"fa fa-star checked\"></span>\n                               <span class=\"fa fa-star checked\"></span>\n                               <span class=\"fa fa-star checked\"></span><br>\n                               <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                              </div>\n                              </div>\n                \n                        </div>\n                      </div>\n                      </div>\n                      </div>\n  \n  \n                    <div class=\"card-body\">\n                      <h4 class=\"card-title\">CatWoman </h4>\n                      <p class=\"card-text\">Soul Steala<br>\n                      Price:&#x20b9; 400.00</p>\n                     \n                    </div>\n                  </div>\n                </div>\n                  </div>\n               </div>\n  \n      </div>\n\n <!--=====================================NON-FICTION==========================================-->     \n      <div class=\"row\">\n          <div class=\"col-ss\">\n        <div class=\"container\">\n          <h2>Non-Fiction</h2>\n          <div class=\"container\">\n            <br><br>\n            <div class=\"card\" style=\"width:200px\">\n             <!-- <img class=\"card-img-top\" src=\"../assets/thecrown.jpg\" alt=\"Card image\" style=\"width:100%\"id=\"img1\"/> -->\n  \n              <div class=\"container\">\n                <!-- Trigger the modal with a button -->\n                <img data-toggle=\"modal\" data-target=\"#myModal4\" class=\"card-img-top\"  src=\"../assets/thecrown.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n              \n                <!-- Modal -->\n                <div class=\"modal fade\" id=\"myModal4\" role=\"dialog\">\n                  <div class=\"modal-dialog\">\n                  \n                    <!-- Modal content-->\n                    <div class=\"modal-content\">\n                      <div class=\"modal-header\">\n                          <h2>Non-Fiction</h2>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                      </div>\n              \n              \n                      <div class=\"modal-body\">\n                        \n                          <img src=\"assets\\thecrown.jpg\">\n                          <div class=\"side\">\n                              <h3>The Crown</h3>\n                              <h6>By : Robert lace</h6><br>\n                              <input type=\"text\" value=\"&#x20b9;450.00\" disabled #price>\n                      \n                              <h5>Ratings </h5>\n                              <span class=\"fa fa-star checked\"></span>\n                              <span class=\"fa fa-star checked\"></span>\n                              <span class=\"fa fa-star checked\"></span>\n                              <span class=\"fa fa-star\"></span>\n                              <span class=\"fa fa-star\"></span><br><br>\n                      \n                              <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                              \n                             <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                             <h5>Description :</h5> <p>In The Heir, a new era dawned in the world of The Selection. Twenty years have passed since America Singer and Prince Maxon fell in love, and their daughter is the first princess to hold a Selection of her own.  Eadlyn didn’t think she would find a real partner among the Selection’s thirty-five suitors, let alone true love. But sometimes the heart has a way of surprising you… and now Eadlyn must make a choice that feels more difficult – and more important – than she ever expected.</p><br><br>\n                      \n                             <hr>\n                      \n                             <h5>Reviews : </h5><br>\n                             <h6>Karthik Bhandary</h6>\n                             <span class=\"fa fa-star checked\"></span>\n                             <span class=\"fa fa-star checked\"></span>\n                             <span class=\"fa fa-star checked\"></span>\n                             <span class=\"fa fa-star checked\"></span>\n                             <span class=\"fa fa-star checked\"></span><br>\n                             <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                            </div>\n                            </div>\n              \n                      </div>\n                    </div>\n                    </div>\n                    </div>\n  \n  \n              <div class=\"card-body\">\n                <h4 class=\"card-title\">The Crown</h4>\n                <p class=\"card-text\">Robert Lace<br>\n               Price:&#x20b9;450.00</p>\n              </div>\n            </div>\n          </div>\n            </div>\n         </div>\n  \n          <div class=\"col-ss\">\n              <div class=\"container\"><br><br>\n                <div class=\"container\"><br><br>\n                  <div class=\"card\" style=\"width:200px\">\n                   <!-- <img class=\"card-img-top\" src=\"../assets/screte.jpg\" alt=\"Card image\" style=\"width:100%\"id=\"img1\"/> -->\n  \n                   <div class=\"container\">\n                    <!-- Trigger the modal with a button -->\n                    <img data-toggle=\"modal\" data-target=\"#myModal5\" class=\"card-img-top\"  src=\"../assets/screte.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n                  \n                    <!-- Modal -->\n                    <div class=\"modal fade\" id=\"myModal5\" role=\"dialog\">\n                      <div class=\"modal-dialog\">\n                      \n                        <!-- Modal content-->\n                        <div class=\"modal-content\">\n                          <div class=\"modal-header\">\n                              <h2>Non-Fiction</h2>\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                          </div>\n                  \n                  \n                          <div class=\"modal-body\">\n                            \n                              <img src=\"assets\\screte.jpg\">\n                              <div class=\"side\">\n                                  <h3>Secret</h3>\n                                  <h6>By : Rhonda Byrne</h6><br>\n                                  <input type=\"text\" value=\"&#x20b9;250.00\" disabled #price>\n                          \n                                  <h5>Ratings </h5>\n                                  <span class=\"fa fa-star checked\"></span>\n                                  <span class=\"fa fa-star checked\"></span>\n                                  <span class=\"fa fa-star checked\"></span>\n                                  <span class=\"fa fa-star\"></span>\n                                  <span class=\"fa fa-star\"></span><br><br>\n                          \n                                  <input (click)=\"submit(price.value)\"  class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                                  \n                                 <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                                 <h5>Description :</h5> <p>The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!</p><br><br>\n                          \n                                 <hr>\n                          \n                                 <h5>Reviews : </h5><br>\n                                 <h6>Karthik Bhandary</h6>\n                                 <span class=\"fa fa-star checked\"></span>\n                                 <span class=\"fa fa-star checked\"></span>\n                                 <span class=\"fa fa-star checked\"></span>\n                                 <span class=\"fa fa-star checked\"></span>\n                                 <span class=\"fa fa-star checked\"></span><br>\n                                 <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                                </div>\n                                </div>\n                  \n                          </div>\n                        </div>\n                        </div>\n                        </div>\n  \n                    <div class=\"card-body\">\n                      <h4 class=\"card-title\">Secret</h4>\n                      <p class=\"card-text\">Rhonda Byrne<br>\n                      Price:&#x20b9;250.00</p>\n                    </div>\n                  </div>\n                </div>\n                  </div>  \n                </div>\n  \n                <div class=\"col-ss\">\n                    <div class=\"container\"><br><br>\n                      <div class=\"container\"><br><br>\n                        <div class=\"card\" style=\"width:200px\">\n                         <!-- <img class=\"card-img-top\" src=\"../assets/gone.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\"/>-->\n  \n                         <div class=\"container\">\n                          <!-- Trigger the modal with a button -->\n                          <img data-toggle=\"modal\" data-target=\"#myModal6\" class=\"card-img-top\"  src=\"../assets/gone.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n                        \n                          <!-- Modal -->\n                          <div class=\"modal fade\" id=\"myModal6\" role=\"dialog\">\n                            <div class=\"modal-dialog\">\n                            \n                              <!-- Modal content-->\n                              <div class=\"modal-content\">\n                                <div class=\"modal-header\">\n                                    <h2>Non-Fiction</h2>\n                                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                                </div>\n                        \n                        \n                                <div class=\"modal-body\">\n                                  \n                                    <img src=\"assets\\gone.jpg\">\n                                    <div class=\"side\">\n                                        <h3>I'll Be Gone In The Dark</h3>\n                                        <h6>By : Michelle Mcnamra</h6><br>\n                                        <input type=\"text\" value=\"&#x20b9;350.00\" disabled #price>\n                                \n                                        <h5>Ratings </h5>\n                                        <span class=\"fa fa-star checked\"></span>\n                                        <span class=\"fa fa-star checked\"></span>\n                                        <span class=\"fa fa-star checked\"></span>\n                                        <span class=\"fa fa-star\"></span>\n                                        <span class=\"fa fa-star\"></span><br><br>\n                                \n                                        <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                                        \n                                       <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                                       <h5>Description :</h5> <p>The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!</p><br><br>\n                                \n                                       <hr>\n                                \n                                       <h5>Reviews : </h5><br>\n                                       <h6>Karthik Bhandary</h6>\n                                       <span class=\"fa fa-star checked\"></span>\n                                       <span class=\"fa fa-star checked\"></span>\n                                       <span class=\"fa fa-star checked\"></span>\n                                       <span class=\"fa fa-star checked\"></span>\n                                       <span class=\"fa fa-star checked\"></span><br>\n                                       <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                                      </div>\n                                      </div>\n                        \n                                </div>\n                              </div>\n                              </div>\n                              </div>\n  \n                          <div class=\"card-body\">\n                            <h4 class=\"card-title\">I'll Be Gone In The Dark</h4>\n                            <p class=\"card-text\">Michelle Mcnamra<br>\n                            Price:&#x20b9;350.00</p>\n                           \n                          </div>\n                        </div>\n                      </div>\n                        </div>\n                 </div>\n                 <div class=\"col-ss\">\n                    <div class=\"container\"><br><br>\n                   <div class=\"container\"><br><br>\n                          <div class=\"card\" style=\"width:200px\">\n                     <!-- <img class=\"card-img-top\" src=\"../assets/img.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\"/> -->\n  \n                     <div class=\"container\">\n                      <!-- Trigger the modal with a button -->\n                      <img data-toggle=\"modal\" data-target=\"#myModal7\" class=\"card-img-top\"  src=\"../assets/img.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n                    \n                      <!-- Modal -->\n                      <div class=\"modal fade\" id=\"myModal7\" role=\"dialog\">\n                        <div class=\"modal-dialog\">\n                        \n                          <!-- Modal content-->\n                          <div class=\"modal-content\">\n                            <div class=\"modal-header\">\n                                <h2>Fantasy</h2>\n                              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                            </div>\n                    \n                    \n                            <div class=\"modal-body\">\n                              \n                                <img src=\"assets\\img.jpg\">\n                                <div class=\"side\">\n                                    <h3>IIt's Okay To Laugh</h3>\n                                    <h6>By : Nora Mclneray</h6><br>\n                                    <input type=\"text\" value=\"&#x20b9;400.00\" disabled #price>\n                            \n                                    <h5>Ratings </h5>\n                                    <span class=\"fa fa-star checked\"></span>\n                                    <span class=\"fa fa-star checked\"></span>\n                                    <span class=\"fa fa-star checked\"></span>\n                                    <span class=\"fa fa-star\"></span>\n                                    <span class=\"fa fa-star\"></span><br><br>\n                            \n                                    <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                                    \n                                   <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                                   <h5>Description :</h5> <p>The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!</p><br><br>\n                            \n                                   <hr>\n                            \n                                   <h5>Reviews : </h5><br>\n                                   <h6>Karthik Bhandary</h6>\n                                   <span class=\"fa fa-star checked\"></span>\n                                   <span class=\"fa fa-star checked\"></span>\n                                   <span class=\"fa fa-star checked\"></span>\n                                   <span class=\"fa fa-star checked\"></span>\n                                   <span class=\"fa fa-star checked\"></span><br>\n                                   <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                                  </div>\n                                  </div>\n                    \n                            </div>\n                          </div>\n                          </div>\n                          </div>\n  \n                          <div class=\"card-body\">\n                            <h4 class=\"card-title\">It's Okay To Laugh</h4>\n                            <p class=\"card-text\">Nora Mclneray <br>\n                           Price:&#x20b9;400.00</p>\n                           \n                          </div>\n                        </div>\n                      </div>\n                        </div>\n                    \n                        \n                      </div>\n        \n            </div>\n\n<!--=========================================LOVE-STORIES============================================-->\n            <div class=\"row\">\n                <div class=\"col-ss\">\n              <div class=\"container\">\n                <h2>Love stories</h2>\n                <div class=\"container\"><br><br>\n                  <div class=\"card\" style=\"width:200px\">\n                    <!--<img class=\"card-img-top\" src=\"../assets/image.jpg\" alt=\"Card image\" style=\"width:100%\"id=\"img1\">-->\n  \n                    <div class=\"container\">\n                      <!-- Trigger the modal with a button -->\n                      <img data-toggle=\"modal\" data-target=\"#myModal8\" class=\"card-img-top\"  src=\"../assets/image.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n                    \n                      <!-- Modal -->\n                      <div class=\"modal fade\" id=\"myModal8\" role=\"dialog\">\n                        <div class=\"modal-dialog\">\n                        \n                          <!-- Modal content-->\n                          <div class=\"modal-content\">\n                            <div class=\"modal-header\">\n                                <h2>Love stories</h2>\n                              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                            </div>\n                    \n                    \n                            <div class=\"modal-body\">\n                              \n                                <img src=\"assets\\image.jpg\">\n                                <div class=\"side\">\n                                    <h3>Wuthering Heights</h3>\n                                    <h6>By : Emily Bronte</h6><br>\n                                    <input type=\"text\" value=\"&#x20b9;250.00\" disabled #price>\n                            \n                                    <h5>Ratings </h5>\n                                    <span class=\"fa fa-star checked\"></span>\n                                    <span class=\"fa fa-star checked\"></span>\n                                    <span class=\"fa fa-star checked\"></span>\n                                    <span class=\"fa fa-star\"></span>\n                                    <span class=\"fa fa-star\"></span><br><br>\n                            \n                                    <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                                    \n                                   <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                                   <h5>Description :</h5> <p>The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!</p><br><br>\n                            \n                                   <hr>\n                            \n                                   <h5>Reviews : </h5><br>\n                                   <h6>Karthik Bhandary</h6>\n                                   <span class=\"fa fa-star checked\"></span>\n                                   <span class=\"fa fa-star checked\"></span>\n                                   <span class=\"fa fa-star checked\"></span>\n                                   <span class=\"fa fa-star checked\"></span>\n                                   <span class=\"fa fa-star checked\"></span><br>\n                                   <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                                  </div>\n                                  </div>\n                    \n                            </div>\n                          </div>\n                          </div>\n                          </div>\n  \n                    <div class=\"card-body\">\n                      <h4 class=\"card-title\">Wuthering Heights</h4>\n                      <p class=\"card-text\">Emily Bronte<br>\n                      Price:&#x20b9;250.00</p>\n                     \n                    </div>\n                  </div>\n                </div>\n                  </div>\n               </div>\n                <div class=\"col-ss\">\n                    <div class=\"container\"><br><br>\n                      <div class=\"container\"><br><br>\n                        <div class=\"card\" style=\"width:200px\">\n                         <!-- <img class=\"card-img-top\" src=\"../assets/love.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\"> -->\n  \n                         <div class=\"container\">\n                          <!-- Trigger the modal with a button -->\n                          <img data-toggle=\"modal\" data-target=\"#myModal9\" class=\"card-img-top\"  src=\"../assets/love.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n                        \n                          <!-- Modal -->\n                          <div class=\"modal fade\" id=\"myModal9\" role=\"dialog\">\n                            <div class=\"modal-dialog\">\n                            \n                              <!-- Modal content-->\n                              <div class=\"modal-content\">\n                                <div class=\"modal-header\">\n                                    <h2>Love stories</h2>\n                                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                                </div>\n                        \n                        \n                                <div class=\"modal-body\">\n                                  \n                                    <img src=\"assets\\love.jpg\">\n                                    <div class=\"side\">\n                                        <h3>The Time Of My Life</h3>\n                                        <h6>By : Ceclia Ahern</h6><br>\n                                        <input type=\"text\" value=\"&#x20b9;450.00\" disabled #price>\n                                \n                                        <h5>Ratings </h5>\n                                        <span class=\"fa fa-star checked\"></span>\n                                        <span class=\"fa fa-star checked\"></span>\n                                        <span class=\"fa fa-star checked\"></span>\n                                        <span class=\"fa fa-star\"></span>\n                                        <span class=\"fa fa-star\"></span><br><br>\n                                \n                                        <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                                        \n                                       <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                                       <h5>Description :</h5> <p>The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!</p><br><br>\n                                \n                                       <hr>\n                                \n                                       <h5>Reviews : </h5><br>\n                                       <h6>Karthik Bhandary</h6>\n                                       <span class=\"fa fa-star checked\"></span>\n                                       <span class=\"fa fa-star checked\"></span>\n                                       <span class=\"fa fa-star checked\"></span>\n                                       <span class=\"fa fa-star checked\"></span>\n                                       <span class=\"fa fa-star checked\"></span><br>\n                                       <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                                      </div>\n                                      </div>\n                        \n                                </div>\n                              </div>\n                              </div>\n                              </div>\n  \n                          <div class=\"card-body\">\n                            <h4 class=\"card-title\">The Time Of My Life</h4>\n                            <p class=\"card-text\">Ceclia Ahern<br>\n                               Price:&#x20b9;450.00</p>\n                          </div>\n                        </div>\n                      </div>\n                        </div>  \n                      </div>\n                      <div class=\"col-ss\">\n                          <div class=\"container\"><br><br>\n                            <div class=\"container\"><br><br>\n                              <div class=\"card\" style=\"width:200px\">\n                               <!-- <img class=\"card-img-top\" src=\"../assets/how.jpg\" alt=\"Card image\" style=\"width:100%\"id=\"img1\">-->\n  \n                                <div class=\"container\">\n                                  <!-- Trigger the modal with a button -->\n                                  <img data-toggle=\"modal\" data-target=\"#myModal10\" class=\"card-img-top\"  src=\"../assets/how.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n                                \n                                  <!-- Modal -->\n                                  <div class=\"modal fade\" id=\"myModal10\" role=\"dialog\">\n                                    <div class=\"modal-dialog\">\n                                    \n                                      <!-- Modal content-->\n                                      <div class=\"modal-content\">\n                                        <div class=\"modal-header\">\n                                            <h2>Love stories</h2>\n                                          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                                        </div>\n                                \n                                \n                                        <div class=\"modal-body\">\n                                          \n                                            <img src=\"assets\\how.jpg\">\n                                            <div class=\"side\">\n                                                <h3>How To Stop Time</h3>\n                                                <h6>By : Matt Haig</h6><br>\n                                                <input type=\"text\" value=\"&#x20b9;250.00\" disabled #price>\n                                        \n                                                <h5>Ratings </h5>\n                                                <span class=\"fa fa-star checked\"></span>\n                                                <span class=\"fa fa-star checked\"></span>\n                                                <span class=\"fa fa-star checked\"></span>\n                                                <span class=\"fa fa-star\"></span>\n                                                <span class=\"fa fa-star\"></span><br><br>\n                                        \n                                                <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                                                \n                                               <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                                               <h5>Description :</h5> <p>The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!</p><br><br>\n                                        \n                                               <hr>\n                                        \n                                               <h5>Reviews : </h5><br>\n                                               <h6>Karthik Bhandary</h6>\n                                               <span class=\"fa fa-star checked\"></span>\n                                               <span class=\"fa fa-star checked\"></span>\n                                               <span class=\"fa fa-star checked\"></span>\n                                               <span class=\"fa fa-star checked\"></span>\n                                               <span class=\"fa fa-star checked\"></span><br>\n                                               <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                                              </div>\n                                              </div>\n                                \n                                        </div>\n                                      </div>\n                                      </div>\n                                      </div>\n  \n                                <div class=\"card-body\">\n                                  <h4 class=\"card-title\">How To Stop Time</h4>\n                                  <p class=\"card-text\">Matt Haig<br>\n                                 Price:&#x20b9;250.00</p>\n                                 \n                                </div>\n                              </div>\n                            </div>\n                              </div>\n                       </div>\n                       <div class=\"col-ss\">\n                          <div class=\"container\"><br><br>\n                         <div class=\"container\"><br><br>\n                                <div class=\"card\" style=\"width:200px\">\n                           <!-- <img class=\"card-img-top\" src=\"../assets/untold.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">-->\n  \n                           <div class=\"container\">\n                            <!-- Trigger the modal with a button -->\n                            <img data-toggle=\"modal\" data-target=\"#myModal11\" class=\"card-img-top\"  src=\"../assets/untold.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n                          \n                            <!-- Modal -->\n                            <div class=\"modal fade\" id=\"myModal11\" role=\"dialog\">\n                              <div class=\"modal-dialog\">\n                              \n                                <!-- Modal content-->\n                                <div class=\"modal-content\">\n                                  <div class=\"modal-header\">\n                                      <h2>Love stories</h2>\n                                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                                  </div>\n                          \n                          \n                                  <div class=\"modal-body\">\n                                    \n                                      <img src=\"assets\\untold.jpg\">\n                                      <div class=\"side\">\n                                          <h3>The Untold Love Stories</h3>\n                                          <h6>By : Ajitabh Bose</h6><br>\n                                          <input type=\"text\" value=\"&#x20b9;200.00\" disabled #price>\n                                  \n                                          <h5>Ratings </h5>\n                                          <span class=\"fa fa-star checked\"></span>\n                                          <span class=\"fa fa-star checked\"></span>\n                                          <span class=\"fa fa-star checked\"></span>\n                                          <span class=\"fa fa-star\"></span>\n                                          <span class=\"fa fa-star\"></span><br><br>\n                                  \n                                          <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                                          \n                                         <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                                         <h5>Description :</h5> <p>The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!</p><br><br>\n                                  \n                                         <hr>\n                                  \n                                         <h5>Reviews : </h5><br>\n                                         <h6>Karthik Bhandary</h6>\n                                         <span class=\"fa fa-star checked\"></span>\n                                         <span class=\"fa fa-star checked\"></span>\n                                         <span class=\"fa fa-star checked\"></span>\n                                         <span class=\"fa fa-star checked\"></span>\n                                         <span class=\"fa fa-star checked\"></span><br>\n                                         <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                                        </div>\n                                        </div>\n                          \n                                  </div>\n                                </div>\n                                </div>\n                                </div>\n  \n                                <div class=\"card-body\">\n                                  <h4 class=\"card-title\">The Untold Love Stories</h4>\n                                  <p class=\"card-text\">Ajitabh Bose<br>\n                                 Price:&#x20b9;200.00</p>\n                                 \n                                </div>\n                              </div>\n                            </div>\n                              </div>\n                            </div>\n                            </div>\n  \n<!--=====================================================HEALTH & BEAUTY==============================-->  \n  <div class=\"row\">\n                      <div class=\"col-ss\">\n                    <div class=\"container\">\n                      <h2>health &</h2>\n                      <h2>beauty</h2>\n                      <div class=\"container\"><br>\n                        <div class=\"card\" style=\"width:200px\">\n                         <!-- <img class=\"card-img-top\" src=\"../assets/eating.jpg\" alt=\"Card image\" style=\"width:100%\"id=\"img1\"> -->\n  \n                         <div class=\"container\">\n                          <!-- Trigger the modal with a button -->\n                          <img data-toggle=\"modal\" data-target=\"#myModal12\" class=\"card-img-top\"  src=\"../assets/eating.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n                        \n                          <!-- Modal -->\n                          <div class=\"modal fade\" id=\"myModal12\" role=\"dialog\">\n                            <div class=\"modal-dialog\">\n                            \n                              <!-- Modal content-->\n                              <div class=\"modal-content\">\n                                <div class=\"modal-header\">\n                                    <h2>health & beauty</h2>\n                                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                                </div>\n                        \n                        \n                                <div class=\"modal-body\">\n                                  \n                                    <img src=\"assets\\eating.jpg\">\n                                    <div class=\"side\">\n                                        <h3>Eating For Beauty</h3>\n                                        <h6>By : David Wolfe</h6><br>\n                                        <input type=\"text\" value=\"&#x20b9;300.00\" disabled #price>\n                                \n                                        <h5>Ratings </h5>\n                                        <span class=\"fa fa-star checked\"></span>\n                                        <span class=\"fa fa-star checked\"></span>\n                                        <span class=\"fa fa-star checked\"></span>\n                                        <span class=\"fa fa-star\"></span>\n                                        <span class=\"fa fa-star\"></span><br><br>\n                                \n                                        <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                                        \n                                       <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                                       <h5>Description :</h5> <p>The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!</p><br><br>\n                                \n                                       <hr>\n                                \n                                       <h5>Reviews : </h5><br>\n                                       <h6>Karthik Bhandary</h6>\n                                       <span class=\"fa fa-star checked\"></span>\n                                       <span class=\"fa fa-star checked\"></span>\n                                       <span class=\"fa fa-star checked\"></span>\n                                       <span class=\"fa fa-star checked\"></span>\n                                       <span class=\"fa fa-star checked\"></span><br>\n                                       <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                                      </div>\n                                      </div>\n                        \n                                </div>\n                              </div>\n                              </div>\n                              </div>\n  \n                          <div class=\"card-body\">\n                            <h4 class=\"card-title\">Eating For Beauty </h4>\n                            <p class=\"card-text\">David Wolfe<br>\n                           Price:&#x20b9;300.00</p>\n                           \n                          </div>\n                        </div>\n                      </div>\n                        </div>\n                     </div>\n                      <div class=\"col-ss\">\n                          <div class=\"container\"><br><br>\n                            <div class=\"container\"><br><br>\n                              <div class=\"card\" style=\"width:200px\">\n                               <!-- <img class=\"card-img-top\" src=\"../assets/diet.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\"> -->\n  \n                               <div class=\"container\">\n                                <!-- Trigger the modal with a button -->\n                                <img data-toggle=\"modal\" data-target=\"#myModal13\" class=\"card-img-top\"  src=\"../assets/diet.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n                              \n                                <!-- Modal -->\n                                <div class=\"modal fade\" id=\"myModal13\" role=\"dialog\">\n                                  <div class=\"modal-dialog\">\n                                  \n                                    <!-- Modal content-->\n                                    <div class=\"modal-content\">\n                                      <div class=\"modal-header\">\n                                          <h2>health & beauty</h2>\n                                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                                      </div>\n                              \n                              \n                                      <div class=\"modal-body\">\n                                        \n                                          <img src=\"assets\\diet.jpg\">\n                                          <div class=\"side\">\n                                              <h3>Perfect Health Diet</h3>\n                                              <h6>By : Paul Jammet ph.d</h6><br>\n                                              <input type=\"text\" value=\"&#x20b9;500.00\" disabled #price>\n                                      \n                                              <h5>Ratings </h5>\n                                              <span class=\"fa fa-star checked\"></span>\n                                              <span class=\"fa fa-star checked\"></span>\n                                              <span class=\"fa fa-star checked\"></span>\n                                              <span class=\"fa fa-star\"></span>\n                                              <span class=\"fa fa-star\"></span><br><br>\n                                      \n                                              <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                                              \n                                             <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                                             <h5>Description :</h5> <p>The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!</p><br><br>\n                                      \n                                             <hr>\n                                      \n                                             <h5>Reviews : </h5><br>\n                                             <h6>Karthik Bhandary</h6>\n                                             <span class=\"fa fa-star checked\"></span>\n                                             <span class=\"fa fa-star checked\"></span>\n                                             <span class=\"fa fa-star checked\"></span>\n                                             <span class=\"fa fa-star checked\"></span>\n                                             <span class=\"fa fa-star checked\"></span><br>\n                                             <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                                            </div>\n                                            </div>\n                              \n                                      </div>\n                                    </div>\n                                    </div>\n                                    </div>\n  \n                                <div class=\"card-body\">\n                                  <h4 class=\"card-title\">Perfect Health Diet</h4>\n                                  <p class=\"card-text\">Paul Jammet ph.d<br>\n                                  Price:&#x20b9;500.00</p>\n                                </div>\n                              </div>\n                            </div>\n                              </div>  \n                            </div>\n                            <div class=\"col-ss\">\n                                <div class=\"container\"><br><br>\n                                  <div class=\"container\"><br><br>\n                                    <div class=\"card\" style=\"width:200px\">\n                                    <!--  <img class=\"card-img-top\" src=\"../assets/plant.jpg\" alt=\"Card image\" style=\"width:100%\"id=\"img1\"> -->\n  \n                                    <div class=\"container\">\n                                      <!-- Trigger the modal with a button -->\n                                      <img data-toggle=\"modal\" data-target=\"#myModal14\" class=\"card-img-top\"  src=\"../assets/plant.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n                                    \n                                      <!-- Modal -->\n                                      <div class=\"modal fade\" id=\"myModal14\" role=\"dialog\">\n                                        <div class=\"modal-dialog\">\n                                        \n                                          <!-- Modal content-->\n                                          <div class=\"modal-content\">\n                                            <div class=\"modal-header\">\n                                                <h2>health & beauty</h2>\n                                              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                                            </div>\n                                    \n                                    \n                                            <div class=\"modal-body\">\n                                              \n                                                <img src=\"assets\\plant.jpg\">\n                                                <div class=\"side\">\n                                                    <h3>Plant Powered</h3>\n                                                    <h6>By : Vegan</h6><br>\n                                                    <input type=\"text\" value=\"&#x20b9;400.00\" disabled #price>\n                                            \n                                                    <h5>Ratings </h5>\n                                                    <span class=\"fa fa-star checked\"></span>\n                                                    <span class=\"fa fa-star checked\"></span>\n                                                    <span class=\"fa fa-star checked\"></span>\n                                                    <span class=\"fa fa-star\"></span>\n                                                    <span class=\"fa fa-star\"></span><br><br>\n                                            \n                                                    <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                                                    \n                                                   <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                                                   <h5>Description :</h5> <p>The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!</p><br><br>\n                                            \n                                                   <hr>\n                                            \n                                                   <h5>Reviews : </h5><br>\n                                                   <h6>Karthik Bhandary</h6>\n                                                   <span class=\"fa fa-star checked\"></span>\n                                                   <span class=\"fa fa-star checked\"></span>\n                                                   <span class=\"fa fa-star checked\"></span>\n                                                   <span class=\"fa fa-star checked\"></span>\n                                                   <span class=\"fa fa-star checked\"></span><br>\n                                                   <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                                                  </div>\n                                                  </div>\n                                    \n                                            </div>\n                                          </div>\n                                          </div>\n                                          </div>\n  \n                                      <div class=\"card-body\">\n                                        <h4 class=\"card-title\">Plant Powered</h4>\n                                        <p class=\"card-text\">Vegan<br>\n                                        Price:&#x20b9;400.00</p>\n                                       \n                                      </div>\n                                    </div>\n                                  </div>\n                                    </div>\n                            </div>\n                             <div class=\"col-ss\">\n                                <div class=\"container\"><br><br>\n                               <div class=\"container\"><br><br>\n                                      <div class=\"card\" style=\"width:200px\">\n                                 <!-- <img class=\"card-img-top\" src=\"../assets/beauty.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\"> -->\n  \n                                 <div class=\"container\">\n                                  <!-- Trigger the modal with a button -->\n                                  <img data-toggle=\"modal\" data-target=\"#myModal15\" class=\"card-img-top\"  src=\"../assets/beauty.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n                                \n                                  <!-- Modal -->\n                                  <div class=\"modal fade\" id=\"myModal15\" role=\"dialog\">\n                                    <div class=\"modal-dialog\">\n                                    \n                                      <!-- Modal content-->\n                                      <div class=\"modal-content\">\n                                        <div class=\"modal-header\">\n                                            <h2>health & beauty</h2>\n                                          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                                        </div>\n                                \n                                \n                                        <div class=\"modal-body\">\n                                          \n                                            <img src=\"assets\\beauty.jpg\">\n                                            <div class=\"side\">\n                                                <h3>Feel Great</h3>\n                                                <h6>By : Paige T.simson</h6><br>\n                                                <input type=\"text\" value=\"&#x20b9;450.00\" disabled #price>\n                                        \n                                                <h5>Ratings </h5>\n                                                <span class=\"fa fa-star checked\"></span>\n                                                <span class=\"fa fa-star checked\"></span>\n                                                <span class=\"fa fa-star checked\"></span>\n                                                <span class=\"fa fa-star\"></span>\n                                                <span class=\"fa fa-star\"></span><br><br>\n                                        \n                                                <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                                                \n                                               <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                                               <h5>Description :</h5> <p>The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!</p><br><br>\n                                        \n                                               <hr>\n                                        \n                                               <h5>Reviews : </h5><br>\n                                               <h6>Karthik Bhandary</h6>\n                                               <span class=\"fa fa-star checked\"></span>\n                                               <span class=\"fa fa-star checked\"></span>\n                                               <span class=\"fa fa-star checked\"></span>\n                                               <span class=\"fa fa-star checked\"></span>\n                                               <span class=\"fa fa-star checked\"></span><br>\n                                               <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                                              </div>\n                                              </div>\n                                \n                                        </div>\n                                      </div>\n                                      </div>\n                                      </div>\n  \n                                      <div class=\"card-body\">\n                                        <h4 class=\"card-title\">Feel Great</h4>\n                                        <p class=\"card-text\">Paige T.simson<br>\n                                        Price:&#x20b9;450.00</p>\n                                       \n                                      </div>\n                                    </div>\n                                  </div>\n                                    </div>\n                                  </div>\n                                  </div>\n\n<!--================================================HORROR=======================================-->\n     <div class=\"row\">\n                            <div class=\"col-ss\">\n                          <div class=\"container\">\n                            <h2>Horror</h2>\n                            <div class=\"container\"><br><br>\n                              <div class=\"card\" style=\"width:200px\">\n                            <!--    <img class=\"card-img-top\" src=\"../assets/it-original.jpeg\" alt=\"Card image\" style=\"width:100%\"id=\"img1\">-->\n  \n                            <div class=\"container\">\n                              <!-- Trigger the modal with a button -->\n                              <img data-toggle=\"modal\" data-target=\"#myModal16\" class=\"card-img-top\"  src=\"../assets/it-original.jpeg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n                            \n                              <!-- Modal -->\n                              <div class=\"modal fade\" id=\"myModal16\" role=\"dialog\">\n                                <div class=\"modal-dialog\">\n                                \n                                  <!-- Modal content-->\n                                  <div class=\"modal-content\">\n                                    <div class=\"modal-header\">\n                                        <h2>Horror</h2>\n                                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                                    </div>\n                            \n                            \n                                    <div class=\"modal-body\">\n                                      \n                                        <img src=\"assets\\it-original.jpeg\">\n                                        <div class=\"side\">\n                                            <h3>IT</h3>\n                                            <h6>By : Stephen King</h6><br>\n                                            <input type=\"text\" value=\"&#x20b9;350.00\" disabled #price>\n                                    \n                                            <h5>Ratings </h5>\n                                            <span class=\"fa fa-star checked\"></span>\n                                            <span class=\"fa fa-star checked\"></span>\n                                            <span class=\"fa fa-star checked\"></span>\n                                            <span class=\"fa fa-star\"></span>\n                                            <span class=\"fa fa-star\"></span><br><br>\n                                    \n                                            <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                                            \n                                           <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                                           <h5>Description :</h5> <p>The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!</p><br><br>\n                                    \n                                           <hr>\n                                    \n                                           <h5>Reviews : </h5><br>\n                                           <h6>Karthik Bhandary</h6>\n                                           <span class=\"fa fa-star checked\"></span>\n                                           <span class=\"fa fa-star checked\"></span>\n                                           <span class=\"fa fa-star checked\"></span>\n                                           <span class=\"fa fa-star checked\"></span>\n                                           <span class=\"fa fa-star checked\"></span><br>\n                                           <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                                          </div>\n                                          </div>\n                            \n                                    </div>\n                                  </div>\n                                  </div>\n                                  </div>\n  \n                                <div class=\"card-body\">\n                                  <h4 class=\"card-title\">IT</h4>\n                                  <p class=\"card-text\">Stephen King<br>\n                                  Price:&#x20b9;350.00</p>\n                                 </div>\n                              </div>\n                            </div>\n                              </div>\n                           </div>\n                            <div class=\"col-ss\">\n                                <div class=\"container\"><br><br>\n                                  <div class=\"container\"><br><br>\n                                    <div class=\"card\" style=\"width:200px\">\n                                     <!-- <img class=\"card-img-top\" src=\"../assets/imgaa.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">-->\n  \n                                     <div class=\"container\">\n                                      <!-- Trigger the modal with a button -->\n                                      <img data-toggle=\"modal\" data-target=\"#myModal17\" class=\"card-img-top\"  src=\"../assets/imgaa.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n                                    \n                                      <!-- Modal -->\n                                      <div class=\"modal fade\" id=\"myModal17\" role=\"dialog\">\n                                        <div class=\"modal-dialog\">\n                                        \n                                          <!-- Modal content-->\n                                          <div class=\"modal-content\">\n                                            <div class=\"modal-header\">\n                                                <h2>Horror</h2>\n                                              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                                            </div>\n                                    \n                                    \n                                            <div class=\"modal-body\">\n                                              \n                                                <img src=\"assets\\imgaa.jpg\">\n                                                <div class=\"side\">\n                                                    <h3>Dracula</h3>\n                                                    <h6>By : Bram stoker</h6><br>\n                                                    <input type=\"text\" value=\"&#x20b9;300.00\" disabled #price>\n                                            \n                                                    <h5>Ratings </h5>\n                                                    <span class=\"fa fa-star checked\"></span>\n                                                    <span class=\"fa fa-star checked\"></span>\n                                                    <span class=\"fa fa-star checked\"></span>\n                                                    <span class=\"fa fa-star\"></span>\n                                                    <span class=\"fa fa-star\"></span><br><br>\n                                            \n                                                    <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                                                    \n                                                   <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                                                   <h5>Description :</h5> <p>The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!</p><br><br>\n                                            \n                                                   <hr>\n                                            \n                                                   <h5>Reviews : </h5><br>\n                                                   <h6>Karthik Bhandary</h6>\n                                                   <span class=\"fa fa-star checked\"></span>\n                                                   <span class=\"fa fa-star checked\"></span>\n                                                   <span class=\"fa fa-star checked\"></span>\n                                                   <span class=\"fa fa-star checked\"></span>\n                                                   <span class=\"fa fa-star checked\"></span><br>\n                                                   <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                                                  </div>\n                                                  </div>\n                                    \n                                            </div>\n                                          </div>\n                                          </div>\n                                          </div>\n  \n                                          \n                                      <div class=\"card-body\">\n                                        <h4 class=\"card-title\">Dracula</h4>\n                                        <p class=\"card-text\">Bram stoker<br>\n                                        Price:&#x20b9;300.00</p>\n                                      </div>\n                                    </div>\n                                  </div>\n                                    </div>  \n                                  </div>\n                                  <div class=\"col-ss\">\n                                      <div class=\"container\"><br><br>\n                                        <div class=\"container\"><br><br>\n                                          <div class=\"card\" style=\"width:200px\">\n                                            <!--<img class=\"card-img-top\" src=\"../assets/jumbies.jpg\" alt=\"Card image\" style=\"width:100%\"id=\"img1\">-->\n  \n                                            <div class=\"container\">\n                                              <!-- Trigger the modal with a button -->\n                                              <img data-toggle=\"modal\" data-target=\"#myModal18\" class=\"card-img-top\"  src=\"../assets/jumbies.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n                                            \n                                              <!-- Modal -->\n                                              <div class=\"modal fade\" id=\"myModal18\" role=\"dialog\">\n                                                <div class=\"modal-dialog\">\n                                                \n                                                  <!-- Modal content-->\n                                                  <div class=\"modal-content\">\n                                                    <div class=\"modal-header\">\n                                                        <h2>Horror</h2>\n                                                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                                                    </div>\n                                            \n                                            \n                                                    <div class=\"modal-body\">\n                                                      \n                                                        <img src=\"assets\\jumbies.jpg\">\n                                                        <div class=\"side\">\n                                                            <h3>The Jumbies</h3>\n                                                            <h6>By : Tracey Baptiste</h6><br>\n                                                            <input type=\"text\" value=\"&#x20b9;350.00\" disabled #price>\n                                                    \n                                                            <h5>Ratings </h5>\n                                                            <span class=\"fa fa-star checked\"></span>\n                                                            <span class=\"fa fa-star checked\"></span>\n                                                            <span class=\"fa fa-star checked\"></span>\n                                                            <span class=\"fa fa-star\"></span>\n                                                            <span class=\"fa fa-star\"></span><br><br>\n                                                    \n                                                            <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"assets\\buy.JPG\" alt=\"buy now\"><br><br>\n                                                            \n                                                           <h5>E-Book </h5> &nbsp; <a href=\"assets\\PART 4 harry potter the goblet of fire .pdf\"><img src=\"assets\\pdf.png\"></a><br><br>\n                                                           <h5>Description :</h5> <p>The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!</p><br><br>\n                                                    \n                                                           <hr>\n                                                    \n                                                           <h5>Reviews : </h5><br>\n                                                           <h6>Karthik Bhandary</h6>\n                                                           <span class=\"fa fa-star checked\"></span>\n                                                           <span class=\"fa fa-star checked\"></span>\n                                                           <span class=\"fa fa-star checked\"></span>\n                                                           <span class=\"fa fa-star checked\"></span>\n                                                           <span class=\"fa fa-star checked\"></span><br>\n                                                           <p>Great Book!!!!!!!!!!!!!!!!!!</p>\n                                                          </div>\n                                                          </div>\n                                            \n                                                    </div>\n                                                  </div>\n                                                  </div>\n                                                  </div>\n  \n                                                  \n                                            <div class=\"card-body\">\n                                              <h4 class=\"card-title\">The Jumbies</h4>\n                                              <p class=\"card-text\">Tracey Baptiste<br>\n                                              Price:&#x20b9;350.00</p>\n                                             \n                                            </div>\n                                          </div>\n                                        </div>\n                                          </div>\n                                   </div>\n                                   <div class=\"col-ss\">\n                                      <div class=\"container\"><br><br>\n                                     <div class=\"container\"><br><br>\n                                            <div class=\"card\" style=\"width:200px\">\n                                       <!-- <img class=\"card-img-top\" src=\"../assets/house.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\"> -->\n  \n                                       \n                                       <div class=\"container\">\n                                        <!-- Trigger the modal with a button -->\n                                        <img data-toggle=\"modal\" data-target=\"#myModal19\" class=\"card-img-top\"  src=\"../assets/house.jpg\" alt=\"Card image\" style=\"width:100%\" id=\"img1\">\n                                      \n                                        <!-- Modal -->\n                                        <div class=\"modal fade\" id=\"myModal19\" role=\"dialog\">\n                                          <div class=\"modal-dialog\">\n                                          \n                                            <!-- Modal content-->\n                                            <div class=\"modal-content\">\n                                              <div class=\"modal-header\">\n                                                  <h2>Horror</h2>\n                                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                                              </div>\n                                      \n                                      \n                                              <div class=\"modal-body\">\n                                                \n                                                  <img src=\"assets\\house.jpg\">\n                                                  <div class=\"side\">\n                                                      <h3>House of Fear</h3>\n                                                      <h6>By : Jonathan Oliver</h6><br>\n                                                      <input type=\"text\" value=\"&#x20b9;450.00\" disabled #price>\n                                              \n                                                      <h5>Ratings </h5>\n                                                      <span class=\"fa fa-star checked\"></span>\n                                                      <span class=\"fa fa-star checked\"></span>\n                                                      <span class=\"fa fa-star checked\"></span>\n                                                      <span class=\"fa fa-star\"></span>\n                                                      <span class=\"fa fa-star\"></span><br><br>\n                                              \n                                                      <input (click)=\"submit(price.value)\" class=\"submit\" type=\"image\" name=\"submit\" src=\"../assets/buy.JPG\" alt=\"buy now\"><br><br>\n                                                      \n                                                     <h5>E-Book </h5> &nbsp; <a href=\"../assets/PART 4 harry potter the goblet of fire .pdf\"><img src=\"../assets/pdf.png\"></a><br><br>\n                                                     <h5>Description :</h5> <p>The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!</p><br><br>\n                                              \n                                                     <hr>\n                                              \n                                                     <h5>Reviews : </h5><br>\n                                                     <h6>Karthik Bhandary</h6>\n                                                     <span class=\"fa fa-star checked\"></span>\n                                                     <span class=\"fa fa-star checked\"></span>\n                                                     <span class=\"fa fa-star checked\"></span>\n                                                     <span class=\"fa fa-star checked\"></span>\n                                                     <span class=\"fa fa-star checked\"></span><br>\n                                                     <p>Great Book!!!!!!!!!!!!!!!!</p>\n                                                    </div>\n                                                    </div>\n                                      \n                                              </div>\n                                            </div>\n                                            </div>\n                                            </div>\n  \n                                            <div class=\"card-body\">\n                                              <h4 class=\"card-title\">House of Fear</h4>\n                                              <p class=\"card-text\">Jonathan Oliver<br>\n                                              Price:&#x20b9;450.00</p>\n                                             \n                                            </div>\n                                          </div>\n                                        </div>\n                                          </div>\n                                      \n                                          \n                                        </div>\n<!--                                      \n<app-footer></app-footer>\n-->"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signin{\r\n    text-align: center;\r\n    border: 1px solid;\r\n    border-radius: 45px;\r\n    opacity:0.8;\r\n    background-color: rgb(187, 158, 104);\r\n    width:35%;\r\n    margin-left:32% ;\r\n    font-weight: bold;\r\n    font-size: 110%;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif\r\n}\r\ninput[type=text],input[type=number],input[type=email],input[type=password] {\r\n    width: 60%;\r\n    padding: 15px 15px;\r\n    color:darkgreen;\r\n    background-color:rgb(228, 211, 188);\r\n    border-radius:15px; \r\n}\r\n.unm,.pwd,.submit\r\n{\r\n    padding: 10px;\r\n}"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-in/sign-in.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"signin\">\n    <div class=\"unm\"> \n      <span class=\"label\">User Name: </span><br><input type=\"text\" placeholder=\"User Name\" #Unm required>\n    </div>\n    <div class=\"pwd\"> \n      <span class=\"label\">Password: </span><br><input type=\"password\" placeholder=\"Password\" #pwd  required >\n    </div>\n    <div class=\"submit\"> \n      <button type=\"submit\" id=\"bt1\" (click)='pwdValidation(Unm.value,pwd.value)'>Sign In</button>\n    </div>\n  \n  </div>"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.ts ***!
  \**********************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignInComponent = /** @class */ (function () {
    function SignInComponent() {
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signup{\r\n    text-align: center;\r\n    border: 1px solid;\r\n    border-radius: 45px;\r\n    opacity:0.8;\r\n    background-color: rgb(187, 158, 104);\r\n    width:35%;\r\n    margin-left:32% ;\r\n    font-weight: bold;\r\n    font-size: 110%;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif\r\n}\r\ninput[type=text],input[type=number],input[type=email],input[type=password] {\r\n    width: 60%;\r\n    padding: 15px 15px;\r\n    color:darkgreen;\r\n    background-color:rgb(228, 211, 188);\r\n    border-radius:15px; \r\n}\r\n.fnm,.lnm,.phn1,.phn2,.Email1,.Email2,.unm,.pwd,.submit\r\n{\r\n    padding: 10px;\r\n}"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-up/sign-up.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"signup\">\n\t\t\n    <h2>SignUp here</h2>\n  \n    <div class=\"fnm\"> \n      <span class=\"label\">First Name: </span><br><input type=\"text\"  placeholder=\"First Name\" #fNM required>\n    </div>\n    <div class=\"lnm\"> \n      <span class=\"label\">Last Name: </span><br><input type=\"text\"  placeholder=\"Last Name\" #lNM required >\n    </div>\n    <div class=\"phn1\"> \n      <span class=\"label\">Phone No: </span><br><input type=\"number\"  placeholder=\"PhoneNo\" #phone1 required>\n    </div>\n    <div class=\"phn2\"> \n      <span class=\"label\">Other Phone No: </span><br><input type=\"number\" #phone2 placeholder=\"PhoneNo\">\n    </div>\n    <div class=\"Email1\"> \n      <span class=\"label\">Email: </span><br><input type=\"email\"  placeholder=\"Email\" #email1 required>\n    </div>\n    <div class=\"Email2\"> \n      <span class=\"label\">Other Email: </span><br><input type=\"email\"  placeholder=\"Email\" #email2>\n    </div>\n    <div class=\"gender\"> \n      <span class=\"label\">Gender </span><br><input type=\"radio\" value=\"Male\" name=\"Gender\" #gender checked>Male&nbsp;&nbsp;&nbsp;&nbsp;\n      <input type=\"radio\" value=\"Female\" name=\"Gender\" #gender>Female&nbsp;&nbsp;&nbsp;&nbsp;\n      <input type=\"radio\" value=\"other\" name=\"Gender\" #gender>Other\n    </div>\n    <div class=\"unm\"> \n      <span class=\"label\">User Name: </span><br><input type=\"text\" placeholder=\"User Name\" #Unm required>\n    </div>\n    <div class=\"pwd\"> \n      <span class=\"label\">Password: </span><br><input type=\"password\" placeholder=\"Password\" #pwd  required >\n    </div>\n    <div class=\"submit\"> \n      <button type=\"submit\" id=\"bt1\" (click)='pwdValidation(Unm.value,pwd.value)'>SignUp</button>\n    </div>\n  \n  </div>"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignUpComponent = /** @class */ (function () {
    function SignUpComponent() {
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/user-account/address/address.component.css":
/*!************************************************************!*\
  !*** ./src/app/user-account/address/address.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\ndiv\r\n{\r\n    border: 1px solid gray;\r\n}\r\n*/\r\n#mainAddress\r\n{\r\n    width: 100%;\r\n    background-color: rgba(0, 0, 0, 0.329);\r\n}\r\n#addressContainer\r\n{\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n#addressRow \r\n{\r\n    width: 50%;\r\n    height: 100%;\r\n    color: whitesmoke;\r\n    font-weight: 450;\r\n    text-shadow: 2px 2px 10px gray;\r\n    display: inline-block;\r\n}\r\n#updateAddress\r\n{\r\n    width: 50%;\r\n    height: 100%;\r\n    display: inline-block;\r\n    text-align: center;\r\n}\r\n.fieldContainer\r\n{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n.fieldElement\r\n{\r\n    flex: 40%;\r\n}\r\nbody {font-family: Arial, Helvetica, sans-serif;}\r\n* {box-sizing: border-box;}\r\n/* Button used to open the contact form - fixed at the bottom of the page */\r\n.open-button {\r\n  background-color: rgba(7, 15, 124, 0.801);\r\n  color: white;\r\n  padding: 16px 20px;\r\n  border: none;\r\n  cursor: pointer;\r\n  opacity: 0.8;\r\n}\r\n/* The popup form - hidden by default */\r\n.form-popup {\r\n    width: 75%;\r\n    margin-left: 12.5%;\r\n  display: inline-block;\r\n  border: 3px solid #f1f1f1;\r\n}\r\n/* Add styles to the form container */\r\n.form-container {\r\n  background-color: white;\r\n}\r\n/* Full-width input fields */\r\n.form-container input[type=text]\r\n{\r\n  width: 100%;\r\n  padding: 10px;\r\n  border: none;\r\n  background: #f1f1f1;\r\n}\r\n/* When the inputs get focus, do something */\r\n.form-container input[type=text]:focus\r\n{\r\n  background-color: #ddd;\r\n  outline: none;\r\n}\r\n/* Set a style for the submit/login button */\r\n.form-container .btn {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 16px 20px;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  margin-bottom:10px;\r\n  opacity: 0.8;\r\n}\r\n/* Add a red background color to the cancel button */\r\n.form-container .cancel {\r\n  background-color: red;\r\n}\r\n/* Add some hover effects to buttons */\r\n.form-container .btn:hover, .open-button:hover {\r\n  opacity: 1;\r\n}\r\n/*\r\n#addressContainer\r\n{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.addressRow\r\n{\r\n    flex:auto;\r\n}\r\n\r\n.tempStyle\r\n{\r\n    background-color: grey;\r\n    height: 200px;\r\n}\r\n\r\n#addNewAddress\r\n{\r\n    width: 20%;\r\n}\r\n*/"

/***/ }),

/***/ "./src/app/user-account/address/address.component.html":
/*!*************************************************************!*\
  !*** ./src/app/user-account/address/address.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"mainAddress\">\n    <label for=\"addressContainer\" style=\"font-size:20px; color: whitesmoke; text-shadow: 2px 2px 10px black;\">\n        <b>Your Address</b>\n    </label>\n    <div id=\"addressContainer\">                                               <!--============================ADDRESS DISPLAY BOX===============================-->\n        <div id=\"addressRow\">\n                <p [innerText]=\"userName\"></p>\n                <p [innerText]=\"userAddress1\"></p>\n                <p [innerText]=\"userAddress2\"></p>\n                <p [innerText]=\"userAddress3\"></p>\n                <p [innerText]=\"userAddress4\"></p>\n                <p [innerText]=\"userAddressPIN\"></p>\n                <button class=\"open-button\" (click)=\"openForm()\">Edit</button>\n        </div>\n\n        <div id=\"updateAddress\">\n                <div class=\"form-popup form-container\" id=\"myForm\" [style.display]=\"frmDsplay\">\n                    <h3>Edit Address</h3>\n                    <div class=\"fieldContainer\">                            <!--============================EDIT - NAME===============================-->\n                        <div class=\"fieldElement\">\n                                <label for=\"uName\"><b>Name : </b></label>\n                        </div>\n                        <div class=\"fieldElement\">\n                                <input type=\"text\" [value]=\"userName\" id=\"uName\" #editUserName required >\n                        </div>\n                   </div>\n                   <div class=\"fieldContainer\">                            <!--============================EDIT - ADDRESS LINE 1===============================-->\n                        <div class=\"fieldElement\">\n                                <label for=\"uAdrsLine1\"><b>Address Line 1 : </b></label>\n                        </div>\n                        <div class=\"fieldElement\">\n                                <input type=\"text\" [value]=\"userAddress1\" id=\"uAdrsLine1\" #editAdrsLine1 required >\n                        </div>\n                   </div>\n                   <div class=\"fieldContainer\">                            <!--============================EDIT - ADDRESS LINE 2===============================-->\n                        <div class=\"fieldElement\">\n                                <label for=\"uAdrsLine1\"><b>Address Line 2 : </b></label>\n                        </div>\n                        <div class=\"fieldElement\">\n                                <input type=\"text\" [value]=\"userAddress2\" id=\"uAdrsLine2\" #editAdrsLine2 required >\n                        </div>\n                   </div>\n                   <div class=\"fieldContainer\">                            <!--============================EDIT - ADDRESS LINE 3===============================-->\n                        <div class=\"fieldElement\">\n                                <label for=\"uAdrsLine1\"><b>Address Line 3 : </b></label>\n                        </div>\n                        <div class=\"fieldElement\">\n                                <input type=\"text\" [value]=\"userAddress3\" id=\"uAdrsLine3\" #editAdrsLine3 required >\n                        </div>\n                   </div>\n                   <div class=\"fieldContainer\">                            <!--============================EDIT - ADDRESS LINE 4===============================-->\n                        <div class=\"fieldElement\">\n                                <label for=\"uAdrsLine1\"><b>Address Line 4 : </b></label>\n                        </div>\n                        <div class=\"fieldElement\">\n                                <input type=\"text\" [value]=\"userAddress4\" id=\"uAdrsLine4\" #editAdrsLine4 required >\n                        </div>\n                   </div>\n                   <div class=\"fieldContainer\">                            <!--============================EDIT - ADDRESS PIN===============================-->\n                        <div class=\"fieldElement\">\n                                <label for=\"uAdrsPIN\"><b>PIN : </b></label>\n                        </div>\n                        <div class=\"fieldElement\">\n                                <input type=\"text\" [value]=\"userAddressPIN\" id=\"uAdrsPIN\" #editAdrsPIN required>\n                        </div>\n                   </div>\n\n                   <button type=\"submit\" class=\"btn\" (click)=\"updateAddress(\n                                                                    editUserName.value,\n                                                                    editAdrsLine1.value,\n                                                                    editAdrsLine2.value, \n                                                                    editAdrsLine3.value, \n                                                                    editAdrsLine4.value,\n                                                                    editAdrsPIN.value \n                                                                            )\">Submit</button>\n\n                      <button type=\"button\" class=\"btn cancel\" (click)=\"closeForm()\">Close</button>\n                </div>\n        </div>\n    </div>\n</div>\n\n\n            <!--\n            <div class=\"addressRow\" id=\"editAddress\" >\n                <label for=\"addName\">User Name : </label>\n                    <input type=\"text\" [value]=\"userName\" id=\"addName\" #uName/><br/>\n                    <div>\n                        <label for=\"addLine1\">Address Line-1 : </label>\n                            <input type=\"text\" [value]=\"userAddress1\" id=\"addLine1\" #uAddress1/><br/>\n                        <label for=\"addLine2\">Address Line-2 : </label>\n                            <input type=\"text\" [value]=\"userAddress2\" id=\"addLine2\" #uAddress2/><br/>\n                        <label for=\"addLine3\">Address Line-3 : </label>\n                            <input type=\"text\" [value]=\"userAddress3\" id=\"addLine3\" #uAddress3/><br/>\n                        <label for=\"addLine4\">Address Line-4 : </label>\n                            <input type=\"text\" [value]=\"userAddress4\" id=\"addLine4\" #uAddress3/><br/>\n                        <label for=\"addPIN\">PIN : </label>\n                            <input type=\"number\" [value]=\"userAddressPIN\" id=\"addPIN\" #uAddressPIN/><br/>\n                    </div>\n            </div>\n            \n            <div class=\"addressRow\">\n                <p [innerText]=\"userName\"></p>\n                <p [innerText]=\"userAddress1\"></p>\n                <p [innerText]=\"userAddress2\"></p>\n                <p [innerText]=\"userAddress3\"></p>\n                <p [innerText]=\"userAddress4\"></p>\n                <p [innerText]=\"userAddressPIN\"></p>\n                \n                <input type=\"text\" [disabled]=\"isDisabled\" [value]=\"userName\" #uName/><br/>\n                <div>\n                    <input type=\"text\" [disabled]=\"isDisabled\" [value]=\"userAddress1\" #uAddress1/><br/>\n                    <input type=\"text\" [disabled]=\"isDisabled\" [value]=\"userAddress2\" #uAddress2/><br/>\n                    <input type=\"text\" [disabled]=\"isDisabled\" [value]=\"userAddress3\" #uAddress3/><br/>\n                    <input type=\"text\" [disabled]=\"isDisabled\" [value]=\"userAddress4\" #uAddress3/><br/>\n                    <input type=\"number\" [disabled]=\"isDisabled\" [value]=\"userAddressPIN\" #uAddressPIN/><br/>\n                </div>\n                \n            </div>\n           <button (click)=\"editAddress()\">Edit</button> -->\n"

/***/ }),

/***/ "./src/app/user-account/address/address.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user-account/address/address.component.ts ***!
  \***********************************************************/
/*! exports provided: AddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressComponent", function() { return AddressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddressComponent = /** @class */ (function () {
    /*
    showAddress()
    {
      this.generateHTML = this.generateHTML + `
      <div class="addressRow" style="background-color:grey; height:200px;">
            <input type="text" [disabled]="isDisabled" [value]="userName" #uName/>
            <input type="text-field" [disabled]="isDisabled" [value]="userAddress" #uAddress/>
            <input type="text-field" [disabled]="isDisabled" [value]="userPhone" #uPhone/>
      Hello : ` + this.name + ' : ' + this.i++ + `
      </div>
      `
    }
    */
    function AddressComponent() {
        /*
          public generateHTML:string = "";
          public i = 0;
          public name = "Mangleshwar";
        */
        this.userName = "Mangleshwar Patel";
        this.userAddress1 = "#33,";
        this.userAddress2 = "Samanvay Nagar, Awadhpuri";
        this.userAddress3 = "P.O. : Piplani (B.H.E.L)";
        this.userAddress4 = "Bhopal, (M.P.)";
        this.userAddressPIN = "486002";
        this.userPhone = "9009217737";
        this.frmDsplay = "none";
    }
    AddressComponent.prototype.openForm = function () {
        this.frmDsplay = "block";
        document.getElementById('uName').focus();
    };
    AddressComponent.prototype.closeForm = function () {
        this.frmDsplay = "none";
    };
    AddressComponent.prototype.updateAddress = function (newUsrName, newAdrs1, newAdrs2, newAdrs3, newAdrs4, newAdrsPIN) {
        this.userName = newUsrName;
        this.userAddress1 = newAdrs1;
        this.userAddress2 = newAdrs2;
        this.userAddress3 = newAdrs3;
        this.userAddress4 = newAdrs4;
        this.userAddressPIN = newAdrsPIN;
    };
    AddressComponent.prototype.ngOnInit = function () {
    };
    AddressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-address',
            template: __webpack_require__(/*! ./address.component.html */ "./src/app/user-account/address/address.component.html"),
            styles: [__webpack_require__(/*! ./address.component.css */ "./src/app/user-account/address/address.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddressComponent);
    return AddressComponent;
}());



/***/ }),

/***/ "./src/app/user-account/details/details.component.css":
/*!************************************************************!*\
  !*** ./src/app/user-account/details/details.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".accountRow\r\n{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n#accountInfo\r\n{\r\n    background-color: rgba(0, 0, 0, 0.329);\r\n}\r\n\r\nlabel\r\n{\r\n    color: whitesmoke;\r\n    text-shadow: 2px 2px 10px black;\r\n}\r\n\r\n.accountCol\r\n{\r\n    flex: 40%;\r\n    padding: 5px;\r\n}\r\n\r\n.accountCol1\r\n{\r\n    margin-left: 80px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.subCol\r\n{\r\n    flex: 30%;\r\n}\r\n\r\n.txtAccount\r\n{\r\n    width: 100%;\r\n    box-shadow: 2px 2px 5px black;\r\n}\r\n\r\n.accountCol2\r\n{\r\n    text-align: center;\r\n}\r\n\r\n.btnAccount\r\n{\r\n    height: 25px;\r\n    width: 200px;\r\n    box-shadow: 2px 2px 5px black;\r\n}\r\n\r\n#accountInfoRow5Col12\r\n{\r\n    padding: 20px;\r\n}"

/***/ }),

/***/ "./src/app/user-account/details/details.component.html":
/*!*************************************************************!*\
  !*** ./src/app/user-account/details/details.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"accountInfo\">\n        <div class=\"accountRow\" id=\"accountInfoRow1\">             <!--==================ROW-1: User-Name==========-->\n            <div class=\"accountCol accountCol1\" id=\"accountInfoRow1Col1\">\n                    <div class=\"subCol\">\n                        <label for=\"txtUsrName\"><b>Name : </b></label>\n                    </div>\n                    <div class=\"subCol\">\n                        <input type=\"text\" [disabled]=\"isDisabled1\" [value]=\"uName\" class=\"txtAccount\" id=\"txtUsrName\"/>\n                    </div>\n            </div>\n            <div class=\"accountCol accountCol2\" id=\"accountInfoRow1Col2\">\n                    <button class=\"btnAccount\" id=\"btnName\" (click)=\"enableField1()\">Edit</button>\n            </div>\n        </div>\n        <div class=\"accountRow\" id=\"accountInfoRow2\">            <!--==================ROW-2: E-Mail==========-->\n            <div class=\"accountCol accountCol1\" id=\"accountInfoRow2Col1\">\n                    <div class=\"subCol\">\n                        <label for=\"txtUsrEmail\"><b>Email : </b></label>\n                    </div>\n                    <div class=\"subCol\">\n                        <input type=\"text\" [disabled]=\"isDisabled2\" [value]=\"uEmail\" class=\"txtAccount\" id=\"txtUsrEmail\"/>\n                    </div>\n            </div>\n            <div class=\"accountCol accountCol2\" id=\"accountInfoRow2Col2\">\n                <button class=\"btnAccount\" id=\"btnName\" (click)=\"enableField2()\">Edit</button>\n            </div>\n        </div>\n        <div class=\"accountRow\" id=\"accountInfoRow3\">            <!--==================ROW-3 : PHONE No.==========-->\n            <div class=\"accountCol accountCol1\" id=\"accountInfoRow3Col1\">\n                    <div class=\"subCol\">\n                        <label for=\"txtUsrEmail\"><b>Phone Number : </b></label>\n                    </div>\n                    <div class=\"subCol\">\n                        <input type=\"text\" [disabled]=\"isDisabled3\" [value]=\"uPhone\" class=\"txtAccount\" id=\"txtUsrPhone\"/>\n                    </div>\n            </div>\n            <div class=\"accountCol accountCol2\" id=\"accountInfoRow3Col2\">\n                <button class=\"btnAccount\" id=\"btnName\" (click)=\"enableField3()\">Edit</button>\n            </div>\n        </div>\n        <div class=\"accountRow\" id=\"accountInfoRow4\">            <!--==================ROW-4 : PASSWORD==========-->\n            <div class=\"accountCol accountCol1\" id=\"accountInfoRow4Col1\">\n                <div class=\"subCol\">\n                    <label for=\"txtUsrPswrd\"><b>Password : </b></label>\n                </div>\n                <div class=\"subCol\">\n                    <input type=\"text\" [disabled]=\"isDisabled4\" [value]=\"uPswrd\" class=\"txtAccount\" id=\"txtUsrPswrd\"/>\n                </div>\n            </div>\n            <div class=\"accountCol accountCol2\" id=\"accountInfoRow4Col2\">\n                <button class=\"btnAccount\" id=\"btnName\" (click)=\"enableField4()\">Edit</button>\n            </div>\n        </div>\n        <div class=\"accountRow\" id=\"accountInfoRow5\">            <!--==================ROW-5==========-->\n          <div class=\"accountCol accountCol2\" id=\"accountInfoRow5Col12\">\n                <button class=\"btnAccount\" id=\"btnName\" (click)=\"disableAllFields()\">Done</button>\n          </div>\n      </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user-account/details/details.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user-account/details/details.component.ts ***!
  \***********************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DetailsComponent = /** @class */ (function () {
    function DetailsComponent() {
        this.isDisabled1 = true;
        this.isDisabled2 = true;
        this.isDisabled3 = true;
        this.isDisabled4 = true;
        this.uName = "Mangleshwar Patel";
        this.uEmail = "profmangl.vlsi@gmail.com";
        this.uPhone = "9009217737";
        this.uPswrd = "***********";
    }
    DetailsComponent.prototype.enableField1 = function () {
        this.isDisabled1 = false;
    };
    DetailsComponent.prototype.enableField2 = function () {
        this.isDisabled2 = false;
    };
    DetailsComponent.prototype.enableField3 = function () {
        this.isDisabled3 = false;
    };
    DetailsComponent.prototype.enableField4 = function () {
        this.isDisabled4 = false;
    };
    DetailsComponent.prototype.disableAllFields = function () {
        this.isDisabled1 = true;
        this.isDisabled2 = true;
        this.isDisabled3 = true;
        this.isDisabled4 = true;
    };
    DetailsComponent.prototype.ngOnInit = function () {
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/user-account/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/user-account/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/user-account/orders/orders.component.css":
/*!**********************************************************!*\
  !*** ./src/app/user-account/orders/orders.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n#orderMain\r\n{\r\n    text-align: center;\r\n}\r\n*/\r\n#orderNav{\r\n    background: darkslategray;\r\n    overflow: hidden;\r\n}\r\n#orderNav ul{\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n#orderNav ul li{\r\n    float: left;\r\n}\r\n#orderNav ul li a{\r\n    text-decoration: none;\r\n    color:white;\r\n    padding: 10px 25px;\r\n    display: inline-block;\r\n    font-size: 18px;\r\n}\r\n#orderNav ul li a:hover\r\n{\r\n    color: rgb(247, 152, 152);\r\n}\r\n.orderRow\r\n{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n.orderCol\r\n{\r\n    flex: 40%;\r\n}\r\n.col1\r\n{\r\n    text-align: right;  \r\n    text-shadow: 2px 2px 5px gray;\r\n    padding: 5px;\r\n    background-color: lightgray; \r\n}\r\n.col2\r\n{\r\n    text-align: center;\r\n    text-shadow: 2px 2px 5px gray;\r\n    padding: 5px;\r\n    background-color: azure;\r\n}\r\n#orderDisplay\r\n{\r\n    text-align: center;\r\n}\r\n#orderContainer\r\n{\r\n    width: 50%;\r\n    display: inline-block;\r\n}"

/***/ }),

/***/ "./src/app/user-account/orders/orders.component.html":
/*!***********************************************************!*\
  !*** ./src/app/user-account/orders/orders.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"orderMain\">  <!--==============================Main-BOdy-->\n  <div id=\"orderNav\"> <!--================================================Navigation Bar-->\n    <ul>\n      <li><a href=\"#\">Orders</a></li>\n      <li><a href=\"#\">Successful Orders</a></li>\n      <li><a href=\"#\">Cancled Orders</a></li>\n    </ul>\n  </div>\n\n  <div id=\"orderDisplay\">\n      <div id=\"orderContainer\"> <!--===================================Order-List-->\n            <div class=\"orderRow\">  <!-- ===============================================Order-ID-->\n                <div class=\"orderCol col1\">\n                  <b>Order ID :</b> \n                </div>\n                <div class=\"orderCol col2\">\n                    {{ orderID }}\n                </div>\n            </div>\n            <div class=\"orderRow\">  <!-- ===============================================Order-Date-->\n                <div class=\"orderCol col1\">\n                  <b>Order Date :</b> \n                </div>\n                <div class=\"orderCol col2\">\n                    {{ orderDate }}\n                </div>\n            </div>\n            <div class=\"orderRow\"><!-- ===============================================Order-BookTitle-->\n                <div class=\"orderCol col1\">\n                  <b>Book Title :</b> \n                </div>\n                <div class=\"orderCol col2\">\n                    {{ orderBookTitle }}\n                </div>\n            </div>\n            <div class=\"orderRow\"><!-- ===============================================Order-BookTitle-->\n                <div class=\"orderCol col1\">\n                  <b>Delivery Status :</b> \n                </div>\n                <div class=\"orderCol col2\">\n                    {{ orderDiliveryStatus }}\n                </div>\n            </div>\n        <div class=\"orderRow\">  <!-- ===============================================Order-Delivery-Date-->\n          <div class=\"orderCol col1\">\n            <b>Delivery Date :</b> \n          </div>\n          <div class=\"orderCol col2\">\n              {{ orderDeliveryDate }}\n          </div>\n        </div>\n        <div class=\"orderRow\">  <!-- ===============================================Order-Item(s) Sub-Total -->\n          <div class=\"orderCol col1\">\n            <b>Item(s) Sub-Total :</b> \n          </div>\n          <div class=\"orderCol col2\">\n            &#8377;  {{ orderSubTotal }}\n          </div>\n        </div>\n        <div class=\"orderRow\">  <!-- ===============================================Order-Item(s) Shiping--Charges -->\n          <div class=\"orderCol col1\">\n            <b>Shiping Charges :</b> \n          </div>\n          <div class=\"orderCol col2\">\n          {{ orderShipCharge }}\n          </div>\n        </div>\n        <div class=\"orderRow\">  <!-- ===============================================Order-Item(s) Total -->\n          <div class=\"orderCol col1\">\n            <b>Total :</b>\n          </div>\n          <div class=\"orderCol col2\">\n            &#8377; {{ orderTotal }}\n          </div>\n        </div>\n        <div class=\"orderRow\">  <!-- ===============================================Order-Item(s) Promotion -->\n          <div class=\"orderCol col1\">\n            <b>Promotion Applied :</b> \n          </div>\n          <div class=\"orderCol col2\">\n          - &#8377; {{ orderPromotion }}\n          </div>\n        </div>\n        <div class=\"orderRow\">  <!-- ===============================================Order-Item(s) Grand-Total -->\n          <div class=\"orderCol col1\">\n            <b>Grand-Total :</b> \n          </div>\n          <div class=\"orderCol col2\">\n            &#8377; {{ orderGrandTotal }}\n          </div>\n        </div>\n    </div>\n  </div>\n\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/user-account/orders/orders.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/user-account/orders/orders.component.ts ***!
  \*********************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrdersComponent = /** @class */ (function () {
    function OrdersComponent() {
        this.isDisabled = true;
        this.orderID = "#123123123";
        this.orderDate = "05-10-2018";
        this.orderBookTitle = "Feel Great";
        this.orderDiliveryStatus = "Processing";
        this.orderDeliveryDate = "10-10-2015";
        this.orderSubTotal = "100.00";
        this.orderShipCharge = "free";
        this.orderTotal = "100.00";
        this.orderPromotion = "10.00";
        this.orderGrandTotal = "90.00";
    }
    OrdersComponent.prototype.ngOnInit = function () {
    };
    OrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/user-account/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/user-account/orders/orders.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/user-account/user-account.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-account/user-account.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div\r\n{\r\n    border: 1px solid gray;\r\n}\r\n\r\n* \r\n{\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody\r\n{\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    margin: 0;\r\n}\r\n\r\n#userContent\r\n{\r\n    width: 100%;\r\n}\r\n\r\n#userHead\r\n{\r\n    height: 10%;\r\n    width: 100%;\r\n    color: whitesmoke;\r\n    background-color: rgba(137, 43, 226, 0.349);\r\n    text-shadow: 2px 2px 5px black;\r\n}\r\n\r\n#heading\r\n{\r\n    font-size: 30px;\r\n}\r\n\r\n#userDashboard\r\n{\r\n    height: 90%;\r\n    width: 100%;\r\n}\r\n\r\n.userAcountNavg\r\n{\r\n    overflow: hidden;\r\n    background-color: rgba(245, 84, 84, 0.486);\r\n    border-radius: 5px;\r\n    text-shadow: 2px 2px 10px black;\t\r\n}\r\n\r\n.userAcountNavg ul\r\n{\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.userAcountNavg ul li\r\n{\r\n    float: left;\r\n}\r\n\r\n.userAcountNavg ul li a {\r\n    float: left;\r\n    display: block;\r\n    text-align: center;\r\n    color: whitesmoke;\r\n    font-size: 20px;\r\n    padding: 14px 20px;\r\n    text-decoration: none;\r\n}\r\n\r\n.userAcountNavg ul li a:hover{\r\n    background-color:rgba(240,255,200,0.5);\r\n    color: red;\r\n    border-radius: 5px;\r\n}\r\n\r\n#divUserFarme\r\n{\r\n    height: 75%;\r\n    width: 100%;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/user-account/user-account.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-account/user-account.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"userContent\">\n  <div id=\"userHead\">\n      <!--This is userHead<br> -->\n      <strong id=\"heading\">Your Account</strong>\n  </div>\n\n  <div id=\"userDashboard\">\n   <!-- This is userDashboard<br> -->\n\n        <div class=\"userAcountNavg\">\n            <ul>\n                <li><a routerLink=\"account-details\">Account Details</a></li>\n                <li><a routerLink=\"order-details\">Your Orders</a></li>\n                <li><a routerLink=\"address-details\">Your Address</a></li>\n            </ul>\n            <!--   <div class=\"optSection\">\n                        section1\n                    </div>\n                    <div class=\"optSection\">\n                        section2\n                    </div>\n                    <div class=\"optSection\">\n                        section3\n                    </div>\n                -->\n        </div>\n\n        <div id=\"divUserFarme\">\n                <hr>\n                <router-outlet></router-outlet>\n                <hr>\n              <!-- <hr>\n             <app-details></app-details>\n                <hr>\n             <app-orders></app-orders>\n                <hr>\n             <app-address></app-address>\n                <hr>\n              -->\n        </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user-account/user-account.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-account/user-account.component.ts ***!
  \********************************************************/
/*! exports provided: UserAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccountComponent", function() { return UserAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserAccountComponent = /** @class */ (function () {
    function UserAccountComponent() {
    }
    UserAccountComponent.prototype.ngOnInit = function () {
    };
    UserAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-account',
            template: __webpack_require__(/*! ./user-account.component.html */ "./src/app/user-account/user-account.component.html"),
            styles: [__webpack_require__(/*! ./user-account.component.css */ "./src/app/user-account/user-account.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserAccountComponent);
    return UserAccountComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Win7\Desktop\justRead\bookhub\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map