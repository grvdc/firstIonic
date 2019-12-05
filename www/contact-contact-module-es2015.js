(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-contact-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/contact/contact.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact/contact.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-image: url('http://wonderfulengineering.com/wp-content/uploads/2016/01/wallpaper-for-mobile-46.jpg'); width:100%;height:100%\">\n<!-- \n<ion-header>\n  <ion-toolbar>\n    <ion-title>contact us</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content > -->\n\n  \n\n\n  <!-- <ion-button shape=\"round\" color=\"primary\" fill=\"outline\" (click)=\"showBannerAd()\">Show Banner Ad</ion-button>  -->\n\n  <!-- Ionic4 Freaky Admob Example\n  <p>If you get lost, the <a target=\"_blank\" rel=\"noopener\" href=\"https://ionicframework.com/docs\">docs</a> will be your guide.</p>\n \n \n \n  \n  \n  <ion-button shape=\"round\" color=\"primary\" fill=\"outline\" (click)=\"showInterstitialAds()\">Show Interstitial Ads</ion-button>\n \n  <ion-button shape=\"round\" color=\"primary\" fill=\"outline\" (click)=\"showRewardVideoAds()\">Show Reward Video Ads</ion-button> -->\n  <ion-toggle [(ngModel)]=\"toggle\" color=\"success\"></ion-toggle>\n  <button  mat-button color=\"primary\" (click)=\" goToSecondPage()\">Go to Tabs Page</button>\n\n  <div *ngIf=\"toggle\">\n    <div row>\n      \n    </div>\n    <mat-accordion>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Personal data\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <ion-card>\n          <ion-card-header>\n            <img />\n            <ion-card-title>Title</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            Keep close to Nature's heart... and break clear away, once in awhile,\n            and climb a mountain or spend a week in the woods. Wash your spirit clean.\n          </ion-card-content>\n        </ion-card>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </div> \n<!-- </ion-content> -->\n\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.module.ts":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.module.ts ***!
  \*******************************************/
/*! exports provided: ContactPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact.page */ "./src/app/contact/contact.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/admob-free/ngx */ "./node_modules/@ionic-native/admob-free/ngx/index.js");
/* harmony import */ var _service_admobfree_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../service/admobfree.service */ "./src/app/service/admobfree.service.ts");











// import { AdmobFreeService } from './service/admobfree.service';
const routes = [
    {
        path: '',
        component: _contact_page__WEBPACK_IMPORTED_MODULE_6__["ContactPage"]
    }
];
let ContactPageModule = class ContactPageModule {
};
ContactPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
        ],
        declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_6__["ContactPage"]],
        providers: [_ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_9__["AdMobFree"],
            _service_admobfree_service__WEBPACK_IMPORTED_MODULE_10__["AdmobFreeService"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"] }]
    })
], ContactPageModule);



/***/ }),

/***/ "./src/app/contact/contact.page.scss":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/contact/contact.page.ts":
/*!*****************************************!*\
  !*** ./src/app/contact/contact.page.ts ***!
  \*****************************************/
/*! exports provided: ContactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPage", function() { return ContactPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/admob-free/ngx */ "./node_modules/@ionic-native/admob-free/ngx/index.js");
/* harmony import */ var _service_admobfree_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/admobfree.service */ "./src/app/service/admobfree.service.ts");





let ContactPage = class ContactPage {
    constructor(nav, admobFree, admobFreeService) {
        this.nav = nav;
        this.admobFree = admobFree;
        this.admobFreeService = admobFreeService;
        this.toggle = true;
    }
    ngOnInit() {
        this.admobFreeService.BannerAd();
    }
    goToSecondPage() {
        console.log("testNavControl");
        this.nav.navigateForward('/tabs');
    }
    // my Id :   App ID: ca-app-pub-5671272181774947~5211850922
    // TestIonicca-app-pub-5671272181774947~5211850922
    // TestIonsca-app-pub-5671272181774947/7905941808
    // 
    showBannerAd() {
        let bannerConfig = {
            isTesting: true,
            autoShow: true,
            id: "ca-app-pub-5671272181774947/7905941808"
        };
        this.admobFree.banner.config(bannerConfig);
        this.admobFree.banner.prepare().then(() => {
            // success
        }).catch(e => alert(e));
    }
};
ContactPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_3__["AdMobFree"] },
    { type: _service_admobfree_service__WEBPACK_IMPORTED_MODULE_4__["AdmobFreeService"] }
];
ContactPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(/*! raw-loader!./contact.page.html */ "./node_modules/raw-loader/index.js!./src/app/contact/contact.page.html"),
        styles: [__webpack_require__(/*! ./contact.page.scss */ "./src/app/contact/contact.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_3__["AdMobFree"],
        _service_admobfree_service__WEBPACK_IMPORTED_MODULE_4__["AdmobFreeService"]])
], ContactPage);



