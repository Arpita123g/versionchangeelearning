import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { GlobalService } from '../global.service';
import { SharedserviceService } from '../sharedservice.service';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
//export class AuthguardService implements CanActivateChild  {
export class AuthguardService implements CanActivate {
  islogin: boolean = false;
  username: string = "";
  password: string = "";
  useremail: string = "";
  constructor(private _router: Router,
    private _login: LoginService,
    private _alert: SnackbaralertService,
    private authenticationService: AuthenticationService,
    private _global: GlobalService,
    private sharedService: SharedserviceService) {
    this._global.islogin.subscribe((data) => {
      // this.islogin = data;
      this.islogin = authenticationService.isLoggedIn();
    });
  }
  // canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

  //   if(this.islogin){
  //     return true;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.authenticationService.isLoggedIn()) {

      this._router.navigate(['/']);

    } else {
      this._global.username.next(this.authenticationService.getUsername() || '{}');
      this._global.useremail.next(this.authenticationService.getUseremail() || '{}');
      this._global.userpassword.next(this.authenticationService.getPassword() || '{}');
      this._global.loginmode.next(this.authenticationService.getLoginmode() || '{}');
      this._global.usermode.next(this.authenticationService.getLoginmode() || '{}');
      this.sharedService.userTypeSet(this.authenticationService.getLoginmode() || '{}');
    }
    if (this.authenticationService.getFirsttimelogin() != "true") {
      this.authenticationService.setFirsttimelogin("true");
      if (this.authenticationService.getLoginmode() == "student") {
        this._router.navigate(['/auth/component/studentdashboardheader']);
      } else if (this.authenticationService.getLoginmode() == "instructor") {
        this._router.navigate(['auth/component/instructordashboard']);
      } else if (this.authenticationService.getLoginmode() == "admin") {
        // this._router.navigate(['/auth/admin/user']);
        this._router.navigate(['/auth/admin/adminheader']);
      }
    } else {
      this.authenticationService.setFirsttimelogin("false");
    }
    return this.authenticationService.isLoggedIn();
  }



}
