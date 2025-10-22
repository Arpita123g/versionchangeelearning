import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/service/global.service';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { LoginService } from 'src/app/service/auth/login.service';
import { Subscription } from 'rxjs';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FoodforthoughtComponent } from 'src/app/common/foodforthought/foodforthought.component';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-drivelogin',
  templateUrl: './drivelogin.component.html',
  styleUrls: ['./drivelogin.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule,
    FoodforthoughtComponent
  ]
})
export class DriveloginComponent implements OnInit {
  islogin = false;
  email:string =''
  @Output() sendParentevent = new EventEmitter<boolean>();
  productData: any;
  productDataFilter: any;
  ELEMENT_DATA=  [];
  spreadSheet: any;
  constructor(
    public form: FormBuilder,
    private _router: Router,
    private _login: LoginService,
    private _global:GlobalService,
    private _alert:SnackbaralertService,
    private http:HttpClient
    
  ) {}
  auth2: any;
  drivelogingroup!: FormGroup;
  @ViewChild('loginRef', { static: true }) loginElement!: ElementRef;
  ngOnInit(): void {
    this.buildform();
  }

  googleAuthSDK() {

    (<any>window)['googleSDKLoaded'] = () => {
      (<any>window)['gapi'].load('auth2', () => {
        this.auth2 = (<any>window)['gapi'].auth2.init({
          client_id: '782199368879-jte3hhfhviu0lu1k7j70gf3t3d50bmrh.apps.googleusercontent.com',
          plugin_name:'login',
          cookiepolicy: 'single_host_origin',
          scope: 'https://www.googleapis.com/auth/spreadsheets',
          response_type: 'code'
          

        });
        this.callLogin();
      });
    }

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement('script');
      js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs?.parentNode?.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
  }

  callLogin() {

    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleAuthUser: any) => {

        //Print profile details in the console logs

        let profile = googleAuthUser.getBasicProfile();

      }, (error: any) => {
        alert(JSON.stringify(error, undefined, 2));
      });

  }
  


login(){
    if (this.drivelogingroup.valid) {
      let body = {
        
          email: this.drivelogingroup.value.email,
          caller: 'boenciadmin',
          usermode: 'boenciadmin',
          password: this.drivelogingroup.value.password
      };
     
      this._login.checkadminlogin(body).subscribe((data: any)=>{
        if(data.status=='Success'){
          
        this._global.driveemailauth.next(this.drivelogingroup.value.email);
        this._global.drivepasswordauth.next(this.drivelogingroup.value.password);
        this._router.navigate(['component/boencilogin']);
       // this._router.navigate(['/auth/component/drivetoken']);
        }else{
          this._alert.error(data.message);
        }
      },
      (error:any) => {
        
      })
    }
    //-------------------------------end function call-----------------------------------------
  }

  public buildform() {
    this.drivelogingroup = this.form.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      isSuper: [false],
    });
  }


}