/***/ }),

/***/ "./src/app/service/admobfree.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/admobfree.service.ts ***!
  \**********************************************/
/*! exports provided: AdmobFreeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmobFreeService", function() { return AdmobFreeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/admob-free/ngx */ "./node_modules/@ionic-native/admob-free/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AdmobfreeService {
//   constructor() { }
// }
/////////////////////////////////////////////////



let AdmobFreeService = class AdmobFreeService {
    constructor(admobFree, platform) {
        this.admobFree = admobFree;
        this.platform = platform;
        //Interstitial Ad's Configurations
        this.interstitialConfig = {
            // add your config here
            // for the sake of this example we will just use the test config
            isTesting: true,
            autoShow: false,
            id: "ca-app-pub-5671272181774947/7905941808"
        };
        //Reward Video Ad's Configurations
        this.RewardVideoConfig = {
            isTesting: true,
            autoShow: false //,
            //id: "ca-app-pub-3940XXXXXXX42544/6300978111"
        };
        platform.ready().then(() => {
            // Load ad configuration
            this.admobFree.interstitial.config(this.interstitialConfig);
            //Prepare Ad to Show
            this.admobFree.interstitial.prepare()
                .then(() => {
                // alert(1);
            }).catch(e => alert(e));
            // Load ad configuration
            this.admobFree.rewardVideo.config(this.RewardVideoConfig);
            //Prepare Ad to Show
            this.admobFree.rewardVideo.prepare()
                .then(() => {
                // alert(2);
            }).catch(e => alert(e));
        });
        //Handle interstitial's close event to Prepare Ad again
        this.admobFree.on('admob.interstitial.events.CLOSE').subscribe(() => {
            this.admobFree.interstitial.prepare()
                .then(() => {
                alert("Interstitial CLOSE");
            }).catch(e => alert(e));
        });
        //Handle Reward's close event to Prepare Ad again
        this.admobFree.on('admob.rewardvideo.events.CLOSE').subscribe(() => {
            this.admobFree.rewardVideo.prepare()
                .then(() => {
                alert("Reward Video CLOSE");
            }).catch(e => alert(e));
        });
    }
    BannerAd() {
        let bannerConfig = {
            isTesting: true,
            autoShow: true,
            id: "ca-app-pub-5671272181774947/7905941808"
        };
        this.admobFree.banner.config(bannerConfig);
        this.admobFree.banner.prepare().then(() => {
            // success
        }).catch(e => alert(e));
    }
    InterstitialAd() {
        //Check if Ad is loaded
        this.admobFree.interstitial.isReady().then(() => {
            //Will show prepared Ad
            this.admobFree.interstitial.show().then(() => {
            })
                .catch(e => alert("show " + e));
        })
            .catch(e => alert("isReady " + e));
    }
    RewardVideoAd() {
        //Check if Ad is loaded
        this.admobFree.rewardVideo.isReady().then(() => {
            //Will show prepared Ad
            this.admobFree.rewardVideo.show().then(() => {
            })
                .catch(e => alert("show " + e));
        })
            .catch(e => alert("isReady " + e));
    }
};
AdmobFreeService.ctorParameters = () => [
    { type: _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_2__["AdMobFree"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
AdmobFreeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_2__["AdMobFree"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
], AdmobFreeService);



/***/ })

}]);
//# sourceMappingURL=contact-contact-module-es2015.js.map