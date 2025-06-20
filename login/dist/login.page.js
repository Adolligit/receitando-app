"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginPage = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var standalone_1 = require("@ionic/angular/standalone");
var LoginPage = /** @class */ (function () {
    function LoginPage() {
        this.router = core_1.inject(router_1.Router);
    }
    LoginPage.prototype.ngOnInit = function () { };
    LoginPage.prototype.goToMenu = function () {
        this.router.navigate(['home']);
    };
    LoginPage.prototype.goToRegister = function () {
        this.router.navigate(['register']);
    };
    LoginPage = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
            standalone: true,
            imports: [
                standalone_1.IonContent,
                standalone_1.IonHeader,
                standalone_1.IonTitle,
                standalone_1.IonToolbar,
                common_1.CommonModule,
                forms_1.FormsModule,
                standalone_1.IonInput,
                standalone_1.IonItem,
                standalone_1.IonList,
                standalone_1.IonButton,
                standalone_1.IonLabel,
            ]
        })
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
