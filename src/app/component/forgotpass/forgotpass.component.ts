import { Location, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/service/auth/login.service';
import { GlobalService } from 'src/app/service/global.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-forgotpass',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.scss']
})
export class ForgotpassComponent extends AbstractComponent {
  expiredpass: any; checkdisable: boolean = false; showsuccessalert: boolean = false;
  expiredpasscheck: Subscription; showalert: boolean = false; alertvalue: any;

  usermodename:string | null = null;;
  callername:string | null = null;;
  constructor(

    _router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService,
    public form: FormBuilder,
    private _location:Location,
    private route: ActivatedRoute
   
  ) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.expiredpasscheck = this._global.expiredpasscheck.subscribe((data) => {
      this.expiredpass = data;
    });
  }
  forgotpassgroup!: FormGroup;
  override ngOnInit(): void {
    this.checkloading = false;
    this.usermodename = localStorage.getItem('usermodename');
    this.callername = localStorage.getItem('callername');
   
    if (this.expiredpass == "Token_expired") {
      this.alertvalue = "The link to reset your password has expired. Please enter your email below to get a new link.";
      this.showalert = true;
    }
    this.buildform();
  }
  submit() {
    this.passwordsubmit();
  }
  login() {
    this._location.back();
  }
  passwordsubmit() {
    this.checkloading = true;

    if(this.forgotpassgroup.valid){
    this.checkdisable = true;
    let body = {
      email: this.forgotpassgroup.value.emailFormControl,
      usermode: this.usermodename,
      caller: this.callername
    };
   
    this._login.forgotpassword(body).subscribe((data: any) => {
      if (data.status == 'Success') {
        this.checkloading = false;
        this.checkdisable = false;
        this.alertvalue = "Please check your email to reset the password, sometimes the mail goes to Spam or bulk folder automatically";
        this.showsuccessalert = true;
        setTimeout(() => { this.showsuccessalert = false; this.alertvalue ="";},6000);
      }
      else {
        this._router.navigate(['forgotpassword']);
        this.checkdisable = false;
        this._alert.error("Email is not registered!");
      }
    });
  }else{
    this._alert.error('Please enter a valid email address')
  }
  }
  public buildform() {
    this.forgotpassgroup = this.form.group({
      emailFormControl: ['', [Validators.required, Validators.email]],
    });
  }
  override ngOnDestroy() {
    this.expiredpasscheck.unsubscribe();
  }
}

@Component({
  selector: 'app-confirmforgotpass',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './confirmforgotpass.html',
  styleUrls: ['./forgotpass.component.scss']
})
export class ConfirmForgotPassComponent implements OnInit {
  checkmatching: boolean = false; showform: boolean = true
  token: any = '';
  constructor(
    public form: FormBuilder,
    private _router: Router,
    private _login: LoginService,
    private _alert: SnackbaralertService,
    private route: ActivatedRoute,
    private _global: GlobalService,
  ) { }
  confirmforgotpassgroup!: FormGroup;
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => { this.token = params['token']; });
    this.buildform();
    let body = {
      token: this.token,
    };
    console.log(body);
    this._login.validateforgotpassword(body).subscribe((data: any) => {
      let response = data.message;
      if (response == "") {
        this._alert.error(data.message);
       // this._router.navigate(['studentlogin']);
      }
      else if (response == "Token_expired") {
        this._global.expiredpasscheck.next(response);
        // this._alert.error("Token expired");
        this._router.navigate(['forgotpassword']);
      }
      else if (response == "Token_valid") {
        this.showform = true;
        // this._alert.success("successful token");
      }
      else {
        this._alert.error("Token not found");
       // this._router.navigate(['studentlogin']);
      }
    });

  }
  cmatching() {
    if (this.confirmforgotpassgroup.value.passwordFormControl == this.confirmforgotpassgroup.value.passwordFormControl2) {
      this.checkmatching = true;
    }
    else {
      this.checkmatching = false;
    }
  }
  public buildform() {
    this.confirmforgotpassgroup = this.form.group({
      passwordFormControl: ['', [Validators.required]],
      passwordFormControl2: ['', [Validators.required]],
    });
  }
  confirmsubmit() {
    let body = {
      token: this.token,
      password: this.confirmforgotpassgroup.value.passwordFormControl,
      action: "updatepass"
    };
    this._login.resetpassword(body).subscribe((data: any) => {
      if (data.status == 'Success') {
        this._alert.success("Password changed sucessfully! Please login again.");
        this._router.navigate(['successpage']);
      }
      else {
        this._global.expiredpasscheck.next(data.message);
        this._router.navigate(['forgotpassword']);
        // this._alert.error(data.message);
      }
    });
  }
}


@Component({
  selector: 'app-successpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './successpage.html',
  styleUrls: ['./forgotpass.component.scss']
})
export class SuccesspageComponent implements OnInit {
  constructor(
    private _router: Router,
   ) {
    
  }
  ngOnInit(): void {
  }

  goToLoginPage(){
    this._router.navigate(['/']);

  }
}